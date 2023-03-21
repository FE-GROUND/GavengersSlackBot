import { resolve } from 'path';
import { config } from 'dotenv';

const pathToConfig = '../../.env';
config({ path: resolve(__dirname, pathToConfig) });

export const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN ?? "";
export const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET ?? "";
export const SLACK_GAVENGERS_CHANNEL = process.env.SLACK_GAVENGERS_CHANNEL ?? "";
