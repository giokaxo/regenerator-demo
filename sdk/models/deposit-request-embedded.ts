import Customer from '../models/customer';
import Website from '../models/website';
import Transaction from '../models/transaction';

export default class DepositRequestEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'customer')) {
      this.setCustomer(data['customer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'website')) {
      this.setWebsite(data['website']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transactions')) {
      this.setTransactions(data['transactions']);
    }
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

  get website(): Website | null {
    return this._fields['website'] ?? null;
  }
  
  getWebsite(): Website | null {
      return this._fields['website'] ?? null;
  }

  setWebsite(value: null | Website | any) {
    if (value !== null && !(value instanceof Website)) {
      value = new Website(value);
    }

    this._fields['website'] = value;

    return this;
  }

  get transactions(): Array<any> | null {
    return this._fields['transactions'] ?? null;
  }
  
  getTransactions(): Array<any> | null {
      return this._fields['transactions'] ?? null;
  }

  setTransactions(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Transaction ? value : new Transaction(value),
    ) : null;

    this._fields['transactions'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customer')) {
      data['customer'] = this['customer']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'website')) {
      data['website'] = this['website']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactions')) {
      data['transactions'] = this['transactions'] !== null
          ? this._fields['transactions'].map((transaction: Transaction) => transaction.jsonSerialize())
          : null;
    }

    return data;
  }
}
