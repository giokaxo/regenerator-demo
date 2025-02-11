
export default class OnRampSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'useServerToServerApi')) {
      this.setUseServerToServerApi(data['useServerToServerApi']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'logoUrl')) {
      this.setLogoUrl(data['logoUrl']);
    }
  }


  get useServerToServerApi(): boolean | null {
    return this._fields['useServerToServerApi'] ?? null;
  }
  
  getUseServerToServerApi(): boolean | null {
      return this._fields['useServerToServerApi'] ?? null;
  }

  setUseServerToServerApi(value: null | boolean) {
    this._fields['useServerToServerApi'] = value;

    return this;
  }

  get logoUrl(): string | null {
    return this._fields['logoUrl'] ?? null;
  }
  
  getLogoUrl(): string | null {
      return this._fields['logoUrl'] ?? null;
  }

  setLogoUrl(value: null | string) {
    this._fields['logoUrl'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useServerToServerApi')) {
      data['useServerToServerApi'] = this['useServerToServerApi'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'logoUrl')) {
      data['logoUrl'] = this['logoUrl'];
    }

    return data;
  }
}
