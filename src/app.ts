import { AwsLambdaReceiver } from "@slack/bolt";
import { AwsCallback, AwsEvent, AwsResponse } from "@slack/bolt/dist/receivers/AwsLambdaReceiver";
import {Gavengers} from "./classes/Gavengers";
import {SLACK_SIGNING_SECRET} from "./utils/env";

const awsLambdaReceiver = new AwsLambdaReceiver({
    signingSecret: SLACK_SIGNING_SECRET,
  });

const gavengers = new Gavengers({
  awsLambdaReceiver
})
  .applyGavengersCommon();

console.log('gavengers:', gavengers);

const handler = async (
    event: AwsEvent,
    context: any,
    callback: AwsCallback
): Promise<AwsResponse> => {
    const handler = await awsLambdaReceiver.start();
    return handler(event, context, callback);
  };

module.exports.handler = handler;
