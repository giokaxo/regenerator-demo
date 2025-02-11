
export default class RedsysCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantCode')) {
      this.setMerchantCode(data['merchantCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretCode')) {
      this.setSecretCode(data['secretCode']);
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

  get secretCode(): string {
    return this._fields['secretCode'];
  }
  
  getSecretCode(): string {
      return this._fields['secretCode'];
  }

  setSecretCode(value: string) {
    this._fields['secretCode'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantCode')) {
      data['merchantCode'] = this['merchantCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretCode')) {
      data['secretCode'] = this['secretCode'];
    }

    return data;
  }
}
