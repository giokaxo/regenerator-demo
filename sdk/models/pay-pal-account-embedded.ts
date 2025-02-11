import Transaction from '../models/transaction';
import Customer from '../models/customer';

export default class PayPalAccountEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'authTransaction')) {
      this.setAuthTransaction(data['authTransaction']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customer')) {
      this.setCustomer(data['customer']);
    }
  }


  get authTransaction(): Transaction | null {
    return this._fields['authTransaction'] ?? null;
  }
  
  getAuthTransaction(): Transaction | null {
      return this._fields['authTransaction'] ?? null;
  }

  setAuthTransaction(value: null | Transaction | any) {
    if (value !== null && !(value instanceof Transaction)) {
      value = new Transaction(value);
    }

    this._fields['authTransaction'] = value;

    return this;
  }

  get customer(): Customer | null {
    return this._fields['customer'] ?? null;
  }
  
  getCustomer(): Customer | null {
      return this._fields['customer'] ?? null;
  }

  setCustomer(value: null | Customer | any) {
    if (value !== null && !(value instanceof Customer)) {
      value = new Customer(value);
    }

    this._fields['customer'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authTransaction')) {
      data['authTransaction'] = this['authTransaction']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customer')) {
      data['customer'] = this['customer']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
