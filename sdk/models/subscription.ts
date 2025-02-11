import ShippingFactory from '../factories/shipping-factory';
import { SubscriptionOrOneTimeSale } from '../models/subscription-or-one-time-sale';
import SubscriptionTrial from '../models/subscription-trial';
import InvoiceTimeShift from '../models/invoice-time-shift';
import SubscriptionRecurringInterval from '../models/subscription-recurring-interval';
import SubscriptionLineItemSubtotal from '../models/subscription-line-item-subtotal';
import ContactObject from '../models/contact-object';
import { Shipping } from '../models/shipping';
import RiskMetadata from '../models/risk-metadata';
import SubscriptionEmbedded from '../models/subscription-embedded';
import SubscriptionLineItems from '../models/subscription-line-items';
import SubscriptionOrOneTimeSaleItem from '../models/subscription-or-one-time-sale-item';
import ResourceLink from '../models/resource-link';

export default class Subscription implements SubscriptionOrOneTimeSale {
  get [SubscriptionOrOneTimeSale](): true {
    return true;
  }

  STATUS_PENDING = 'pending';

  STATUS_ACTIVE = 'active';

  STATUS_ABANDONED = 'abandoned';

  STATUS_CANCELED = 'canceled';

  STATUS_CHURNED = 'churned';

  STATUS_PAUSED = 'paused';

  STATUS_VOIDED = 'voided';

  STATUS_COMPLETED = 'completed';

  STATUS_TRIAL_ENDED = 'trial-ended';

  BILLING_STATUS_DRAFT = 'draft';

  BILLING_STATUS_UNPAID = 'unpaid';

  BILLING_STATUS_PAST_DUE = 'past-due';

  BILLING_STATUS_ABANDONED = 'abandoned';

  BILLING_STATUS_PAID = 'paid';

  BILLING_STATUS_VOIDED = 'voided';

  BILLING_STATUS_REFUNDED = 'refunded';

  BILLING_STATUS_DISPUTED = 'disputed';

  BILLING_STATUS_PARTIALLY_REFUNDED = 'partially-refunded';

  BILLING_STATUS_PARTIALLY_PAID = 'partially-paid';

  CANCELED_BY_MERCHANT = 'merchant';

  CANCELED_BY_CUSTOMER = 'customer';

  CANCELED_BY_REBILLY = 'rebilly';

  CANCELED_BY_NULL = 'null';

  CANCEL_CATEGORY_BILLING_FAILURE = 'billing-failure';

  CANCEL_CATEGORY_DELINQUENCY = 'delinquency';

  CANCEL_CATEGORY_DID_NOT_USE = 'did-not-use';

  CANCEL_CATEGORY_DID_NOT_WANT = 'did-not-want';

  CANCEL_CATEGORY_MISSING_FEATURES = 'missing-features';

  CANCEL_CATEGORY_BUGS_OR_PROBLEMS = 'bugs-or-problems';

  CANCEL_CATEGORY_DO_NOT_REMEMBER = 'do-not-remember';

  CANCEL_CATEGORY_RISK_WARNING = 'risk-warning';

  CANCEL_CATEGORY_CONTRACT_EXPIRED = 'contract-expired';

  CANCEL_CATEGORY_TOO_EXPENSIVE = 'too-expensive';

  CANCEL_CATEGORY_NEVER_STARTED = 'never-started';

  CANCEL_CATEGORY_SWITCHED_PLAN = 'switched-plan';

  CANCEL_CATEGORY_ORGANIZATION_DEACTIVATED = 'organization-deactivated';

  CANCEL_CATEGORY_OTHER = 'other';

