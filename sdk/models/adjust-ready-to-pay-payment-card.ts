import { AdjustPaymentMethod } from '../models/adjust-payment-method';

export default class AdjustReadyToPayPaymentCard implements AdjustPaymentMethod {
  get [AdjustPaymentMethod](): true {
    return true;
  }

  FEATURE_APPLE_PAY = 'Apple Pay';

  FEATURE_GOOGLE_PAY = 'Google Pay';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'feature')) {
      this.setFeature(data['feature']);
    }
  }


  public get paymentMethod() {
    return 'payment-card';
  }

  public getPaymentMethod() {
    return 'payment-card';
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
      paymentMethod: 'payment-card',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'feature')) {
      data['feature'] = this['feature'];
    }

    return data;
  }
}
