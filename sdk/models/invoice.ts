import ShippingFactory from '../factories/shipping-factory';
import TaxesFactory from '../factories/taxes-factory';
import { Shipping } from '../models/shipping';
import { Taxes } from '../models/taxes';
import InvoiceOrganizationTaxIdNumber from '../models/invoice-organization-tax-id-number';
import InvoiceCustomerTaxIdNumber from '../models/invoice-customer-tax-id-number';
import ContactObject from '../models/contact-object';
import InvoiceRetryInstruction from '../models/invoice-retry-instruction';
import InvoiceEmbedded from '../models/invoice-embedded';
import InvoiceItem from '../models/invoice-item';
import InvoiceDiscounts from '../models/invoice-discounts';
import Transaction from '../models/transaction';
import ResourceLink from '../models/resource-link';

export default class Invoice {
  STATUS_DRAFT = 'draft';

  STATUS_QUOTATION = 'quotation';

  STATUS_UNPAID = 'unpaid';

  STATUS_PAID = 'paid';

  STATUS_PARTIALLY_PAID = 'partially-paid';

  STATUS_PAST_DUE = 'past-due';

  STATUS_ABANDONED = 'abandoned';

  STATUS_VOIDED = 'voided';

  STATUS_PARTIALLY_REFUNDED = 'partially-refunded';

  STATUS_REFUNDED = 'refunded';

  STATUS_DISPUTED = 'disputed';

  TYPE_INITIAL = 'initial';

  TYPE_RENEWAL = 'renewal';

  TYPE_INTERIM = 'interim';

  TYPE_CANCELLATION = 'cancellation';

  TYPE_ONE_TIME = 'one-time';

  TYPE_REFUND = 'refund';

  TYPE_CHARGE = 'charge';

