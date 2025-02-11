
export default class TabbyCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'publicKey')) {
      this.setPublicKey(data['publicKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantCode')) {
      this.setMerchantCode(data['merchantCode']);
    }
  }


  get publicKey(): string {
    return this._fields['publicKey'];
  }
  
  getPublicKey(): string {
      return this._fields['publicKey'];
  }

  setPublicKey(value: string) {
    this._fields['publicKey'] = value;

    return this;
  }

  get secretKey(): string | null {
    return this._fields['secretKey'] ?? null;
  }
  
  getSecretKey(): string | null {
      return this._fields['secretKey'] ?? null;
  }

  setSecretKey(value: null | string) {
    this._fields['secretKey'] = value;

    return this;
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'publicKey')) {
      data['publicKey'] = this['publicKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantCode')) {
      data['merchantCode'] = this['merchantCode'];
    }

    return data;
  }
}
