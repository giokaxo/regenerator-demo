
export default class EcoPayzCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'paymentPageId')) {
      this.setPaymentPageId(data['paymentPageId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantAccountNumber')) {
      this.setMerchantAccountNumber(data['merchantAccountNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantPassword')) {
      this.setMerchantPassword(data['merchantPassword']);
    }
  }


  get paymentPageId(): string {
    return this._fields['paymentPageId'];
  }
  
  getPaymentPageId(): string {
      return this._fields['paymentPageId'];
  }

  setPaymentPageId(value: string) {
    this._fields['paymentPageId'] = value;

    return this;
  }

  get merchantAccountNumber(): string {
    return this._fields['merchantAccountNumber'];
  }
  
  getMerchantAccountNumber(): string {
      return this._fields['merchantAccountNumber'];
  }

  setMerchantAccountNumber(value: string) {
    this._fields['merchantAccountNumber'] = value;

    return this;
  }

  get merchantPassword(): string {
    return this._fields['merchantPassword'];
  }
  
  getMerchantPassword(): string {
      return this._fields['merchantPassword'];
  }

  setMerchantPassword(value: string) {
    this._fields['merchantPassword'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentPageId')) {
      data['paymentPageId'] = this['paymentPageId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantAccountNumber')) {
      data['merchantAccountNumber'] = this['merchantAccountNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantPassword')) {
      data['merchantPassword'] = this['merchantPassword'];
    }

    return data;
  }
}
