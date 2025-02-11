import { TimelineAction } from '../models/timeline-action';

export default class ResendEmailTimelineAction implements TimelineAction {
  get [TimelineAction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'messageId')) {
      this.setMessageId(data['messageId']);
    }
  }


  public get action() {
    return 'resend-email';
  }

  public getAction() {
    return 'resend-email';
  }

  get messageId(): string | null {
    return this._fields['messageId'] ?? null;
  }
  
  getMessageId(): string | null {
      return this._fields['messageId'] ?? null;
  }

  setMessageId(value: null | string) {
    this._fields['messageId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      action: 'resend-email',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'messageId')) {
      data['messageId'] = this['messageId'];
    }

    return data;
  }
}