  TYPE_ONE_TIME_SALE = 'one-time-sale';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceNumber')) {
      this.setInvoiceNumber(data['invoiceNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'orderId')) {
      this.setOrderId(data['orderId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subscriptionId')) {
      this.setSubscriptionId(data['subscriptionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'quoteId')) {
      this.setQuoteId(data['quoteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amountDue')) {
      this.setAmountDue(data['amountDue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subtotalAmount')) {
      this.setSubtotalAmount(data['subtotalAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'discountAmount')) {
      this.setDiscountAmount(data['discountAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'shipping')) {
      this.setShipping(data['shipping']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tax')) {
      this.setTax(data['tax']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationTaxIdNumber')) {
      this.setOrganizationTaxIdNumber(data['organizationTaxIdNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerTaxIdNumber')) {
      this.setCustomerTaxIdNumber(data['customerTaxIdNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'deliveryAddress')) {
      this.setDeliveryAddress(data['deliveryAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'poNumber')) {
      this.setPoNumber(data['poNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notes')) {
      this.setNotes(data['notes']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      this.setItems(data['items']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'discounts')) {
      this.setDiscounts(data['discounts']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'autopayScheduledTime')) {
      this.setAutopayScheduledTime(data['autopayScheduledTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'autopayRetryNumber')) {
      this.setAutopayRetryNumber(data['autopayRetryNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'delinquentCollectionPeriod')) {
      this.setDelinquentCollectionPeriod(data['delinquentCollectionPeriod']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'collectionPeriod')) {
      this.setCollectionPeriod(data['collectionPeriod']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'abandonedTime')) {
      this.setAbandonedTime(data['abandonedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'voidedTime')) {
      this.setVoidedTime(data['voidedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paidTime')) {
      this.setPaidTime(data['paidTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dueTime')) {
      this.setDueTime(data['dueTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'issuedTime')) {
      this.setIssuedTime(data['issuedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentFormUrl')) {
      this.setPaymentFormUrl(data['paymentFormUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transactions')) {
      this.setTransactions(data['transactions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'retryInstruction')) {
      this.setRetryInstruction(data['retryInstruction']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dueReminderTime')) {
      this.setDueReminderTime(data['dueReminderTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dueReminderNumber')) {
      this.setDueReminderNumber(data['dueReminderNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'delinquencyTime')) {
      this.setDelinquencyTime(data['delinquencyTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
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

  get invoiceNumber(): number | null {
    return this._fields['invoiceNumber'] ?? null;
  }
  
  getInvoiceNumber(): number | null {
      return this._fields['invoiceNumber'] ?? null;
  }

  private setInvoiceNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['invoiceNumber'] = value;

    return this;
  }

  get orderId(): string | null {
    return this._fields['orderId'] ?? null;
  }
  
  getOrderId(): string | null {
      return this._fields['orderId'] ?? null;
  }

  private setOrderId(value: null | string) {
    this._fields['orderId'] = value;

    return this;
  }

  get subscriptionId(): string | null {
    return this._fields['subscriptionId'] ?? null;
  }
  
  getSubscriptionId(): string | null {
      return this._fields['subscriptionId'] ?? null;
  }

  private setSubscriptionId(value: null | string) {
    this._fields['subscriptionId'] = value;

    return this;
  }

  get quoteId(): string | null {
    return this._fields['quoteId'] ?? null;
  }
  
  getQuoteId(): string | null {
      return this._fields['quoteId'] ?? null;
  }

  private setQuoteId(value: null | string) {
    this._fields['quoteId'] = value;

    return this;
  }

  get currency(): string {
    return this._fields['currency'];
  }
  
  getCurrency(): string {
      return this._fields['currency'];
  }

  setCurrency(value: string) {
    this._fields['currency'] = value;

    return this;
  }

  get amount(): number | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): number | null {
      return this._fields['amount'] ?? null;
  }

  private setAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get amountDue(): number | null {
    return this._fields['amountDue'] ?? null;
  }
  
  getAmountDue(): number | null {
      return this._fields['amountDue'] ?? null;
  }

  private setAmountDue(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amountDue'] = value;

    return this;
  }

  get subtotalAmount(): number | null {
    return this._fields['subtotalAmount'] ?? null;
  }
  
  getSubtotalAmount(): number | null {
      return this._fields['subtotalAmount'] ?? null;
  }

  private setSubtotalAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['subtotalAmount'] = value;

    return this;
  }

  get discountAmount(): number | null {
    return this._fields['discountAmount'] ?? null;
  }
  
  getDiscountAmount(): number | null {
      return this._fields['discountAmount'] ?? null;
  }

  private setDiscountAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['discountAmount'] = value;

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

  get tax(): Taxes | null {
    return this._fields['tax'] ?? null;
  }
  
  getTax(): Taxes | null {
      return this._fields['tax'] ?? null;
  }

  setTax(value: null | Taxes | any) {
    if (value !== null && !(value[Taxes])) {
      value = TaxesFactory.from(value);
    }

    this._fields['tax'] = value;

    return this;
  }

  get organizationTaxIdNumber(): InvoiceOrganizationTaxIdNumber | null {
    return this._fields['organizationTaxIdNumber'] ?? null;
  }
  
  getOrganizationTaxIdNumber(): InvoiceOrganizationTaxIdNumber | null {
      return this._fields['organizationTaxIdNumber'] ?? null;
  }

  setOrganizationTaxIdNumber(value: null | InvoiceOrganizationTaxIdNumber | any) {
    if (value !== null && !(value instanceof InvoiceOrganizationTaxIdNumber)) {
      value = new InvoiceOrganizationTaxIdNumber(value);
    }

    this._fields['organizationTaxIdNumber'] = value;

    return this;
  }

  get customerTaxIdNumber(): InvoiceCustomerTaxIdNumber | null {
    return this._fields['customerTaxIdNumber'] ?? null;
  }
  
  getCustomerTaxIdNumber(): InvoiceCustomerTaxIdNumber | null {
      return this._fields['customerTaxIdNumber'] ?? null;
  }

  setCustomerTaxIdNumber(value: null | InvoiceCustomerTaxIdNumber | any) {
    if (value !== null && !(value instanceof InvoiceCustomerTaxIdNumber)) {
      value = new InvoiceCustomerTaxIdNumber(value);
    }

    this._fields['customerTaxIdNumber'] = value;

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

  get items(): Array<any> | null {
    return this._fields['items'] ?? null;
  }
  
  getItems(): Array<any> | null {
      return this._fields['items'] ?? null;
  }

  private setItems(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof InvoiceItem ? value : new InvoiceItem(value),
    ) : null;

    this._fields['items'] = value;

    return this;
  }

  get discounts(): Array<any> | null {
    return this._fields['discounts'] ?? null;
  }
  
  getDiscounts(): Array<any> | null {
      return this._fields['discounts'] ?? null;
  }

  private setDiscounts(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof InvoiceDiscounts ? value : new InvoiceDiscounts(value),
    ) : null;

    this._fields['discounts'] = value;

    return this;
  }

  get autopayScheduledTime(): Date | null {
    return this._fields['autopayScheduledTime'] ?? null;
  }
  
  getAutopayScheduledTime(): Date | null {
      return this._fields['autopayScheduledTime'] ?? null;
  }

  setAutopayScheduledTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['autopayScheduledTime'] = value;

    return this;
  }

  get autopayRetryNumber(): number | null {
    return this._fields['autopayRetryNumber'] ?? null;
  }
  
  getAutopayRetryNumber(): number | null {
      return this._fields['autopayRetryNumber'] ?? null;
  }

  private setAutopayRetryNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['autopayRetryNumber'] = value;

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

  get delinquentCollectionPeriod(): number | null {
    return this._fields['delinquentCollectionPeriod'] ?? null;
  }
  
  getDelinquentCollectionPeriod(): number | null {
      return this._fields['delinquentCollectionPeriod'] ?? null;
  }

  private setDelinquentCollectionPeriod(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['delinquentCollectionPeriod'] = value;

    return this;
  }

  get collectionPeriod(): number | null {
    return this._fields['collectionPeriod'] ?? null;
  }
  
  getCollectionPeriod(): number | null {
      return this._fields['collectionPeriod'] ?? null;
  }

  private setCollectionPeriod(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['collectionPeriod'] = value;

    return this;
  }

  get abandonedTime(): Date | null {
    return this._fields['abandonedTime'] ?? null;
  }
  
  getAbandonedTime(): Date | null {
      return this._fields['abandonedTime'] ?? null;
  }

  private setAbandonedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['abandonedTime'] = value;

    return this;
  }

  get voidedTime(): Date | null {
    return this._fields['voidedTime'] ?? null;
  }
  
  getVoidedTime(): Date | null {
      return this._fields['voidedTime'] ?? null;
  }

  private setVoidedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['voidedTime'] = value;

    return this;
  }

  get paidTime(): Date | null {
    return this._fields['paidTime'] ?? null;
  }
  
  getPaidTime(): Date | null {
      return this._fields['paidTime'] ?? null;
  }

  private setPaidTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['paidTime'] = value;

    return this;
  }

  get dueTime(): Date | null {
    return this._fields['dueTime'] ?? null;
  }
  
  getDueTime(): Date | null {
      return this._fields['dueTime'] ?? null;
  }

  setDueTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['dueTime'] = value;

    return this;
  }

  get issuedTime(): Date | null {
    return this._fields['issuedTime'] ?? null;
  }
  
  getIssuedTime(): Date | null {
      return this._fields['issuedTime'] ?? null;
  }

  private setIssuedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['issuedTime'] = value;

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

  get paymentFormUrl(): string | null {
    return this._fields['paymentFormUrl'] ?? null;
  }
  
  getPaymentFormUrl(): string | null {
      return this._fields['paymentFormUrl'] ?? null;
  }

  private setPaymentFormUrl(value: null | string) {
    this._fields['paymentFormUrl'] = value;

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

  get transactions(): Array<any> | null {
    return this._fields['transactions'] ?? null;
  }
  
  getTransactions(): Array<any> | null {
      return this._fields['transactions'] ?? null;
  }

  private setTransactions(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Transaction ? value : new Transaction(value),
    ) : null;

    this._fields['transactions'] = value;

    return this;
  }

  get retryInstruction(): InvoiceRetryInstruction | null {
    return this._fields['retryInstruction'] ?? null;
  }
  
  getRetryInstruction(): InvoiceRetryInstruction | null {
      return this._fields['retryInstruction'] ?? null;
  }

  setRetryInstruction(value: null | InvoiceRetryInstruction | any) {
    if (value !== null && !(value instanceof InvoiceRetryInstruction)) {
      value = new InvoiceRetryInstruction(value);
    }

    this._fields['retryInstruction'] = value;

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

  get dueReminderTime(): Date | null {
    return this._fields['dueReminderTime'] ?? null;
  }
  
  getDueReminderTime(): Date | null {
      return this._fields['dueReminderTime'] ?? null;
  }

  private setDueReminderTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['dueReminderTime'] = value;

    return this;
  }

  get dueReminderNumber(): number | null {
    return this._fields['dueReminderNumber'] ?? null;
  }
  
  getDueReminderNumber(): number | null {
      return this._fields['dueReminderNumber'] ?? null;
  }

  private setDueReminderNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['dueReminderNumber'] = value;

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

  get delinquencyTime(): Date | null {
    return this._fields['delinquencyTime'] ?? null;
  }
  
  getDelinquencyTime(): Date | null {
      return this._fields['delinquencyTime'] ?? null;
  }

  setDelinquencyTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['delinquencyTime'] = value;

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

  get embedded(): InvoiceEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): InvoiceEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | InvoiceEmbedded | any) {
    if (value !== null && !(value instanceof InvoiceEmbedded)) {
      value = new InvoiceEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceNumber')) {
      data['invoiceNumber'] = this['invoiceNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'orderId')) {
      data['orderId'] = this['orderId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subscriptionId')) {
      data['subscriptionId'] = this['subscriptionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quoteId')) {
      data['quoteId'] = this['quoteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amountDue')) {
      data['amountDue'] = this['amountDue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subtotalAmount')) {
      data['subtotalAmount'] = this['subtotalAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'discountAmount')) {
      data['discountAmount'] = this['discountAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shipping')) {
      data['shipping'] = this['shipping']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tax')) {
      data['tax'] = this['tax']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationTaxIdNumber')) {
      data['organizationTaxIdNumber'] = this['organizationTaxIdNumber']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerTaxIdNumber')) {
      data['customerTaxIdNumber'] = this['customerTaxIdNumber']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'deliveryAddress')) {
      data['deliveryAddress'] = this['deliveryAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'poNumber')) {
      data['poNumber'] = this['poNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notes')) {
      data['notes'] = this['notes'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'] !== null
          ? this._fields['items'].map((invoiceItem: InvoiceItem) => invoiceItem.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'discounts')) {
      data['discounts'] = this['discounts'] !== null
          ? this._fields['discounts'].map((invoiceDiscounts: InvoiceDiscounts) => invoiceDiscounts.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'autopayScheduledTime')) {
      data['autopayScheduledTime'] = this['autopayScheduledTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'autopayRetryNumber')) {
      data['autopayRetryNumber'] = this['autopayRetryNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'delinquentCollectionPeriod')) {
      data['delinquentCollectionPeriod'] = this['delinquentCollectionPeriod'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'collectionPeriod')) {
      data['collectionPeriod'] = this['collectionPeriod'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'abandonedTime')) {
      data['abandonedTime'] = this['abandonedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'voidedTime')) {
      data['voidedTime'] = this['voidedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paidTime')) {
      data['paidTime'] = this['paidTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dueTime')) {
      data['dueTime'] = this['dueTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'issuedTime')) {
      data['issuedTime'] = this['issuedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentFormUrl')) {
      data['paymentFormUrl'] = this['paymentFormUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactions')) {
      data['transactions'] = this['transactions'] !== null
          ? this._fields['transactions'].map((transaction: Transaction) => transaction.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'retryInstruction')) {
      data['retryInstruction'] = this['retryInstruction']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dueReminderTime')) {
      data['dueReminderTime'] = this['dueReminderTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dueReminderNumber')) {
      data['dueReminderNumber'] = this['dueReminderNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'delinquencyTime')) {
      data['delinquencyTime'] = this['delinquencyTime']?.toISOString() ?? null;
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
