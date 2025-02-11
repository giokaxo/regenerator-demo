import { PatchPaymentInstrumentRequest } from '../models/patch-payment-instrument-request';
import ContactObject from '../models/contact-object';

export default class PaymentInstrumentUpdateToken implements PatchPaymentInstrumentRequest {
  get [PatchPaymentInstrumentRequest](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'token')) {
      this.setToken(data['token']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'stickyGatewayAccountId')) {
      this.setStickyGatewayAccountId(data['stickyGatewayAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useAsBackup')) {
      this.setUseAsBackup(data['useAsBackup']);
    }
  }


  get token(): string | null {
    return this._fields['token'] ?? null;
  }
  
  getToken(): string | null {
      return this._fields['token'] ?? null;
  }

  setToken(value: null | string) {
    this._fields['token'] = value;

    return this;
  }

  get billingAddress(): ContactObject | null {
    return this._fields['billingAddress'] ?? null;
  }
  
  getBillingAddress(): ContactObject | null {
      return this._fields['billingAddress'] ?? null;
  }

  setBillingAddress(value: null | ContactObject | any) {
    if (value !== null && !(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['billingAddress'] = value;

    return this;
  }

  get stickyGatewayAccountId(): string | null {
    return this._fields['stickyGatewayAccountId'] ?? null;
  }
  
  getStickyGatewayAccountId(): string | null {
      return this._fields['stickyGatewayAccountId'] ?? null;
  }

  setStickyGatewayAccountId(value: null | string) {
    this._fields['stickyGatewayAccountId'] = value;

    return this;
  }

  get customFields(): Record<string, any> | null {
    return this._fields['customFields'] ?? null;
  }
  
  getCustomFields(): Record<string, any> | null {
      return this._fields['customFields'] ?? null;
  }

  setCustomFields(value: null | Record<string, any>) {
    this._fields['customFields'] = value;

    return this;
  }

  get useAsBackup(): boolean | null {
    return this._fields['useAsBackup'] ?? null;
  }
  
  getUseAsBackup(): boolean | null {
      return this._fields['useAsBackup'] ?? null;
  }

  setUseAsBackup(value: null | boolean) {
    this._fields['useAsBackup'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'token')) {
      data['token'] = this['token'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'stickyGatewayAccountId')) {
      data['stickyGatewayAccountId'] = this['stickyGatewayAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useAsBackup')) {
      data['useAsBackup'] = this['useAsBackup'];
    }

    return data;
  }
}
