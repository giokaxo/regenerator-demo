import { PlanPriceFormula } from '../models/plan-price-formula';

export default class PlanFormulaFlatRate implements PlanPriceFormula {
  get [PlanPriceFormula](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'price')) {
      this.setPrice(data['price']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'minQuantity')) {
      this.setMinQuantity(data['minQuantity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'maxQuantity')) {
      this.setMaxQuantity(data['maxQuantity']);
    }
  }


  public get formula() {
    return 'flat-rate';
  }

  public getFormula() {
    return 'flat-rate';
  }

  get price(): number {
    return this._fields['price'];
  }
  
  getPrice(): number {
      return this._fields['price'];
  }

  setPrice(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['price'] = value;

    return this;
  }

  get minQuantity(): number | null {
    return this._fields['minQuantity'] ?? null;
  }
  
  getMinQuantity(): number | null {
      return this._fields['minQuantity'] ?? null;
  }

  setMinQuantity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['minQuantity'] = value;

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
    const data: Record<string, any> = {
      formula: 'flat-rate',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'price')) {
      data['price'] = this['price'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'minQuantity')) {
      data['minQuantity'] = this['minQuantity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'maxQuantity')) {
      data['maxQuantity'] = this['maxQuantity'];
    }

    return data;
  }
}
