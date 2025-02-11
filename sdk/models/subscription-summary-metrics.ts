
export default class SubscriptionSummaryMetrics {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoicedAmount')) {
      this.setInvoicedAmount(data['invoicedAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'collectedAmount')) {
      this.setCollectedAmount(data['collectedAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceCount')) {
      this.setInvoiceCount(data['invoiceCount']);
    }
  }


  get currency(): string | null {
    return this._fields['currency'] ?? null;
  }
  
  getCurrency(): string | null {
      return this._fields['currency'] ?? null;
  }

  private setCurrency(value: null | string) {
    this._fields['currency'] = value;

    return this;
  }

  get invoicedAmount(): number | null {
    return this._fields['invoicedAmount'] ?? null;
  }
  
  getInvoicedAmount(): number | null {
      return this._fields['invoicedAmount'] ?? null;
  }

  private setInvoicedAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['invoicedAmount'] = value;

    return this;
  }

  get collectedAmount(): number | null {
    return this._fields['collectedAmount'] ?? null;
  }
  
  getCollectedAmount(): number | null {
      return this._fields['collectedAmount'] ?? null;
  }

  private setCollectedAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['collectedAmount'] = value;

    return this;
  }

  get invoiceCount(): number | null {
    return this._fields['invoiceCount'] ?? null;
  }
  
  getInvoiceCount(): number | null {
      return this._fields['invoiceCount'] ?? null;
  }

  private setInvoiceCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['invoiceCount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoicedAmount')) {
      data['invoicedAmount'] = this['invoicedAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'collectedAmount')) {
      data['collectedAmount'] = this['collectedAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceCount')) {
      data['invoiceCount'] = this['invoiceCount'];
    }

    return data;
  }
}
