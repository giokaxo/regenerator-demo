import GlobalWebhookHeaders from '../models/global-webhook-headers';
import ResourceLink from '../models/resource-link';

export default class GlobalWebhook {
  EVENTS_FILTER_AML_LIST_POSSIBLY_MATCHED = 'aml-list-possibly-matched';

  EVENTS_FILTER_COUPON_APPLICATION_REMOVED = 'coupon-application-removed';

  EVENTS_FILTER_COUPON_APPLIED = 'coupon-applied';

  EVENTS_FILTER_COUPON_EXPIRATION_MODIFIED = 'coupon-expiration-modified';

  EVENTS_FILTER_COUPON_EXPIRED = 'coupon-expired';

  EVENTS_FILTER_COUPON_ISSUED = 'coupon-issued';

  EVENTS_FILTER_COUPON_MODIFIED = 'coupon-modified';

  EVENTS_FILTER_COUPON_REDEEMED = 'coupon-redeemed';

  EVENTS_FILTER_COUPON_REDEMPTION_CANCELED = 'coupon-redemption-canceled';

  EVENTS_FILTER_CUSTOMER_CREATED = 'customer-created';

  EVENTS_FILTER_CUSTOMER_MERGED = 'customer-merged';

  EVENTS_FILTER_CUSTOMER_ONE_TIME_PASSWORD_REQUESTED = 'customer-one-time-password-requested';

  EVENTS_FILTER_CUSTOMER_UPDATED = 'customer-updated';

  EVENTS_FILTER_EXPERIAN_CHECK_PERFORMED = 'experian-check-performed';

  EVENTS_FILTER_INVOICE_ABANDONED = 'invoice-abandoned';

  EVENTS_FILTER_INVOICE_ISSUED = 'invoice-issued';

  EVENTS_FILTER_INVOICE_PAID = 'invoice-paid';

  EVENTS_FILTER_INVOICE_PARTIALLY_PAID = 'invoice-partially-paid';

  EVENTS_FILTER_INVOICE_PARTIALLY_REFUNDED = 'invoice-partially-refunded';

  EVENTS_FILTER_INVOICE_PAST_DUE = 'invoice-past-due';

  EVENTS_FILTER_INVOICE_REFUNDED = 'invoice-refunded';

  EVENTS_FILTER_INVOICE_REISSUED = 'invoice-reissued';

  EVENTS_FILTER_INVOICE_VOIDED = 'invoice-voided';

  EVENTS_FILTER_KYC_DOCUMENT_ACCEPTED = 'kyc-document-accepted';

  EVENTS_FILTER_KYC_DOCUMENT_ARCHIVED = 'kyc-document-archived';

  EVENTS_FILTER_KYC_DOCUMENT_CREATED = 'kyc-document-created';

  EVENTS_FILTER_KYC_DOCUMENT_MODIFIED = 'kyc-document-modified';

  EVENTS_FILTER_KYC_DOCUMENT_REJECTED = 'kyc-document-rejected';

  EVENTS_FILTER_KYC_DOCUMENT_REVIEWED = 'kyc-document-reviewed';

  EVENTS_FILTER_KYC_REQUEST_ATTEMPTED = 'kyc-request-attempted';

  EVENTS_FILTER_KYC_REQUEST_FAILED = 'kyc-request-failed';

  EVENTS_FILTER_KYC_REQUEST_FULFILLED = 'kyc-request-fulfilled';

  EVENTS_FILTER_KYC_REQUEST_PARTIALLY_FULFILLED = 'kyc-request-partially-fulfilled';

  EVENTS_FILTER_LEAD_SOURCE_CHANGED = 'lead-source-changed';

  EVENTS_FILTER_ORDER_ABANDONED = 'order-abandoned';

  EVENTS_FILTER_ORDER_COMPLETED = 'order-completed';

  EVENTS_FILTER_PAYMENT_CARD_EXPIRED = 'payment-card-expired';

  EVENTS_FILTER_PAYOUT_REQUEST_CREATED = 'payout-request-created';

  EVENTS_FILTER_PAYOUT_REQUEST_MODIFIED = 'payout-request-modified';

  EVENTS_FILTER_QUOTE_ACCEPTED = 'quote-accepted';

  EVENTS_FILTER_QUOTE_CANCELED = 'quote-canceled';

  EVENTS_FILTER_QUOTE_CREATED = 'quote-created';

  EVENTS_FILTER_QUOTE_EXPIRED = 'quote-expired';

  EVENTS_FILTER_QUOTE_ISSUED = 'quote-issued';

  EVENTS_FILTER_QUOTE_RECALLED = 'quote-recalled';

  EVENTS_FILTER_QUOTE_REJECTED = 'quote-rejected';

