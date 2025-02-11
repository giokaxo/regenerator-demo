import { PlanPriceFormula } from '../models/plan-price-formula';
import PlanFormulaStairstepBrackets from '../models/plan-formula-stairstep-brackets';

export default class PlanFormulaStairstep implements PlanPriceFormula {
  get [PlanPriceFormula](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'brackets')) {
      this.setBrackets(data['brackets']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'minQuantity')) {
      this.setMinQuantity(data['minQuantity']);
    }
  }


  public get formula() {
    return 'stairstep';
  }

  public getFormula() {
    return 'stairstep';
  }

  get brackets(): Array<any> {
    return this._fields['brackets'];
  }
  
  getBrackets(): Array<any> {
      return this._fields['brackets'];
  }

  setBrackets(value: Array<any>) {
    value = value.map(
      (value) => value instanceof PlanFormulaStairstepBrackets ? value : new PlanFormulaStairstepBrackets(value),
    );

    this._fields['brackets'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      formula: 'stairstep',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'brackets')) {
      data['brackets'] = this['brackets'].map(
          (planFormulaStairstepBrackets: PlanFormulaStairstepBrackets) => planFormulaStairstepBrackets.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'minQuantity')) {
      data['minQuantity'] = this['minQuantity'];
    }

    return data;
  }
}
