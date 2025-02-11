
export default class ReportRetentionPercentageDataPeriods {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'period')) {
      this.setPeriod(data['period']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'retentionRatio')) {
      this.setRetentionRatio(data['retentionRatio']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'canceledSubscriptionsCount')) {
      this.setCanceledSubscriptionsCount(data['canceledSubscriptionsCount']);
    }
  }


  get period(): number | null {
    return this._fields['period'] ?? null;
  }
  
  getPeriod(): number | null {
      return this._fields['period'] ?? null;
  }

  setPeriod(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['period'] = value;

    return this;
  }

  get retentionRatio(): number | null {
    return this._fields['retentionRatio'] ?? null;
  }
  
  getRetentionRatio(): number | null {
      return this._fields['retentionRatio'] ?? null;
  }

  setRetentionRatio(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['retentionRatio'] = value;

    return this;
  }

  get canceledSubscriptionsCount(): number | null {
    return this._fields['canceledSubscriptionsCount'] ?? null;
  }
  
  getCanceledSubscriptionsCount(): number | null {
      return this._fields['canceledSubscriptionsCount'] ?? null;
  }

  setCanceledSubscriptionsCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['canceledSubscriptionsCount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'period')) {
      data['period'] = this['period'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'retentionRatio')) {
      data['retentionRatio'] = this['retentionRatio'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'canceledSubscriptionsCount')) {
      data['canceledSubscriptionsCount'] = this['canceledSubscriptionsCount'];
    }

    return data;
  }
}
