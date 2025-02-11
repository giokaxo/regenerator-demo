import { ReadyToPayPayPalMethodFeature } from '../models/ready-to-pay-pay-pal-method-feature';

export default class PayPalBillingAgreementFeature implements ReadyToPayPayPalMethodFeature {
  get [ReadyToPayPayPalMethodFeature](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'paypalMerchantId')) {
      this.setPaypalMerchantId(data['paypalMerchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paypalClientId')) {
      this.setPaypalClientId(data['paypalClientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAgreementToken')) {
      this.setBillingAgreementToken(data['billingAgreementToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expirationTime')) {
      this.setExpirationTime(data['expirationTime']);
    }
  }


  public get name() {
    return 'PayPal billing agreement';
  }

  public getName() {
    return 'PayPal billing agreement';
  }

  get paypalMerchantId(): string {
    return this._fields['paypalMerchantId'];
  }
  
  getPaypalMerchantId(): string {
      return this._fields['paypalMerchantId'];
  }

  setPaypalMerchantId(value: string) {
    this._fields['paypalMerchantId'] = value;

    return this;
  }

  get paypalClientId(): string {
    return this._fields['paypalClientId'];
  }
  
  getPaypalClientId(): string {
      return this._fields['paypalClientId'];
  }

  setPaypalClientId(value: string) {
    this._fields['paypalClientId'] = value;

    return this;
  }

  get billingAgreementToken(): string {
    return this._fields['billingAgreementToken'];
  }
  
  getBillingAgreementToken(): string {
      return this._fields['billingAgreementToken'];
  }

  setBillingAgreementToken(value: string) {
    this._fields['billingAgreementToken'] = value;

    return this;
  }

  get expirationTime(): Date {
    return this._fields['expirationTime'];
  }
  
  getExpirationTime(): Date {
      return this._fields['expirationTime'];
  }

  setExpirationTime(value: Date | string) {
    if (!(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['expirationTime'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      name: 'PayPal billing agreement',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paypalMerchantId')) {
      data['paypalMerchantId'] = this['paypalMerchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paypalClientId')) {
      data['paypalClientId'] = this['paypalClientId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAgreementToken')) {
      data['billingAgreementToken'] = this['billingAgreementToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expirationTime')) {
      data['expirationTime'] = this['expirationTime'].toISOString();
    }

    return data;
  }
}
