import QuoteCreateOrderInvoicePreviewInitialAmounts from '../models/quote-create-order-invoice-preview-initial-amounts';
import QuoteCreateOrderInvoicePreviewRecurringAmounts from '../models/quote-create-order-invoice-preview-recurring-amounts';
import QuoteCreateOrderInvoicePreviewItems from '../models/quote-create-order-invoice-preview-items';

export default class QuoteCreateOrderInvoicePreview {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'initialAmounts')) {
      this.setInitialAmounts(data['initialAmounts']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recurringAmounts')) {
      this.setRecurringAmounts(data['recurringAmounts']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      this.setItems(data['items']);
    }
  }


  get currency(): string | null {
    return this._fields['currency'] ?? null;
  }
  
  getCurrency(): string | null {
      return this._fields['currency'] ?? null;
  }

  setCurrency(value: null | string) {
    this._fields['currency'] = value;

    return this;
  }

  get initialAmounts(): QuoteCreateOrderInvoicePreviewInitialAmounts | null {
    return this._fields['initialAmounts'] ?? null;
  }
  
  getInitialAmounts(): QuoteCreateOrderInvoicePreviewInitialAmounts | null {
      return this._fields['initialAmounts'] ?? null;
  }

  setInitialAmounts(value: null | QuoteCreateOrderInvoicePreviewInitialAmounts | any) {
    if (value !== null && !(value instanceof QuoteCreateOrderInvoicePreviewInitialAmounts)) {
      value = new QuoteCreateOrderInvoicePreviewInitialAmounts(value);
    }

    this._fields['initialAmounts'] = value;

    return this;
  }

  get recurringAmounts(): QuoteCreateOrderInvoicePreviewRecurringAmounts | null {
    return this._fields['recurringAmounts'] ?? null;
  }
  
  getRecurringAmounts(): QuoteCreateOrderInvoicePreviewRecurringAmounts | null {
      return this._fields['recurringAmounts'] ?? null;
  }

  setRecurringAmounts(value: null | QuoteCreateOrderInvoicePreviewRecurringAmounts | any) {
    if (value !== null && !(value instanceof QuoteCreateOrderInvoicePreviewRecurringAmounts)) {
      value = new QuoteCreateOrderInvoicePreviewRecurringAmounts(value);
    }

    this._fields['recurringAmounts'] = value;

    return this;
  }

  get items(): Array<any> | null {
    return this._fields['items'] ?? null;
  }
  
  getItems(): Array<any> | null {
      return this._fields['items'] ?? null;
  }

  setItems(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof QuoteCreateOrderInvoicePreviewItems ? value : new QuoteCreateOrderInvoicePreviewItems(value),
    ) : null;

    this._fields['items'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'initialAmounts')) {
      data['initialAmounts'] = this['initialAmounts']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recurringAmounts')) {
      data['recurringAmounts'] = this['recurringAmounts']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'] !== null
          ? this._fields['items'].map((quoteCreateOrderInvoicePreviewItems: QuoteCreateOrderInvoicePreviewItems) => quoteCreateOrderInvoicePreviewItems.jsonSerialize())
          : null;
    }

    return data;
  }
}
