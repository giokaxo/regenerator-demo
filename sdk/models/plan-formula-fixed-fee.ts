import { PlanPriceFormula } from '../models/plan-price-formula';

export default class PlanFormulaFixedFee implements PlanPriceFormula {
  get [PlanPriceFormula](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'price')) {
      this.setPrice(data['price']);
    }
  }


  public get formula() {
    return 'fixed-fee';
  }

  public getFormula() {
    return 'fixed-fee';
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      formula: 'fixed-fee',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'price')) {
      data['price'] = this['price'];
    }

    return data;
  }
}
