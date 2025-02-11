
export default class BillingPortalCustomizationColors {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'primary')) {
      this.setPrimary(data['primary']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secondary')) {
      this.setSecondary(data['secondary']);
    }
  }


  get primary(): string | null {
    return this._fields['primary'] ?? null;
  }
  
  getPrimary(): string | null {
      return this._fields['primary'] ?? null;
  }

  setPrimary(value: null | string) {
    this._fields['primary'] = value;

    return this;
  }

  get secondary(): string | null {
    return this._fields['secondary'] ?? null;
  }
  
  getSecondary(): string | null {
      return this._fields['secondary'] ?? null;
  }

  setSecondary(value: null | string) {
    this._fields['secondary'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'primary')) {
      data['primary'] = this['primary'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secondary')) {
      data['secondary'] = this['secondary'];
    }

    return data;
  }
}
