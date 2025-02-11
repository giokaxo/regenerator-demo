import { CustomerDefaultPaymentInstrument } from '../models/customer-default-payment-instrument';
import { TransactionPaymentInstrument } from '../models/transaction-payment-instrument';

export default class CashInstrument implements CustomerDefaultPaymentInstrument, TransactionPaymentInstrument {
  get [CustomerDefaultPaymentInstrument](): true {
    return true;
  }

  get [TransactionPaymentInstrument](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'receivedBy')) {
      this.setReceivedBy(data['receivedBy']);
    }
  }


  public get method() {
    return 'cash';
  }

  public getMethod() {
    return 'cash';
  }

  get receivedBy(): string | null {
    return this._fields['receivedBy'] ?? null;
  }
  
  getReceivedBy(): string | null {
      return this._fields['receivedBy'] ?? null;
  }

  setReceivedBy(value: null | string) {
    this._fields['receivedBy'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'cash',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'receivedBy')) {
      data['receivedBy'] = this['receivedBy'];
    }

    return data;
  }
}
