
export default class ReportDisputeDelaysData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'aggregationFieldValue')) {
      this.setAggregationFieldValue(data['aggregationFieldValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '25th')) {
      this.set25th(data['25th']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '50th')) {
      this.set50th(data['50th']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '75th')) {
      this.set75th(data['75th']);
    }
  }


  get aggregationFieldValue(): string | null {
    return this._fields['aggregationFieldValue'] ?? null;
  }
  
  getAggregationFieldValue(): string | null {
      return this._fields['aggregationFieldValue'] ?? null;
  }

  setAggregationFieldValue(value: null | string) {
    this._fields['aggregationFieldValue'] = value;

    return this;
  }

  get _25th(): number | null {
    return this._fields['25th'] ?? null;
  }
  
  get25th(): number | null {
      return this._fields['25th'] ?? null;
  }

  set25th(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['25th'] = value;

    return this;
  }

  get _50th(): number | null {
    return this._fields['50th'] ?? null;
  }
  
  get50th(): number | null {
      return this._fields['50th'] ?? null;
  }

  set50th(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['50th'] = value;

    return this;
  }

  get _75th(): number | null {
    return this._fields['75th'] ?? null;
  }
  
  get75th(): number | null {
      return this._fields['75th'] ?? null;
  }

  set75th(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['75th'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aggregationFieldValue')) {
      data['aggregationFieldValue'] = this['aggregationFieldValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, '_25th')) {
      data['25th'] = this['_25th'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, '_50th')) {
      data['50th'] = this['_50th'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, '_75th')) {
      data['75th'] = this['_75th'];
    }

    return data;
  }
}
