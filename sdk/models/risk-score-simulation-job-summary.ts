import Money from '../models/money';

export default class RiskScoreSimulationJobSummary {
  METRIC_PROCESSED_TRANSACTIONS = 'processedTransactions';

  METRIC_AFFECTED_TRANSACTIONS = 'affectedTransactions';

  METRIC_DECLINED_TO_CANCELED_TRANSACTIONS = 'declinedToCanceledTransactions';

  METRIC_CANCELED_TO_APPROVED_TRANSACTIONS = 'canceledToApprovedTransactions';

  METRIC_APPROVED_TO_CANCELED_TRANSACTIONS = 'approvedToCanceledTransactions';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'metric')) {
      this.setMetric(data['metric']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'count')) {
      this.setCount(data['count']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
  }


  get metric(): string | null {
    return this._fields['metric'] ?? null;
  }
  
  getMetric(): string | null {
      return this._fields['metric'] ?? null;
  }

  setMetric(value: null | string) {
    this._fields['metric'] = value;

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

  get amount(): Money | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): Money | null {
      return this._fields['amount'] ?? null;
  }

  setAmount(value: null | Money | any) {
    if (value !== null && !(value instanceof Money)) {
      value = new Money(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'metric')) {
      data['metric'] = this['metric'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'count')) {
      data['count'] = this['count'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
