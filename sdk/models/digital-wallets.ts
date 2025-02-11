import DigitalWalletsApplePay from '../models/digital-wallets-apple-pay';
import DigitalWalletsGooglePay from '../models/digital-wallets-google-pay';

export default class DigitalWallets {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'applePay')) {
      this.setApplePay(data['applePay']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'googlePay')) {
      this.setGooglePay(data['googlePay']);
    }
  }


  get applePay(): DigitalWalletsApplePay | null {
    return this._fields['applePay'] ?? null;
  }
  
  getApplePay(): DigitalWalletsApplePay | null {
      return this._fields['applePay'] ?? null;
  }

  setApplePay(value: null | DigitalWalletsApplePay | any) {
    if (value !== null && !(value instanceof DigitalWalletsApplePay)) {
      value = new DigitalWalletsApplePay(value);
    }

    this._fields['applePay'] = value;

    return this;
  }

  get googlePay(): DigitalWalletsGooglePay | null {
    return this._fields['googlePay'] ?? null;
  }
  
  getGooglePay(): DigitalWalletsGooglePay | null {
      return this._fields['googlePay'] ?? null;
  }

  setGooglePay(value: null | DigitalWalletsGooglePay | any) {
    if (value !== null && !(value instanceof DigitalWalletsGooglePay)) {
      value = new DigitalWalletsGooglePay(value);
    }

    this._fields['googlePay'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'applePay')) {
      data['applePay'] = this['applePay']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'googlePay')) {
      data['googlePay'] = this['googlePay']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
