
export default class PayClubCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountNumber')) {
      this.setAccountNumber(data['accountNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'signKey')) {
      this.setSignKey(data['signKey']);
    }
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

  get accountNumber(): string {
    return this._fields['accountNumber'];
  }
  
  getAccountNumber(): string {
      return this._fields['accountNumber'];
  }

  setAccountNumber(value: string) {
    this._fields['accountNumber'] = value;

    return this;
  }

  get signKey(): string {
    return this._fields['signKey'];
  }
  
  getSignKey(): string {
      return this._fields['signKey'];
  }

  setSignKey(value: string) {
    this._fields['signKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountNumber')) {
      data['accountNumber'] = this['accountNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'signKey')) {
      data['signKey'] = this['signKey'];
    }

    return data;
  }
}
