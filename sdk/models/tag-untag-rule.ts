import ResourceLink from '../models/resource-link';

export default class TagUntagRule {
  EVENT_TYPE_AML_LIST_POSSIBLY_MATCHED = 'aml-list-possibly-matched';

  EVENT_TYPE_COUPON_APPLICATION_REMOVED = 'coupon-application-removed';

  EVENT_TYPE_COUPON_APPLIED = 'coupon-applied';

  EVENT_TYPE_COUPON_EXPIRATION_MODIFIED = 'coupon-expiration-modified';

  EVENT_TYPE_COUPON_EXPIRED = 'coupon-expired';

  EVENT_TYPE_COUPON_ISSUED = 'coupon-issued';

  EVENT_TYPE_COUPON_MODIFIED = 'coupon-modified';

  EVENT_TYPE_COUPON_REDEEMED = 'coupon-redeemed';

  EVENT_TYPE_COUPON_REDEMPTION_CANCELED = 'coupon-redemption-canceled';

  EVENT_TYPE_CUSTOMER_CREATED = 'customer-created';

  EVENT_TYPE_CUSTOMER_MERGED = 'customer-merged';

  EVENT_TYPE_CUSTOMER_ONE_TIME_PASSWORD_REQUESTED = 'customer-one-time-password-requested';

  EVENT_TYPE_CUSTOMER_UPDATED = 'customer-updated';

  EVENT_TYPE_EXPERIAN_CHECK_PERFORMED = 'experian-check-performed';

  EVENT_TYPE_INVOICE_ABANDONED = 'invoice-abandoned';

  EVENT_TYPE_INVOICE_ISSUED = 'invoice-issued';

  EVENT_TYPE_INVOICE_PAID = 'invoice-paid';

  EVENT_TYPE_INVOICE_PARTIALLY_PAID = 'invoice-partially-paid';

  EVENT_TYPE_INVOICE_PARTIALLY_REFUNDED = 'invoice-partially-refunded';

  EVENT_TYPE_INVOICE_PAST_DUE = 'invoice-past-due';

  EVENT_TYPE_INVOICE_REFUNDED = 'invoice-refunded';

  EVENT_TYPE_INVOICE_REISSUED = 'invoice-reissued';

  EVENT_TYPE_INVOICE_VOIDED = 'invoice-voided';

  EVENT_TYPE_KYC_DOCUMENT_ACCEPTED = 'kyc-document-accepted';

  EVENT_TYPE_KYC_DOCUMENT_ARCHIVED = 'kyc-document-archived';

  EVENT_TYPE_KYC_DOCUMENT_CREATED = 'kyc-document-created';

  EVENT_TYPE_KYC_DOCUMENT_MODIFIED = 'kyc-document-modified';

  EVENT_TYPE_KYC_DOCUMENT_REJECTED = 'kyc-document-rejected';

  EVENT_TYPE_KYC_DOCUMENT_REVIEWED = 'kyc-document-reviewed';

  EVENT_TYPE_KYC_REQUEST_ATTEMPTED = 'kyc-request-attempted';

  EVENT_TYPE_KYC_REQUEST_FAILED = 'kyc-request-failed';

  EVENT_TYPE_KYC_REQUEST_FULFILLED = 'kyc-request-fulfilled';

  EVENT_TYPE_KYC_REQUEST_PARTIALLY_FULFILLED = 'kyc-request-partially-fulfilled';

  EVENT_TYPE_LEAD_SOURCE_CHANGED = 'lead-source-changed';

  EVENT_TYPE_ORDER_ABANDONED = 'order-abandoned';

  EVENT_TYPE_ORDER_COMPLETED = 'order-completed';

  EVENT_TYPE_PAYMENT_CARD_EXPIRED = 'payment-card-expired';

  EVENT_TYPE_PAYOUT_REQUEST_CREATED = 'payout-request-created';

  EVENT_TYPE_PAYOUT_REQUEST_MODIFIED = 'payout-request-modified';

  EVENT_TYPE_QUOTE_ACCEPTED = 'quote-accepted';

  EVENT_TYPE_QUOTE_CANCELED = 'quote-canceled';

  EVENT_TYPE_QUOTE_CREATED = 'quote-created';

