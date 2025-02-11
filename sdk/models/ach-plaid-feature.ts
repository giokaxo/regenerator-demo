import { ReadyToPayAchMethodFeature } from '../models/ready-to-pay-ach-method-feature';

export default class AchPlaidFeature implements ReadyToPayAchMethodFeature {
  get [ReadyToPayAchMethodFeature](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'linkToken')) {
      this.setLinkToken(data['linkToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expirationTime')) {
      this.setExpirationTime(data['expirationTime']);
    }
  }


  public get name() {
    return 'Plaid';
  }

  public getName() {
    return 'Plaid';
  }

  get linkToken(): string {
    return this._fields['linkToken'];
  }
  
  getLinkToken(): string {
      return this._fields['linkToken'];
  }

  setLinkToken(value: string) {
    this._fields['linkToken'] = value;

    return this;
  }

  get expirationTime(): Date {
    return this._fields['expirationTime'];
  }
  
  getExpirationTime(): Date {
      return this._fields['expirationTime'];
  }

  setExpirationTime(value: Date | string) {
    if (!(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['expirationTime'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      name: 'Plaid',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'linkToken')) {
      data['linkToken'] = this['linkToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expirationTime')) {
      data['expirationTime'] = this['expirationTime'].toISOString();
    }

    return data;
  }
}
