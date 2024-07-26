import axios from 'axios';

export async function getLatestGitHubPR(
  owner: string,
  repo: string,
  token: string
) {
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (response.data.length === 0) {
      return null;
    }

    // 최신 PR은 목록의 첫 번째 요소
    const latestPR = response.data[0];

    return latestPR;
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
}

export async function getLatestGitLabMR(projectId: string, token: string) {
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
}
