
export default class PlanFormulaVolumeBrackets {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'price')) {
      this.setPrice(data['price']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'maxQuantity')) {
      this.setMaxQuantity(data['maxQuantity']);
    }
  }


  get price(): number | null {
    return this._fields['price'] ?? null;
  }
  
  getPrice(): number | null {
      return this._fields['price'] ?? null;
  }

  setPrice(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['price'] = value;

    return this;
  }

  get maxQuantity(): number | null {
    return this._fields['maxQuantity'] ?? null;
  }
  
  getMaxQuantity(): number | null {
      return this._fields['maxQuantity'] ?? null;
  }

  setMaxQuantity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['maxQuantity'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'price')) {
      data['price'] = this['price'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'maxQuantity')) {
      data['maxQuantity'] = this['maxQuantity'];
    }

    return data;
  }
}
