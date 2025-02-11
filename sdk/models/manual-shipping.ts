import { Shipping } from '../models/shipping';

export default class ManualShipping implements Shipping {
  get [Shipping](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
  }


  public get calculator() {
    return 'manual';
  }

  public getCalculator() {
    return 'manual';
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      calculator: 'manual',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }

    return data;
  }
}
