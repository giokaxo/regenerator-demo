
export default class PayEcardsCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'clientKey')) {
      this.setClientKey(data['clientKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentUrl')) {
      this.setPaymentUrl(data['paymentUrl']);
    }
  }


  get clientKey(): string {
    return this._fields['clientKey'];
  }
  
  getClientKey(): string {
      return this._fields['clientKey'];
  }

  setClientKey(value: string) {
    this._fields['clientKey'] = value;

    return this;
  }

  get password(): string {
    return this._fields['password'];
  }
  
  getPassword(): string {
      return this._fields['password'];
  }

  setPassword(value: string) {
    this._fields['password'] = value;

    return this;
  }

  get paymentUrl(): string {
    return this._fields['paymentUrl'];
  }
  
  getPaymentUrl(): string {
      return this._fields['paymentUrl'];
  }

  setPaymentUrl(value: string) {
    this._fields['paymentUrl'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientKey')) {
      data['clientKey'] = this['clientKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentUrl')) {
      data['paymentUrl'] = this['paymentUrl'];
    }

    return data;
  }
}
