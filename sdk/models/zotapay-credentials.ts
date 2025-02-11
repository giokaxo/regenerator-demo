
export default class ZotapayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'endpointId')) {
      this.setEndpointId(data['endpointId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantSecretKey')) {
      this.setMerchantSecretKey(data['merchantSecretKey']);
    }
  }


  get endpointId(): string {
    return this._fields['endpointId'];
  }
  
  getEndpointId(): string {
      return this._fields['endpointId'];
  }

  setEndpointId(value: string) {
    this._fields['endpointId'] = value;

    return this;
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

  get merchantSecretKey(): string {
    return this._fields['merchantSecretKey'];
  }
  
  getMerchantSecretKey(): string {
      return this._fields['merchantSecretKey'];
  }

  setMerchantSecretKey(value: string) {
    this._fields['merchantSecretKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'endpointId')) {
      data['endpointId'] = this['endpointId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantSecretKey')) {
      data['merchantSecretKey'] = this['merchantSecretKey'];
    }

    return data;
  }
}
