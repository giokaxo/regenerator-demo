
export default class FlexepinCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiSecret')) {
      this.setApiSecret(data['apiSecret']);
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

  get apiSecret(): string {
    return this._fields['apiSecret'];
  }
  
  getApiSecret(): string {
      return this._fields['apiSecret'];
  }

  setApiSecret(value: string) {
    this._fields['apiSecret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['apiKey'] = this['apiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiSecret')) {
      data['apiSecret'] = this['apiSecret'];
    }

    return data;
  }
}
