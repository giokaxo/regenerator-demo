import { ReadyToPayKlarnaMethodFeature } from '../models/ready-to-pay-klarna-method-feature';

export default class KlarnaFeature implements ReadyToPayKlarnaMethodFeature {
  get [ReadyToPayKlarnaMethodFeature](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'clientToken')) {
      this.setClientToken(data['clientToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sessionId')) {
      this.setSessionId(data['sessionId']);
    }
  }


  public get name() {
    return 'Klarna';
  }

  public getName() {
    return 'Klarna';
  }

  get clientToken(): string {
    return this._fields['clientToken'];
  }
  
  getClientToken(): string {
      return this._fields['clientToken'];
  }

  setClientToken(value: string) {
    this._fields['clientToken'] = value;

    return this;
  }

  get sessionId(): string {
    return this._fields['sessionId'];
  }
  
  getSessionId(): string {
      return this._fields['sessionId'];
  }

  setSessionId(value: string) {
    this._fields['sessionId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      name: 'Klarna',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientToken')) {
      data['clientToken'] = this['clientToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sessionId')) {
      data['sessionId'] = this['sessionId'];
    }

    return data;
  }
}
