
export default class PlanTrialPeriod {
  UNIT_DAY = 'day';

  UNIT_WEEK = 'week';

  UNIT_MONTH = 'month';

  UNIT_YEAR = 'year';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'unit')) {
      this.setUnit(data['unit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'length')) {
      this.setLength(data['length']);
    }
  }


  get unit(): string {
    return this._fields['unit'];
  }
  
  getUnit(): string {
      return this._fields['unit'];
  }

  setUnit(value: string) {
    this._fields['unit'] = value;

    return this;
  }

  get length(): number {
    return this._fields['length'];
  }
  
  getLength(): number {
      return this._fields['length'];
  }

  setLength(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['length'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unit')) {
      data['unit'] = this['unit'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'length')) {
      data['length'] = this['length'];
    }

    return data;
  }
}
