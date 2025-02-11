import { FeeFormula } from '../models/fee-formula';

export default class PercentageFeeFormula implements FeeFormula {
  get [FeeFormula](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bips')) {
      this.setBips(data['bips']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'minAmount')) {
      this.setMinAmount(data['minAmount']);
    }
  }


  public get type() {
    return 'percentage';
  }

  public getType() {
    return 'percentage';
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

  get bips(): number {
    return this._fields['bips'];
  }
  
  getBips(): number {
      return this._fields['bips'];
  }

  setBips(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['bips'] = value;

    return this;
  }

  get minAmount(): number | null {
    return this._fields['minAmount'] ?? null;
  }
  
  getMinAmount(): number | null {
      return this._fields['minAmount'] ?? null;
  }

  setMinAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['minAmount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'percentage',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bips')) {
      data['bips'] = this['bips'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'minAmount')) {
      data['minAmount'] = this['minAmount'];
    }

    return data;
  }
}
