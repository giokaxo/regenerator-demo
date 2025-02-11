import WebsiteSettingsDepositFormTheme from '../models/website-settings-deposit-form-theme';

export default class WebsiteSettingsDepositForm {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'theme')) {
      this.setTheme(data['theme']);
    }
  }


  get theme(): WebsiteSettingsDepositFormTheme | null {
    return this._fields['theme'] ?? null;
  }
  
  getTheme(): WebsiteSettingsDepositFormTheme | null {
      return this._fields['theme'] ?? null;
  }

  setTheme(value: null | WebsiteSettingsDepositFormTheme | any) {
    if (value !== null && !(value instanceof WebsiteSettingsDepositFormTheme)) {
      value = new WebsiteSettingsDepositFormTheme(value);
    }

    this._fields['theme'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'theme')) {
      data['theme'] = this['theme']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
