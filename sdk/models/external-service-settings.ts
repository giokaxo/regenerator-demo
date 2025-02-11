import QuickBooksOnlineExternalServiceSettings from '../models/quick-books-online-external-service-settings';

export default class ExternalServiceSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'quickBooksOnline')) {
      this.setQuickBooksOnline(data['quickBooksOnline']);
    }
  }


  get quickBooksOnline(): QuickBooksOnlineExternalServiceSettings | null {
    return this._fields['quickBooksOnline'] ?? null;
  }
  
  getQuickBooksOnline(): QuickBooksOnlineExternalServiceSettings | null {
      return this._fields['quickBooksOnline'] ?? null;
  }

  setQuickBooksOnline(value: null | QuickBooksOnlineExternalServiceSettings | any) {
    if (value !== null && !(value instanceof QuickBooksOnlineExternalServiceSettings)) {
      value = new QuickBooksOnlineExternalServiceSettings(value);
    }

    this._fields['quickBooksOnline'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quickBooksOnline')) {
      data['quickBooksOnline'] = this['quickBooksOnline']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
