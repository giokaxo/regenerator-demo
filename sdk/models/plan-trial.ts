import PlanTrialPeriod from '../models/plan-trial-period';

export default class PlanTrial {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'price')) {
      this.setPrice(data['price']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'period')) {
      this.setPeriod(data['period']);
    }
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

  get period(): PlanTrialPeriod {
    return this._fields['period'];
  }
  
  getPeriod(): PlanTrialPeriod {
      return this._fields['period'];
  }

  setPeriod(value: PlanTrialPeriod | any) {
    if (!(value instanceof PlanTrialPeriod)) {
      value = new PlanTrialPeriod(value);
    }

    this._fields['period'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'price')) {
      data['price'] = this['price'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'period')) {
      data['period'] = this['period'].jsonSerialize();
    }

    return data;
  }
}
