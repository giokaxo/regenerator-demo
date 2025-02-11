import PatchCreditMemoAllocationsTransactions from '../models/patch-credit-memo-allocations-transactions';
import PatchCreditMemoAllocationsInvoices from '../models/patch-credit-memo-allocations-invoices';

export default class PatchCreditMemoAllocations {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'transactions')) {
      this.setTransactions(data['transactions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoices')) {
      this.setInvoices(data['invoices']);
    }
  }


  get transactions(): Array<any> | null {
    return this._fields['transactions'] ?? null;
  }
  
  getTransactions(): Array<any> | null {
      return this._fields['transactions'] ?? null;
  }

  setTransactions(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof PatchCreditMemoAllocationsTransactions ? value : new PatchCreditMemoAllocationsTransactions(value),
    ) : null;

    this._fields['transactions'] = value;

    return this;
  }

  get invoices(): Array<any> | null {
    return this._fields['invoices'] ?? null;
  }
  
  getInvoices(): Array<any> | null {
      return this._fields['invoices'] ?? null;
  }

  setInvoices(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof PatchCreditMemoAllocationsInvoices ? value : new PatchCreditMemoAllocationsInvoices(value),
    ) : null;

    this._fields['invoices'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactions')) {
      data['transactions'] = this['transactions'] !== null
          ? this._fields['transactions'].map((patchCreditMemoAllocationsTransactions: PatchCreditMemoAllocationsTransactions) => patchCreditMemoAllocationsTransactions.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoices')) {
      data['invoices'] = this['invoices'] !== null
          ? this._fields['invoices'].map((patchCreditMemoAllocationsInvoices: PatchCreditMemoAllocationsInvoices) => patchCreditMemoAllocationsInvoices.jsonSerialize())
          : null;
    }

    return data;
  }
}