  EVENT_TYPE_QUOTE_EXPIRED = 'quote-expired';

  EVENT_TYPE_QUOTE_ISSUED = 'quote-issued';

  EVENT_TYPE_QUOTE_RECALLED = 'quote-recalled';

  EVENT_TYPE_QUOTE_REJECTED = 'quote-rejected';

  EVENT_TYPE_QUOTE_UPDATED = 'quote-updated';

  EVENT_TYPE_RENEWAL_INVOICE_ISSUED = 'renewal-invoice-issued';

  EVENT_TYPE_RENEWAL_INVOICE_PAYMENT_DECLINED = 'renewal-invoice-payment-declined';

  EVENT_TYPE_SUBSCRIPTION_ACTIVATED = 'subscription-activated';

  EVENT_TYPE_SUBSCRIPTION_CANCELED = 'subscription-canceled';

  EVENT_TYPE_SUBSCRIPTION_CHURNED = 'subscription-churned';

  EVENT_TYPE_SUBSCRIPTION_DOWNGRADED = 'subscription-downgraded';

  EVENT_TYPE_SUBSCRIPTION_PAUSED = 'subscription-paused';

  EVENT_TYPE_SUBSCRIPTION_REACTIVATED = 'subscription-reactivated';

  EVENT_TYPE_SUBSCRIPTION_RENEWED = 'subscription-renewed';

  EVENT_TYPE_SUBSCRIPTION_RESUMED = 'subscription-resumed';

  EVENT_TYPE_SUBSCRIPTION_UPGRADED = 'subscription-upgraded';

  EVENT_TYPE_TRANSACTION_AMOUNT_DISCREPANCY_FOUND = 'transaction-amount-discrepancy-found';

  EVENT_TYPE_TRANSACTION_DECLINED = 'transaction-declined';

  EVENT_TYPE_TRANSACTION_DISCREPANCY_FOUND = 'transaction-discrepancy-found';

  EVENT_TYPE_TRANSACTION_PROCESSED = 'transaction-processed';

  EVENT_TYPE_ORDER_DELINQUENCY_REACHED = 'order-delinquency-reached';

  EVENT_TYPE_AUTODEPOSIT_LOOKUP_PERFORMED = 'autodeposit-lookup-performed';

  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'eventType')) {
      this.setEventType(data['eventType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'filter')) {
      this.setFilter(data['filter']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'addTags')) {
      this.setAddTags(data['addTags']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'removeTags')) {
      this.setRemoveTags(data['removeTags']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
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

  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get eventType(): string {
    return this._fields['eventType'];
  }
  
  getEventType(): string {
      return this._fields['eventType'];
  }

  setEventType(value: string) {
    this._fields['eventType'] = value;

    return this;
  }

  get filter(): string | null {
    return this._fields['filter'] ?? null;
  }
  
  getFilter(): string | null {
      return this._fields['filter'] ?? null;
  }

  setFilter(value: null | string) {
    this._fields['filter'] = value;

    return this;
  }

  get addTags(): Array<any> {
    return this._fields['addTags'];
  }
  
  getAddTags(): Array<any> {
      return this._fields['addTags'];
  }

  setAddTags(value: Array<any>) {
    this._fields['addTags'] = value;

    return this;
  }

  get removeTags(): Array<any> {
    return this._fields['removeTags'];
  }
  
  getRemoveTags(): Array<any> {
      return this._fields['removeTags'];
  }

  setRemoveTags(value: Array<any>) {
    this._fields['removeTags'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get createdTime(): Date | null {
    return this._fields['createdTime'] ?? null;
  }
  
  getCreatedTime(): Date | null {
      return this._fields['createdTime'] ?? null;
  }

  private setCreatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['createdTime'] = value;

    return this;
  }

  get updatedTime(): Date | null {
    return this._fields['updatedTime'] ?? null;
  }
  
  getUpdatedTime(): Date | null {
      return this._fields['updatedTime'] ?? null;
  }

  private setUpdatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['updatedTime'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'eventType')) {
      data['eventType'] = this['eventType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'filter')) {
      data['filter'] = this['filter'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'addTags')) {
      data['addTags'] = this['addTags'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'removeTags')) {
      data['removeTags'] = this['removeTags'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
