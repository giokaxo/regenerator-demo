
export default class TimeSeriesTransactionDataSubaggregates {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'subaggregate')) {
      this.setSubaggregate(data['subaggregate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'value')) {
      this.setValue(data['value']);
    }
  }


  get subaggregate(): string | null {
    return this._fields['subaggregate'] ?? null;
  }
  
  getSubaggregate(): string | null {
      return this._fields['subaggregate'] ?? null;
  }

  setSubaggregate(value: null | string) {
    this._fields['subaggregate'] = value;

    return this;
  }

  get value(): number | null {
    return this._fields['value'] ?? null;
  }
  
  getValue(): number | null {
      return this._fields['value'] ?? null;
  }

  setValue(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['value'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subaggregate')) {
      data['subaggregate'] = this['subaggregate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'value')) {
      data['value'] = this['value'];
    }

    return data;
  }
}
