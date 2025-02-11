import { Discount } from '../models/discount';

export default class DiscountFixed implements Discount {
  get [Discount](): true {
    return true;
  }

  CONTEXT_ITEMS = 'items';

  CONTEXT_SHIPPING = 'shipping';

  CONTEXT_ITEMS_AND_SHIPPING = 'items-and-shipping';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'context')) {
      this.setContext(data['context']);
    }
  }


  public get type() {
    return 'fixed';
  }

  public getType() {
    return 'fixed';
  }

  get amount(): number {
    return this._fields['amount'];
  }
  
  getAmount(): number {
      return this._fields['amount'];
  }

  setAmount(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get currency(): string {
    return this._fields['currency'];
  }
  
  getCurrency(): string {
      return this._fields['currency'];
  }

  setCurrency(value: string) {
    this._fields['currency'] = value;

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
      type: 'fixed',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'context')) {
      data['context'] = this['context'];
    }

    return data;
  }
}
