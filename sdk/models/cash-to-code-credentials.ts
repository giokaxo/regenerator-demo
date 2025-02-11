
export default class CashToCodeCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'cashToCodeUsername')) {
      this.setCashToCodeUsername(data['cashToCodeUsername']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cashToCodePassword')) {
      this.setCashToCodePassword(data['cashToCodePassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantUsername')) {
      this.setMerchantUsername(data['merchantUsername']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantPassword')) {
      this.setMerchantPassword(data['merchantPassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'mid')) {
      this.setMid(data['mid']);
    }
  }


  get cashToCodeUsername(): string {
    return this._fields['cashToCodeUsername'];
  }
  
  getCashToCodeUsername(): string {
      return this._fields['cashToCodeUsername'];
  }

  setCashToCodeUsername(value: string) {
    this._fields['cashToCodeUsername'] = value;

    return this;
  }

  get cashToCodePassword(): string {
    return this._fields['cashToCodePassword'];
  }
  
  getCashToCodePassword(): string {
      return this._fields['cashToCodePassword'];
  }

  setCashToCodePassword(value: string) {
    this._fields['cashToCodePassword'] = value;

    return this;
  }

  get merchantUsername(): string {
    return this._fields['merchantUsername'];
  }
  
  getMerchantUsername(): string {
      return this._fields['merchantUsername'];
  }

  setMerchantUsername(value: string) {
    this._fields['merchantUsername'] = value;

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

  get mid(): string | null {
    return this._fields['mid'] ?? null;
  }
  
  getMid(): string | null {
      return this._fields['mid'] ?? null;
  }

  setMid(value: null | string) {
    this._fields['mid'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cashToCodeUsername')) {
      data['cashToCodeUsername'] = this['cashToCodeUsername'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cashToCodePassword')) {
      data['cashToCodePassword'] = this['cashToCodePassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantUsername')) {
      data['merchantUsername'] = this['merchantUsername'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantPassword')) {
      data['merchantPassword'] = this['merchantPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mid')) {
      data['mid'] = this['mid'];
    }

    return data;
  }
}
