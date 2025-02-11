import TimelineExtraData from '../models/timeline-extra-data';
import ResourceLink from '../models/resource-link';

export default class CustomerTimeline {
  TYPE_ACCOUNT_PASSWORD_RESET_REQUESTED = 'account-password-reset-requested';

  TYPE_ACCOUNT_VERIFICATION_REQUESTED = 'account-verification-requested';

  TYPE_AML_LIST_WAS_POSSIBLY_MATCHED = 'aml-list-was-possibly-matched';

  TYPE_DEPOSIT_REQUEST_COMPLETED = 'deposit-request-completed';

  TYPE_DEPOSIT_REQUEST_CREATED = 'deposit-request-created';

  TYPE_DEPOSIT_REQUEST_EXPIRED = 'deposit-request-expired';

  TYPE_DEPOSIT_REQUEST_STARTED = 'deposit-request-started';

  TYPE_COUPON_APPLIED = 'coupon-applied';

  TYPE_COUPON_REDEEMED = 'coupon-redeemed';

  TYPE_COUPON_REDEMPTION_CANCELED = 'coupon-redemption-canceled';

  TYPE_CUSTOM_EVENT = 'custom-event';

  TYPE_CUSTOM_EVENT_PROCESSED = 'custom-event-processed';

  TYPE_CUSTOM_FIELDS_CHANGED = 'custom-fields-changed';

  TYPE_CUSTOMER_BANK_ACCOUNT_BLOCKED = 'customer-bank-account-blocked';

  TYPE_CUSTOMER_BLOCKED = 'customer-blocked';

  TYPE_CUSTOMER_COMMENT_CREATED = 'customer-comment-created';

  TYPE_CUSTOMER_CREATED = 'customer-created';

  TYPE_CUSTOMER_MERGED = 'customer-merged';

  TYPE_CUSTOMER_PAYMENT_CARD_BLOCKED = 'customer-payment-card-blocked';

  TYPE_CUSTOMER_REQUESTED_OTP = 'customer-requested-otp';

  TYPE_CUSTOMER_TAGGED = 'customer-tagged';

  TYPE_CUSTOMER_UNTAGGED = 'customer-untagged';

  TYPE_DEFAULT_PAYMENT_INSTRUMENT_CHANGED = 'default-payment-instrument-changed';

  TYPE_EMAIL_MESSAGE_SENT = 'email-message-sent';

  TYPE_EXPERIAN_CHECK_PERFORMED = 'experian-check-performed';

  TYPE_INVOICE_ABANDONED = 'invoice-abandoned';

  TYPE_INVOICE_CREATED = 'invoice-created';

  TYPE_INVOICE_DISPUTED = 'invoice-disputed';

  TYPE_INVOICE_ISSUED = 'invoice-issued';

  TYPE_INVOICE_PAID = 'invoice-paid';

  TYPE_INVOICE_PARTIALLY_PAID = 'invoice-partially-paid';

  TYPE_INVOICE_PARTIALLY_REFUNDED = 'invoice-partially-refunded';

  TYPE_INVOICE_PAST_DUE = 'invoice-past-due';

  TYPE_INVOICE_REFUNDED = 'invoice-refunded';

  TYPE_INVOICE_REISSUED = 'invoice-reissued';

  TYPE_INVOICE_REVENUE_RECOGNIZED = 'invoice-revenue-recognized';

  TYPE_INVOICE_VOIDED = 'invoice-voided';

  TYPE_KYC_DOCUMENT_ACCEPTED = 'kyc-document-accepted';

  TYPE_KYC_DOCUMENT_CREATED = 'kyc-document-created';

  TYPE_KYC_DOCUMENT_MODIFIED = 'kyc-document-modified';

  TYPE_KYC_DOCUMENT_REJECTED = 'kyc-document-rejected';

  TYPE_KYC_DOCUMENT_REVIEWED = 'kyc-document-reviewed';

  TYPE_KYC_REQUEST_FULFILLED = 'kyc-request-fulfilled';

  TYPE_LEAD_SOURCE_CHANGED = 'lead-source-changed';

  TYPE_ORDER_ACTIVATED = 'order-activated';

  TYPE_ORDER_CANCELED = 'order-canceled';

