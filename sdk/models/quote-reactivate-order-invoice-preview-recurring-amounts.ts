
export default class QuoteReactivateOrderInvoicePreviewRecurringAmounts {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subtotalAmount')) {
      this.setSubtotalAmount(data['subtotalAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'discountAmount')) {
      this.setDiscountAmount(data['discountAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'shippingAmount')) {
      this.setShippingAmount(data['shippingAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxAmount')) {
      this.setTaxAmount(data['taxAmount']);
    }
  }


  get amount(): number | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): number | null {
      return this._fields['amount'] ?? null;
  }

  setAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get subtotalAmount(): number | null {
    return this._fields['subtotalAmount'] ?? null;
  }
  
  getSubtotalAmount(): number | null {
      return this._fields['subtotalAmount'] ?? null;
  }

  setSubtotalAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['subtotalAmount'] = value;

    return this;
  }

  get discountAmount(): number | null {
    return this._fields['discountAmount'] ?? null;
  }
  
  getDiscountAmount(): number | null {
      return this._fields['discountAmount'] ?? null;
  }

  setDiscountAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['discountAmount'] = value;

    return this;
  }

  get shippingAmount(): number | null {
    return this._fields['shippingAmount'] ?? null;
  }
  
  getShippingAmount(): number | null {
      return this._fields['shippingAmount'] ?? null;
  }

  setShippingAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['shippingAmount'] = value;

    return this;
  }

  get taxAmount(): number | null {
    return this._fields['taxAmount'] ?? null;
  }
  
  getTaxAmount(): number | null {
      return this._fields['taxAmount'] ?? null;
  }

  setTaxAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['taxAmount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subtotalAmount')) {
      data['subtotalAmount'] = this['subtotalAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'discountAmount')) {
      data['discountAmount'] = this['discountAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shippingAmount')) {
      data['shippingAmount'] = this['shippingAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxAmount')) {
      data['taxAmount'] = this['taxAmount'];
    }

    return data;
  }
}
