
export default class CheckoutFormCustomizationColors {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'primary')) {
      this.setPrimary(data['primary']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'buttonText')) {
      this.setButtonText(data['buttonText']);
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

  get buttonText(): string | null {
    return this._fields['buttonText'] ?? null;
  }
  
  getButtonText(): string | null {
      return this._fields['buttonText'] ?? null;
  }

  setButtonText(value: null | string) {
    this._fields['buttonText'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'primary')) {
      data['primary'] = this['primary'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'buttonText')) {
      data['buttonText'] = this['buttonText'];
    }

    return data;
  }
}
