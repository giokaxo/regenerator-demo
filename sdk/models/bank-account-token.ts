import BankAccountInstrumentFactory from '../factories/bank-account-instrument-factory';
import { CompositeToken } from '../models/composite-token';
import { BankAccountInstrument } from '../models/bank-account-instrument';
import ContactObject from '../models/contact-object';
import RiskMetadata from '../models/risk-metadata';
import LeadSource from '../models/lead-source';
import ResourceLink from '../models/resource-link';

export default class BankAccountToken implements CompositeToken {
  get [CompositeToken](): true {
    return true;
  }

  METHOD_ACH = 'ach';

  METHOD_ECHECK = 'echeck';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'method')) {
      this.setMethod(data['method']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrument')) {
      this.setPaymentInstrument(data['paymentInstrument']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isUsed')) {
      this.setIsUsed(data['isUsed']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskMetadata')) {
      this.setRiskMetadata(data['riskMetadata']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'leadSource')) {
      this.setLeadSource(data['leadSource']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'usageTime')) {
      this.setUsageTime(data['usageTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expirationTime')) {
      this.setExpirationTime(data['expirationTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
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

  get paymentInstrument(): BankAccountInstrument {
    return this._fields['paymentInstrument'];
  }
  
  getPaymentInstrument(): BankAccountInstrument {
      return this._fields['paymentInstrument'];
  }

  setPaymentInstrument(value: BankAccountInstrument | any) {
    if (!(value[BankAccountInstrument])) {
      value = BankAccountInstrumentFactory.from(value);
    }

    this._fields['paymentInstrument'] = value;

    return this;
  }

  get billingAddress(): ContactObject {
    return this._fields['billingAddress'];
  }
  
  getBillingAddress(): ContactObject {
      return this._fields['billingAddress'];
  }

  setBillingAddress(value: ContactObject | any) {
    if (!(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['billingAddress'] = value;

    return this;
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

  get isUsed(): boolean | null {
    return this._fields['isUsed'] ?? null;
  }
  
  getIsUsed(): boolean | null {
      return this._fields['isUsed'] ?? null;
  }

  private setIsUsed(value: null | boolean) {
    this._fields['isUsed'] = value;

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

  get leadSource(): LeadSource | null {
    return this._fields['leadSource'] ?? null;
  }
  
  getLeadSource(): LeadSource | null {
      return this._fields['leadSource'] ?? null;
  }

  setLeadSource(value: null | LeadSource | any) {
    if (value !== null && !(value instanceof LeadSource)) {
      value = new LeadSource(value);
    }

    this._fields['leadSource'] = value;

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

  get usageTime(): Date | null {
    return this._fields['usageTime'] ?? null;
  }
  
  getUsageTime(): Date | null {
      return this._fields['usageTime'] ?? null;
  }

  private setUsageTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['usageTime'] = value;

    return this;
  }

  get expirationTime(): Date | null {
    return this._fields['expirationTime'] ?? null;
  }
  
  getExpirationTime(): Date | null {
      return this._fields['expirationTime'] ?? null;
  }

  private setExpirationTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['expirationTime'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'method')) {
      data['method'] = this['method'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrument')) {
      data['paymentInstrument'] = this['paymentInstrument'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isUsed')) {
      data['isUsed'] = this['isUsed'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskMetadata')) {
      data['riskMetadata'] = this['riskMetadata']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'leadSource')) {
      data['leadSource'] = this['leadSource']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'usageTime')) {
      data['usageTime'] = this['usageTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expirationTime')) {
      data['expirationTime'] = this['expirationTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
