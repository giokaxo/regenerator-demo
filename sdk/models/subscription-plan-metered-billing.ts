
export default class SubscriptionPlanMeteredBilling {
  STRATEGY_SUM = 'sum';

  STRATEGY_LAST = 'last';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'strategy')) {
      this.setStrategy(data['strategy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'min')) {
      this.setMin(data['min']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'max')) {
      this.setMax(data['max']);
    }
  }


  get strategy(): string {
    return this._fields['strategy'];
  }
  
  getStrategy(): string {
      return this._fields['strategy'];
  }

  setStrategy(value: string) {
    this._fields['strategy'] = value;

    return this;
  }

  get min(): number | null {
    return this._fields['min'] ?? null;
  }
  
  getMin(): number | null {
      return this._fields['min'] ?? null;
  }

  setMin(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['min'] = value;

    return this;
  }

  get max(): number | null {
    return this._fields['max'] ?? null;
  }
  
  getMax(): number | null {
      return this._fields['max'] ?? null;
  }

  setMax(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['max'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'strategy')) {
      data['strategy'] = this['strategy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'min')) {
      data['min'] = this['min'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'max')) {
      data['max'] = this['max'];
    }

    return data;
  }
}
