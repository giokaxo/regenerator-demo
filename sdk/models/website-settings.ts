import WebsiteSettingsDepositForm from '../models/website-settings-deposit-form';
import WebsiteSettingsPaymentForm from '../models/website-settings-payment-form';

export default class WebsiteSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'depositForm')) {
      this.setDepositForm(data['depositForm']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentForm')) {
      this.setPaymentForm(data['paymentForm']);
    }
  }


  get depositForm(): WebsiteSettingsDepositForm | null {
    return this._fields['depositForm'] ?? null;
  }
  
  getDepositForm(): WebsiteSettingsDepositForm | null {
      return this._fields['depositForm'] ?? null;
  }

  setDepositForm(value: null | WebsiteSettingsDepositForm | any) {
    if (value !== null && !(value instanceof WebsiteSettingsDepositForm)) {
      value = new WebsiteSettingsDepositForm(value);
    }

    this._fields['depositForm'] = value;

    return this;
  }

  get paymentForm(): WebsiteSettingsPaymentForm | null {
    return this._fields['paymentForm'] ?? null;
  }
  
  getPaymentForm(): WebsiteSettingsPaymentForm | null {
      return this._fields['paymentForm'] ?? null;
  }

  setPaymentForm(value: null | WebsiteSettingsPaymentForm | any) {
    if (value !== null && !(value instanceof WebsiteSettingsPaymentForm)) {
      value = new WebsiteSettingsPaymentForm(value);
    }

    this._fields['paymentForm'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'depositForm')) {
      data['depositForm'] = this['depositForm']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentForm')) {
      data['paymentForm'] = this['paymentForm']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
