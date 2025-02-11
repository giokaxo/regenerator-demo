
export default class XPayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'encryptionKey')) {
      this.setEncryptionKey(data['encryptionKey']);
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

  get encryptionKey(): string {
    return this._fields['encryptionKey'];
  }
  
  getEncryptionKey(): string {
      return this._fields['encryptionKey'];
  }

  setEncryptionKey(value: string) {
    this._fields['encryptionKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'encryptionKey')) {
      data['encryptionKey'] = this['encryptionKey'];
    }

    return data;
  }
}
