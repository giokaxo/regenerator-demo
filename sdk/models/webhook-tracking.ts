import ResourceLink from '../models/resource-link';

export default class WebhookTracking {
  EVENT_TYPE_ACCOUNT_PASSWORD_RESET_REQUESTED = 'account-password-reset-requested';

  EVENT_TYPE_ACCOUNT_VERIFICATION_REQUESTED = 'account-verification-requested';

  EVENT_TYPE_AML_LIST_POSSIBLY_MATCHED = 'aml-list-possibly-matched';

  EVENT_TYPE_APPLICATION_INSTANCE_DISABLED = 'application-instance-disabled';

  EVENT_TYPE_APPLICATION_INSTANCE_ENABLED = 'application-instance-enabled';

  EVENT_TYPE_BALANCE_TRANSACTION_SETTLED = 'balance-transaction-settled';

  EVENT_TYPE_COUPON_APPLICATION_REMOVED = 'coupon-application-removed';

  EVENT_TYPE_COUPON_APPLIED = 'coupon-applied';

  EVENT_TYPE_COUPON_EXPIRATION_MODIFIED = 'coupon-expiration-modified';

  EVENT_TYPE_COUPON_EXPIRED = 'coupon-expired';

  EVENT_TYPE_COUPON_ISSUED = 'coupon-issued';

  EVENT_TYPE_COUPON_MODIFIED = 'coupon-modified';

  EVENT_TYPE_COUPON_REDEEMED = 'coupon-redeemed';

  EVENT_TYPE_COUPON_REDEMPTION_CANCELED = 'coupon-redemption-canceled';

  EVENT_TYPE_CUSTOMER_CREATED = 'customer-created';

  EVENT_TYPE_CUSTOMER_ONE_TIME_PASSWORD_REQUESTED = 'customer-one-time-password-requested';

  EVENT_TYPE_CUSTOMER_UPDATED = 'customer-updated';

  EVENT_TYPE_DISPUTE_CREATED = 'dispute-created';

  EVENT_TYPE_DISPUTE_MODIFIED = 'dispute-modified';

  EVENT_TYPE_EXPERIAN_CHECK_PERFORMED = 'experian-check-performed';

  EVENT_TYPE_GATEWAY_ACCOUNT_DOWNTIME_ENDED = 'gateway-account-downtime-ended';

  EVENT_TYPE_GATEWAY_ACCOUNT_DOWNTIME_STARTED = 'gateway-account-downtime-started';

  EVENT_TYPE_GATEWAY_ACCOUNT_LIMIT_REACHED = 'gateway-account-limit-reached';

  EVENT_TYPE_GATEWAY_ACCOUNT_ONBOARDING_COMPLETED = 'gateway-account-onboarding-completed';

  EVENT_TYPE_GATEWAY_ACCOUNT_ONBOARDING_FAILED = 'gateway-account-onboarding-failed';

  EVENT_TYPE_GATEWAY_ACCOUNT_REQUESTED = 'gateway-account-requested';

  EVENT_TYPE_HARD_USAGE_LIMIT_REACHED = 'hard-usage-limit-reached';

  EVENT_TYPE_INVOICE_ISSUED = 'invoice-issued';

  EVENT_TYPE_INVOICE_MODIFIED = 'invoice-modified';

  EVENT_TYPE_INVOICE_PAID = 'invoice-paid';

  EVENT_TYPE_INVOICE_PARTIALLY_PAID = 'invoice-partially-paid';

  EVENT_TYPE_INVOICE_PARTIALLY_REFUNDED = 'invoice-partially-refunded';

  EVENT_TYPE_INVOICE_PAST_DUE = 'invoice-past-due';

  EVENT_TYPE_INVOICE_PAST_DUE_REMINDER = 'invoice-past-due-reminder';

  EVENT_TYPE_INVOICE_REFUNDED = 'invoice-refunded';

  EVENT_TYPE_INVOICE_REVENUE_RECOGNIZED = 'invoice-revenue-recognized';

  EVENT_TYPE_INVOICE_TAX_CALCULATION_FAILED = 'invoice-tax-calculation-failed';

  EVENT_TYPE_INVOICE_VOIDED = 'invoice-voided';

  EVENT_TYPE_KYC_DOCUMENT_ACCEPTED = 'kyc-document-accepted';

  EVENT_TYPE_KYC_DOCUMENT_MODIFIED = 'kyc-document-modified';

  EVENT_TYPE_KYC_DOCUMENT_REJECTED = 'kyc-document-rejected';

  EVENT_TYPE_KYC_REQUEST_FULFILLED = 'kyc-request-fulfilled';

  EVENT_TYPE_NSF_RESPONSE_RECEIVED = 'nsf-response-received';

  EVENT_TYPE_ORDER_ABANDON_REMINDER = 'order-abandon-reminder';

  EVENT_TYPE_ORDER_ABANDONED = 'order-abandoned';

