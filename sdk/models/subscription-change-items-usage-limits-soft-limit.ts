
export default class SubscriptionChangeItemsUsageLimitsSoftLimit {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'quantity')) {
      this.setQuantity(data['quantity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }

    return data;
  }
}
