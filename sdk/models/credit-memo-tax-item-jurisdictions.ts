
export default class CreditMemoTaxItemJurisdictions {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      this.setCountry(data['country']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'state')) {
      this.setState(data['state']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'county')) {
      this.setCounty(data['county']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'city')) {
      this.setCity(data['city']);
    }
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

  get state(): string | null {
    return this._fields['state'] ?? null;
  }
  
  getState(): string | null {
      return this._fields['state'] ?? null;
  }

  setState(value: null | string) {
    this._fields['state'] = value;

    return this;
  }

  get county(): string | null {
    return this._fields['county'] ?? null;
  }
  
  getCounty(): string | null {
      return this._fields['county'] ?? null;
  }

  setCounty(value: null | string) {
    this._fields['county'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'country')) {
      data['country'] = this['country'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'state')) {
      data['state'] = this['state'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'county')) {
      data['county'] = this['county'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'city')) {
      data['city'] = this['city'];
    }

    return data;
  }
}
