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

export const getLatestCPODeployPage = async () => {
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

    const latestChildPageId = response.data.results[0].id;
    const latestChildPageUrl = `https://ignitecorp.atlassian.net/wiki/rest/api/content/${latestChildPageId}/child/page`;
    const childPageResponse = await axios.get(latestChildPageUrl, { auth });

    if (
      !childPageResponse?.data?.results ||
      childPageResponse.data.results.length === 0
    ) {
      return null;
    }

    const name = childPageResponse.data.results[0].title || '';
    const webui = childPageResponse.data.results[0]._links?.webui || '';
    const url = webui ? `https://ignitecorp.atlassian.net/wiki${webui}` : '';

    if (!name || !url) {
      return null;
    }

    return { name, url };
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
