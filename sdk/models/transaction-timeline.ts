import TimelineExtraData from '../models/timeline-extra-data';
import ResourceLink from '../models/resource-link';

export default class TransactionTimeline {
  TYPE_AMOUNT_ADJUSTED = 'amount-adjusted';

  TYPE_BLOCKLIST_MATCHED = 'blocklist-matched';

  TYPE_BUMP_OFFER_ACCEPTED = 'bump-offer-accepted';

  TYPE_BUMP_OFFER_PRESENTED = 'bump-offer-presented';

  TYPE_BUMP_OFFER_REJECTED = 'bump-offer-rejected';

  TYPE_CUSTOMER_REDIRECTED_OFFSITE = 'customer-redirected-offsite';

  TYPE_CUSTOMER_RETURNED = 'customer-returned';

  TYPE_DCC_OFFER_ACCEPTED = 'dcc-offer-accepted';

  TYPE_DCC_OFFER_FORCED = 'dcc-offer-forced';

  TYPE_DCC_OFFER_PRESENTED = 'dcc-offer-presented';

  TYPE_DCC_OFFER_REJECTED = 'dcc-offer-rejected';

  TYPE_DISPUTE_CHANGED = 'dispute-changed';

  TYPE_DISPUTE_CREATED = 'dispute-created';

  TYPE_DISPUTE_FORFEITED = 'dispute-forfeited';

  TYPE_DISPUTE_LOST = 'dispute-lost';

  TYPE_DISPUTE_RESPONDED = 'dispute-responded';

  TYPE_DISPUTE_WON = 'dispute-won';

  TYPE_GATEWAY_CONNECTION_FAILED = 'gateway-connection-failed';

  TYPE_GATEWAY_CONNECTION_TIMED_OUT = 'gateway-connection-timed-out';

  TYPE_GATEWAY_RESPONSE_RECEIVED = 'gateway-response-received';

  TYPE_OFFSITE_TRANSACTION_COMPLETED = 'offsite-transaction-completed';

  TYPE_QUICKBOOKS_PAYMENT_CREATED = 'quickbooks-payment-created';

  TYPE_QUICKBOOKS_REFUND_RECEIPT_CREATED = 'quickbooks-refund-receipt-created';

  TYPE_QUICKBOOKS_TRANSACTION_TASK_FAILED = 'quickbooks-transaction-task-failed';

  TYPE_RISK_SCORE_CHANGED = 'risk-score-changed';

  TYPE_TIMELINE_COMMENT_CREATED = 'timeline-comment-created';

  TYPE_TRANSACTION_ABANDONED = 'transaction-abandoned';

  TYPE_TRANSACTION_AMOUNT_DISCREPANCY_FOUND = 'transaction-amount-discrepancy-found';

  TYPE_TRANSACTION_APPROVED = 'transaction-approved';

  TYPE_TRANSACTION_CANCELED = 'transaction-canceled';

  TYPE_TRANSACTION_CAPTURE_DELAYED = 'transaction-capture-delayed';

  TYPE_TRANSACTION_CAPTURED = 'transaction-captured';

  TYPE_TRANSACTION_DECLINED = 'transaction-declined';

  TYPE_TRANSACTION_DISCREPANCY_FOUND = 'transaction-discrepancy-found';

  TYPE_TRANSACTION_DISPUTED = 'transaction-disputed';

  TYPE_TRANSACTION_INITIATED = 'transaction-initiated';

  TYPE_TRANSACTION_PAYMENT_METHOD_CHANGED = 'transaction-payment-method-changed';

  TYPE_TRANSACTION_PROCESS_REQUESTED = 'transaction-process-requested';

  TYPE_TRANSACTION_PROCESSED = 'transaction-processed';

  TYPE_TRANSACTION_QUERIED = 'transaction-queried';

  TYPE_TRANSACTION_RECONCILED = 'transaction-reconciled';

  TYPE_TRANSACTION_REFUNDED = 'transaction-refunded';

  TYPE_TRANSACTION_RETRIED = 'transaction-retried';

  TYPE_TRANSACTION_RULES_PROCESSED = 'transaction-rules-processed';

  TYPE_TRANSACTION_SCHEDULED_TIME_CHANGED = 'transaction-scheduled-time-changed';

  TYPE_TRANSACTION_TIMEOUT_RESOLVED = 'transaction-timeout-resolved';

  TYPE_TRANSACTION_UPDATED = 'transaction-updated';

  TYPE_TRANSACTION_VOIDED = 'transaction-voided';

  TYPE_TRANSACTION_WAITING_GATEWAY = 'transaction-waiting-gateway';

  TYPE_TRANSACTION_WAITING_GATEWAY_COMPLETED = 'transaction-waiting-gateway-completed';

  TRIGGERED_BY_REBILLY = 'rebilly';

  TRIGGERED_BY_APP = 'app';

  TRIGGERED_BY_DIRECT_API = 'direct-api';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'triggeredBy')) {
      this.setTriggeredBy(data['triggeredBy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'message')) {
      this.setMessage(data['message']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'extraData')) {
      this.setExtraData(data['extraData']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'occurredTime')) {
      this.setOccurredTime(data['occurredTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  private setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  get triggeredBy(): string | null {
    return this._fields['triggeredBy'] ?? null;
  }
  
  getTriggeredBy(): string | null {
      return this._fields['triggeredBy'] ?? null;
  }

  private setTriggeredBy(value: null | string) {
    this._fields['triggeredBy'] = value;

    return this;
  }

  get message(): string | null {
    return this._fields['message'] ?? null;
  }
  
  getMessage(): string | null {
      return this._fields['message'] ?? null;
  }

  setMessage(value: null | string) {
    this._fields['message'] = value;

    return this;
  }

  get extraData(): TimelineExtraData | null {
    return this._fields['extraData'] ?? null;
  }
  
  getExtraData(): TimelineExtraData | null {
      return this._fields['extraData'] ?? null;
  }

  setExtraData(value: null | TimelineExtraData | any) {
    if (value !== null && !(value instanceof TimelineExtraData)) {
      value = new TimelineExtraData(value);
    }

    this._fields['extraData'] = value;

    return this;
  }

  get occurredTime(): Date | null {
    return this._fields['occurredTime'] ?? null;
  }
  
  getOccurredTime(): Date | null {
      return this._fields['occurredTime'] ?? null;
  }

  private setOccurredTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['occurredTime'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'triggeredBy')) {
      data['triggeredBy'] = this['triggeredBy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'message')) {
      data['message'] = this['message'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'extraData')) {
      data['extraData'] = this['extraData']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'occurredTime')) {
      data['occurredTime'] = this['occurredTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
