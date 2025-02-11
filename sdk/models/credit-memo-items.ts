import CreditMemoTaxItem from '../models/credit-memo-tax-item';

export default class CreditMemoItems {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceItemId')) {
      this.setInvoiceItemId(data['invoiceItemId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unitPrice')) {
      this.setUnitPrice(data['unitPrice']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'quantity')) {
      this.setQuantity(data['quantity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'price')) {
      this.setPrice(data['price']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'productId')) {
      this.setProductId(data['productId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'planId')) {
      this.setPlanId(data['planId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tax')) {
      this.setTax(data['tax']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

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

  get unitPrice(): number {
    return this._fields['unitPrice'];
  }
  
  getUnitPrice(): number {
      return this._fields['unitPrice'];
  }

  setUnitPrice(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['unitPrice'] = value;

    return this;
  }

  get quantity(): number {
    return this._fields['quantity'];
  }
  
  getQuantity(): number {
      return this._fields['quantity'];
  }

  setQuantity(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['quantity'] = value;

    return this;
  }

  get price(): number | null {
    return this._fields['price'] ?? null;
  }
  
  getPrice(): number | null {
      return this._fields['price'] ?? null;
  }

  private setPrice(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['price'] = value;

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

  get tax(): CreditMemoTaxItem | null {
    return this._fields['tax'] ?? null;
  }
  
  getTax(): CreditMemoTaxItem | null {
      return this._fields['tax'] ?? null;
  }

  setTax(value: null | CreditMemoTaxItem | any) {
    if (value !== null && !(value instanceof CreditMemoTaxItem)) {
      value = new CreditMemoTaxItem(value);
    }

    this._fields['tax'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceItemId')) {
      data['invoiceItemId'] = this['invoiceItemId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unitPrice')) {
      data['unitPrice'] = this['unitPrice'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'price')) {
      data['price'] = this['price'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'productId')) {
      data['productId'] = this['productId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'planId')) {
      data['planId'] = this['planId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tax')) {
      data['tax'] = this['tax']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
