
export default class BVNKCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hawkAuthId')) {
      this.setHawkAuthId(data['hawkAuthId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hawkAuthKey')) {
      this.setHawkAuthKey(data['hawkAuthKey']);
    }
  }


  get merchantId(): string {
    return this._fields['merchantId'];
  }
  
  getMerchantId(): string {
      return this._fields['merchantId'];
  }

  setMerchantId(value: string) {
    this._fields['merchantId'] = value;

    return this;
  }

  get hawkAuthId(): string {
    return this._fields['hawkAuthId'];
  }
  
  getHawkAuthId(): string {
      return this._fields['hawkAuthId'];
  }

  setHawkAuthId(value: string) {
    this._fields['hawkAuthId'] = value;

    return this;
  }

  get hawkAuthKey(): string {
    return this._fields['hawkAuthKey'];
  }
  
  getHawkAuthKey(): string {
      return this._fields['hawkAuthKey'];
  }

  setHawkAuthKey(value: string) {
    this._fields['hawkAuthKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hawkAuthId')) {
      data['hawkAuthId'] = this['hawkAuthId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hawkAuthKey')) {
      data['hawkAuthKey'] = this['hawkAuthKey'];
    }

    return data;
  }
}
