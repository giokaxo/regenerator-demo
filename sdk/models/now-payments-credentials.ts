
export default class NOWPaymentsCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ipnSecret')) {
      this.setIpnSecret(data['ipnSecret']);
    }
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

  get ipnSecret(): string {
    return this._fields['ipnSecret'];
  }
  
  getIpnSecret(): string {
      return this._fields['ipnSecret'];
  }

  setIpnSecret(value: string) {
    this._fields['ipnSecret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['apiKey'] = this['apiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ipnSecret')) {
      data['ipnSecret'] = this['ipnSecret'];
    }

    return data;
  }
}
