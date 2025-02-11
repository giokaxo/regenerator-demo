import TimelineExtraData from '../models/timeline-extra-data';
import ResourceLink from '../models/resource-link';

export default class InvoiceTimeline {
  TYPE_COUPON_APPLIED = 'coupon-applied';

  TYPE_EMAIL_MESSAGE_SENT = 'email-message-sent';

  TYPE_INVOICE_ABANDONED = 'invoice-abandoned';

  TYPE_INVOICE_DISPUTED = 'invoice-disputed';

  TYPE_INVOICE_ISSUED = 'invoice-issued';

  TYPE_INVOICE_PAID = 'invoice-paid';

  TYPE_INVOICE_PARTIALLY_PAID = 'invoice-partially-paid';

  TYPE_INVOICE_PARTIALLY_REFUNDED = 'invoice-partially-refunded';

  TYPE_INVOICE_PAST_DUE = 'invoice-past-due';

  TYPE_INVOICE_REFUNDED = 'invoice-refunded';

  TYPE_INVOICE_REISSUED = 'invoice-reissued';

  TYPE_INVOICE_RENEWAL_PAYMENT_DECLINED = 'invoice-renewal-payment-declined';

  TYPE_INVOICE_REVENUE_RECOGNIZED = 'invoice-revenue-recognized';

  TYPE_INVOICE_TAX_CALCULATION_FAILED = 'invoice-tax-calculation-failed';

  TYPE_INVOICE_VOIDED = 'invoice-voided';

  TYPE_QUICKBOOKS_CREDIT_MEMO_CREATED = 'quickbooks-credit-memo-created';

  TYPE_QUICKBOOKS_CREDIT_MEMO_VOIDED = 'quickbooks-credit-memo-voided';

  TYPE_QUICKBOOKS_INVOICE_CREATED = 'quickbooks-invoice-created';

  TYPE_QUICKBOOKS_INVOICE_TASK_FAILED = 'quickbooks-invoice-task-failed';

  TYPE_QUICKBOOKS_INVOICE_UPDATED = 'quickbooks-invoice-updated';

  TYPE_QUICKBOOKS_INVOICE_VOIDED = 'quickbooks-invoice-voided';

  TYPE_QUICKBOOKS_REVENUE_RECOGNITION_CREATED = 'quickbooks-revenue-recognition-created';

  TYPE_TIMELINE_COMMENT_CREATED = 'timeline-comment-created';

  TYPE_TRANSACTION_ABANDONED = 'transaction-abandoned';

  TYPE_TRANSACTION_APPROVED = 'transaction-approved';

  TYPE_TRANSACTION_CANCELED = 'transaction-canceled';

  TYPE_TRANSACTION_DECLINED = 'transaction-declined';

  TYPE_TRANSACTION_INITIATED = 'transaction-initiated';

  TYPE_TRANSACTION_REFUNDED = 'transaction-refunded';

  TYPE_TRANSACTION_VOIDED = 'transaction-voided';

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
