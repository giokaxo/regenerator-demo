
export default class WalpayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantName')) {
      this.setMerchantName(data['merchantName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantPin')) {
      this.setMerchantPin(data['merchantPin']);
    }
  }


  get merchantName(): string {
    return this._fields['merchantName'];
  }
  
  getMerchantName(): string {
      return this._fields['merchantName'];
  }

  setMerchantName(value: string) {
    this._fields['merchantName'] = value;

    return this;
  }

  get merchantPin(): string {
    return this._fields['merchantPin'];
  }
  
  getMerchantPin(): string {
      return this._fields['merchantPin'];
  }

  setMerchantPin(value: string) {
    this._fields['merchantPin'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantName')) {
      data['merchantName'] = this['merchantName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantPin')) {
      data['merchantPin'] = this['merchantPin'];
    }

    return data;
  }
}
