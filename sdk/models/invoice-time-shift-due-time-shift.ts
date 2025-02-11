
export default class InvoiceTimeShiftDueTimeShift {
  UNIT_SECOND = 'second';

  UNIT_MINUTE = 'minute';

  UNIT_HOUR = 'hour';

  UNIT_DAY = 'day';

  UNIT_MONTH = 'month';

  UNIT_YEAR = 'year';

  UNIT_SECONDS = 'seconds';

  UNIT_MINUTES = 'minutes';

  UNIT_HOURS = 'hours';

  UNIT_DAYS = 'days';

  UNIT_MONTHS = 'months';

  UNIT_YEARS = 'years';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'duration')) {
      this.setDuration(data['duration']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unit')) {
      this.setUnit(data['unit']);
    }
  }


  get duration(): number {
    return this._fields['duration'];
  }
  
  getDuration(): number {
      return this._fields['duration'];
  }

  setDuration(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['duration'] = value;

    return this;
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'duration')) {
      data['duration'] = this['duration'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unit')) {
      data['unit'] = this['unit'];
    }

    return data;
  }
}