  EVENT_TYPE_ORDER_COMPLETED = 'order-completed';

  EVENT_TYPE_PAYMENT_CARD_CREATED = 'payment-card-created';

  EVENT_TYPE_PAYMENT_CARD_EXPIRATION_REMINDER = 'payment-card-expiration-reminder';

  EVENT_TYPE_PAYMENT_CARD_EXPIRED = 'payment-card-expired';

  EVENT_TYPE_PAYMENT_INSTRUMENT_MODIFIED = 'payment-instrument-modified';

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

  EVENT_TYPE_READY_TO_PAY_REQUESTED = 'ready-to-pay-requested';

  EVENT_TYPE_RENEWAL_INVOICE_ISSUED = 'renewal-invoice-issued';

  EVENT_TYPE_RENEWAL_INVOICE_PAYMENT_CANCELED = 'renewal-invoice-payment-canceled';

  EVENT_TYPE_RENEWAL_INVOICE_PAYMENT_DECLINED = 'renewal-invoice-payment-declined';

  EVENT_TYPE_RISK_SCORE_CHANGED = 'risk-score-changed';

  EVENT_TYPE_SOFT_USAGE_LIMIT_REACHED = 'soft-usage-limit-reached';

  EVENT_TYPE_SUBSCRIPTION_ACTIVATED = 'subscription-activated';

  EVENT_TYPE_SUBSCRIPTION_CANCELED = 'subscription-canceled';

  EVENT_TYPE_SUBSCRIPTION_CHURNED = 'subscription-churned';

  EVENT_TYPE_SUBSCRIPTION_CREATED = 'subscription-created';

  EVENT_TYPE_SUBSCRIPTION_DOWNGRADED = 'subscription-downgraded';

  EVENT_TYPE_SUBSCRIPTION_ITEMS_CHANGED = 'subscription-items-changed';

  EVENT_TYPE_SUBSCRIPTION_MODIFIED = 'subscription-modified';

  EVENT_TYPE_SUBSCRIPTION_PAUSE_CREATED = 'subscription-pause-created';

  EVENT_TYPE_SUBSCRIPTION_PAUSE_MODIFIED = 'subscription-pause-modified';

  EVENT_TYPE_SUBSCRIPTION_PAUSE_REVOKED = 'subscription-pause-revoked';

  EVENT_TYPE_SUBSCRIPTION_PAUSED = 'subscription-paused';

  EVENT_TYPE_SUBSCRIPTION_QUANTITY_FILLED_LIMIT_REACHED = 'subscription-quantity-filled-limit-reached';

  EVENT_TYPE_SUBSCRIPTION_REACTIVATED = 'subscription-reactivated';

  EVENT_TYPE_SUBSCRIPTION_RENEWAL_REMINDER = 'subscription-renewal-reminder';

  EVENT_TYPE_SUBSCRIPTION_RENEWED = 'subscription-renewed';

  EVENT_TYPE_SUBSCRIPTION_RESUMED = 'subscription-resumed';

  EVENT_TYPE_SUBSCRIPTION_TRIAL_CONVERTED = 'subscription-trial-converted';

  EVENT_TYPE_SUBSCRIPTION_TRIAL_END_CHANGED = 'subscription-trial-end-changed';

  EVENT_TYPE_SUBSCRIPTION_TRIAL_END_REMINDER = 'subscription-trial-end-reminder';

  EVENT_TYPE_SUBSCRIPTION_UPGRADED = 'subscription-upgraded';

  EVENT_TYPE_TRANSACTION_AMOUNT_DISCREPANCY_FOUND = 'transaction-amount-discrepancy-found';

  EVENT_TYPE_TRANSACTION_DECLINED = 'transaction-declined';

  EVENT_TYPE_TRANSACTION_DISCREPANCY_FOUND = 'transaction-discrepancy-found';

  EVENT_TYPE_TRANSACTION_PROCESS_REQUESTED = 'transaction-process-requested';

  EVENT_TYPE_TRANSACTION_PROCESSED = 'transaction-processed';

  EVENT_TYPE_ORDER_DELINQUENCY_REACHED = 'order-delinquency-reached';

  EVENT_TYPE_AUTODEPOSIT_LOOKUP_PERFORMED = 'autodeposit-lookup-performed';

  SOURCE_WEBHOOKS = 'webhooks';

