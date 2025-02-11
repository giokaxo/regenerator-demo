
export default class ReportDisputesData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'aggregationValue')) {
      this.setAggregationValue(data['aggregationValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'countVisa')) {
      this.setCountVisa(data['countVisa']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ratioCountVisa')) {
      this.setRatioCountVisa(data['ratioCountVisa']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ratioAmountVisa')) {
      this.setRatioAmountVisa(data['ratioAmountVisa']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'countMastercard')) {
      this.setCountMastercard(data['countMastercard']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ratioCountMastercard')) {
      this.setRatioCountMastercard(data['ratioCountMastercard']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ratioAmountMastercard')) {
      this.setRatioAmountMastercard(data['ratioAmountMastercard']);
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

  get countVisa(): number | null {
    return this._fields['countVisa'] ?? null;
  }
  
  getCountVisa(): number | null {
      return this._fields['countVisa'] ?? null;
  }

  setCountVisa(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['countVisa'] = value;

    return this;
  }

  get ratioCountVisa(): number | null {
    return this._fields['ratioCountVisa'] ?? null;
  }
  
  getRatioCountVisa(): number | null {
      return this._fields['ratioCountVisa'] ?? null;
  }

  setRatioCountVisa(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['ratioCountVisa'] = value;

    return this;
  }

  get ratioAmountVisa(): number | null {
    return this._fields['ratioAmountVisa'] ?? null;
  }
  
  getRatioAmountVisa(): number | null {
      return this._fields['ratioAmountVisa'] ?? null;
  }

  setRatioAmountVisa(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['ratioAmountVisa'] = value;

    return this;
  }

  get countMastercard(): number | null {
    return this._fields['countMastercard'] ?? null;
  }
  
  getCountMastercard(): number | null {
      return this._fields['countMastercard'] ?? null;
  }

  setCountMastercard(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['countMastercard'] = value;

    return this;
  }

  get ratioCountMastercard(): number | null {
    return this._fields['ratioCountMastercard'] ?? null;
  }
  
  getRatioCountMastercard(): number | null {
      return this._fields['ratioCountMastercard'] ?? null;
  }

  setRatioCountMastercard(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['ratioCountMastercard'] = value;

    return this;
  }

  get ratioAmountMastercard(): number | null {
    return this._fields['ratioAmountMastercard'] ?? null;
  }
  
  getRatioAmountMastercard(): number | null {
      return this._fields['ratioAmountMastercard'] ?? null;
  }

  setRatioAmountMastercard(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['ratioAmountMastercard'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aggregationValue')) {
      data['aggregationValue'] = this['aggregationValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'countVisa')) {
      data['countVisa'] = this['countVisa'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ratioCountVisa')) {
      data['ratioCountVisa'] = this['ratioCountVisa'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ratioAmountVisa')) {
      data['ratioAmountVisa'] = this['ratioAmountVisa'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'countMastercard')) {
      data['countMastercard'] = this['countMastercard'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ratioCountMastercard')) {
      data['ratioCountMastercard'] = this['ratioCountMastercard'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ratioAmountMastercard')) {
      data['ratioAmountMastercard'] = this['ratioAmountMastercard'];
    }

    return data;
  }
}
