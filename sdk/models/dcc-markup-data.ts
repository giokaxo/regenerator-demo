
export default class DccMarkupData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'aggregationValue')) {
      this.setAggregationValue(data['aggregationValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'selectedCount')) {
      this.setSelectedCount(data['selectedCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'selectedSum')) {
      this.setSelectedSum(data['selectedSum']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rejectedCount')) {
      this.setRejectedCount(data['rejectedCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rejectedSum')) {
      this.setRejectedSum(data['rejectedSum']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unknownCount')) {
      this.setUnknownCount(data['unknownCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unknownSum')) {
      this.setUnknownSum(data['unknownSum']);
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

  get selectedCount(): number | null {
    return this._fields['selectedCount'] ?? null;
  }
  
  getSelectedCount(): number | null {
      return this._fields['selectedCount'] ?? null;
  }

  setSelectedCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['selectedCount'] = value;

    return this;
  }

  get selectedSum(): number | null {
    return this._fields['selectedSum'] ?? null;
  }
  
  getSelectedSum(): number | null {
      return this._fields['selectedSum'] ?? null;
  }

  setSelectedSum(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['selectedSum'] = value;

    return this;
  }

  get rejectedCount(): number | null {
    return this._fields['rejectedCount'] ?? null;
  }
  
  getRejectedCount(): number | null {
      return this._fields['rejectedCount'] ?? null;
  }

  setRejectedCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['rejectedCount'] = value;

    return this;
  }

  get rejectedSum(): number | null {
    return this._fields['rejectedSum'] ?? null;
  }
  
  getRejectedSum(): number | null {
      return this._fields['rejectedSum'] ?? null;
  }

  setRejectedSum(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['rejectedSum'] = value;

    return this;
  }

  get unknownCount(): number | null {
    return this._fields['unknownCount'] ?? null;
  }
  
  getUnknownCount(): number | null {
      return this._fields['unknownCount'] ?? null;
  }

  setUnknownCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['unknownCount'] = value;

    return this;
  }

  get unknownSum(): number | null {
    return this._fields['unknownSum'] ?? null;
  }
  
  getUnknownSum(): number | null {
      return this._fields['unknownSum'] ?? null;
  }

  setUnknownSum(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['unknownSum'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aggregationValue')) {
      data['aggregationValue'] = this['aggregationValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'selectedCount')) {
      data['selectedCount'] = this['selectedCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'selectedSum')) {
      data['selectedSum'] = this['selectedSum'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rejectedCount')) {
      data['rejectedCount'] = this['rejectedCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rejectedSum')) {
      data['rejectedSum'] = this['rejectedSum'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unknownCount')) {
      data['unknownCount'] = this['unknownCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unknownSum')) {
      data['unknownSum'] = this['unknownSum'];
    }

    return data;
  }
}
