
export default class AmlCheckCustomerPrimaryAddress {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'firstName')) {
      this.setFirstName(data['firstName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lastName')) {
      this.setLastName(data['lastName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dob')) {
      this.setDob(data['dob']);
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
  }


  get firstName(): string | null {
    return this._fields['firstName'] ?? null;
  }
  
  getFirstName(): string | null {
      return this._fields['firstName'] ?? null;
  }

  setFirstName(value: null | string) {
    this._fields['firstName'] = value;

    return this;
  }

  get lastName(): string | null {
    return this._fields['lastName'] ?? null;
  }
  
  getLastName(): string | null {
      return this._fields['lastName'] ?? null;
  }

  setLastName(value: null | string) {
    this._fields['lastName'] = value;

    return this;
  }

  get dob(): Date | null {
    return this._fields['dob'] ?? null;
  }
  
  getDob(): Date | null {
      return this._fields['dob'] ?? null;
  }

  setDob(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['dob'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'firstName')) {
      data['firstName'] = this['firstName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastName')) {
      data['lastName'] = this['lastName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dob')) {
      data['dob'] = this['dob']?.toISOString().substring(0, 10) ?? null;
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

    return data;
  }
}
