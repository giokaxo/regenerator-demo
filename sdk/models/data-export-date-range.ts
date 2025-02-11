
export default class DataExportDateRange {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'start')) {
      this.setStart(data['start']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'end')) {
      this.setEnd(data['end']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'field')) {
      this.setField(data['field']);
    }
  }


  get start(): string {
    return this._fields['start'];
  }
  
  getStart(): string {
      return this._fields['start'];
  }

  setStart(value: string) {
    this._fields['start'] = value;

    return this;
  }

  get end(): string {
    return this._fields['end'];
  }
  
  getEnd(): string {
      return this._fields['end'];
  }

  setEnd(value: string) {
    this._fields['end'] = value;

    return this;
  }

  get field(): string | null {
    return this._fields['field'] ?? null;
  }
  
  getField(): string | null {
      return this._fields['field'] ?? null;
  }

  setField(value: null | string) {
    this._fields['field'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'start')) {
      data['start'] = this['start'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'end')) {
      data['end'] = this['end'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'field')) {
      data['field'] = this['field'];
    }

    return data;
  }
}
