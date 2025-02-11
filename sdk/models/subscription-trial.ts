
export default class SubscriptionTrial {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'enabled')) {
      this.setEnabled(data['enabled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'endTime')) {
      this.setEndTime(data['endTime']);
    }
  }


  get enabled(): boolean | null {
    return this._fields['enabled'] ?? null;
  }
  
  getEnabled(): boolean | null {
      return this._fields['enabled'] ?? null;
  }

  setEnabled(value: null | boolean) {
    this._fields['enabled'] = value;

    return this;
  }

  get endTime(): Date | null {
    return this._fields['endTime'] ?? null;
  }
  
  getEndTime(): Date | null {
      return this._fields['endTime'] ?? null;
  }

  setEndTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['endTime'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enabled')) {
      data['enabled'] = this['enabled'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'endTime')) {
      data['endTime'] = this['endTime']?.toISOString() ?? null;
    }

    return data;
  }
}
