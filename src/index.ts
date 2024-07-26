import {
  App,
  BlockAction,
  ExpressReceiver,
  AwsLambdaReceiver,
} from '@slack/bolt';

import dotenv from 'dotenv';
import {
  handleRequestPRReview,
  handleSelectPRReviewProject,
  handleSelectURLListProject,
} from './handler';

dotenv.config();

const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET || '',
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN || '',
  signingSecret: process.env.SLACK_SIGNING_SECRET || '',
  receiver: awsLambdaReceiver,
});

let commandUserId = '';

app.command('/fe1-beta', async ({ command, ack, respond, say, client }) => {
  await ack();
  commandUserId = command.user_id;

  await respond({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*어떤 작업이 필요하세요?*',
        },
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'PR 검토 요청',
              emoji: true,
            },
            value: 'pr_review',
            action_id: 'pr_review',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '프로젝트 관련 URL 목록 보기',
              emoji: true,
            },
            value: 'url_list',
            action_id: 'url_list',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '작업 Flow 보기 (coming soon)',
              emoji: true,
            },
            value: 'work_flow',
            action_id: 'work_flow',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '배포 Flow 보기 (coming soon)',
              emoji: true,
            },
            value: 'deploy_flow',
            action_id: 'deploy_flow',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '다른 유용한 기능들 (coming soon)',
              emoji: true,
            },
            value: 'coming_soon',
            action_id: 'coming_soon',
          },
        ],
      },
    ],
  });
});

// PR 검토 요청 액션
app.action<BlockAction>('pr_review', handleSelectPRReviewProject);
app.action<BlockAction>(/^.*_pr_review$/, handleRequestPRReview);

// 프로젝트 URL 목록 액션
app.action<BlockAction>('url_list', handleSelectURLListProject);

app.action<BlockAction>('cpo_bo_url_list', async ({ ack, respond }) => {
  await ack();
  await respond({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*CPO BO 프로젝트 URL 목록*',
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `1. <https://cpo.bo.com|CPO BO>`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `1. <https://cpo.bo.com|CPO BO>`,
        },
      },
    ],
  });
});

module.exports.handler = async (event: any, context: any, callback: any) => {
  const handler = await awsLambdaReceiver.start();
  return handler(event, context, callback);
};

// (async () => {
//   await app.start(process.env.PORT || 3086);
//   console.log('⚡️ Bolt app is running!');
// })();
