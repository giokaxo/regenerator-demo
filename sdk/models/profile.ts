import ResourceLink from '../models/resource-link';

export default class Profile {
  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  STATUS_PENDING_CONFIRMATION = 'pending-confirmation';

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
    if (Object.prototype.hasOwnProperty.call(data, 'businessPhone')) {
      this.setBusinessPhone(data['businessPhone']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'mobilePhone')) {
      this.setMobilePhone(data['mobilePhone']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'permissions')) {
      this.setPermissions(data['permissions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'availableCurrencies')) {
      this.setAvailableCurrencies(data['availableCurrencies']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reportingCurrency')) {
      this.setReportingCurrency(data['reportingCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'loginTime')) {
      this.setLoginTime(data['loginTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      this.setCountry(data['country']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'preferences')) {
      this.setPreferences(data['preferences']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasPermissionsEmulation')) {
      this.setHasPermissionsEmulation(data['hasPermissionsEmulation']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'displayName')) {
      this.setDisplayName(data['displayName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hash')) {
      this.setHash(data['hash']);
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

  get businessPhone(): string | null {
    return this._fields['businessPhone'] ?? null;
  }
  
  getBusinessPhone(): string | null {
      return this._fields['businessPhone'] ?? null;
  }

  private setBusinessPhone(value: null | string) {
    this._fields['businessPhone'] = value;

    return this;
  }

  get mobilePhone(): string | null {
    return this._fields['mobilePhone'] ?? null;
  }
  
  getMobilePhone(): string | null {
      return this._fields['mobilePhone'] ?? null;
  }

  private setMobilePhone(value: null | string) {
    this._fields['mobilePhone'] = value;

    return this;
  }

  get permissions(): Array<any> | null {
    return this._fields['permissions'] ?? null;
  }
  
  getPermissions(): Array<any> | null {
      return this._fields['permissions'] ?? null;
  }

  private setPermissions(value: null | Array<any>) {
    this._fields['permissions'] = value;

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

  get availableCurrencies(): Array<any> | null {
    return this._fields['availableCurrencies'] ?? null;
  }
  
  getAvailableCurrencies(): Array<any> | null {
      return this._fields['availableCurrencies'] ?? null;
  }

  private setAvailableCurrencies(value: null | Array<any>) {
    this._fields['availableCurrencies'] = value;

    return this;
  }

  get reportingCurrency(): string | null {
    return this._fields['reportingCurrency'] ?? null;
  }
  
  getReportingCurrency(): string | null {
      return this._fields['reportingCurrency'] ?? null;
  }

  private setReportingCurrency(value: null | string) {
    this._fields['reportingCurrency'] = value;

    return this;
  }

  get loginTime(): Date | null {
    return this._fields['loginTime'] ?? null;
  }
  
  getLoginTime(): Date | null {
      return this._fields['loginTime'] ?? null;
  }

  private setLoginTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['loginTime'] = value;

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

  get country(): string | null {
    return this._fields['country'] ?? null;
  }
  
  getCountry(): string | null {
      return this._fields['country'] ?? null;
  }

  private setCountry(value: null | string) {
    this._fields['country'] = value;

    return this;
  }

  get preferences(): Record<string, any> | null {
    return this._fields['preferences'] ?? null;
  }
  
  getPreferences(): Record<string, any> | null {
      return this._fields['preferences'] ?? null;
  }

  setPreferences(value: null | Record<string, any>) {
    this._fields['preferences'] = value;

    return this;
  }

  get hasPermissionsEmulation(): boolean | null {
    return this._fields['hasPermissionsEmulation'] ?? null;
  }
  
  getHasPermissionsEmulation(): boolean | null {
      return this._fields['hasPermissionsEmulation'] ?? null;
  }

  private setHasPermissionsEmulation(value: null | boolean) {
    this._fields['hasPermissionsEmulation'] = value;

    return this;
  }

  get displayName(): string | null {
    return this._fields['displayName'] ?? null;
  }
  
  getDisplayName(): string | null {
      return this._fields['displayName'] ?? null;
  }

  private setDisplayName(value: null | string) {
    this._fields['displayName'] = value;

    return this;
  }

  get hash(): string | null {
    return this._fields['hash'] ?? null;
  }
  
  getHash(): string | null {
      return this._fields['hash'] ?? null;
  }

  private setHash(value: null | string) {
    this._fields['hash'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'email')) {
      data['email'] = this['email'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'firstName')) {
      data['firstName'] = this['firstName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastName')) {
      data['lastName'] = this['lastName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'businessPhone')) {
      data['businessPhone'] = this['businessPhone'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mobilePhone')) {
      data['mobilePhone'] = this['mobilePhone'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'permissions')) {
      data['permissions'] = this['permissions'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'availableCurrencies')) {
      data['availableCurrencies'] = this['availableCurrencies'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reportingCurrency')) {
      data['reportingCurrency'] = this['reportingCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'loginTime')) {
      data['loginTime'] = this['loginTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'country')) {
      data['country'] = this['country'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'preferences')) {
      data['preferences'] = this['preferences'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasPermissionsEmulation')) {
      data['hasPermissionsEmulation'] = this['hasPermissionsEmulation'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'displayName')) {
      data['displayName'] = this['displayName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hash')) {
      data['hash'] = this['hash'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
