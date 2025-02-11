
export default class CoinPaymentsCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'publicKey')) {
      this.setPublicKey(data['publicKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'privateKey')) {
      this.setPrivateKey(data['privateKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ipnSecret')) {
      this.setIpnSecret(data['ipnSecret']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
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

  get merchantId(): string | null {
    return this._fields['merchantId'] ?? null;
  }
  
  getMerchantId(): string | null {
      return this._fields['merchantId'] ?? null;
  }

  setMerchantId(value: null | string) {
    this._fields['merchantId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'publicKey')) {
      data['publicKey'] = this['publicKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'privateKey')) {
      data['privateKey'] = this['privateKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ipnSecret')) {
      data['ipnSecret'] = this['ipnSecret'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }

    return data;
  }
}
