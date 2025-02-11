
export default class DataExportRecurring {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'instruction')) {
      this.setInstruction(data['instruction']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'start')) {
      this.setStart(data['start']);
    }
  }


  get instruction(): string {
    return this._fields['instruction'];
  }
  
  getInstruction(): string {
      return this._fields['instruction'];
  }

  setInstruction(value: string) {
    this._fields['instruction'] = value;

    return this;
  }

  get start(): Date | null {
    return this._fields['start'] ?? null;
  }
  
  getStart(): Date | null {
      return this._fields['start'] ?? null;
  }

  setStart(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['start'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'instruction')) {
      data['instruction'] = this['instruction'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'start')) {
      data['start'] = this['start']?.toISOString() ?? null;
    }

    return data;
  }
}
