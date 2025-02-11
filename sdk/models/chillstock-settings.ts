
export default class ChillstockSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'sandbox')) {
      this.setSandbox(data['sandbox']);
    }
  }


  get sandbox(): boolean | null {
    return this._fields['sandbox'] ?? null;
  }
  
  getSandbox(): boolean | null {
      return this._fields['sandbox'] ?? null;
  }

  setSandbox(value: null | boolean) {
    this._fields['sandbox'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sandbox')) {
      data['sandbox'] = this['sandbox'];
    }

    return data;
  }
}
