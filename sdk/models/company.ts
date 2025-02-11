import ResourceLink from '../models/resource-link';

export default class Company {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'domain')) {
      this.setDomain(data['domain']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'yearFounded')) {
      this.setYearFounded(data['yearFounded']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'industry')) {
      this.setIndustry(data['industry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'employeesCount')) {
      this.setEmployeesCount(data['employeesCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      this.setCountry(data['country']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'locality')) {
      this.setLocality(data['locality']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get name(): string | null {
    return this._fields['name'] ?? null;
  }
  
  getName(): string | null {
      return this._fields['name'] ?? null;
  }

  setName(value: null | string) {
    this._fields['name'] = value;

    return this;
  }

  get domain(): string | null {
    return this._fields['domain'] ?? null;
  }
  
  getDomain(): string | null {
      return this._fields['domain'] ?? null;
  }

  setDomain(value: null | string) {
    this._fields['domain'] = value;

    return this;
  }

  get yearFounded(): number | null {
    return this._fields['yearFounded'] ?? null;
  }
  
  getYearFounded(): number | null {
      return this._fields['yearFounded'] ?? null;
  }

  setYearFounded(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['yearFounded'] = value;

    return this;
  }

  get industry(): string | null {
    return this._fields['industry'] ?? null;
  }
  
  getIndustry(): string | null {
      return this._fields['industry'] ?? null;
  }

  setIndustry(value: null | string) {
    this._fields['industry'] = value;

    return this;
  }

  get employeesCount(): number | null {
    return this._fields['employeesCount'] ?? null;
  }
  
  getEmployeesCount(): number | null {
      return this._fields['employeesCount'] ?? null;
  }

  setEmployeesCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['employeesCount'] = value;

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

  get locality(): string | null {
    return this._fields['locality'] ?? null;
  }
  
  getLocality(): string | null {
      return this._fields['locality'] ?? null;
  }

  setLocality(value: null | string) {
    this._fields['locality'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'domain')) {
      data['domain'] = this['domain'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'yearFounded')) {
      data['yearFounded'] = this['yearFounded'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'industry')) {
      data['industry'] = this['industry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'employeesCount')) {
      data['employeesCount'] = this['employeesCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'country')) {
      data['country'] = this['country'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'locality')) {
      data['locality'] = this['locality'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
