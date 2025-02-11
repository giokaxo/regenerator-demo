import TimelineExtraData from '../models/timeline-extra-data';
import ResourceLink from '../models/resource-link';

export default class OrderTimeline {
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

  TYPE_INVOICE_VOIDED = 'invoice-voided';

  TYPE_ORDER_ACTIVATED = 'order-activated';

  TYPE_ORDER_AUTOPAY_CHANGED = 'order-autopay-changed';

  TYPE_ORDER_BILLING_ADDRESS_CHANGED = 'order-billing-address-changed';

  TYPE_ORDER_BILLING_ANCHOR_CHANGED = 'order-billing-anchor-changed';

  TYPE_ORDER_CANCELED = 'order-canceled';

  TYPE_ORDER_CHURNED = 'order-churned';

  TYPE_ORDER_COMPLETED = 'order-completed';

  TYPE_ORDER_CUSTOM_FIELDS_CHANGED = 'order-custom-fields-changed';

  TYPE_ORDER_DELIVERY_ADDRESS_CHANGED = 'order-delivery-address-changed';

  TYPE_ORDER_DOWNGRADED = 'order-downgraded';

  TYPE_ORDER_ITEMS_CHANGED = 'order-items-changed';

  TYPE_ORDER_PAID_EARLY = 'order-paid-early';

  TYPE_ORDER_QUANTITY_CHANGED = 'order-quantity-changed';

  TYPE_ORDER_REACTIVATED = 'order-reactivated';

  TYPE_ORDER_RECURRING_INTERVAL_CHANGED = 'order-recurring-interval-changed';

  TYPE_ORDER_RENEWAL_TIME_CHANGED = 'order-renewal-time-changed';

  TYPE_ORDER_RENEWED = 'order-renewed';

  TYPE_ORDER_RISK_METADATA_CHANGED = 'order-risk-metadata-changed';

  TYPE_ORDER_TRIAL_ENDED = 'order-trial-ended';

  TYPE_ORDER_UPGRADED = 'order-upgraded';

  TYPE_ORDER_VOIDED = 'order-voided';

  TYPE_ORDER_ABANDONED = 'order-abandoned';

  TYPE_QUOTE_ACCEPTED = 'quote-accepted';

  TYPE_SUBSCRIPTION_PAUSED = 'subscription-paused';

  TYPE_SUBSCRIPTION_PAUSE_CREATED = 'subscription-pause-created';

  TYPE_SUBSCRIPTION_PAUSE_MODIFIED = 'subscription-pause-modified';

  TYPE_SUBSCRIPTION_PAUSE_REVOKED = 'subscription-pause-revoked';

  TYPE_SUBSCRIPTION_RESUMED = 'subscription-resumed';

  TYPE_SUBSCRIPTION_TRIAL_END_CHANGED = 'subscription-trial-end-changed';

  TYPE_TIMELINE_COMMENT_CREATED = 'timeline-comment-created';

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
