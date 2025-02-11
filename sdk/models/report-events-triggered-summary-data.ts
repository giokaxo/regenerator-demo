
export default class ReportEventsTriggeredSummaryData {
  EVENT_NAME_DISPUTE_CREATED = 'dispute-created';

  EVENT_NAME_GATEWAY_ACCOUNT_REQUESTED = 'gateway-account-requested';

  EVENT_NAME_TRANSACTION_PROCESSED = 'transaction-processed';

  EVENT_NAME_SUBSCRIPTION_CANCELED = 'subscription-canceled';

  EVENT_NAME_SUBSCRIPTION_RENEWED = 'subscription-renewed';

  EVENT_NAME_PAYMENT_CARD_EXPIRED = 'payment-card-expired';

  EVENT_NAME_PAYMENT_DECLINED = 'payment-declined';

  EVENT_NAME_TRANSACTION_PROCESS_REQUESTED = 'transaction-process-requested';

  EVENT_NAME_RISK_SCORE_CHANGED = 'risk-score-changed';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'eventName')) {
      this.setEventName(data['eventName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'count')) {
      this.setCount(data['count']);
    }
  }


  get eventName(): string | null {
    return this._fields['eventName'] ?? null;
  }
  
  getEventName(): string | null {
      return this._fields['eventName'] ?? null;
  }

  setEventName(value: null | string) {
    this._fields['eventName'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'eventName')) {
      data['eventName'] = this['eventName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'count')) {
      data['count'] = this['count'];
    }

    return data;
  }
}
