import {
  BlockAction,
  Middleware,
  SlackActionMiddlewareArgs,
} from '@slack/bolt';
import { getLatestGitHubPR } from './external';
import { USER_GROUP_IDS } from './constants';

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
          text: '*프로젝트를 선택하세요.*',
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

  const projectId = (body.actions[0] as { value: string }).value;
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

    const { html_url, title, labels, base, head } = res;
    await say(
      `<@${targetGroupId}> ${title} <${html_url}|PR>입니다. *(${labels.map(
        (label: { name: string }) => label.name
      )})*\n 시간되실 때 검토 부탁드립니다. 🙇‍♂️\n (${head.ref} ➡️ ${base.ref})`
    );
  }

  if (['hmg-dev-web'].includes(projectId)) {
    await say('깃랩 프로젝트는 연결 준비 중입니다.');
  }

  await respond({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*요청 완료되었습니다. 고생하셨습니다. 👍👍*',
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
          text: '*관련 프로젝트를 선택하세요.*',
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
            value: 'cpo_bo_url_list',
            action_id: 'cpo_bo_url_list',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'HMG DEV',
              emoji: true,
            },
            value: 'hmg_dev_url_list',
            action_id: 'hmg_dev_url_list',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '그룹웨어',
              emoji: true,
            },
            value: 'groupware_url_list',
            action_id: 'groupware_url_list',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '기타',
              emoji: true,
            },
            value: 'etc_url_list',
            action_id: 'etc_url_list',
          },
        ],
      },
    ],
  });
};
