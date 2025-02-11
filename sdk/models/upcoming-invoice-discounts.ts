
export default class UpcomingInvoiceDiscounts {
  CONTEXT_ITEMS = 'items';

  CONTEXT_SHIPPING = 'shipping';

  CONTEXT_ITEMS_AND_SHIPPING = 'items-and-shipping';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'couponId')) {
      this.setCouponId(data['couponId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'redemptionId')) {
      this.setRedemptionId(data['redemptionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'context')) {
      this.setContext(data['context']);
    }
  }


  get couponId(): string | null {
    return this._fields['couponId'] ?? null;
  }
  
  getCouponId(): string | null {
      return this._fields['couponId'] ?? null;
  }

  setCouponId(value: null | string) {
    this._fields['couponId'] = value;

    return this;
  }

  get redemptionId(): string | null {
    return this._fields['redemptionId'] ?? null;
  }
  
  getRedemptionId(): string | null {
      return this._fields['redemptionId'] ?? null;
  }

  setRedemptionId(value: null | string) {
    this._fields['redemptionId'] = value;

    return this;
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
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'couponId')) {
      data['couponId'] = this['couponId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'redemptionId')) {
      data['redemptionId'] = this['redemptionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'context')) {
      data['context'] = this['context'];
    }

    return data;
  }
}
