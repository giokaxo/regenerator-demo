import { Discount } from '../models/discount';

export default class DiscountPercent implements Discount {
  get [Discount](): true {
    return true;
  }

  CONTEXT_ITEMS = 'items';

  CONTEXT_SHIPPING = 'shipping';

  CONTEXT_ITEMS_AND_SHIPPING = 'items-and-shipping';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'value')) {
      this.setValue(data['value']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'context')) {
      this.setContext(data['context']);
    }
  }


  public get type() {
    return 'percent';
  }

  public getType() {
    return 'percent';
  }

  get value(): number {
    return this._fields['value'];
  }
  
  getValue(): number {
      return this._fields['value'];
  }

  setValue(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['value'] = value;

    return this;
  }

  get context(): string | null {
    return this._fields['context'] ?? null;
  }
  
  getContext(): string | null {
      return this._fields['context'] ?? null;
  }

  setContext(value: null | string) {
    this._fields['context'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'percent',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'value')) {
      data['value'] = this['value'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'context')) {
      data['context'] = this['context'];
    }

    return data;
  }
}
