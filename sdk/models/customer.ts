import CustomerDefaultPaymentInstrumentFactory from '../factories/customer-default-payment-instrument-factory';
import { CustomerDefaultPaymentInstrument } from '../models/customer-default-payment-instrument';
import ContactObject from '../models/contact-object';
import Company from '../models/company';
import CustomerAverageValue from '../models/customer-average-value';
import CustomerLifetimeRevenue from '../models/customer-lifetime-revenue';
import CustomerEmbedded from '../models/customer-embedded';
import Tag from '../models/tag';
import TaxNumber from '../models/tax-number';
import ResourceLink from '../models/resource-link';

export default class Customer {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'email')) {
      this.setEmail(data['email']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'firstName')) {
      this.setFirstName(data['firstName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lastName')) {
      this.setLastName(data['lastName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentToken')) {
      this.setPaymentToken(data['paymentToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'defaultPaymentInstrument')) {
      this.setDefaultPaymentInstrument(data['defaultPaymentInstrument']);
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
    if (Object.prototype.hasOwnProperty.call(data, 'primaryAddress')) {
      this.setPrimaryAddress(data['primaryAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'company')) {
      this.setCompany(data['company']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'averageValue')) {
      this.setAverageValue(data['averageValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentCount')) {
      this.setPaymentCount(data['paymentCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lastPaymentTime')) {
      this.setLastPaymentTime(data['lastPaymentTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lifetimeRevenue')) {
      this.setLifetimeRevenue(data['lifetimeRevenue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceCount')) {
      this.setInvoiceCount(data['invoiceCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tags')) {
      this.setTags(data['tags']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isEddRequired')) {
      this.setIsEddRequired(data['isEddRequired']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasFulfilledKyc')) {
      this.setHasFulfilledKyc(data['hasFulfilledKyc']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'locale')) {
      this.setLocale(data['locale']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxNumbers')) {
      this.setTaxNumbers(data['taxNumbers']);
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

  get email(): string | null {
    return this._fields['email'] ?? null;
  }
  
  getEmail(): string | null {
      return this._fields['email'] ?? null;
  }

  private setEmail(value: null | string) {
    this._fields['email'] = value;

    return this;
  }

  get firstName(): string | null {
    return this._fields['firstName'] ?? null;
  }
  
  getFirstName(): string | null {
      return this._fields['firstName'] ?? null;
  }

  private setFirstName(value: null | string) {
    this._fields['firstName'] = value;

    return this;
  }

  get lastName(): string | null {
    return this._fields['lastName'] ?? null;
  }
  
  getLastName(): string | null {
      return this._fields['lastName'] ?? null;
  }

  private setLastName(value: null | string) {
    this._fields['lastName'] = value;

    return this;
  }

  get websiteId(): string | null {
    return this._fields['websiteId'] ?? null;
  }
  
  getWebsiteId(): string | null {
      return this._fields['websiteId'] ?? null;
  }

  setWebsiteId(value: null | string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get paymentToken(): string | null {
    return this._fields['paymentToken'] ?? null;
  }
  
  getPaymentToken(): string | null {
      return this._fields['paymentToken'] ?? null;
  }

  setPaymentToken(value: null | string) {
    this._fields['paymentToken'] = value;

    return this;
  }

  get defaultPaymentInstrument(): CustomerDefaultPaymentInstrument | null {
    return this._fields['defaultPaymentInstrument'] ?? null;
  }
  
  getDefaultPaymentInstrument(): CustomerDefaultPaymentInstrument | null {
      return this._fields['defaultPaymentInstrument'] ?? null;
  }

  setDefaultPaymentInstrument(value: null | CustomerDefaultPaymentInstrument | any) {
    if (value !== null && !(value[CustomerDefaultPaymentInstrument])) {
      value = CustomerDefaultPaymentInstrumentFactory.from(value);
    }

    this._fields['defaultPaymentInstrument'] = value;

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

  get primaryAddress(): ContactObject | null {
    return this._fields['primaryAddress'] ?? null;
  }
  
  getPrimaryAddress(): ContactObject | null {
      return this._fields['primaryAddress'] ?? null;
  }

  setPrimaryAddress(value: null | ContactObject | any) {
    if (value !== null && !(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['primaryAddress'] = value;

    return this;
  }

  get company(): Company | null {
    return this._fields['company'] ?? null;
  }
  
  getCompany(): Company | null {
      return this._fields['company'] ?? null;
  }

  setCompany(value: null | Company | any) {
    if (value !== null && !(value instanceof Company)) {
      value = new Company(value);
    }

    this._fields['company'] = value;

    return this;
  }

  get averageValue(): CustomerAverageValue | null {
    return this._fields['averageValue'] ?? null;
  }
  
  getAverageValue(): CustomerAverageValue | null {
      return this._fields['averageValue'] ?? null;
  }

  setAverageValue(value: null | CustomerAverageValue | any) {
    if (value !== null && !(value instanceof CustomerAverageValue)) {
      value = new CustomerAverageValue(value);
    }

    this._fields['averageValue'] = value;

    return this;
  }

  get paymentCount(): number | null {
    return this._fields['paymentCount'] ?? null;
  }
  
  getPaymentCount(): number | null {
      return this._fields['paymentCount'] ?? null;
  }

  private setPaymentCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['paymentCount'] = value;

    return this;
  }

  get lastPaymentTime(): Date | null {
    return this._fields['lastPaymentTime'] ?? null;
  }
  
  getLastPaymentTime(): Date | null {
      return this._fields['lastPaymentTime'] ?? null;
  }

  private setLastPaymentTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['lastPaymentTime'] = value;

    return this;
  }

  get lifetimeRevenue(): CustomerLifetimeRevenue | null {
    return this._fields['lifetimeRevenue'] ?? null;
  }
  
  getLifetimeRevenue(): CustomerLifetimeRevenue | null {
      return this._fields['lifetimeRevenue'] ?? null;
  }

  setLifetimeRevenue(value: null | CustomerLifetimeRevenue | any) {
    if (value !== null && !(value instanceof CustomerLifetimeRevenue)) {
      value = new CustomerLifetimeRevenue(value);
    }

    this._fields['lifetimeRevenue'] = value;

    return this;
  }

  get invoiceCount(): number | null {
    return this._fields['invoiceCount'] ?? null;
  }
  
  getInvoiceCount(): number | null {
      return this._fields['invoiceCount'] ?? null;
  }

  private setInvoiceCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['invoiceCount'] = value;

    return this;
  }

  get tags(): Array<any> | null {
    return this._fields['tags'] ?? null;
  }
  
  getTags(): Array<any> | null {
      return this._fields['tags'] ?? null;
  }

  private setTags(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Tag ? value : new Tag(value),
    ) : null;

    this._fields['tags'] = value;

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

  get isEddRequired(): boolean | null {
    return this._fields['isEddRequired'] ?? null;
  }
  
  getIsEddRequired(): boolean | null {
      return this._fields['isEddRequired'] ?? null;
  }

  setIsEddRequired(value: null | boolean) {
    this._fields['isEddRequired'] = value;

    return this;
  }

  get hasFulfilledKyc(): boolean | null {
    return this._fields['hasFulfilledKyc'] ?? null;
  }
  
  getHasFulfilledKyc(): boolean | null {
      return this._fields['hasFulfilledKyc'] ?? null;
  }

  private setHasFulfilledKyc(value: null | boolean) {
    this._fields['hasFulfilledKyc'] = value;

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

  get locale(): string | null {
    return this._fields['locale'] ?? null;
  }
  
  getLocale(): string | null {
      return this._fields['locale'] ?? null;
  }

  setLocale(value: null | string) {
    this._fields['locale'] = value;

    return this;
  }

  get taxNumbers(): Array<any> | null {
    return this._fields['taxNumbers'] ?? null;
  }
  
  getTaxNumbers(): Array<any> | null {
      return this._fields['taxNumbers'] ?? null;
  }

  setTaxNumbers(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof TaxNumber ? value : new TaxNumber(value),
    ) : null;

    this._fields['taxNumbers'] = value;

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

  get embedded(): CustomerEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): CustomerEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | CustomerEmbedded | any) {
    if (value !== null && !(value instanceof CustomerEmbedded)) {
      value = new CustomerEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'email')) {
      data['email'] = this['email'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'firstName')) {
      data['firstName'] = this['firstName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastName')) {
      data['lastName'] = this['lastName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentToken')) {
      data['paymentToken'] = this['paymentToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'defaultPaymentInstrument')) {
      data['defaultPaymentInstrument'] = this['defaultPaymentInstrument']?.jsonSerialize() ?? null;
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'primaryAddress')) {
      data['primaryAddress'] = this['primaryAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'company')) {
      data['company'] = this['company']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'averageValue')) {
      data['averageValue'] = this['averageValue']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentCount')) {
      data['paymentCount'] = this['paymentCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastPaymentTime')) {
      data['lastPaymentTime'] = this['lastPaymentTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lifetimeRevenue')) {
      data['lifetimeRevenue'] = this['lifetimeRevenue']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceCount')) {
      data['invoiceCount'] = this['invoiceCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tags')) {
      data['tags'] = this['tags'] !== null
          ? this._fields['tags'].map((tag: Tag) => tag.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isEddRequired')) {
      data['isEddRequired'] = this['isEddRequired'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasFulfilledKyc')) {
      data['hasFulfilledKyc'] = this['hasFulfilledKyc'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'locale')) {
      data['locale'] = this['locale'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxNumbers')) {
      data['taxNumbers'] = this['taxNumbers'] !== null
          ? this._fields['taxNumbers'].map((taxNumber: TaxNumber) => taxNumber.jsonSerialize())
          : null;
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
