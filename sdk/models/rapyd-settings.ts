
export default class RapydSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'ipnUrl')) {
      this.setIpnUrl(data['ipnUrl']);
    }
  }


  get ipnUrl(): string | null {
    return this._fields['ipnUrl'] ?? null;
  }
  
  getIpnUrl(): string | null {
      return this._fields['ipnUrl'] ?? null;
  }

  setIpnUrl(value: null | string) {
    this._fields['ipnUrl'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ipnUrl')) {
      data['ipnUrl'] = this['ipnUrl'];
    }

    return data;
  }
}
