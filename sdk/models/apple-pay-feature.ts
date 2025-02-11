import { PaymentCardFeature } from '../models/payment-card-feature';

export default class ApplePayFeature implements PaymentCardFeature {
  get [PaymentCardFeature](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'displayName')) {
      this.setDisplayName(data['displayName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      this.setCountry(data['country']);
    }
  }


  public get name() {
    return 'Apple Pay';
  }

  public getName() {
    return 'Apple Pay';
  }

  get displayName(): string | null {
    return this._fields['displayName'] ?? null;
  }
  
  getDisplayName(): string | null {
      return this._fields['displayName'] ?? null;
  }

  setDisplayName(value: null | string) {
    this._fields['displayName'] = value;

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
      name: 'Apple Pay',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'displayName')) {
      data['displayName'] = this['displayName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'country')) {
      data['country'] = this['country'];
    }

    return data;
  }
}
