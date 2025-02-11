
export default class OrganizationSettingsTaxLocations {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'address')) {
      this.setAddress(data['address']);
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

  get country(): string {
    return this._fields['country'];
  }
  
  getCountry(): string {
      return this._fields['country'];
  }

  setCountry(value: string) {
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'address')) {
      data['address'] = this['address'];
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

    return data;
  }
}
