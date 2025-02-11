import QuickBooksOnlineCustomerExternalServiceSettings from '../models/quick-books-online-customer-external-service-settings';
import QuickBooksOnlineInvoiceExternalServiceSettings from '../models/quick-books-online-invoice-external-service-settings';
import QuickBooksOnlineTransactionExternalServiceSettings from '../models/quick-books-online-transaction-external-service-settings';
import QuickBooksOnlineJournalEntryExternalServiceSettings from '../models/quick-books-online-journal-entry-external-service-settings';

export default class QuickBooksOnlineExternalServiceSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'customer')) {
      this.setCustomer(data['customer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoice')) {
      this.setInvoice(data['invoice']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transaction')) {
      this.setTransaction(data['transaction']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'journalEntry')) {
      this.setJournalEntry(data['journalEntry']);
    }
  }


  get customer(): QuickBooksOnlineCustomerExternalServiceSettings | null {
    return this._fields['customer'] ?? null;
  }
  
  getCustomer(): QuickBooksOnlineCustomerExternalServiceSettings | null {
      return this._fields['customer'] ?? null;
  }

  setCustomer(value: null | QuickBooksOnlineCustomerExternalServiceSettings | any) {
    if (value !== null && !(value instanceof QuickBooksOnlineCustomerExternalServiceSettings)) {
      value = new QuickBooksOnlineCustomerExternalServiceSettings(value);
    }

    this._fields['customer'] = value;

    return this;
  }

  get invoice(): QuickBooksOnlineInvoiceExternalServiceSettings | null {
    return this._fields['invoice'] ?? null;
  }
  
  getInvoice(): QuickBooksOnlineInvoiceExternalServiceSettings | null {
      return this._fields['invoice'] ?? null;
  }

  setInvoice(value: null | QuickBooksOnlineInvoiceExternalServiceSettings | any) {
    if (value !== null && !(value instanceof QuickBooksOnlineInvoiceExternalServiceSettings)) {
      value = new QuickBooksOnlineInvoiceExternalServiceSettings(value);
    }

    this._fields['invoice'] = value;

    return this;
  }

  get transaction(): QuickBooksOnlineTransactionExternalServiceSettings | null {
    return this._fields['transaction'] ?? null;
  }
  
  getTransaction(): QuickBooksOnlineTransactionExternalServiceSettings | null {
      return this._fields['transaction'] ?? null;
  }

  setTransaction(value: null | QuickBooksOnlineTransactionExternalServiceSettings | any) {
    if (value !== null && !(value instanceof QuickBooksOnlineTransactionExternalServiceSettings)) {
      value = new QuickBooksOnlineTransactionExternalServiceSettings(value);
    }

    this._fields['transaction'] = value;

    return this;
  }

  get journalEntry(): QuickBooksOnlineJournalEntryExternalServiceSettings | null {
    return this._fields['journalEntry'] ?? null;
  }
  
  getJournalEntry(): QuickBooksOnlineJournalEntryExternalServiceSettings | null {
      return this._fields['journalEntry'] ?? null;
  }

  setJournalEntry(value: null | QuickBooksOnlineJournalEntryExternalServiceSettings | any) {
    if (value !== null && !(value instanceof QuickBooksOnlineJournalEntryExternalServiceSettings)) {
      value = new QuickBooksOnlineJournalEntryExternalServiceSettings(value);
    }

    this._fields['journalEntry'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transaction')) {
      data['transaction'] = this['transaction']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'journalEntry')) {
      data['journalEntry'] = this['journalEntry']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
