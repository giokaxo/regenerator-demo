import OrganizationQuestionnaire from '../models/organization-questionnaire';
import OrganizationSettings from '../models/organization-settings';
import ContactPhoneNumbers from '../models/contact-phone-numbers';
import ContactEmails from '../models/contact-emails';
import TaxNumber from '../models/tax-number';
import OrganizationFeatures from '../models/organization-features';
import ResourceLink from '../models/resource-link';

export default class PatchOrganizationRequest {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'website')) {
      this.setWebsite(data['website']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'address')) {
      this.setAddress(data['address']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'address2')) {
      this.setAddress2(data['address2']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'city')) {
      this.setCity(data['city']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'region')) {
      this.setRegion(data['region']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      this.setCountry(data['country']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'postalCode')) {
      this.setPostalCode(data['postalCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'phoneNumbers')) {
      this.setPhoneNumbers(data['phoneNumbers']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'emails')) {
      this.setEmails(data['emails']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxDescriptor')) {
      this.setTaxDescriptor(data['taxDescriptor']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceTimeZone')) {
      this.setInvoiceTimeZone(data['invoiceTimeZone']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reportCurrency')) {
      this.setReportCurrency(data['reportCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'questionnaire')) {
      this.setQuestionnaire(data['questionnaire']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxNumbers')) {
      this.setTaxNumbers(data['taxNumbers']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'features')) {
      this.setFeatures(data['features']);
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

  get website(): string | null {
    return this._fields['website'] ?? null;
  }
  
  getWebsite(): string | null {
      return this._fields['website'] ?? null;
  }

  private setWebsite(value: null | string) {
    this._fields['website'] = value;

    return this;
  }

  get address(): string | null {
    return this._fields['address'] ?? null;
  }
  
  getAddress(): string | null {
      return this._fields['address'] ?? null;
  }

  setAddress(value: null | string) {
    this._fields['address'] = value;

    return this;
  }

  get address2(): string | null {
    return this._fields['address2'] ?? null;
  }
  
  getAddress2(): string | null {
      return this._fields['address2'] ?? null;
  }

  setAddress2(value: null | string) {
    this._fields['address2'] = value;

    return this;
  }

  get city(): string | null {
    return this._fields['city'] ?? null;
  }
  
  getCity(): string | null {
      return this._fields['city'] ?? null;
  }

  setCity(value: null | string) {
    this._fields['city'] = value;

    return this;
  }

  get region(): string | null {
    return this._fields['region'] ?? null;
  }
  
  getRegion(): string | null {
      return this._fields['region'] ?? null;
  }

  setRegion(value: null | string) {
    this._fields['region'] = value;

    return this;
  }

  get country(): string | null {
    return this._fields['country'] ?? null;
  }
  
  getCountry(): string | null {
      return this._fields['country'] ?? null;
  }

  setCountry(value: null | string) {
    this._fields['country'] = value;

    return this;
  }

  get postalCode(): string | null {
    return this._fields['postalCode'] ?? null;
  }
  
  getPostalCode(): string | null {
      return this._fields['postalCode'] ?? null;
  }

  setPostalCode(value: null | string) {
    this._fields['postalCode'] = value;

    return this;
  }

  get phoneNumbers(): Array<any> | null {
    return this._fields['phoneNumbers'] ?? null;
  }
  
  getPhoneNumbers(): Array<any> | null {
      return this._fields['phoneNumbers'] ?? null;
  }

  setPhoneNumbers(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ContactPhoneNumbers ? value : new ContactPhoneNumbers(value),
    ) : null;

    this._fields['phoneNumbers'] = value;

    return this;
  }

  get emails(): Array<any> | null {
    return this._fields['emails'] ?? null;
  }
  
  getEmails(): Array<any> | null {
      return this._fields['emails'] ?? null;
  }

  setEmails(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ContactEmails ? value : new ContactEmails(value),
    ) : null;

    this._fields['emails'] = value;

    return this;
  }

  get taxDescriptor(): string | null {
    return this._fields['taxDescriptor'] ?? null;
  }
  
  getTaxDescriptor(): string | null {
      return this._fields['taxDescriptor'] ?? null;
  }

  setTaxDescriptor(value: null | string) {
    this._fields['taxDescriptor'] = value;

    return this;
  }

  get invoiceTimeZone(): string | null {
    return this._fields['invoiceTimeZone'] ?? null;
  }
  
  getInvoiceTimeZone(): string | null {
      return this._fields['invoiceTimeZone'] ?? null;
  }

  setInvoiceTimeZone(value: null | string) {
    this._fields['invoiceTimeZone'] = value;

    return this;
  }

  get reportCurrency(): string | null {
    return this._fields['reportCurrency'] ?? null;
  }
  
  getReportCurrency(): string | null {
      return this._fields['reportCurrency'] ?? null;
  }

  private setReportCurrency(value: null | string) {
    this._fields['reportCurrency'] = value;

    return this;
  }

  get questionnaire(): OrganizationQuestionnaire | null {
    return this._fields['questionnaire'] ?? null;
  }
  
  getQuestionnaire(): OrganizationQuestionnaire | null {
      return this._fields['questionnaire'] ?? null;
  }

  setQuestionnaire(value: null | OrganizationQuestionnaire | any) {
    if (value !== null && !(value instanceof OrganizationQuestionnaire)) {
      value = new OrganizationQuestionnaire(value);
    }

    this._fields['questionnaire'] = value;

    return this;
  }

  get settings(): OrganizationSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): OrganizationSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | OrganizationSettings | any) {
    if (value !== null && !(value instanceof OrganizationSettings)) {
      value = new OrganizationSettings(value);
    }

    this._fields['settings'] = value;

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

  get features(): Array<any> | null {
    return this._fields['features'] ?? null;
  }
  
  getFeatures(): Array<any> | null {
      return this._fields['features'] ?? null;
  }

  private setFeatures(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof OrganizationFeatures ? value : new OrganizationFeatures(value),
    ) : null;

    this._fields['features'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'website')) {
      data['website'] = this['website'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'address')) {
      data['address'] = this['address'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'address2')) {
      data['address2'] = this['address2'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'city')) {
      data['city'] = this['city'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'region')) {
      data['region'] = this['region'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'country')) {
      data['country'] = this['country'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'postalCode')) {
      data['postalCode'] = this['postalCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'phoneNumbers')) {
      data['phoneNumbers'] = this['phoneNumbers'] !== null
          ? this._fields['phoneNumbers'].map((contactPhoneNumbers: ContactPhoneNumbers) => contactPhoneNumbers.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'emails')) {
      data['emails'] = this['emails'] !== null
          ? this._fields['emails'].map((contactEmails: ContactEmails) => contactEmails.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxDescriptor')) {
      data['taxDescriptor'] = this['taxDescriptor'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceTimeZone')) {
      data['invoiceTimeZone'] = this['invoiceTimeZone'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reportCurrency')) {
      data['reportCurrency'] = this['reportCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'questionnaire')) {
      data['questionnaire'] = this['questionnaire']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxNumbers')) {
      data['taxNumbers'] = this['taxNumbers'] !== null
          ? this._fields['taxNumbers'].map((taxNumber: TaxNumber) => taxNumber.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'features')) {
      data['features'] = this['features'] !== null
          ? this._fields['features'].map((organizationFeatures: OrganizationFeatures) => organizationFeatures.jsonSerialize())
          : null;
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
