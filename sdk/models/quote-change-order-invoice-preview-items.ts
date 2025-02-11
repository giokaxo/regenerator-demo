
export default class QuoteChangeOrderInvoicePreviewItems {
  TYPE_DEBIT = 'debit';

  TYPE_CREDIT = 'credit';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'quoteItemId')) {
      this.setQuoteItemId(data['quoteItemId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'priceDescription')) {
      this.setPriceDescription(data['priceDescription']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unitPrice')) {
      this.setUnitPrice(data['unitPrice']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'quantity')) {
      this.setQuantity(data['quantity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'period')) {
      this.setPeriod(data['period']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'setupUnitPrice')) {
      this.setSetupUnitPrice(data['setupUnitPrice']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'trialUnitPrice')) {
      this.setTrialUnitPrice(data['trialUnitPrice']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'trialPeriod')) {
      this.setTrialPeriod(data['trialPeriod']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxAmount')) {
      this.setTaxAmount(data['taxAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'setupTaxAmount')) {
      this.setSetupTaxAmount(data['setupTaxAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'trialTaxAmount')) {
      this.setTrialTaxAmount(data['trialTaxAmount']);
    }
  }


  get quoteItemId(): string | null {
    return this._fields['quoteItemId'] ?? null;
  }
  
  getQuoteItemId(): string | null {
      return this._fields['quoteItemId'] ?? null;
  }

  setQuoteItemId(value: null | string) {
    this._fields['quoteItemId'] = value;

    return this;
  }

  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  get name(): string | null {
    return this._fields['name'] ?? null;
  }
  
  getName(): string | null {
      return this._fields['name'] ?? null;
  }

  setName(value: null | string) {
    this._fields['name'] = value;

    return this;
  }

  get description(): string | null {
    return this._fields['description'] ?? null;
  }
  
  getDescription(): string | null {
      return this._fields['description'] ?? null;
  }

  setDescription(value: null | string) {
    this._fields['description'] = value;

    return this;
  }

  get priceDescription(): string | null {
    return this._fields['priceDescription'] ?? null;
  }
  
  getPriceDescription(): string | null {
      return this._fields['priceDescription'] ?? null;
  }

  setPriceDescription(value: null | string) {
    this._fields['priceDescription'] = value;

    return this;
  }

  get unitPrice(): number | null {
    return this._fields['unitPrice'] ?? null;
  }
  
  getUnitPrice(): number | null {
      return this._fields['unitPrice'] ?? null;
  }

  setUnitPrice(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['unitPrice'] = value;

    return this;
  }

  get quantity(): number | null {
    return this._fields['quantity'] ?? null;
  }
  
  getQuantity(): number | null {
      return this._fields['quantity'] ?? null;
  }

  setQuantity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['quantity'] = value;

    return this;
  }

  get period(): string | null {
    return this._fields['period'] ?? null;
  }
  
  getPeriod(): string | null {
      return this._fields['period'] ?? null;
  }

  setPeriod(value: null | string) {
    this._fields['period'] = value;

    return this;
  }

  get setupUnitPrice(): number | null {
    return this._fields['setupUnitPrice'] ?? null;
  }
  
  getSetupUnitPrice(): number | null {
      return this._fields['setupUnitPrice'] ?? null;
  }

  setSetupUnitPrice(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['setupUnitPrice'] = value;

    return this;
  }

  get trialUnitPrice(): number | null {
    return this._fields['trialUnitPrice'] ?? null;
  }
  
  getTrialUnitPrice(): number | null {
      return this._fields['trialUnitPrice'] ?? null;
  }

  setTrialUnitPrice(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['trialUnitPrice'] = value;

    return this;
  }

  get trialPeriod(): string | null {
    return this._fields['trialPeriod'] ?? null;
  }
  
  getTrialPeriod(): string | null {
      return this._fields['trialPeriod'] ?? null;
  }

  setTrialPeriod(value: null | string) {
    this._fields['trialPeriod'] = value;

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

  get setupTaxAmount(): number | null {
    return this._fields['setupTaxAmount'] ?? null;
  }
  
  getSetupTaxAmount(): number | null {
      return this._fields['setupTaxAmount'] ?? null;
  }

  setSetupTaxAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['setupTaxAmount'] = value;

    return this;
  }

  get trialTaxAmount(): number | null {
    return this._fields['trialTaxAmount'] ?? null;
  }
  
  getTrialTaxAmount(): number | null {
      return this._fields['trialTaxAmount'] ?? null;
  }

  setTrialTaxAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['trialTaxAmount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quoteItemId')) {
      data['quoteItemId'] = this['quoteItemId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'priceDescription')) {
      data['priceDescription'] = this['priceDescription'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unitPrice')) {
      data['unitPrice'] = this['unitPrice'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'period')) {
      data['period'] = this['period'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'setupUnitPrice')) {
      data['setupUnitPrice'] = this['setupUnitPrice'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'trialUnitPrice')) {
      data['trialUnitPrice'] = this['trialUnitPrice'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'trialPeriod')) {
      data['trialPeriod'] = this['trialPeriod'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxAmount')) {
      data['taxAmount'] = this['taxAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'setupTaxAmount')) {
      data['setupTaxAmount'] = this['setupTaxAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'trialTaxAmount')) {
      data['trialTaxAmount'] = this['trialTaxAmount'];
    }

    return data;
  }
}
