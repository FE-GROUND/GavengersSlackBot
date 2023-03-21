import { App, AwsLambdaReceiver } from "@slack/bolt";
import { applyGavengersCommon } from "../shortcut/common";
import { SLACK_BOT_TOKEN } from "../utils/env";

export class Gavengers {
  private app: App;

  constructor({ awsLambdaReceiver }: { awsLambdaReceiver: AwsLambdaReceiver }) {
    this.app = new App({
      token: SLACK_BOT_TOKEN,
      receiver: awsLambdaReceiver,
    });
  }

  public applyGavengersCommon() {
    applyGavengersCommon(this.app);
    return this;
  }
}