  SOURCE_RULES = 'rules';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'duration')) {
      this.setDuration(data['duration']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'initiatedTime')) {
      this.setInitiatedTime(data['initiatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'url')) {
      this.setUrl(data['url']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'method')) {
      this.setMethod(data['method']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'request')) {
      this.setRequest(data['request']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'response')) {
      this.setResponse(data['response']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'requestHeaders')) {
      this.setRequestHeaders(data['requestHeaders']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'responseHeaders')) {
      this.setResponseHeaders(data['responseHeaders']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'entityId')) {
      this.setEntityId(data['entityId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'eventType')) {
      this.setEventType(data['eventType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'source')) {
      this.setSource(data['source']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'attempt')) {
      this.setAttempt(data['attempt']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sentTime')) {
      this.setSentTime(data['sentTime']);
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

  setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get status(): number | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): number | null {
      return this._fields['status'] ?? null;
  }

  setStatus(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['status'] = value;

    return this;
  }

  get duration(): number | null {
    return this._fields['duration'] ?? null;
  }
  
  getDuration(): number | null {
      return this._fields['duration'] ?? null;
  }

  setDuration(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['duration'] = value;

    return this;
  }

  get initiatedTime(): Date | null {
    return this._fields['initiatedTime'] ?? null;
  }
  
  getInitiatedTime(): Date | null {
      return this._fields['initiatedTime'] ?? null;
  }

  private setInitiatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['initiatedTime'] = value;

    return this;
  }

  get url(): string | null {
    return this._fields['url'] ?? null;
  }
  
  getUrl(): string | null {
      return this._fields['url'] ?? null;
  }

  setUrl(value: null | string) {
    this._fields['url'] = value;

    return this;
  }

  get method(): string | null {
    return this._fields['method'] ?? null;
  }
  
  getMethod(): string | null {
      return this._fields['method'] ?? null;
  }

  setMethod(value: null | string) {
    this._fields['method'] = value;

    return this;
  }

  get request(): string | null {
    return this._fields['request'] ?? null;
  }
  
  getRequest(): string | null {
      return this._fields['request'] ?? null;
  }

  setRequest(value: null | string) {
    this._fields['request'] = value;

    return this;
  }

  get response(): string | null {
    return this._fields['response'] ?? null;
  }
  
  getResponse(): string | null {
      return this._fields['response'] ?? null;
  }

  setResponse(value: null | string) {
    this._fields['response'] = value;

    return this;
  }

  get requestHeaders(): Record<string, any> | null {
    return this._fields['requestHeaders'] ?? null;
  }
  
  getRequestHeaders(): Record<string, any> | null {
      return this._fields['requestHeaders'] ?? null;
  }

  setRequestHeaders(value: null | Record<string, any>) {
    this._fields['requestHeaders'] = value;

    return this;
  }

  get responseHeaders(): Record<string, any> | null {
    return this._fields['responseHeaders'] ?? null;
  }
  
  getResponseHeaders(): Record<string, any> | null {
      return this._fields['responseHeaders'] ?? null;
  }

  setResponseHeaders(value: null | Record<string, any>) {
    this._fields['responseHeaders'] = value;

    return this;
  }

  get entityId(): string | null {
    return this._fields['entityId'] ?? null;
  }
  
  getEntityId(): string | null {
      return this._fields['entityId'] ?? null;
  }

  setEntityId(value: null | string) {
    this._fields['entityId'] = value;

    return this;
  }

  get organizationId(): string | null {
    return this._fields['organizationId'] ?? null;
  }
  
  getOrganizationId(): string | null {
      return this._fields['organizationId'] ?? null;
  }

  setOrganizationId(value: null | string) {
    this._fields['organizationId'] = value;

    return this;
  }

  get eventType(): string | null {
    return this._fields['eventType'] ?? null;
  }
  
  getEventType(): string | null {
      return this._fields['eventType'] ?? null;
  }

  private setEventType(value: null | string) {
    this._fields['eventType'] = value;

    return this;
  }

  get source(): string | null {
    return this._fields['source'] ?? null;
  }
  
  getSource(): string | null {
      return this._fields['source'] ?? null;
  }

  setSource(value: null | string) {
    this._fields['source'] = value;

    return this;
  }

  get attempt(): number | null {
    return this._fields['attempt'] ?? null;
  }
  
  getAttempt(): number | null {
      return this._fields['attempt'] ?? null;
  }

  setAttempt(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['attempt'] = value;

    return this;
  }

  get sentTime(): Date | null {
    return this._fields['sentTime'] ?? null;
  }
  
  getSentTime(): Date | null {
      return this._fields['sentTime'] ?? null;
  }

  private setSentTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['sentTime'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'duration')) {
      data['duration'] = this['duration'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'initiatedTime')) {
      data['initiatedTime'] = this['initiatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'url')) {
      data['url'] = this['url'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'method')) {
      data['method'] = this['method'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'request')) {
      data['request'] = this['request'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'response')) {
      data['response'] = this['response'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'requestHeaders')) {
      data['requestHeaders'] = this['requestHeaders'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'responseHeaders')) {
      data['responseHeaders'] = this['responseHeaders'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'entityId')) {
      data['entityId'] = this['entityId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'eventType')) {
      data['eventType'] = this['eventType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'source')) {
      data['source'] = this['source'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'attempt')) {
      data['attempt'] = this['attempt'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sentTime')) {
      data['sentTime'] = this['sentTime']?.toISOString() ?? null;
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
