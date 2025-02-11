import TimeSeriesTransactionDataSubaggregates from '../models/time-series-transaction-data-subaggregates';

export default class TimeSeriesTransactionData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'date')) {
      this.setDate(data['date']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'total')) {
      this.setTotal(data['total']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subaggregates')) {
      this.setSubaggregates(data['subaggregates']);
    }
  }


  get date(): string | null {
    return this._fields['date'] ?? null;
  }
  
  getDate(): string | null {
      return this._fields['date'] ?? null;
  }

  setDate(value: null | string) {
    this._fields['date'] = value;

    return this;
  }

  get total(): number | null {
    return this._fields['total'] ?? null;
  }
  
  getTotal(): number | null {
      return this._fields['total'] ?? null;
  }

  setTotal(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['total'] = value;

    return this;
  }

  get subaggregates(): TimeSeriesTransactionDataSubaggregates | null {
    return this._fields['subaggregates'] ?? null;
  }
  
  getSubaggregates(): TimeSeriesTransactionDataSubaggregates | null {
      return this._fields['subaggregates'] ?? null;
  }

  setSubaggregates(value: null | TimeSeriesTransactionDataSubaggregates | any) {
    if (value !== null && !(value instanceof TimeSeriesTransactionDataSubaggregates)) {
      value = new TimeSeriesTransactionDataSubaggregates(value);
    }

    this._fields['subaggregates'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'date')) {
      data['date'] = this['date'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'total')) {
      data['total'] = this['total'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subaggregates')) {
      data['subaggregates'] = this['subaggregates']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
