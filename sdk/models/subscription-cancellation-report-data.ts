
export default class SubscriptionCancellationReportData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'aggregationValue')) {
      this.setAggregationValue(data['aggregationValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'count')) {
      this.setCount(data['count']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'averageLength')) {
      this.setAverageLength(data['averageLength']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'medianLength')) {
      this.setMedianLength(data['medianLength']);
    }
  }


  get aggregationValue(): string | null {
    return this._fields['aggregationValue'] ?? null;
  }
  
  getAggregationValue(): string | null {
      return this._fields['aggregationValue'] ?? null;
  }

  setAggregationValue(value: null | string) {
    this._fields['aggregationValue'] = value;

    return this;
  }

  get count(): number | null {
    return this._fields['count'] ?? null;
  }
  
  getCount(): number | null {
      return this._fields['count'] ?? null;
  }

  setCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['count'] = value;

    return this;
  }

  get averageLength(): number | null {
    return this._fields['averageLength'] ?? null;
  }
  
  getAverageLength(): number | null {
      return this._fields['averageLength'] ?? null;
  }

  setAverageLength(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['averageLength'] = value;

    return this;
  }

  get medianLength(): number | null {
    return this._fields['medianLength'] ?? null;
  }
  
  getMedianLength(): number | null {
      return this._fields['medianLength'] ?? null;
  }

  setMedianLength(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['medianLength'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aggregationValue')) {
      data['aggregationValue'] = this['aggregationValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'count')) {
      data['count'] = this['count'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'averageLength')) {
      data['averageLength'] = this['averageLength'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'medianLength')) {
      data['medianLength'] = this['medianLength'];
    }

    return data;
  }
}