  EVENTS_FILTER_QUOTE_UPDATED = 'quote-updated';

  EVENTS_FILTER_RENEWAL_INVOICE_ISSUED = 'renewal-invoice-issued';

  EVENTS_FILTER_RENEWAL_INVOICE_PAYMENT_DECLINED = 'renewal-invoice-payment-declined';

  EVENTS_FILTER_SUBSCRIPTION_ACTIVATED = 'subscription-activated';

  EVENTS_FILTER_SUBSCRIPTION_CANCELED = 'subscription-canceled';

  EVENTS_FILTER_SUBSCRIPTION_CHURNED = 'subscription-churned';

  EVENTS_FILTER_SUBSCRIPTION_DOWNGRADED = 'subscription-downgraded';

  EVENTS_FILTER_SUBSCRIPTION_PAUSED = 'subscription-paused';

  EVENTS_FILTER_SUBSCRIPTION_REACTIVATED = 'subscription-reactivated';

  EVENTS_FILTER_SUBSCRIPTION_RENEWED = 'subscription-renewed';

  EVENTS_FILTER_SUBSCRIPTION_RESUMED = 'subscription-resumed';

  EVENTS_FILTER_SUBSCRIPTION_UPGRADED = 'subscription-upgraded';

  EVENTS_FILTER_TRANSACTION_AMOUNT_DISCREPANCY_FOUND = 'transaction-amount-discrepancy-found';

  EVENTS_FILTER_TRANSACTION_DECLINED = 'transaction-declined';

  EVENTS_FILTER_TRANSACTION_DISCREPANCY_FOUND = 'transaction-discrepancy-found';

  EVENTS_FILTER_TRANSACTION_PROCESSED = 'transaction-processed';

  EVENTS_FILTER_ORDER_DELINQUENCY_REACHED = 'order-delinquency-reached';

  EVENTS_FILTER_AUTODEPOSIT_LOOKUP_PERFORMED = 'autodeposit-lookup-performed';

  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  METHOD_GET = 'GET';

  METHOD_POST = 'POST';

  METHOD_PUT = 'PUT';

  METHOD_PATCH = 'PATCH';

  METHOD_DELETE = 'DELETE';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'eventsFilter')) {
      this.setEventsFilter(data['eventsFilter']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'method')) {
      this.setMethod(data['method']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'url')) {
      this.setUrl(data['url']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'headers')) {
      this.setHeaders(data['headers']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'credentialHash')) {
      this.setCredentialHash(data['credentialHash']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'body')) {
      this.setBody(data['body']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'filter')) {
      this.setFilter(data['filter']);
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

  get eventsFilter(): Array<any> | null {
    return this._fields['eventsFilter'] ?? null;
  }
  
  getEventsFilter(): Array<any> | null {
      return this._fields['eventsFilter'] ?? null;
  }

  setEventsFilter(value: null | Array<any>) {
    this._fields['eventsFilter'] = value;

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

  get method(): string {
    return this._fields['method'];
  }
  
  getMethod(): string {
      return this._fields['method'];
  }

  setMethod(value: string) {
    this._fields['method'] = value;

    return this;
  }

  get url(): string {
    return this._fields['url'];
  }
  
  getUrl(): string {
      return this._fields['url'];
  }

  setUrl(value: string) {
    this._fields['url'] = value;

    return this;
  }

  get headers(): Array<any> | null {
    return this._fields['headers'] ?? null;
  }
  
  getHeaders(): Array<any> | null {
      return this._fields['headers'] ?? null;
  }

  setHeaders(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof GlobalWebhookHeaders ? value : new GlobalWebhookHeaders(value),
    ) : null;

    this._fields['headers'] = value;

    return this;
  }

  get credentialHash(): string {
    return this._fields['credentialHash'];
  }
  
  getCredentialHash(): string {
      return this._fields['credentialHash'];
  }

  setCredentialHash(value: string) {
    this._fields['credentialHash'] = value;

    return this;
  }

  get body(): string | null {
    return this._fields['body'] ?? null;
  }
  
  getBody(): string | null {
      return this._fields['body'] ?? null;
  }

  setBody(value: null | string) {
    this._fields['body'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'eventsFilter')) {
      data['eventsFilter'] = this['eventsFilter'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'method')) {
      data['method'] = this['method'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'url')) {
      data['url'] = this['url'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'headers')) {
      data['headers'] = this['headers'] !== null
          ? this._fields['headers'].map((globalWebhookHeaders: GlobalWebhookHeaders) => globalWebhookHeaders.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialHash')) {
      data['credentialHash'] = this['credentialHash'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'body')) {
      data['body'] = this['body'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'filter')) {
      data['filter'] = this['filter'];
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
