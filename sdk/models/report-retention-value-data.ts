import ReportRetentionValueDataPeriods from '../models/report-retention-value-data-periods';

export default class ReportRetentionValueData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'aggregationValue')) {
      this.setAggregationValue(data['aggregationValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customersCount')) {
      this.setCustomersCount(data['customersCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'periods')) {
      this.setPeriods(data['periods']);
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

  get customersCount(): number | null {
    return this._fields['customersCount'] ?? null;
  }
  
  getCustomersCount(): number | null {
      return this._fields['customersCount'] ?? null;
  }

  setCustomersCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['customersCount'] = value;

    return this;
  }

  get periods(): Array<any> | null {
    return this._fields['periods'] ?? null;
  }
  
  getPeriods(): Array<any> | null {
      return this._fields['periods'] ?? null;
  }

  setPeriods(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ReportRetentionValueDataPeriods ? value : new ReportRetentionValueDataPeriods(value),
    ) : null;

    this._fields['periods'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aggregationValue')) {
      data['aggregationValue'] = this['aggregationValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customersCount')) {
      data['customersCount'] = this['customersCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'periods')) {
      data['periods'] = this['periods'] !== null
          ? this._fields['periods'].map((reportRetentionValueDataPeriods: ReportRetentionValueDataPeriods) => reportRetentionValueDataPeriods.jsonSerialize())
          : null;
    }

    return data;
  }
}
