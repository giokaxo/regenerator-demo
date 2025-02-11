
export default class MuchBetterCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantAccountId')) {
      this.setMerchantAccountId(data['merchantAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
  }


  get merchantAccountId(): string {
    return this._fields['merchantAccountId'];
  }
  
  getMerchantAccountId(): string {
      return this._fields['merchantAccountId'];
  }

  setMerchantAccountId(value: string) {
    this._fields['merchantAccountId'] = value;

    return this;
  }

  get apiKey(): string {
    return this._fields['apiKey'];
  }
  
  getApiKey(): string {
      return this._fields['apiKey'];
  }

  setApiKey(value: string) {
    this._fields['apiKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantAccountId')) {
      data['merchantAccountId'] = this['merchantAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['apiKey'] = this['apiKey'];
    }

    return data;
  }
}
