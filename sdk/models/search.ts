import SubscriptionOrOneTimeSaleFactory from '../factories/subscription-or-one-time-sale-factory';
import Customer from '../models/customer';
import Invoice from '../models/invoice';
import { SubscriptionOrOneTimeSale } from '../models/subscription-or-one-time-sale';
import Transaction from '../models/transaction';

export default class Search {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'customers')) {
      this.setCustomers(data['customers']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoices')) {
      this.setInvoices(data['invoices']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'orders')) {
      this.setOrders(data['orders']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transactions')) {
      this.setTransactions(data['transactions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'searched')) {
      this.setSearched(data['searched']);
    }
  }


  get customers(): Array<any> | null {
    return this._fields['customers'] ?? null;
  }
  
  getCustomers(): Array<any> | null {
      return this._fields['customers'] ?? null;
  }

  private setCustomers(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Customer ? value : new Customer(value),
    ) : null;

    this._fields['customers'] = value;

    return this;
  }

  get invoices(): Array<any> | null {
    return this._fields['invoices'] ?? null;
  }
  
  getInvoices(): Array<any> | null {
      return this._fields['invoices'] ?? null;
  }

  private setInvoices(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Invoice ? value : new Invoice(value),
    ) : null;

    this._fields['invoices'] = value;

    return this;
  }

  get orders(): Array<any> | null {
    return this._fields['orders'] ?? null;
  }
  
  getOrders(): Array<any> | null {
      return this._fields['orders'] ?? null;
  }

  private setOrders(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value[SubscriptionOrOneTimeSale] ? value : SubscriptionOrOneTimeSaleFactory.from(value),
    ) : null;

    this._fields['orders'] = value;

    return this;
  }

  get transactions(): Array<any> | null {
    return this._fields['transactions'] ?? null;
  }
  
  getTransactions(): Array<any> | null {
      return this._fields['transactions'] ?? null;
  }

  private setTransactions(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Transaction ? value : new Transaction(value),
    ) : null;

    this._fields['transactions'] = value;

    return this;
  }

  get searched(): Array<any> | null {
    return this._fields['searched'] ?? null;
  }
  
  getSearched(): Array<any> | null {
      return this._fields['searched'] ?? null;
  }

  private setSearched(value: null | Array<any>) {
    this._fields['searched'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customers')) {
      data['customers'] = this['customers'] !== null
          ? this._fields['customers'].map((customer: Customer) => customer.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoices')) {
      data['invoices'] = this['invoices'] !== null
          ? this._fields['invoices'].map((invoice: Invoice) => invoice.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'orders')) {
      data['orders'] = this['orders'] !== null
          ? this._fields['orders'].map((subscriptionOrOneTimeSale: SubscriptionOrOneTimeSale) => subscriptionOrOneTimeSale.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactions')) {
      data['transactions'] = this['transactions'] !== null
          ? this._fields['transactions'].map((transaction: Transaction) => transaction.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'searched')) {
      data['searched'] = this['searched'];
    }

    return data;
  }
}