  CANCEL_CATEGORY_NULL = 'null';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'renewalReminderTime')) {
      this.setRenewalReminderTime(data['renewalReminderTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'renewalReminderNumber')) {
      this.setRenewalReminderNumber(data['renewalReminderNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'trialReminderTime')) {
      this.setTrialReminderTime(data['trialReminderTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'trialReminderNumber')) {
      this.setTrialReminderNumber(data['trialReminderNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'abandonReminderTime')) {
      this.setAbandonReminderTime(data['abandonReminderTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'abandonReminderNumber')) {
      this.setAbandonReminderNumber(data['abandonReminderNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'inTrial')) {
      this.setInTrial(data['inTrial']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'trial')) {
      this.setTrial(data['trial']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isTrialOnly')) {
      this.setIsTrialOnly(data['isTrialOnly']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isTrialConverted')) {
      this.setIsTrialConverted(data['isTrialConverted']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'trialConversionTime')) {
      this.setTrialConversionTime(data['trialConversionTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceTimeShift')) {
      this.setInvoiceTimeShift(data['invoiceTimeShift']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recurringInterval')) {
      this.setRecurringInterval(data['recurringInterval']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'autopay')) {
      this.setAutopay(data['autopay']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'startTime')) {
      this.setStartTime(data['startTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'churnTime')) {
      this.setChurnTime(data['churnTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'renewalTime')) {
      this.setRenewalTime(data['renewalTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rebillNumber')) {
      this.setRebillNumber(data['rebillNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lineItems')) {
      this.setLineItems(data['lineItems']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lineItemSubtotal')) {
      this.setLineItemSubtotal(data['lineItemSubtotal']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentId')) {
      this.setPaymentInstrumentId(data['paymentInstrumentId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingStatus')) {
      this.setBillingStatus(data['billingStatus']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'initialInvoiceId')) {
      this.setInitialInvoiceId(data['initialInvoiceId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recentInvoiceId')) {
      this.setRecentInvoiceId(data['recentInvoiceId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      this.setItems(data['items']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'deliveryAddress')) {
      this.setDeliveryAddress(data['deliveryAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'activationTime')) {
      this.setActivationTime(data['activationTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'voidTime')) {
      this.setVoidTime(data['voidTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'abandonTime')) {
      this.setAbandonTime(data['abandonTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'delinquencyPeriod')) {
      this.setDelinquencyPeriod(data['delinquencyPeriod']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'couponIds')) {
      this.setCouponIds(data['couponIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'poNumber')) {
      this.setPoNumber(data['poNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'shipping')) {
      this.setShipping(data['shipping']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notes')) {
      this.setNotes(data['notes']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'canceledBy')) {
      this.setCanceledBy(data['canceledBy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cancelCategory')) {
      this.setCancelCategory(data['cancelCategory']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cancelDescription')) {
      this.setCancelDescription(data['cancelDescription']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskMetadata')) {
      this.setRiskMetadata(data['riskMetadata']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingPortalToken')) {
      this.setBillingPortalToken(data['billingPortalToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
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
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
    }
  }


  public get orderType() {
    return 'subscription-order';
  }

  public getOrderType() {
    return 'subscription-order';
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

  get customerId(): string {
    return this._fields['customerId'];
  }
  
  getCustomerId(): string {
      return this._fields['customerId'];
  }

  setCustomerId(value: string) {
    this._fields['customerId'] = value;

    return this;
  }

  get renewalReminderTime(): Date | null {
    return this._fields['renewalReminderTime'] ?? null;
  }
  
  getRenewalReminderTime(): Date | null {
      return this._fields['renewalReminderTime'] ?? null;
  }

  private setRenewalReminderTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['renewalReminderTime'] = value;

    return this;
  }

  get renewalReminderNumber(): number | null {
    return this._fields['renewalReminderNumber'] ?? null;
  }
  
  getRenewalReminderNumber(): number | null {
      return this._fields['renewalReminderNumber'] ?? null;
  }

  private setRenewalReminderNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['renewalReminderNumber'] = value;

    return this;
  }

  get trialReminderTime(): Date | null {
    return this._fields['trialReminderTime'] ?? null;
  }
  
  getTrialReminderTime(): Date | null {
      return this._fields['trialReminderTime'] ?? null;
  }

  private setTrialReminderTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['trialReminderTime'] = value;

    return this;
  }

  get trialReminderNumber(): number | null {
    return this._fields['trialReminderNumber'] ?? null;
  }
  
  getTrialReminderNumber(): number | null {
      return this._fields['trialReminderNumber'] ?? null;
  }

  private setTrialReminderNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['trialReminderNumber'] = value;

    return this;
  }

  get abandonReminderTime(): Date | null {
    return this._fields['abandonReminderTime'] ?? null;
  }
  
  getAbandonReminderTime(): Date | null {
      return this._fields['abandonReminderTime'] ?? null;
  }

  private setAbandonReminderTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['abandonReminderTime'] = value;

    return this;
  }

  get abandonReminderNumber(): number | null {
    return this._fields['abandonReminderNumber'] ?? null;
  }
  
  getAbandonReminderNumber(): number | null {
      return this._fields['abandonReminderNumber'] ?? null;
  }

  private setAbandonReminderNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['abandonReminderNumber'] = value;

    return this;
  }

  get organizationId(): string | null {
    return this._fields['organizationId'] ?? null;
  }
  
  getOrganizationId(): string | null {
      return this._fields['organizationId'] ?? null;
  }

  private setOrganizationId(value: null | string) {
    this._fields['organizationId'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  private setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get inTrial(): boolean | null {
    return this._fields['inTrial'] ?? null;
  }
  
  getInTrial(): boolean | null {
      return this._fields['inTrial'] ?? null;
  }

  private setInTrial(value: null | boolean) {
    this._fields['inTrial'] = value;

    return this;
  }

  get trial(): SubscriptionTrial | null {
    return this._fields['trial'] ?? null;
  }
  
  getTrial(): SubscriptionTrial | null {
      return this._fields['trial'] ?? null;
  }

  setTrial(value: null | SubscriptionTrial | any) {
    if (value !== null && !(value instanceof SubscriptionTrial)) {
      value = new SubscriptionTrial(value);
    }

    this._fields['trial'] = value;

    return this;
  }

  get isTrialOnly(): boolean | null {
    return this._fields['isTrialOnly'] ?? null;
  }
  
  getIsTrialOnly(): boolean | null {
      return this._fields['isTrialOnly'] ?? null;
  }

  setIsTrialOnly(value: null | boolean) {
    this._fields['isTrialOnly'] = value;

    return this;
  }

  get isTrialConverted(): boolean | null {
    return this._fields['isTrialConverted'] ?? null;
  }
  
  getIsTrialConverted(): boolean | null {
      return this._fields['isTrialConverted'] ?? null;
  }

  private setIsTrialConverted(value: null | boolean) {
    this._fields['isTrialConverted'] = value;

    return this;
  }

  get trialConversionTime(): Date | null {
    return this._fields['trialConversionTime'] ?? null;
  }
  
  getTrialConversionTime(): Date | null {
      return this._fields['trialConversionTime'] ?? null;
  }

  private setTrialConversionTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['trialConversionTime'] = value;

    return this;
  }

  get invoiceTimeShift(): InvoiceTimeShift | null {
    return this._fields['invoiceTimeShift'] ?? null;
  }
  
  getInvoiceTimeShift(): InvoiceTimeShift | null {
      return this._fields['invoiceTimeShift'] ?? null;
  }

  setInvoiceTimeShift(value: null | InvoiceTimeShift | any) {
    if (value !== null && !(value instanceof InvoiceTimeShift)) {
      value = new InvoiceTimeShift(value);
    }

    this._fields['invoiceTimeShift'] = value;

    return this;
  }

  get recurringInterval(): SubscriptionRecurringInterval | null {
    return this._fields['recurringInterval'] ?? null;
  }
  
  getRecurringInterval(): SubscriptionRecurringInterval | null {
      return this._fields['recurringInterval'] ?? null;
  }

  setRecurringInterval(value: null | SubscriptionRecurringInterval | any) {
    if (value !== null && !(value instanceof SubscriptionRecurringInterval)) {
      value = new SubscriptionRecurringInterval(value);
    }

    this._fields['recurringInterval'] = value;

    return this;
  }

  get autopay(): boolean | null {
    return this._fields['autopay'] ?? null;
  }
  
  getAutopay(): boolean | null {
      return this._fields['autopay'] ?? null;
  }

  setAutopay(value: null | boolean) {
    this._fields['autopay'] = value;

    return this;
  }

  get startTime(): Date | null {
    return this._fields['startTime'] ?? null;
  }
  
  getStartTime(): Date | null {
      return this._fields['startTime'] ?? null;
  }

  setStartTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['startTime'] = value;

    return this;
  }

  get churnTime(): Date | null {
    return this._fields['churnTime'] ?? null;
  }
  
  getChurnTime(): Date | null {
      return this._fields['churnTime'] ?? null;
  }

  private setChurnTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['churnTime'] = value;

    return this;
  }

  get renewalTime(): Date | null {
    return this._fields['renewalTime'] ?? null;
  }
  
  getRenewalTime(): Date | null {
      return this._fields['renewalTime'] ?? null;
  }

  setRenewalTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['renewalTime'] = value;

    return this;
  }

  get rebillNumber(): number | null {
    return this._fields['rebillNumber'] ?? null;
  }
  
  getRebillNumber(): number | null {
      return this._fields['rebillNumber'] ?? null;
  }

  private setRebillNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['rebillNumber'] = value;

    return this;
  }

  get lineItems(): Array<any> | null {
    return this._fields['lineItems'] ?? null;
  }
  
  getLineItems(): Array<any> | null {
      return this._fields['lineItems'] ?? null;
  }

  private setLineItems(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof SubscriptionLineItems ? value : new SubscriptionLineItems(value),
    ) : null;

    this._fields['lineItems'] = value;

    return this;
  }

  get lineItemSubtotal(): SubscriptionLineItemSubtotal | null {
    return this._fields['lineItemSubtotal'] ?? null;
  }
  
  getLineItemSubtotal(): SubscriptionLineItemSubtotal | null {
      return this._fields['lineItemSubtotal'] ?? null;
  }

  setLineItemSubtotal(value: null | SubscriptionLineItemSubtotal | any) {
    if (value !== null && !(value instanceof SubscriptionLineItemSubtotal)) {
      value = new SubscriptionLineItemSubtotal(value);
    }

    this._fields['lineItemSubtotal'] = value;

    return this;
  }

  get paymentInstrumentId(): string | null {
    return this._fields['paymentInstrumentId'] ?? null;
  }
  
  getPaymentInstrumentId(): string | null {
      return this._fields['paymentInstrumentId'] ?? null;
  }

  setPaymentInstrumentId(value: null | string) {
    this._fields['paymentInstrumentId'] = value;

    return this;
  }

  get billingStatus(): string | null {
    return this._fields['billingStatus'] ?? null;
  }
  
  getBillingStatus(): string | null {
      return this._fields['billingStatus'] ?? null;
  }

  private setBillingStatus(value: null | string) {
    this._fields['billingStatus'] = value;

    return this;
  }

  get websiteId(): string {
    return this._fields['websiteId'];
  }
  
  getWebsiteId(): string {
      return this._fields['websiteId'];
  }

  setWebsiteId(value: string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get currency(): string | null {
    return this._fields['currency'] ?? null;
  }
  
  getCurrency(): string | null {
      return this._fields['currency'] ?? null;
  }

  private setCurrency(value: null | string) {
    this._fields['currency'] = value;

    return this;
  }

  get initialInvoiceId(): string | null {
    return this._fields['initialInvoiceId'] ?? null;
  }
  
  getInitialInvoiceId(): string | null {
      return this._fields['initialInvoiceId'] ?? null;
  }

  private setInitialInvoiceId(value: null | string) {
    this._fields['initialInvoiceId'] = value;

    return this;
  }

  get recentInvoiceId(): string | null {
    return this._fields['recentInvoiceId'] ?? null;
  }
  
  getRecentInvoiceId(): string | null {
      return this._fields['recentInvoiceId'] ?? null;
  }

  private setRecentInvoiceId(value: null | string) {
    this._fields['recentInvoiceId'] = value;

    return this;
  }

  get items(): Array<any> {
    return this._fields['items'];
  }
  
  getItems(): Array<any> {
      return this._fields['items'];
  }

  setItems(value: Array<any>) {
    value = value.map(
      (value) => value instanceof SubscriptionOrOneTimeSaleItem ? value : new SubscriptionOrOneTimeSaleItem(value),
    );

    this._fields['items'] = value;

    return this;
  }

  get deliveryAddress(): ContactObject | null {
    return this._fields['deliveryAddress'] ?? null;
  }
  
  getDeliveryAddress(): ContactObject | null {
      return this._fields['deliveryAddress'] ?? null;
  }

  setDeliveryAddress(value: null | ContactObject | any) {
    if (value !== null && !(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['deliveryAddress'] = value;

    return this;
  }

  get billingAddress(): ContactObject | null {
    return this._fields['billingAddress'] ?? null;
  }
  
  getBillingAddress(): ContactObject | null {
      return this._fields['billingAddress'] ?? null;
  }

  setBillingAddress(value: null | ContactObject | any) {
    if (value !== null && !(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['billingAddress'] = value;

    return this;
  }

  get activationTime(): Date | null {
    return this._fields['activationTime'] ?? null;
  }
  
  getActivationTime(): Date | null {
      return this._fields['activationTime'] ?? null;
  }

  private setActivationTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['activationTime'] = value;

    return this;
  }

  get voidTime(): Date | null {
    return this._fields['voidTime'] ?? null;
  }
  
  getVoidTime(): Date | null {
      return this._fields['voidTime'] ?? null;
  }

  private setVoidTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['voidTime'] = value;

    return this;
  }

  get abandonTime(): Date | null {
    return this._fields['abandonTime'] ?? null;
  }
  
  getAbandonTime(): Date | null {
      return this._fields['abandonTime'] ?? null;
  }

  setAbandonTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['abandonTime'] = value;

    return this;
  }

  get delinquencyPeriod(): string | null {
    return this._fields['delinquencyPeriod'] ?? null;
  }
  
  getDelinquencyPeriod(): string | null {
      return this._fields['delinquencyPeriod'] ?? null;
  }

  setDelinquencyPeriod(value: null | string) {
    this._fields['delinquencyPeriod'] = value;

    return this;
  }

  get couponIds(): Array<any> | null {
    return this._fields['couponIds'] ?? null;
  }
  
  getCouponIds(): Array<any> | null {
      return this._fields['couponIds'] ?? null;
  }

  setCouponIds(value: null | Array<any>) {
    this._fields['couponIds'] = value;

    return this;
  }

  get poNumber(): string | null {
    return this._fields['poNumber'] ?? null;
  }
  
  getPoNumber(): string | null {
      return this._fields['poNumber'] ?? null;
  }

  setPoNumber(value: null | string) {
    this._fields['poNumber'] = value;

    return this;
  }

  get shipping(): Shipping | null {
    return this._fields['shipping'] ?? null;
  }
  
  getShipping(): Shipping | null {
      return this._fields['shipping'] ?? null;
  }

  setShipping(value: null | Shipping | any) {
    if (value !== null && !(value[Shipping])) {
      value = ShippingFactory.from(value);
    }

    this._fields['shipping'] = value;

    return this;
  }

  get notes(): string | null {
    return this._fields['notes'] ?? null;
  }
  
  getNotes(): string | null {
      return this._fields['notes'] ?? null;
  }

  setNotes(value: null | string) {
    this._fields['notes'] = value;

    return this;
  }

  get canceledBy(): string | null {
    return this._fields['canceledBy'] ?? null;
  }
  
  getCanceledBy(): string | null {
      return this._fields['canceledBy'] ?? null;
  }

  private setCanceledBy(value: null | string) {
    this._fields['canceledBy'] = value;

    return this;
  }

  get cancelCategory(): string | null {
    return this._fields['cancelCategory'] ?? null;
  }
  
  getCancelCategory(): string | null {
      return this._fields['cancelCategory'] ?? null;
  }

  private setCancelCategory(value: null | string) {
    this._fields['cancelCategory'] = value;

    return this;
  }

  get cancelDescription(): string | null {
    return this._fields['cancelDescription'] ?? null;
  }
  
  getCancelDescription(): string | null {
      return this._fields['cancelDescription'] ?? null;
  }

  private setCancelDescription(value: null | string) {
    this._fields['cancelDescription'] = value;

    return this;
  }

  get revision(): number | null {
    return this._fields['revision'] ?? null;
  }
  
  getRevision(): number | null {
      return this._fields['revision'] ?? null;
  }

  private setRevision(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['revision'] = value;

    return this;
  }

  get riskMetadata(): RiskMetadata | null {
    return this._fields['riskMetadata'] ?? null;
  }
  
  getRiskMetadata(): RiskMetadata | null {
      return this._fields['riskMetadata'] ?? null;
  }

  setRiskMetadata(value: null | RiskMetadata | any) {
    if (value !== null && !(value instanceof RiskMetadata)) {
      value = new RiskMetadata(value);
    }

    this._fields['riskMetadata'] = value;

    return this;
  }

  get billingPortalToken(): string | null {
    return this._fields['billingPortalToken'] ?? null;
  }
  
  getBillingPortalToken(): string | null {
      return this._fields['billingPortalToken'] ?? null;
  }

  private setBillingPortalToken(value: null | string) {
    this._fields['billingPortalToken'] = value;

    return this;
  }

  get customFields(): Record<string, any> | null {
    return this._fields['customFields'] ?? null;
  }
  
  getCustomFields(): Record<string, any> | null {
      return this._fields['customFields'] ?? null;
  }

  setCustomFields(value: null | Record<string, any>) {
    this._fields['customFields'] = value;

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

  get embedded(): SubscriptionEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): SubscriptionEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | SubscriptionEmbedded | any) {
    if (value !== null && !(value instanceof SubscriptionEmbedded)) {
      value = new SubscriptionEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      orderType: 'subscription-order',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'renewalReminderTime')) {
      data['renewalReminderTime'] = this['renewalReminderTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'renewalReminderNumber')) {
      data['renewalReminderNumber'] = this['renewalReminderNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'trialReminderTime')) {
      data['trialReminderTime'] = this['trialReminderTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'trialReminderNumber')) {
      data['trialReminderNumber'] = this['trialReminderNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'abandonReminderTime')) {
      data['abandonReminderTime'] = this['abandonReminderTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'abandonReminderNumber')) {
      data['abandonReminderNumber'] = this['abandonReminderNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'inTrial')) {
      data['inTrial'] = this['inTrial'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'trial')) {
      data['trial'] = this['trial']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isTrialOnly')) {
      data['isTrialOnly'] = this['isTrialOnly'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isTrialConverted')) {
      data['isTrialConverted'] = this['isTrialConverted'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'trialConversionTime')) {
      data['trialConversionTime'] = this['trialConversionTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceTimeShift')) {
      data['invoiceTimeShift'] = this['invoiceTimeShift']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recurringInterval')) {
      data['recurringInterval'] = this['recurringInterval']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'autopay')) {
      data['autopay'] = this['autopay'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'startTime')) {
      data['startTime'] = this['startTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'churnTime')) {
      data['churnTime'] = this['churnTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'renewalTime')) {
      data['renewalTime'] = this['renewalTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rebillNumber')) {
      data['rebillNumber'] = this['rebillNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lineItems')) {
      data['lineItems'] = this['lineItems'] !== null
          ? this._fields['lineItems'].map((subscriptionLineItems: SubscriptionLineItems) => subscriptionLineItems.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lineItemSubtotal')) {
      data['lineItemSubtotal'] = this['lineItemSubtotal']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentId')) {
      data['paymentInstrumentId'] = this['paymentInstrumentId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingStatus')) {
      data['billingStatus'] = this['billingStatus'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'initialInvoiceId')) {
      data['initialInvoiceId'] = this['initialInvoiceId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recentInvoiceId')) {
      data['recentInvoiceId'] = this['recentInvoiceId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'].map(
          (subscriptionOrOneTimeSaleItem: SubscriptionOrOneTimeSaleItem) => subscriptionOrOneTimeSaleItem.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'deliveryAddress')) {
      data['deliveryAddress'] = this['deliveryAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'activationTime')) {
      data['activationTime'] = this['activationTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'voidTime')) {
      data['voidTime'] = this['voidTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'abandonTime')) {
      data['abandonTime'] = this['abandonTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'delinquencyPeriod')) {
      data['delinquencyPeriod'] = this['delinquencyPeriod'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'couponIds')) {
      data['couponIds'] = this['couponIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'poNumber')) {
      data['poNumber'] = this['poNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shipping')) {
      data['shipping'] = this['shipping']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notes')) {
      data['notes'] = this['notes'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'canceledBy')) {
      data['canceledBy'] = this['canceledBy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cancelCategory')) {
      data['cancelCategory'] = this['cancelCategory'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cancelDescription')) {
      data['cancelDescription'] = this['cancelDescription'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskMetadata')) {
      data['riskMetadata'] = this['riskMetadata']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingPortalToken')) {
      data['billingPortalToken'] = this['billingPortalToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'embedded')) {
      data['_embedded'] = this['embedded']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
