import ReportRetentionPercentageDataPeriods from '../models/report-retention-percentage-data-periods';

export default class ReportRetentionPercentageData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'aggregationValue')) {
      this.setAggregationValue(data['aggregationValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subscriptionsCount')) {
      this.setSubscriptionsCount(data['subscriptionsCount']);
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

  get subscriptionsCount(): number | null {
    return this._fields['subscriptionsCount'] ?? null;
  }
  
  getSubscriptionsCount(): number | null {
      return this._fields['subscriptionsCount'] ?? null;
  }

  setSubscriptionsCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['subscriptionsCount'] = value;

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
      (value) => value instanceof ReportRetentionPercentageDataPeriods ? value : new ReportRetentionPercentageDataPeriods(value),
    ) : null;

    this._fields['periods'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aggregationValue')) {
      data['aggregationValue'] = this['aggregationValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subscriptionsCount')) {
      data['subscriptionsCount'] = this['subscriptionsCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'periods')) {
      data['periods'] = this['periods'] !== null
          ? this._fields['periods'].map((reportRetentionPercentageDataPeriods: ReportRetentionPercentageDataPeriods) => reportRetentionPercentageDataPeriods.jsonSerialize())
          : null;
    }

    return data;
  }
}
