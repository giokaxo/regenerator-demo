import Customer from '../models/customer';
import Invoice from '../models/invoice';
import InvoiceItem from '../models/invoice-item';
import JournalAccount from '../models/journal-account';

export default class JournalRecordEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'customer')) {
      this.setCustomer(data['customer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoice')) {
      this.setInvoice(data['invoice']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceItem')) {
      this.setInvoiceItem(data['invoiceItem']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'debitAccount')) {
      this.setDebitAccount(data['debitAccount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'creditAccount')) {
      this.setCreditAccount(data['creditAccount']);
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

  get invoice(): Invoice | null {
    return this._fields['invoice'] ?? null;
  }
  
  getInvoice(): Invoice | null {
      return this._fields['invoice'] ?? null;
  }

  setInvoice(value: null | Invoice | any) {
    if (value !== null && !(value instanceof Invoice)) {
      value = new Invoice(value);
    }

    this._fields['invoice'] = value;

    return this;
  }

  get invoiceItem(): InvoiceItem | null {
    return this._fields['invoiceItem'] ?? null;
  }
  
  getInvoiceItem(): InvoiceItem | null {
      return this._fields['invoiceItem'] ?? null;
  }

  setInvoiceItem(value: null | InvoiceItem | any) {
    if (value !== null && !(value instanceof InvoiceItem)) {
      value = new InvoiceItem(value);
    }

    this._fields['invoiceItem'] = value;

    return this;
  }

  get debitAccount(): JournalAccount | null {
    return this._fields['debitAccount'] ?? null;
  }
  
  getDebitAccount(): JournalAccount | null {
      return this._fields['debitAccount'] ?? null;
  }

  setDebitAccount(value: null | JournalAccount | any) {
    if (value !== null && !(value instanceof JournalAccount)) {
      value = new JournalAccount(value);
    }

    this._fields['debitAccount'] = value;

    return this;
  }

  get creditAccount(): JournalAccount | null {
    return this._fields['creditAccount'] ?? null;
  }
  
  getCreditAccount(): JournalAccount | null {
      return this._fields['creditAccount'] ?? null;
  }

  setCreditAccount(value: null | JournalAccount | any) {
    if (value !== null && !(value instanceof JournalAccount)) {
      value = new JournalAccount(value);
    }

    this._fields['creditAccount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customer')) {
      data['customer'] = this['customer']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoice')) {
      data['invoice'] = this['invoice']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceItem')) {
      data['invoiceItem'] = this['invoiceItem']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'debitAccount')) {
      data['debitAccount'] = this['debitAccount']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'creditAccount')) {
      data['creditAccount'] = this['creditAccount']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
