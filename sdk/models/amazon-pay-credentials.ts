
export default class AmazonPayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'storeId')) {
      this.setStoreId(data['storeId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'publicKeyId')) {
      this.setPublicKeyId(data['publicKeyId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'privateKey')) {
      this.setPrivateKey(data['privateKey']);
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

  get publicKeyId(): string {
    return this._fields['publicKeyId'];
  }
  
  getPublicKeyId(): string {
      return this._fields['publicKeyId'];
  }

  setPublicKeyId(value: string) {
    this._fields['publicKeyId'] = value;

    return this;
  }

  get privateKey(): string {
    return this._fields['privateKey'];
  }
  
  getPrivateKey(): string {
      return this._fields['privateKey'];
  }

  setPrivateKey(value: string) {
    this._fields['privateKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storeId')) {
      data['storeId'] = this['storeId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'publicKeyId')) {
      data['publicKeyId'] = this['publicKeyId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'privateKey')) {
      data['privateKey'] = this['privateKey'];
    }

    return data;
  }
}
