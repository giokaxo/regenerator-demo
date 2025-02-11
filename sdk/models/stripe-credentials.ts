
export default class StripeCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'stripeClientId')) {
      this.setStripeClientId(data['stripeClientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'stripeSecret')) {
      this.setStripeSecret(data['stripeSecret']);
    }
  }


  get stripeClientId(): string | null {
    return this._fields['stripeClientId'] ?? null;
  }
  
  getStripeClientId(): string | null {
      return this._fields['stripeClientId'] ?? null;
  }

  setStripeClientId(value: null | string) {
    this._fields['stripeClientId'] = value;

    return this;
  }

  get stripeSecret(): string | null {
    return this._fields['stripeSecret'] ?? null;
  }
  
  getStripeSecret(): string | null {
      return this._fields['stripeSecret'] ?? null;
  }

  setStripeSecret(value: null | string) {
    this._fields['stripeSecret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'stripeClientId')) {
      data['stripeClientId'] = this['stripeClientId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'stripeSecret')) {
      data['stripeSecret'] = this['stripeSecret'];
    }

    return data;
  }
}