  TYPE_ORDER_CHURNED = 'order-churned';

  TYPE_ORDER_COMPLETED = 'order-completed';

  TYPE_ORDER_CREATED = 'order-created';

  TYPE_ORDER_DOWNGRADED = 'order-downgraded';

  TYPE_ORDER_PAID_EARLY = 'order-paid-early';

  TYPE_ORDER_REACTIVATED = 'order-reactivated';

  TYPE_ORDER_RENEWED = 'order-renewed';

  TYPE_ORDER_TRIAL_ENDED = 'order-trial-ended';

  TYPE_ORDER_UPGRADED = 'order-upgraded';

  TYPE_PAYMENT_CARD_EXPIRATION_WAS_MODIFIED = 'payment-card-expiration-was-modified';

  TYPE_PAYMENT_CARD_EXPIRED = 'payment-card-expired';

  TYPE_PAYMENT_INSTRUMENT_CREATED = 'payment-instrument-created';

  TYPE_PAYMENT_INSTRUMENT_DEACTIVATED = 'payment-instrument-deactivated';

  TYPE_PRIMARY_ADDRESS_CHANGED = 'primary-address-changed';

  TYPE_QUICKBOOKS_CUSTOMER_CREATED = 'quickbooks-customer-created';

  TYPE_QUICKBOOKS_CUSTOMER_TASK_FAILED = 'quickbooks-customer-task-failed';

  TYPE_QUOTE_CANCELED = 'quote-canceled';

  TYPE_QUOTE_CREATED = 'quote-created';

  TYPE_QUOTE_EXPIRED = 'quote-expired';

  TYPE_QUOTE_ISSUED = 'quote-issued';

  TYPE_QUOTE_ORDER_ATTACHED = 'quote-order-attached';

  TYPE_QUOTE_RECALLED = 'quote-recalled';

  TYPE_QUOTE_REJECTED = 'quote-rejected';

  TYPE_QUOTE_UPDATED = 'quote-updated';

  TYPE_REFUND_WAS_REFLECTED_IN_INVOICES = 'refund-was-reflected-in-invoices';

  TYPE_SUBSCRIPTION_PAUSED = 'subscription-paused';

  TYPE_SUBSCRIPTION_RESUMED = 'subscription-resumed';

  TYPE_SUBSCRIPTION_TRIAL_END_CHANGED = 'subscription-trial-end-changed';

  TYPE_TRANSACTION_ABANDONED = 'transaction-abandoned';

  TYPE_TRANSACTION_AMOUNT_DISCREPANCY_FOUND = 'transaction-amount-discrepancy-found';

  TYPE_TRANSACTION_APPROVED = 'transaction-approved';

  TYPE_TRANSACTION_CANCELED = 'transaction-canceled';

  TYPE_TRANSACTION_DECLINED = 'transaction-declined';

  TYPE_TRANSACTION_DISCREPANCY_FOUND = 'transaction-discrepancy-found';

  TYPE_TRANSACTION_DISPUTED = 'transaction-disputed';

  TYPE_TRANSACTION_RECONCILED = 'transaction-reconciled';

  TYPE_TRANSACTION_REFUNDED = 'transaction-refunded';

  TYPE_TRANSACTION_VOIDED = 'transaction-voided';

  TYPE_TRANSACTION_WAITING_GATEWAY = 'transaction-waiting-gateway';

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
    if (Object.prototype.hasOwnProperty.call(data, 'customEventType')) {
      this.setCustomEventType(data['customEventType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customData')) {
      this.setCustomData(data['customData']);
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

  setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  get customEventType(): string | null {
    return this._fields['customEventType'] ?? null;
  }
  
  getCustomEventType(): string | null {
      return this._fields['customEventType'] ?? null;
  }

  setCustomEventType(value: null | string) {
    this._fields['customEventType'] = value;

    return this;
  }

  get customData(): Record<string, any> | null {
    return this._fields['customData'] ?? null;
  }
  
  getCustomData(): Record<string, any> | null {
      return this._fields['customData'] ?? null;
  }

  setCustomData(value: null | Record<string, any>) {
    this._fields['customData'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customEventType')) {
      data['customEventType'] = this['customEventType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customData')) {
      data['customData'] = this['customData'];
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
