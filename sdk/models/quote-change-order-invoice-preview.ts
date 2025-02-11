import QuoteChangeOrderInvoicePreviewInitialAmounts from '../models/quote-change-order-invoice-preview-initial-amounts';
import QuoteChangeOrderInvoicePreviewRecurringAmounts from '../models/quote-change-order-invoice-preview-recurring-amounts';
import QuoteChangeOrderInvoicePreviewItems from '../models/quote-change-order-invoice-preview-items';

export default class QuoteChangeOrderInvoicePreview {
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

  get initialAmounts(): QuoteChangeOrderInvoicePreviewInitialAmounts | null {
    return this._fields['initialAmounts'] ?? null;
  }
  
  getInitialAmounts(): QuoteChangeOrderInvoicePreviewInitialAmounts | null {
      return this._fields['initialAmounts'] ?? null;
  }

  setInitialAmounts(value: null | QuoteChangeOrderInvoicePreviewInitialAmounts | any) {
    if (value !== null && !(value instanceof QuoteChangeOrderInvoicePreviewInitialAmounts)) {
      value = new QuoteChangeOrderInvoicePreviewInitialAmounts(value);
    }

    this._fields['initialAmounts'] = value;

    return this;
  }

  get recurringAmounts(): QuoteChangeOrderInvoicePreviewRecurringAmounts | null {
    return this._fields['recurringAmounts'] ?? null;
  }
  
  getRecurringAmounts(): QuoteChangeOrderInvoicePreviewRecurringAmounts | null {
      return this._fields['recurringAmounts'] ?? null;
  }

  setRecurringAmounts(value: null | QuoteChangeOrderInvoicePreviewRecurringAmounts | any) {
    if (value !== null && !(value instanceof QuoteChangeOrderInvoicePreviewRecurringAmounts)) {
      value = new QuoteChangeOrderInvoicePreviewRecurringAmounts(value);
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
      (value) => value instanceof QuoteChangeOrderInvoicePreviewItems ? value : new QuoteChangeOrderInvoicePreviewItems(value),
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
          ? this._fields['items'].map((quoteChangeOrderInvoicePreviewItems: QuoteChangeOrderInvoicePreviewItems) => quoteChangeOrderInvoicePreviewItems.jsonSerialize())
          : null;
    }

    return data;
  }
}
