
export default class AMLAliases {
  AUTHENTICITY_STRONG = 'strong';

  AUTHENTICITY_WEAK = 'weak';

  AUTHENTICITY_UNKNOWN = 'unknown';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'firstName')) {
      this.setFirstName(data['firstName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lastName')) {
      this.setLastName(data['lastName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'authenticity')) {
      this.setAuthenticity(data['authenticity']);
    }
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

  get authenticity(): string | null {
    return this._fields['authenticity'] ?? null;
  }
  
  getAuthenticity(): string | null {
      return this._fields['authenticity'] ?? null;
  }

  private setAuthenticity(value: null | string) {
    this._fields['authenticity'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authenticity')) {
      data['authenticity'] = this['authenticity'];
    }

    return data;
  }
}
