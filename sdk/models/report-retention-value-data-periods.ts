
export default class ReportRetentionValueDataPeriods {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'period')) {
      this.setPeriod(data['period']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'retentionAverage')) {
      this.setRetentionAverage(data['retentionAverage']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transactionsCount')) {
      this.setTransactionsCount(data['transactionsCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transactionsValue')) {
      this.setTransactionsValue(data['transactionsValue']);
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

  get retentionAverage(): number | null {
    return this._fields['retentionAverage'] ?? null;
  }
  
  getRetentionAverage(): number | null {
      return this._fields['retentionAverage'] ?? null;
  }

  setRetentionAverage(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['retentionAverage'] = value;

    return this;
  }

  get transactionsCount(): number | null {
    return this._fields['transactionsCount'] ?? null;
  }
  
  getTransactionsCount(): number | null {
      return this._fields['transactionsCount'] ?? null;
  }

  setTransactionsCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['transactionsCount'] = value;

    return this;
  }

  get transactionsValue(): number | null {
    return this._fields['transactionsValue'] ?? null;
  }
  
  getTransactionsValue(): number | null {
      return this._fields['transactionsValue'] ?? null;
  }

  setTransactionsValue(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['transactionsValue'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'period')) {
      data['period'] = this['period'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'retentionAverage')) {
      data['retentionAverage'] = this['retentionAverage'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionsCount')) {
      data['transactionsCount'] = this['transactionsCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionsValue')) {
      data['transactionsValue'] = this['transactionsValue'];
    }

    return data;
  }
}
