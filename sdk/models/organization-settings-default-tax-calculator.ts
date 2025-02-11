
export default class OrganizationSettingsDefaultTaxCalculator {
  TYPE_TAXJAR = 'taxjar';

  TYPE_AVALARA = 'avalara';

  TYPE_FLAT = 'flat';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rate')) {
      this.setRate(data['rate']);
    }
  }


  get type(): string {
    return this._fields['type'];
  }
  
  getType(): string {
      return this._fields['type'];
  }

  setType(value: string) {
    this._fields['type'] = value;

    return this;
  }

  get rate(): number | null {
    return this._fields['rate'] ?? null;
  }
  
  getRate(): number | null {
      return this._fields['rate'] ?? null;
  }

  setRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['rate'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rate')) {
      data['rate'] = this['rate'];
    }

    return data;
  }
}
