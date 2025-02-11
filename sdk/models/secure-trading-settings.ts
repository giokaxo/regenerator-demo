
export default class SecureTradingSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'enableRecurring')) {
      this.setEnableRecurring(data['enableRecurring']);
    }
  }


  get enableRecurring(): boolean | null {
    return this._fields['enableRecurring'] ?? null;
  }
  
  getEnableRecurring(): boolean | null {
      return this._fields['enableRecurring'] ?? null;
  }

  setEnableRecurring(value: null | boolean) {
    this._fields['enableRecurring'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enableRecurring')) {
      data['enableRecurring'] = this['enableRecurring'];
    }

    return data;
  }
}
