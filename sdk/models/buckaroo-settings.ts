
export default class BuckarooSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'useSepaRecurring')) {
      this.setUseSepaRecurring(data['useSepaRecurring']);
    }
  }


  get useSepaRecurring(): boolean | null {
    return this._fields['useSepaRecurring'] ?? null;
  }
  
  getUseSepaRecurring(): boolean | null {
      return this._fields['useSepaRecurring'] ?? null;
  }

  setUseSepaRecurring(value: null | boolean) {
    this._fields['useSepaRecurring'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useSepaRecurring')) {
      data['useSepaRecurring'] = this['useSepaRecurring'];
    }

    return data;
  }
}
