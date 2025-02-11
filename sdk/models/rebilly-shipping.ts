import { Shipping } from '../models/shipping';

export default class RebillyShipping implements Shipping {
  get [Shipping](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'rateId')) {
      this.setRateId(data['rateId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
  }


  public get calculator() {
    return 'rebilly';
  }

  public getCalculator() {
    return 'rebilly';
  }

  get rateId(): string | null {
    return this._fields['rateId'] ?? null;
  }
  
  getRateId(): string | null {
      return this._fields['rateId'] ?? null;
  }

  setRateId(value: null | string) {
    this._fields['rateId'] = value;

    return this;
  }

  get amount(): number | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): number | null {
      return this._fields['amount'] ?? null;
  }

  private setAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      calculator: 'rebilly',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rateId')) {
      data['rateId'] = this['rateId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }

    return data;
  }
}
