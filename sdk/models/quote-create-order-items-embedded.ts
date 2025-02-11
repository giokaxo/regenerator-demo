import Product from '../models/product';

export default class QuoteCreateOrderItemsEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'product')) {
      this.setProduct(data['product']);
    }
  }


  get product(): Product | null {
    return this._fields['product'] ?? null;
  }
  
  getProduct(): Product | null {
      return this._fields['product'] ?? null;
  }

  setProduct(value: null | Product | any) {
    if (value !== null && !(value instanceof Product)) {
      value = new Product(value);
    }

    this._fields['product'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'product')) {
      data['product'] = this['product']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
