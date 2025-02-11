
export default class PagsmileCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'appId')) {
      this.setAppId(data['appId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiSecretKey')) {
      this.setApiSecretKey(data['apiSecretKey']);
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

  get appId(): string {
    return this._fields['appId'];
  }
  
  getAppId(): string {
      return this._fields['appId'];
  }

  setAppId(value: string) {
    this._fields['appId'] = value;

    return this;
  }

  get secretKey(): string {
    return this._fields['secretKey'];
  }
  
  getSecretKey(): string {
      return this._fields['secretKey'];
  }

  setSecretKey(value: string) {
    this._fields['secretKey'] = value;

    return this;
  }

  get apiSecretKey(): string | null {
    return this._fields['apiSecretKey'] ?? null;
  }
  
  getApiSecretKey(): string | null {
      return this._fields['apiSecretKey'] ?? null;
  }

  setApiSecretKey(value: null | string) {
    this._fields['apiSecretKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'appId')) {
      data['appId'] = this['appId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiSecretKey')) {
      data['apiSecretKey'] = this['apiSecretKey'];
    }

    return data;
  }
}
