
export default class BuckarooCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'schemeKey')) {
      this.setSchemeKey(data['schemeKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteKey')) {
      this.setWebsiteKey(data['websiteKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
  }


  get schemeKey(): string | null {
    return this._fields['schemeKey'] ?? null;
  }
  
  getSchemeKey(): string | null {
      return this._fields['schemeKey'] ?? null;
  }

  setSchemeKey(value: null | string) {
    this._fields['schemeKey'] = value;

    return this;
  }

  get websiteKey(): string {
    return this._fields['websiteKey'];
  }
  
  getWebsiteKey(): string {
      return this._fields['websiteKey'];
  }

  setWebsiteKey(value: string) {
    this._fields['websiteKey'] = value;

    return this;
  }

  get secretKey(): string {
    return this._fields['secretKey'];
  }
  
  getSecretKey(): string {
      return this._fields['secretKey'];
  }

  setSecretKey(value: string) {
    this._fields['secretKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'schemeKey')) {
      data['schemeKey'] = this['schemeKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteKey')) {
      data['websiteKey'] = this['websiteKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }

    return data;
  }
}
