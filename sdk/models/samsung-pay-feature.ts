import { PaymentCardFeature } from '../models/payment-card-feature';

export default class SamsungPayFeature implements PaymentCardFeature {
  get [PaymentCardFeature](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantName')) {
      this.setMerchantName(data['merchantName']);
    }
  }


  public get name() {
    return 'Samsung Pay';
  }

  public getName() {
    return 'Samsung Pay';
  }

  get merchantName(): string | null {
    return this._fields['merchantName'] ?? null;
  }
  
  getMerchantName(): string | null {
      return this._fields['merchantName'] ?? null;
  }

  setMerchantName(value: null | string) {
    this._fields['merchantName'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      name: 'Samsung Pay',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantName')) {
      data['merchantName'] = this['merchantName'];
    }

    return data;
  }
}
