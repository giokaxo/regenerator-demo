import PaymentInstructionFactory from '../factories/payment-instruction-factory';
import { PaymentInstruction } from '../models/payment-instruction';
import ContactObject from '../models/contact-object';
import RiskMetadata from '../models/risk-metadata';

export default class PostPayoutRequest {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceIds')) {
      this.setInvoiceIds(data['invoiceIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstruction')) {
      this.setPaymentInstruction(data['paymentInstruction']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'requestId')) {
      this.setRequestId(data['requestId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'gatewayAccountId')) {
      this.setGatewayAccountId(data['gatewayAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notificationUrl')) {
      this.setNotificationUrl(data['notificationUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'redirectUrl')) {
      this.setRedirectUrl(data['redirectUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskMetadata')) {
      this.setRiskMetadata(data['riskMetadata']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isProcessedOutside')) {
      this.setIsProcessedOutside(data['isProcessedOutside']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isMerchantInitiated')) {
      this.setIsMerchantInitiated(data['isMerchantInitiated']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'processedTime')) {
      this.setProcessedTime(data['processedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payoutRequestId')) {
      this.setPayoutRequestId(data['payoutRequestId']);
    }
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

  get amount(): number {
    return this._fields['amount'];
  }
  
  getAmount(): number {
      return this._fields['amount'];
  }

  setAmount(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get invoiceIds(): Array<any> | null {
    return this._fields['invoiceIds'] ?? null;
  }
  
  getInvoiceIds(): Array<any> | null {
      return this._fields['invoiceIds'] ?? null;
  }

  setInvoiceIds(value: null | Array<any>) {
    this._fields['invoiceIds'] = value;

    return this;
  }

  get paymentInstruction(): PaymentInstruction | null {
    return this._fields['paymentInstruction'] ?? null;
  }
  
  getPaymentInstruction(): PaymentInstruction | null {
      return this._fields['paymentInstruction'] ?? null;
  }

  setPaymentInstruction(value: null | PaymentInstruction | any) {
    if (value !== null && !(value[PaymentInstruction])) {
      value = PaymentInstructionFactory.from(value);
    }

    this._fields['paymentInstruction'] = value;

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

  get requestId(): string | null {
    return this._fields['requestId'] ?? null;
  }
  
  getRequestId(): string | null {
      return this._fields['requestId'] ?? null;
  }

  setRequestId(value: null | string) {
    this._fields['requestId'] = value;

    return this;
  }

  get gatewayAccountId(): string | null {
    return this._fields['gatewayAccountId'] ?? null;
  }
  
  getGatewayAccountId(): string | null {
      return this._fields['gatewayAccountId'] ?? null;
  }

  setGatewayAccountId(value: null | string) {
    this._fields['gatewayAccountId'] = value;

    return this;
  }

  get description(): string | null {
    return this._fields['description'] ?? null;
  }
  
  getDescription(): string | null {
      return this._fields['description'] ?? null;
  }

  setDescription(value: null | string) {
    this._fields['description'] = value;

    return this;
  }

  get notificationUrl(): string | null {
    return this._fields['notificationUrl'] ?? null;
  }
  
  getNotificationUrl(): string | null {
      return this._fields['notificationUrl'] ?? null;
  }

  setNotificationUrl(value: null | string) {
    this._fields['notificationUrl'] = value;

    return this;
  }

  get redirectUrl(): string | null {
    return this._fields['redirectUrl'] ?? null;
  }
  
  getRedirectUrl(): string | null {
      return this._fields['redirectUrl'] ?? null;
  }

  setRedirectUrl(value: null | string) {
    this._fields['redirectUrl'] = value;

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

  get isProcessedOutside(): boolean | null {
    return this._fields['isProcessedOutside'] ?? null;
  }
  
  getIsProcessedOutside(): boolean | null {
      return this._fields['isProcessedOutside'] ?? null;
  }

  setIsProcessedOutside(value: null | boolean) {
    this._fields['isProcessedOutside'] = value;

    return this;
  }

  get isMerchantInitiated(): boolean | null {
    return this._fields['isMerchantInitiated'] ?? null;
  }
  
  getIsMerchantInitiated(): boolean | null {
      return this._fields['isMerchantInitiated'] ?? null;
  }

  setIsMerchantInitiated(value: null | boolean) {
    this._fields['isMerchantInitiated'] = value;

    return this;
  }

  get processedTime(): Date | null {
    return this._fields['processedTime'] ?? null;
  }
  
  getProcessedTime(): Date | null {
      return this._fields['processedTime'] ?? null;
  }

  setProcessedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['processedTime'] = value;

    return this;
  }

  get payoutRequestId(): string | null {
    return this._fields['payoutRequestId'] ?? null;
  }
  
  getPayoutRequestId(): string | null {
      return this._fields['payoutRequestId'] ?? null;
  }

  setPayoutRequestId(value: null | string) {
    this._fields['payoutRequestId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceIds')) {
      data['invoiceIds'] = this['invoiceIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstruction')) {
      data['paymentInstruction'] = this['paymentInstruction']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'requestId')) {
      data['requestId'] = this['requestId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gatewayAccountId')) {
      data['gatewayAccountId'] = this['gatewayAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notificationUrl')) {
      data['notificationUrl'] = this['notificationUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'redirectUrl')) {
      data['redirectUrl'] = this['redirectUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskMetadata')) {
      data['riskMetadata'] = this['riskMetadata']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isProcessedOutside')) {
      data['isProcessedOutside'] = this['isProcessedOutside'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isMerchantInitiated')) {
      data['isMerchantInitiated'] = this['isMerchantInitiated'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'processedTime')) {
      data['processedTime'] = this['processedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payoutRequestId')) {
      data['payoutRequestId'] = this['payoutRequestId'];
    }

    return data;
  }
}
