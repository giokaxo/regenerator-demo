import { PaymentInstrument } from '../models/payment-instrument';
import ContactObject from '../models/contact-object';
import RiskMetadata from '../models/risk-metadata';
import BankAccountEmbedded from '../models/bank-account-embedded';
import ResourceLink from '../models/resource-link';

export default class BankAccount implements PaymentInstrument {
  get [PaymentInstrument](): true {
    return true;
  }

  ACCOUNT_NUMBER_TYPE_BBAN = 'BBAN';

  ACCOUNT_NUMBER_TYPE_IBAN = 'IBAN';

  ACCOUNT_TYPE_CHECKING = 'checking';

  ACCOUNT_TYPE_SAVINGS = 'savings';

  ACCOUNT_TYPE_OTHER = 'other';

  STATUS_ACTIVE = 'active';

  STATUS_DEACTIVATED = 'deactivated';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bankName')) {
      this.setBankName(data['bankName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'routingNumber')) {
      this.setRoutingNumber(data['routingNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountNumberType')) {
      this.setAccountNumberType(data['accountNumberType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountType')) {
      this.setAccountType(data['accountType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bic')) {
      this.setBic(data['bic']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fingerprint')) {
      this.setFingerprint(data['fingerprint']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'last4')) {
      this.setLast4(data['last4']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'stickyGatewayAccountId')) {
      this.setStickyGatewayAccountId(data['stickyGatewayAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskMetadata')) {
      this.setRiskMetadata(data['riskMetadata']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useAsBackup')) {
      this.setUseAsBackup(data['useAsBackup']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
    }
  }


  public get method() {
    return 'ach';
  }

  public getMethod() {
    return 'ach';
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

  get customerId(): string | null {
    return this._fields['customerId'] ?? null;
  }
  
  getCustomerId(): string | null {
      return this._fields['customerId'] ?? null;
  }

  setCustomerId(value: null | string) {
    this._fields['customerId'] = value;

    return this;
  }

  get bankName(): string | null {
    return this._fields['bankName'] ?? null;
  }
  
  getBankName(): string | null {
      return this._fields['bankName'] ?? null;
  }

  setBankName(value: null | string) {
    this._fields['bankName'] = value;

    return this;
  }

  get routingNumber(): string | null {
    return this._fields['routingNumber'] ?? null;
  }
  
  getRoutingNumber(): string | null {
      return this._fields['routingNumber'] ?? null;
  }

  setRoutingNumber(value: null | string) {
    this._fields['routingNumber'] = value;

    return this;
  }

  get accountNumberType(): string | null {
    return this._fields['accountNumberType'] ?? null;
  }
  
  getAccountNumberType(): string | null {
      return this._fields['accountNumberType'] ?? null;
  }

  setAccountNumberType(value: null | string) {
    this._fields['accountNumberType'] = value;

    return this;
  }

  get accountType(): string | null {
    return this._fields['accountType'] ?? null;
  }
  
  getAccountType(): string | null {
      return this._fields['accountType'] ?? null;
  }

  setAccountType(value: null | string) {
    this._fields['accountType'] = value;

    return this;
  }

  get bic(): string | null {
    return this._fields['bic'] ?? null;
  }
  
  getBic(): string | null {
      return this._fields['bic'] ?? null;
  }

  setBic(value: null | string) {
    this._fields['bic'] = value;

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

  get fingerprint(): string | null {
    return this._fields['fingerprint'] ?? null;
  }
  
  getFingerprint(): string | null {
      return this._fields['fingerprint'] ?? null;
  }

  private setFingerprint(value: null | string) {
    this._fields['fingerprint'] = value;

    return this;
  }

  get last4(): string | null {
    return this._fields['last4'] ?? null;
  }
  
  getLast4(): string | null {
      return this._fields['last4'] ?? null;
  }

  private setLast4(value: null | string) {
    this._fields['last4'] = value;

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

  get stickyGatewayAccountId(): string | null {
    return this._fields['stickyGatewayAccountId'] ?? null;
  }
  
  getStickyGatewayAccountId(): string | null {
      return this._fields['stickyGatewayAccountId'] ?? null;
  }

  private setStickyGatewayAccountId(value: null | string) {
    this._fields['stickyGatewayAccountId'] = value;

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

  get useAsBackup(): boolean | null {
    return this._fields['useAsBackup'] ?? null;
  }
  
  getUseAsBackup(): boolean | null {
      return this._fields['useAsBackup'] ?? null;
  }

  setUseAsBackup(value: null | boolean) {
    this._fields['useAsBackup'] = value;

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

  get embedded(): BankAccountEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): BankAccountEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | BankAccountEmbedded | any) {
    if (value !== null && !(value instanceof BankAccountEmbedded)) {
      value = new BankAccountEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'ach',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bankName')) {
      data['bankName'] = this['bankName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'routingNumber')) {
      data['routingNumber'] = this['routingNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountNumberType')) {
      data['accountNumberType'] = this['accountNumberType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountType')) {
      data['accountType'] = this['accountType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bic')) {
      data['bic'] = this['bic'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fingerprint')) {
      data['fingerprint'] = this['fingerprint'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'last4')) {
      data['last4'] = this['last4'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'stickyGatewayAccountId')) {
      data['stickyGatewayAccountId'] = this['stickyGatewayAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskMetadata')) {
      data['riskMetadata'] = this['riskMetadata']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useAsBackup')) {
      data['useAsBackup'] = this['useAsBackup'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
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
