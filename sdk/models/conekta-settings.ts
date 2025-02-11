
export default class ConektaSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'baseUrl')) {
      this.setBaseUrl(data['baseUrl']);
    }
  }


  get baseUrl(): string | null {
    return this._fields['baseUrl'] ?? null;
  }
  
  getBaseUrl(): string | null {
      return this._fields['baseUrl'] ?? null;
  }

  setBaseUrl(value: null | string) {
    this._fields['baseUrl'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'baseUrl')) {
      data['baseUrl'] = this['baseUrl'];
    }

    return data;
  }
}
