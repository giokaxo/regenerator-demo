
export default class PandaGatewayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantCode')) {
      this.setMerchantCode(data['merchantCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiCode')) {
      this.setApiCode(data['apiCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'signKey')) {
      this.setSignKey(data['signKey']);
    }
  }


  get merchantCode(): string {
    return this._fields['merchantCode'];
  }
  
  getMerchantCode(): string {
      return this._fields['merchantCode'];
  }

  setMerchantCode(value: string) {
    this._fields['merchantCode'] = value;

    return this;
  }

  get apiCode(): string {
    return this._fields['apiCode'];
  }
  
  getApiCode(): string {
      return this._fields['apiCode'];
  }

  setApiCode(value: string) {
    this._fields['apiCode'] = value;

    return this;
  }

  get signKey(): string {
    return this._fields['signKey'];
  }
  
  getSignKey(): string {
      return this._fields['signKey'];
  }

  setSignKey(value: string) {
    this._fields['signKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantCode')) {
      data['merchantCode'] = this['merchantCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiCode')) {
      data['apiCode'] = this['apiCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'signKey')) {
      data['signKey'] = this['signKey'];
    }

    return data;
  }
}
