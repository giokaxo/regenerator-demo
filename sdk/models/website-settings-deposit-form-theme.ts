
export default class WebsiteSettingsDepositFormTheme {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'colorPrimary')) {
      this.setColorPrimary(data['colorPrimary']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'colorSecondary')) {
      this.setColorSecondary(data['colorSecondary']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'buttonTemplate')) {
      this.setButtonTemplate(data['buttonTemplate']);
    }
  }


  get colorPrimary(): string | null {
    return this._fields['colorPrimary'] ?? null;
  }
  
  getColorPrimary(): string | null {
      return this._fields['colorPrimary'] ?? null;
  }

  setColorPrimary(value: null | string) {
    this._fields['colorPrimary'] = value;

    return this;
  }

  get colorSecondary(): string | null {
    return this._fields['colorSecondary'] ?? null;
  }
  
  getColorSecondary(): string | null {
      return this._fields['colorSecondary'] ?? null;
  }

  setColorSecondary(value: null | string) {
    this._fields['colorSecondary'] = value;

    return this;
  }

  get buttonTemplate(): string | null {
    return this._fields['buttonTemplate'] ?? null;
  }
  
  getButtonTemplate(): string | null {
      return this._fields['buttonTemplate'] ?? null;
  }

  setButtonTemplate(value: null | string) {
    this._fields['buttonTemplate'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'colorPrimary')) {
      data['colorPrimary'] = this['colorPrimary'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'colorSecondary')) {
      data['colorSecondary'] = this['colorSecondary'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'buttonTemplate')) {
      data['buttonTemplate'] = this['buttonTemplate'];
    }

    return data;
  }
}
