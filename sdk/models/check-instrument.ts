import { CustomerDefaultPaymentInstrument } from '../models/customer-default-payment-instrument';
import { TransactionPaymentInstrument } from '../models/transaction-payment-instrument';

export default class CheckInstrument implements CustomerDefaultPaymentInstrument, TransactionPaymentInstrument {
  get [CustomerDefaultPaymentInstrument](): true {
    return true;
  }

  get [TransactionPaymentInstrument](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'reference')) {
      this.setReference(data['reference']);
    }
  }


  public get method() {
    return 'check';
  }

  public getMethod() {
    return 'check';
  }

  get reference(): string | null {
    return this._fields['reference'] ?? null;
  }
  
  getReference(): string | null {
      return this._fields['reference'] ?? null;
  }

  setReference(value: null | string) {
    this._fields['reference'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'check',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reference')) {
      data['reference'] = this['reference'];
    }

    return data;
  }
}
