
export default class BamboraCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiPasscode')) {
      this.setApiPasscode(data['apiPasscode']);
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

  get apiPasscode(): string {
    return this._fields['apiPasscode'];
  }
  
  getApiPasscode(): string {
      return this._fields['apiPasscode'];
  }

  setApiPasscode(value: string) {
    this._fields['apiPasscode'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiPasscode')) {
      data['apiPasscode'] = this['apiPasscode'];
    }

    return data;
  }
}
