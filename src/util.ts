import { KnownBlock } from '@slack/bolt';
import _ from 'lodash';
import { InputItem } from './types';

export const generateSlackLinkBlocks = (input: InputItem[]): KnownBlock[] => {
  const grouped = _.groupBy(input, 'type');

  const blocks: KnownBlock[] = [];

  for (const [type, items] of Object.entries(grouped)) {
    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*${type}*`,
      },
    });

    const linksText = items
      .map((item) => `<${item.url}|${item.name}>`)
      .join('\n');

    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: linksText,
      },
    });

    blocks.push({ type: 'divider' });
  }

  // 마지막 divider 제거
  blocks.pop();

  return blocks;
};
