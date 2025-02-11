import { PostPaymentInstrumentRequest } from '../models/post-payment-instrument-request';
import { PaymentInstruction } from '../models/payment-instruction';
import ContactObject from '../models/contact-object';
import RiskMetadata from '../models/risk-metadata';

export default class PaymentCardCreatePlain implements PostPaymentInstrumentRequest, PaymentInstruction {
  get [PostPaymentInstrumentRequest](): true {
    return true;
  }

  get [PaymentInstruction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'pan')) {
      this.setPan(data['pan']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expYear')) {
      this.setExpYear(data['expYear']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expMonth')) {
      this.setExpMonth(data['expMonth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cvv')) {
      this.setCvv(data['cvv']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskMetadata')) {
      this.setRiskMetadata(data['riskMetadata']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useAsBackup')) {
      this.setUseAsBackup(data['useAsBackup']);
    }
  }


  public get method() {
    return 'payment-card';
  }

  public getMethod() {
    return 'payment-card';
  }

  get customerId(): string {
    return this._fields['customerId'];
  }
  
  getCustomerId(): string {
      return this._fields['customerId'];
  }

  setCustomerId(value: string) {
    this._fields['customerId'] = value;

    return this;
  }

  get pan(): string {
    return this._fields['pan'];
  }
  
  getPan(): string {
      return this._fields['pan'];
  }

  setPan(value: string) {
    this._fields['pan'] = value;

    return this;
  }

  get expYear(): number {
    return this._fields['expYear'];
  }
  
  getExpYear(): number {
      return this._fields['expYear'];
  }

  setExpYear(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expYear'] = value;

    return this;
  }

  get expMonth(): number {
    return this._fields['expMonth'];
  }
  
  getExpMonth(): number {
      return this._fields['expMonth'];
  }

  setExpMonth(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expMonth'] = value;

    return this;
  }

  get cvv(): string | null {
    return this._fields['cvv'] ?? null;
  }
  
  getCvv(): string | null {
      return this._fields['cvv'] ?? null;
  }

  setCvv(value: null | string) {
    this._fields['cvv'] = value;

    return this;
  }

  get billingAddress(): ContactObject {
    return this._fields['billingAddress'];
  }
  
  getBillingAddress(): ContactObject {
      return this._fields['billingAddress'];
  }

  setBillingAddress(value: ContactObject | any) {
    if (!(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['billingAddress'] = value;

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

  get riskMetadata(): RiskMetadata | null {
    return this._fields['riskMetadata'] ?? null;
  }
  
  getRiskMetadata(): RiskMetadata | null {
      return this._fields['riskMetadata'] ?? null;
  }

  setRiskMetadata(value: null | RiskMetadata | any) {
    if (value !== null && !(value instanceof RiskMetadata)) {
      value = new RiskMetadata(value);
    }

    this._fields['riskMetadata'] = value;

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
    const data: Record<string, any> = {
      method: 'payment-card',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'pan')) {
      data['pan'] = this['pan'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expYear')) {
      data['expYear'] = this['expYear'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expMonth')) {
      data['expMonth'] = this['expMonth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cvv')) {
      data['cvv'] = this['cvv'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskMetadata')) {
      data['riskMetadata'] = this['riskMetadata']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useAsBackup')) {
      data['useAsBackup'] = this['useAsBackup'];
    }

    return data;
  }
}
