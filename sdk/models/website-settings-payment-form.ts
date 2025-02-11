import WebsiteSettingsPaymentFormFeatures from '../models/website-settings-payment-form-features';

export default class WebsiteSettingsPaymentForm {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'css')) {
      this.setCss(data['css']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'theme')) {
      this.setTheme(data['theme']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'features')) {
      this.setFeatures(data['features']);
    }
  }


  get css(): string | null {
    return this._fields['css'] ?? null;
  }
  
  getCss(): string | null {
      return this._fields['css'] ?? null;
  }

  setCss(value: null | string) {
    this._fields['css'] = value;

    return this;
  }

  get theme(): Record<string, any> | null {
    return this._fields['theme'] ?? null;
  }
  
  getTheme(): Record<string, any> | null {
      return this._fields['theme'] ?? null;
  }

  setTheme(value: null | Record<string, any>) {
    this._fields['theme'] = value;

    return this;
  }

  get features(): WebsiteSettingsPaymentFormFeatures | null {
    return this._fields['features'] ?? null;
  }
  
  getFeatures(): WebsiteSettingsPaymentFormFeatures | null {
      return this._fields['features'] ?? null;
  }

  setFeatures(value: null | WebsiteSettingsPaymentFormFeatures | any) {
    if (value !== null && !(value instanceof WebsiteSettingsPaymentFormFeatures)) {
      value = new WebsiteSettingsPaymentFormFeatures(value);
    }

    this._fields['features'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'css')) {
      data['css'] = this['css'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'theme')) {
      data['theme'] = this['theme'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'features')) {
      data['features'] = this['features']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
