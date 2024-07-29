import {
  BlockAction,
  KnownBlock,
  Middleware,
  SlackActionMiddlewareArgs,
} from '@slack/bolt';
import {
  getLatestCPODeployPage,
  getLatestGitHubPR,
  getLatestGitLabMR,
} from './external';
import {
  CHANNEL_IDS,
  CPO_BO_URLS,
  GROUPWARE_URLS,
  HMG_DEV_URLS,
  USER_GROUP_IDS,
} from './constant';
import { generateSlackBlocks } from './util';

export const handleSelectPRReviewProject: Middleware<
  SlackActionMiddlewareArgs<BlockAction>
> = async ({ ack, respond }) => {
  await ack();
  await respond({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*PR 검토를 요청하실 프로젝트를 골라주세요.*',
        },
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'CPO BO',
              emoji: true,
            },
            value: 'kia-cpo-bo-web',
            action_id: 'cpo_bo_pr_review',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'HMG DEV',
              emoji: true,
            },
            value: 'hmg-developers',
            action_id: 'hmg_dev_pr_review',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '그룹웨어',
              emoji: true,
            },
            value: 'hmg-groupware-bo-web',
            action_id: 'groupware_pr_review',
          },
        ],
      },
    ],
  });
};

export const handleRequestPRReview: Middleware<
  SlackActionMiddlewareArgs<BlockAction>
> = async ({ ack, body, client, say, respond }) => {
  await ack();

  const projectMap: Record<string, string> = {
    'kia-cpo-bo-web': 'CPO BO',
    'hmg-developers': 'HMG Developer',
    'hmg-groupware-bo-web': '그룹웨어',
  };

  const projectId = (body.actions[0] as { value: keyof typeof projectMap })
    .value;
  const targetGroupId =
    USER_GROUP_IDS.find((id) => {
      if (['kia-cpo-bo-web', 'hmg-groupware-bo-web'].includes(projectId)) {
        return id.name === 'fe1';
      }

      if (['hmg-developers'].includes(projectId)) {
        return id.name === 'fe-hmgdev';
      }
    })?.id || '';

  if (['kia-cpo-bo-web', 'hmg-groupware-bo-web'].includes(projectId)) {
    const res = await getLatestGitHubPR(
      'ignite-corp',
      projectId,
      process.env.GITHUB_TOKEN || ''
    );

    if (!res) {
      await respond(
        '앗! PR이 없는 것 같아요. 🤔\nPR이 있는데도 이 메세지가 나타난다면 제보해주세요!'
      );
      return;
    }

    const { html_url, title, labels, base, head } = res;
    const projectName = projectMap[projectId];
    const labelText = labels
      .map((label: { name: string }) => label.name)
      .join(', ');
    const additionalMessage = labelText.includes('ask')
      ? '시간되실 때 검토 부탁드립니다.'
      : '참고 부탁드립니다.';

    const message = `<!subteam^${targetGroupId}|fe1> *[${projectName}] ${title}* <${html_url}|PR>입니다. \`${labelText}\`\n${additionalMessage} :blob_salute: (\`${head.ref}\` > \`${base.ref}\`)`;

    await respond({
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*${title}* \`${labelText}\`\n\n 혹시 위 <${html_url}|PR>이 맞나요?\n\n '맞아요'를 선택하시면, fe1-dm 채널에 알림이 전달됩니다.`,
          },
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: '✅ 맞아요',
                emoji: true,
              },
              value: message,
              action_id: 'confirm_pr',
            },
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: '❌ 아니에요',
                emoji: true,
              },
              value: 'reject_pr',
              action_id: 'reject_pr',
            },
          ],
        },
      ],
    });

    return;
  }

  if (['hmg-developers'].includes(projectId)) {
    try {
      const res = await getLatestGitLabMR(
        '3586',
        process.env.GITLAB_TOKEN || ''
      );
      console.log('res', res);
    } catch (e) {
      console.log(e);
    } finally {
      await respond(
        '앗 깃랩 프로젝트는 연결 준비 중입니다. 조금만 기다려주세요. 🙇‍♂️'
      );
    }
  }

  await respond({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*요청 완료되었습니다. 작업에 고생 많으셨습니다. 👍👍*',
        },
      },
    ],
  });
};

export const handleConfirmPRReview: Middleware<
  SlackActionMiddlewareArgs<BlockAction>
> = async ({ ack, body, client, respond }) => {
  await ack();

  const message = (body.actions[0] as { value: string }).value;

  await client.chat.postMessage({
    channel: CHANNEL_IDS.find((id) => id.name === 'fe1-dm')?.id || '',
    text: message,
  });

  await respond({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*요청 완료되었습니다. 작업에 고생 많으셨습니다. 👍👍*',
        },
      },
    ],
  });
};

export const handleSelectURLListProject: Middleware<
  SlackActionMiddlewareArgs<BlockAction>
> = async ({ ack, respond }) => {
  await ack();
  await respond({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*관련된 페이지를 요청하실 프로젝트를 골라주세요.*',
        },
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'CPO BO',
              emoji: true,
            },
            value: 'kia-cpo-bo-web',
            action_id: 'cpo_bo_url_list',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'HMG DEV',
              emoji: true,
            },
            value: 'hmg-developers',
            action_id: 'hmg_dev_url_list',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '그룹웨어',
              emoji: true,
            },
            value: 'hmg-groupware-bo-web',
            action_id: 'groupware_url_list',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '기타',
              emoji: true,
            },
            value: 'etc',
            action_id: 'etc_url_list',
          },
        ],
      },
    ],
  });
};

export const handleGetURLs: Middleware<
  SlackActionMiddlewareArgs<BlockAction>
> = async ({ ack, body, client, say, respond }) => {
  await ack();

  const projectMap: Record<string, string> = {
    'kia-cpo-bo-web': 'CPO BO',
    'hmg-developers': 'HMG Developer',
    'hmg-groupware-bo-web': '그룹웨어',
  };

  const projectId = (body.actions[0] as { value: keyof typeof projectMap })
    .value;
  let slackBlocks: KnownBlock[] = [];
  const projectName = projectMap[projectId];

  if (projectId === 'kia-cpo-bo-web') {
    const allUrls = [...CPO_BO_URLS];
    const latestDeployPage = await getLatestCPODeployPage();

    if (latestDeployPage) {
      allUrls.push({ type: 'Confluence', ...latestDeployPage });
    }

    slackBlocks = generateSlackBlocks(allUrls);
  }

  if (projectId === 'hmg-groupware-bo-web') {
    slackBlocks = generateSlackBlocks(GROUPWARE_URLS);
  }

  if (projectId === 'hmg-developers') {
    slackBlocks = generateSlackBlocks(HMG_DEV_URLS);
  }

  await respond({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*${projectName} 프로젝트* 관련 페이지들이예요. 🤖`,
        },
      },
      ...slackBlocks,
    ],
  });
};
