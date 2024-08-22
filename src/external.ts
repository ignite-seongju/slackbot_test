import axios from 'axios';
import { getUserId as getSlackUserId } from '.';
import { SLACK_GITHUB_USER_MAP } from './constant';

export const getLatestGitHubPR = async (
  owner: string,
  repo: string,
  token: string
) => {
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    const slackUserId = getSlackUserId();
    const githubUser =
      SLACK_GITHUB_USER_MAP[slackUserId as keyof typeof SLACK_GITHUB_USER_MAP];

    if (!githubUser) {
      return null;
    }

    if (response.data.length === 0) {
      return null;
    }

    const currentUserPRs = response.data.filter(
      (pr: any) => pr.user.login === githubUser
    );

    if (currentUserPRs.length === 0) {
      return null;
    }

    return currentUserPRs[0];
  } catch (error) {
    const isAxiosError = axios.isAxiosError(error);
    if (isAxiosError) {
      console.log(
        'Error fetching latest GitHub PR:',
        error.response ? error.response.data : error.message
      );
      return;
    }
    console.log(error);
  }
};

export const getLatestGitLabMR = async (projectId: string, token: string) => {
  const url = `https://gitlab.com/api/v4/projects/${projectId}/merge_requests`;
  try {
    const response = await axios.get(url, {
      headers: {
        'Private-Token': token,
      },
      params: {
        state: 'opened',
        order_by: 'created_at',
        sort: 'desc',
        per_page: 1,
      },
    });

    console.log('response: ', response.data);

    if (response.data.length === 0) {
      return null;
    }

    // 최신 MR은 목록의 첫 번째 요소
    const latestMR = response.data[0];
    console.log('latestMR: ', latestMR);
    // return latestMR;
  } catch (error) {
    const isAxiosError = axios.isAxiosError(error);
    if (isAxiosError) {
      console.log(
        'Error fetching latest GitHub PR:',
        error.response ? error.response.data : error.message
      );
      return;
    }
    console.log(error);
  }
};

export const getLatestCPODeployPages = async () => {
  try {
    const auth = {
      username: 'ssj@ignite.co.kr',
      password: process.env.ATLASSIAN_TOKEN || '',
    };
    const deployPageId = '362676616';
    const childPageUrl = `https://ignitecorp.atlassian.net/wiki/rest/api/content/${deployPageId}/child/page`;

    if (!auth.password) {
      return null;
    }

    const response = await axios.get(childPageUrl, { auth });

    if (!response?.data?.results || response.data.results.length === 0) {
      return null;
    }

    // 최신 월 배포 관리 페이지 획득 (ex. Dev) 배포관리 - 2024-09)
    const latestMonthPageId = response.data.results[0].id;
    const latestMonthPageUrl = `https://ignitecorp.atlassian.net/wiki/rest/api/content/${latestMonthPageId}/child/page`;
    const latestChildPageResponse = await axios.get(latestMonthPageUrl, {
      auth,
    });

    const beforeLatestMonthPageId = response.data.results[1].id;
    const beforeLatestMonthPageUrl = `https://ignitecorp.atlassian.net/wiki/rest/api/content/${beforeLatestMonthPageId}/child/page`;
    const beforeChildPageResponse = await axios.get(beforeLatestMonthPageUrl, {
      auth,
    });

    if (
      (!latestChildPageResponse?.data?.results ||
        latestChildPageResponse.data.results.length === 0) &&
      (!beforeChildPageResponse?.data?.results ||
        beforeChildPageResponse.data.results.length === 0)
    ) {
      return null;
    }

    // 최신 페이지 3개를 담을 배열 초기화
    let pages = [];

    // latestMonthPage 자식 페이지 추가
    if (
      latestChildPageResponse?.data?.results &&
      latestChildPageResponse.data.results.length > 0
    ) {
      pages = latestChildPageResponse.data.results.slice(-3);
    }

    // beforeLatestMonthPage 자식 페이지 추가
    if (beforeChildPageResponse?.data?.results && pages.length < 3) {
      const remainingSlots = 3 - pages.length;
      const beforePages = beforeChildPageResponse.data.results.slice(
        -remainingSlots
      );
      pages = [...pages, ...beforePages];
    }

    // 반환할 페이지 정보 구성
    const results = pages
      .map((page: { title?: string; _links?: { webui?: string } }) => ({
        name: page.title || '',
        url: page._links?.webui
          ? `https://ignitecorp.atlassian.net/wiki${page._links.webui}`
          : '',
      }))
      .filter((page: { name?: string; url?: string }) => page.name && page.url);

    return results.length > 0 ? results : null;
  } catch (e) {
    return null;
  }
};

export const getLatestChildPage = async (pageId: string) => {
  try {
    const auth = {
      username: 'ssj@ignite.co.kr',
      password: process.env.ATLASSIAN_TOKEN || '',
    };
    const childPageUrl = `https://ignitecorp.atlassian.net/wiki/rest/api/content/${pageId}/child/page`;

    if (!auth.password) {
      return null;
    }

    const response = await axios.get(childPageUrl, { auth });

    if (!response?.data?.results || response.data.results.length === 0) {
      return null;
    }

    const name = response.data.results[0].title || '';
    const webui = response.data.results[0]._links?.webui || '';
    const url = webui ? `https://ignitecorp.atlassian.net/wiki${webui}` : '';

    if (!name || !url) {
      return null;
    }

    return { name, url };
  } catch (e) {
    return null;
  }
};
