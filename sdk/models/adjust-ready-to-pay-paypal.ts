import { AdjustPaymentMethod } from '../models/adjust-payment-method';

export default class AdjustReadyToPayPaypal implements AdjustPaymentMethod {
  get [AdjustPaymentMethod](): true {
    return true;
  }

  FEATURE_PAY_PAL_BILLING_AGREEMENT = 'PayPal billing agreement';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'feature')) {
      this.setFeature(data['feature']);
    }
  }


  public get paymentMethod() {
    return 'paypal';
  }

  public getPaymentMethod() {
    return 'paypal';
  }

  get feature(): string | null {
    return this._fields['feature'] ?? null;
  }
  
  getFeature(): string | null {
      return this._fields['feature'] ?? null;
  }

  setFeature(value: null | string) {
    this._fields['feature'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      paymentMethod: 'paypal',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'feature')) {
      data['feature'] = this['feature'];
    }

    return data;
  }
}
