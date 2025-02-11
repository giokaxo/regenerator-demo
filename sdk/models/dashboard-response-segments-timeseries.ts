
export default class DashboardResponseSegmentsTimeseries {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'date')) {
      this.setDate(data['date']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'value')) {
      this.setValue(data['value']);
    }
  }


  get date(): string | null {
    return this._fields['date'] ?? null;
  }
  
  getDate(): string | null {
      return this._fields['date'] ?? null;
  }

  setDate(value: null | string) {
    this._fields['date'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'date')) {
      data['date'] = this['date'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'value')) {
      data['value'] = this['value'];
    }

    return data;
  }
}
