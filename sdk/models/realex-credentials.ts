
export default class RealexCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rebatePassword')) {
      this.setRebatePassword(data['rebatePassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'account')) {
      this.setAccount(data['account']);
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

  get rebatePassword(): string {
    return this._fields['rebatePassword'];
  }
  
  getRebatePassword(): string {
      return this._fields['rebatePassword'];
  }

  setRebatePassword(value: string) {
    this._fields['rebatePassword'] = value;

    return this;
  }

  get account(): string {
    return this._fields['account'];
  }
  
  getAccount(): string {
      return this._fields['account'];
  }

  setAccount(value: string) {
    this._fields['account'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rebatePassword')) {
      data['rebatePassword'] = this['rebatePassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'account')) {
      data['account'] = this['account'];
    }

    return data;
  }
}
