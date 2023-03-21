import {
  AllMiddlewareArgs,
  App,
  BlockAction,
  SlackActionMiddlewareArgs,
  SlackEventMiddlewareArgs,
} from "@slack/bolt";
import { SLACK_GAVENGERS_CHANNEL } from "../utils/env";

const sendWelcomeMessage = async ({
                                    say,
                                  }: SlackEventMiddlewareArgs<"app_mention"> & AllMiddlewareArgs) => {
  await say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `>>> *가벤져스 여러분!* \n\n안녕하세요!`,
        },
      },
      {
        block_id: "#mention",
        type: "section",
        text: {
          type: "mrkdwn",
          text: `👉 사용법이 궁금하신가요?`,
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "사용법 알아보기",
            emoji: true,
          },
          value: "help",
          action_id: "#help",
        },
      },
    ],
  });
};

const sendHelpMessage = async ({
                                 ack,
                                 body,
                                 client,
                               }: SlackActionMiddlewareArgs<BlockAction> & AllMiddlewareArgs) => {
  await ack();

  await client.chat.postEphemeral({
    channel: SLACK_GAVENGERS_CHANNEL,
    user: body.user.id,
    text: "뭐?",
  });
};



export const applyGavengersCommon = (app: App) => {
  app.event("app_mention", sendWelcomeMessage);
  app.action("#help", sendHelpMessage);
};
