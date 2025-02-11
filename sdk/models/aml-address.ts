
export default class AMLAddress {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
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
    if (Object.prototype.hasOwnProperty.call(data, 'birthplace')) {
      this.setBirthplace(data['birthplace']);
    }
  }


  get address(): string | null {
    return this._fields['address'] ?? null;
  }
  
  getAddress(): string | null {
      return this._fields['address'] ?? null;
  }

  private setAddress(value: null | string) {
    this._fields['address'] = value;

    return this;
  }

  get address2(): string | null {
    return this._fields['address2'] ?? null;
  }
  
  getAddress2(): string | null {
      return this._fields['address2'] ?? null;
  }

  private setAddress2(value: null | string) {
    this._fields['address2'] = value;

    return this;
  }

  get city(): string | null {
    return this._fields['city'] ?? null;
  }
  
  getCity(): string | null {
      return this._fields['city'] ?? null;
  }

  private setCity(value: null | string) {
    this._fields['city'] = value;

    return this;
  }

  get region(): string | null {
    return this._fields['region'] ?? null;
  }
  
  getRegion(): string | null {
      return this._fields['region'] ?? null;
  }

  private setRegion(value: null | string) {
    this._fields['region'] = value;

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

  get birthplace(): boolean | null {
    return this._fields['birthplace'] ?? null;
  }
  
  getBirthplace(): boolean | null {
      return this._fields['birthplace'] ?? null;
  }

  private setBirthplace(value: null | boolean) {
    this._fields['birthplace'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'birthplace')) {
      data['birthplace'] = this['birthplace'];
    }

    return data;
  }
}
