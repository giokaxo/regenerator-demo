
export default class TaxNumber {
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
    if (Object.prototype.hasOwnProperty.call(data, 'isDefault')) {
      this.setIsDefault(data['isDefault']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isValid')) {
      this.setIsValid(data['isValid']);
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

  get isDefault(): boolean | null {
    return this._fields['isDefault'] ?? null;
  }
  
  getIsDefault(): boolean | null {
      return this._fields['isDefault'] ?? null;
  }

  setIsDefault(value: null | boolean) {
    this._fields['isDefault'] = value;

    return this;
  }

  get isValid(): boolean | null {
    return this._fields['isValid'] ?? null;
  }
  
  getIsValid(): boolean | null {
      return this._fields['isValid'] ?? null;
  }

  private setIsValid(value: null | boolean) {
    this._fields['isValid'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isDefault')) {
      data['isDefault'] = this['isDefault'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isValid')) {
      data['isValid'] = this['isValid'];
    }

    return data;
  }
}
