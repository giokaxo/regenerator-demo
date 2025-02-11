
export default class InvoiceOrganizationTaxIdNumber {
  TYPE_EU_VAT = 'eu-vat';

  TYPE_OTHER = 'other';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'value')) {
      this.setValue(data['value']);
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

  get value(): string {
    return this._fields['value'];
  }
  
  getValue(): string {
      return this._fields['value'];
  }

  setValue(value: string) {
    this._fields['value'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'value')) {
      data['value'] = this['value'];
    }

    return data;
  }
}
