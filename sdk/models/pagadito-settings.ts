
export default class PagaditoSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'useRecurringApi')) {
      this.setUseRecurringApi(data['useRecurringApi']);
    }
  }


  get useRecurringApi(): boolean | null {
    return this._fields['useRecurringApi'] ?? null;
  }
  
  getUseRecurringApi(): boolean | null {
      return this._fields['useRecurringApi'] ?? null;
  }

  setUseRecurringApi(value: null | boolean) {
    this._fields['useRecurringApi'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useRecurringApi')) {
      data['useRecurringApi'] = this['useRecurringApi'];
    }

    return data;
  }
}
