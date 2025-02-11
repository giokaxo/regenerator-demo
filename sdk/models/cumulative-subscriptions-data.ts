
export default class CumulativeSubscriptionsData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'aggregationValue')) {
      this.setAggregationValue(data['aggregationValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'newCount')) {
      this.setNewCount(data['newCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'canceledCount')) {
      this.setCanceledCount(data['canceledCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cumulativeCount')) {
      this.setCumulativeCount(data['cumulativeCount']);
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

  get newCount(): number | null {
    return this._fields['newCount'] ?? null;
  }
  
  getNewCount(): number | null {
      return this._fields['newCount'] ?? null;
  }

  setNewCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['newCount'] = value;

    return this;
  }

  get canceledCount(): number | null {
    return this._fields['canceledCount'] ?? null;
  }
  
  getCanceledCount(): number | null {
      return this._fields['canceledCount'] ?? null;
  }

  setCanceledCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['canceledCount'] = value;

    return this;
  }

  get cumulativeCount(): number | null {
    return this._fields['cumulativeCount'] ?? null;
  }
  
  getCumulativeCount(): number | null {
      return this._fields['cumulativeCount'] ?? null;
  }

  setCumulativeCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['cumulativeCount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aggregationValue')) {
      data['aggregationValue'] = this['aggregationValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'newCount')) {
      data['newCount'] = this['newCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'canceledCount')) {
      data['canceledCount'] = this['canceledCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cumulativeCount')) {
      data['cumulativeCount'] = this['cumulativeCount'];
    }

    return data;
  }
}
