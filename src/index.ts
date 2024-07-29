import { App, AwsLambdaReceiver } from '@slack/bolt';

import dotenv from 'dotenv';
import {
  handleConfirmPRReview,
  handleRequestPRReview,
  handleGetURLs,
  handleSelectPRReviewProject,
  handleSelectURLListProject,
} from './handler';

dotenv.config();

const receiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET || '',
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN || '',
  signingSecret: process.env.SLACK_SIGNING_SECRET || '',
  receiver,
});

let commandUserId = '';

export const getUserId = () => {
  return commandUserId;
};

app.command('/fe1-bot', async ({ command, ack, respond, say, client }) => {
  commandUserId = command.user_id;
  await ack();
  await respond({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${command.user_name}님 반갑습니다!\n어떤 작업을 도와드릴까요? 아직은 할 수 있는게 많지 않아요. 🙂`,
        },
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '내 최신 PR 검토 요청하기',
              emoji: true,
            },
            value: 'pr_review',
            action_id: 'pr_review',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '페이지 목록 보기',
              emoji: true,
            },
            value: 'url_list',
            action_id: 'url_list',
          },
        ],
      },
    ],
  });
});

// PR 검토 요청 액션
app.action('pr_review', handleSelectPRReviewProject);
app.action(/^.*_pr_review$/, handleRequestPRReview);
app.action('confirm_pr', handleConfirmPRReview);

app.action('reject_pr', async ({ ack, respond }) => {
  await ack();
  await respond('PR 요청이 취소되었습니다.');
});

// URL 목록 받기 액션
app.action('url_list', handleSelectURLListProject);
app.action(/^.*_url_list$/, handleGetURLs);

// Handle the Lambda function event
export const handler = async (event: any, context: any, callback: any) => {
  const handler = await receiver.start();
  return handler(event, context, callback);
};
