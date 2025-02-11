
export default class InvoiceReissue {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'dueTime')) {
      this.setDueTime(data['dueTime']);
    }
  }


  get dueTime(): Date | null {
    return this._fields['dueTime'] ?? null;
  }
  
  getDueTime(): Date | null {
      return this._fields['dueTime'] ?? null;
  }

  setDueTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['dueTime'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dueTime')) {
      data['dueTime'] = this['dueTime']?.toISOString() ?? null;
    }

    return data;
  }
}
