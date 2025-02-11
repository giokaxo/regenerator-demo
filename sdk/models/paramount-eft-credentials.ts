
export default class ParamountEftCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchant_id')) {
      this.setMerchantId(data['merchant_id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchant_pass')) {
      this.setMerchantPass(data['merchant_pass']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payee')) {
      this.setPayee(data['payee']);
    }
  }


  get merchantId(): string {
    return this._fields['merchant_id'];
  }
  
  getMerchantId(): string {
      return this._fields['merchant_id'];
  }

  setMerchantId(value: string) {
    this._fields['merchant_id'] = value;

    return this;
  }

  get merchantPass(): string {
    return this._fields['merchant_pass'];
  }
  
  getMerchantPass(): string {
      return this._fields['merchant_pass'];
  }

  setMerchantPass(value: string) {
    this._fields['merchant_pass'] = value;

    return this;
  }

  get payee(): string {
    return this._fields['payee'];
  }
  
  getPayee(): string {
      return this._fields['payee'];
  }

  setPayee(value: string) {
    this._fields['payee'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchant_id'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantPass')) {
      data['merchant_pass'] = this['merchantPass'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payee')) {
      data['payee'] = this['payee'];
    }

    return data;
  }
}
