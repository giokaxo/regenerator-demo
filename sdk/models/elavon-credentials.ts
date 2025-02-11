
export default class ElavonCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'ssl_merchant_id')) {
      this.setSslMerchantId(data['ssl_merchant_id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ssl_user_id')) {
      this.setSslUserId(data['ssl_user_id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ssl_pin')) {
      this.setSslPin(data['ssl_pin']);
    }
  }


  get sslMerchantId(): string {
    return this._fields['ssl_merchant_id'];
  }
  
  getSslMerchantId(): string {
      return this._fields['ssl_merchant_id'];
  }

  setSslMerchantId(value: string) {
    this._fields['ssl_merchant_id'] = value;

    return this;
  }

  get sslUserId(): string {
    return this._fields['ssl_user_id'];
  }
  
  getSslUserId(): string {
      return this._fields['ssl_user_id'];
  }

  setSslUserId(value: string) {
    this._fields['ssl_user_id'] = value;

    return this;
  }

  get sslPin(): string {
    return this._fields['ssl_pin'];
  }
  
  getSslPin(): string {
      return this._fields['ssl_pin'];
  }

  setSslPin(value: string) {
    this._fields['ssl_pin'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sslMerchantId')) {
      data['ssl_merchant_id'] = this['sslMerchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sslUserId')) {
      data['ssl_user_id'] = this['sslUserId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sslPin')) {
      data['ssl_pin'] = this['sslPin'];
    }

    return data;
  }
}
