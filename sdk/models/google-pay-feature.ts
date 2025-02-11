import { PaymentCardFeature } from '../models/payment-card-feature';

export default class GooglePayFeature implements PaymentCardFeature {
  get [PaymentCardFeature](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantName')) {
      this.setMerchantName(data['merchantName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantOrigin')) {
      this.setMerchantOrigin(data['merchantOrigin']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      this.setCountry(data['country']);
    }
  }


  public get name() {
    return 'Google Pay';
  }

  public getName() {
    return 'Google Pay';
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

  get merchantOrigin(): string | null {
    return this._fields['merchantOrigin'] ?? null;
  }
  
  getMerchantOrigin(): string | null {
      return this._fields['merchantOrigin'] ?? null;
  }

  setMerchantOrigin(value: null | string) {
    this._fields['merchantOrigin'] = value;

    return this;
  }

  get country(): string | null {
    return this._fields['country'] ?? null;
  }
  
  getCountry(): string | null {
      return this._fields['country'] ?? null;
  }

  setCountry(value: null | string) {
    this._fields['country'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      name: 'Google Pay',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantName')) {
      data['merchantName'] = this['merchantName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantOrigin')) {
      data['merchantOrigin'] = this['merchantOrigin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'country')) {
      data['country'] = this['country'];
    }

    return data;
  }
}
