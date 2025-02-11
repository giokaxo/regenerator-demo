
export default class TelrCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'storeId')) {
      this.setStoreId(data['storeId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hostedPageAuthenticationKey')) {
      this.setHostedPageAuthenticationKey(data['hostedPageAuthenticationKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'serviceApiKey')) {
      this.setServiceApiKey(data['serviceApiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'remoteApiKey')) {
      this.setRemoteApiKey(data['remoteApiKey']);
    }
  }


  get storeId(): string {
    return this._fields['storeId'];
  }
  
  getStoreId(): string {
      return this._fields['storeId'];
  }

  setStoreId(value: string) {
    this._fields['storeId'] = value;

    return this;
  }

  get hostedPageAuthenticationKey(): string {
    return this._fields['hostedPageAuthenticationKey'];
  }
  
  getHostedPageAuthenticationKey(): string {
      return this._fields['hostedPageAuthenticationKey'];
  }

  setHostedPageAuthenticationKey(value: string) {
    this._fields['hostedPageAuthenticationKey'] = value;

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

  get serviceApiKey(): string {
    return this._fields['serviceApiKey'];
  }
  
  getServiceApiKey(): string {
      return this._fields['serviceApiKey'];
  }

  setServiceApiKey(value: string) {
    this._fields['serviceApiKey'] = value;

    return this;
  }

  get remoteApiKey(): string | null {
    return this._fields['remoteApiKey'] ?? null;
  }
  
  getRemoteApiKey(): string | null {
      return this._fields['remoteApiKey'] ?? null;
  }

  setRemoteApiKey(value: null | string) {
    this._fields['remoteApiKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storeId')) {
      data['storeId'] = this['storeId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hostedPageAuthenticationKey')) {
      data['hostedPageAuthenticationKey'] = this['hostedPageAuthenticationKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'serviceApiKey')) {
      data['serviceApiKey'] = this['serviceApiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'remoteApiKey')) {
      data['remoteApiKey'] = this['remoteApiKey'];
    }

    return data;
  }
}
