
export default class ContactPhoneNumbers {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'label')) {
      this.setLabel(data['label']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'value')) {
      this.setValue(data['value']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'primary')) {
      this.setPrimary(data['primary']);
    }
  }


  get label(): string {
    return this._fields['label'];
  }
  
  getLabel(): string {
      return this._fields['label'];
  }

  setLabel(value: string) {
    this._fields['label'] = value;

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

  get primary(): boolean | null {
    return this._fields['primary'] ?? null;
  }
  
  getPrimary(): boolean | null {
      return this._fields['primary'] ?? null;
  }

  setPrimary(value: null | boolean) {
    this._fields['primary'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'label')) {
      data['label'] = this['label'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'value')) {
      data['value'] = this['value'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'primary')) {
      data['primary'] = this['primary'];
    }

    return data;
  }
}
