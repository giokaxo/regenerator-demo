import EmailNotificationNotifications from '../models/email-notification-notifications';
import ResourceLink from '../models/resource-link';

export default class EmailNotification {
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

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'eventType')) {
      this.setEventType(data['eventType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'count')) {
      this.setCount(data['count']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notifications')) {
      this.setNotifications(data['notifications']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
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

  get count(): number | null {
    return this._fields['count'] ?? null;
  }
  
  getCount(): number | null {
      return this._fields['count'] ?? null;
  }

  private setCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['count'] = value;

    return this;
  }

  get notifications(): Array<any> | null {
    return this._fields['notifications'] ?? null;
  }
  
  getNotifications(): Array<any> | null {
      return this._fields['notifications'] ?? null;
  }

  private setNotifications(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof EmailNotificationNotifications ? value : new EmailNotificationNotifications(value),
    ) : null;

    this._fields['notifications'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'eventType')) {
      data['eventType'] = this['eventType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'count')) {
      data['count'] = this['count'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notifications')) {
      data['notifications'] = this['notifications'] !== null
          ? this._fields['notifications'].map((emailNotificationNotifications: EmailNotificationNotifications) => emailNotificationNotifications.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
