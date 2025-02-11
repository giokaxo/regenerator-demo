
export default class SubscriptionItemUpdate {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'quantityFilled')) {
      this.setQuantityFilled(data['quantityFilled']);
    }
  }


  get quantityFilled(): number {
    return this._fields['quantityFilled'];
  }
  
  getQuantityFilled(): number {
      return this._fields['quantityFilled'];
  }

  setQuantityFilled(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['quantityFilled'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantityFilled')) {
      data['quantityFilled'] = this['quantityFilled'];
    }

    return data;
  }
}
