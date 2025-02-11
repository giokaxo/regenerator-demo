
export default class RevenueEntry {
  STATUS_SCHEDULED = 'scheduled';

  STATUS_RECOGNIZED = 'recognized';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceId')) {
      this.setInvoiceId(data['invoiceId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceItemId')) {
      this.setInvoiceItemId(data['invoiceItemId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'productId')) {
      this.setProductId(data['productId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'planId')) {
      this.setPlanId(data['planId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountingCode')) {
      this.setAccountingCode(data['accountingCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'estimatedAmount')) {
      this.setEstimatedAmount(data['estimatedAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recognizedAmount')) {
      this.setRecognizedAmount(data['recognizedAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'scheduledTime')) {
      this.setScheduledTime(data['scheduledTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'issuedTime')) {
      this.setIssuedTime(data['issuedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recognizedTime')) {
      this.setRecognizedTime(data['recognizedTime']);
    }
  }


  get customerId(): string | null {
    return this._fields['customerId'] ?? null;
  }
  
  getCustomerId(): string | null {
      return this._fields['customerId'] ?? null;
  }

  setCustomerId(value: null | string) {
    this._fields['customerId'] = value;

    return this;
  }

  get invoiceId(): string | null {
    return this._fields['invoiceId'] ?? null;
  }
  
  getInvoiceId(): string | null {
      return this._fields['invoiceId'] ?? null;
  }

  setInvoiceId(value: null | string) {
    this._fields['invoiceId'] = value;

    return this;
  }

  get invoiceItemId(): string | null {
    return this._fields['invoiceItemId'] ?? null;
  }
  
  getInvoiceItemId(): string | null {
      return this._fields['invoiceItemId'] ?? null;
  }

  setInvoiceItemId(value: null | string) {
    this._fields['invoiceItemId'] = value;

    return this;
  }

  get productId(): string | null {
    return this._fields['productId'] ?? null;
  }
  
  getProductId(): string | null {
      return this._fields['productId'] ?? null;
  }

  setProductId(value: null | string) {
    this._fields['productId'] = value;

    return this;
  }

  get planId(): string | null {
    return this._fields['planId'] ?? null;
  }
  
  getPlanId(): string | null {
      return this._fields['planId'] ?? null;
  }

  setPlanId(value: null | string) {
    this._fields['planId'] = value;

    return this;
  }

  get accountingCode(): string | null {
    return this._fields['accountingCode'] ?? null;
  }
  
  getAccountingCode(): string | null {
      return this._fields['accountingCode'] ?? null;
  }

  setAccountingCode(value: null | string) {
    this._fields['accountingCode'] = value;

    return this;
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

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  private setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get estimatedAmount(): number | null {
    return this._fields['estimatedAmount'] ?? null;
  }
  
  getEstimatedAmount(): number | null {
      return this._fields['estimatedAmount'] ?? null;
  }

  setEstimatedAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['estimatedAmount'] = value;

    return this;
  }

  get recognizedAmount(): number | null {
    return this._fields['recognizedAmount'] ?? null;
  }
  
  getRecognizedAmount(): number | null {
      return this._fields['recognizedAmount'] ?? null;
  }

  setRecognizedAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['recognizedAmount'] = value;

    return this;
  }

  get scheduledTime(): Date | null {
    return this._fields['scheduledTime'] ?? null;
  }
  
  getScheduledTime(): Date | null {
      return this._fields['scheduledTime'] ?? null;
  }

  private setScheduledTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['scheduledTime'] = value;

    return this;
  }

  get issuedTime(): Date | null {
    return this._fields['issuedTime'] ?? null;
  }
  
  getIssuedTime(): Date | null {
      return this._fields['issuedTime'] ?? null;
  }

  private setIssuedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['issuedTime'] = value;

    return this;
  }

  get recognizedTime(): Date | null {
    return this._fields['recognizedTime'] ?? null;
  }
  
  getRecognizedTime(): Date | null {
      return this._fields['recognizedTime'] ?? null;
  }

  private setRecognizedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['recognizedTime'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceId')) {
      data['invoiceId'] = this['invoiceId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceItemId')) {
      data['invoiceItemId'] = this['invoiceItemId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'productId')) {
      data['productId'] = this['productId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'planId')) {
      data['planId'] = this['planId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountingCode')) {
      data['accountingCode'] = this['accountingCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'estimatedAmount')) {
      data['estimatedAmount'] = this['estimatedAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recognizedAmount')) {
      data['recognizedAmount'] = this['recognizedAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'scheduledTime')) {
      data['scheduledTime'] = this['scheduledTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'issuedTime')) {
      data['issuedTime'] = this['issuedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recognizedTime')) {
      data['recognizedTime'] = this['recognizedTime']?.toISOString() ?? null;
    }

    return data;
  }
}
