import { WebhookAuthorization } from '../models/webhook-authorization';

export default class WebhookAuthorizationNone implements WebhookAuthorization {
  get [WebhookAuthorization](): true {
    return true;
  }

  constructor(data: any = {}) {
  }


  public get type() {
    return 'none';
  }

  public getType() {
    return 'none';
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'none',
    };

    return data;
  }
}
