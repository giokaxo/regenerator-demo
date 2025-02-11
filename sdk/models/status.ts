
export default class Status {
  STATUS_OK = 'ok';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'time')) {
      this.setTime(data['time']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'release')) {
      this.setRelease(data['release']);
    }
  }


  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  private setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get time(): Date | null {
    return this._fields['time'] ?? null;
  }
  
  getTime(): Date | null {
      return this._fields['time'] ?? null;
  }

  private setTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['time'] = value;

    return this;
  }

  get release(): string | null {
    return this._fields['release'] ?? null;
  }
  
  getRelease(): string | null {
      return this._fields['release'] ?? null;
  }

  setRelease(value: null | string) {
    this._fields['release'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'time')) {
      data['time'] = this['time']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'release')) {
      data['release'] = this['release'];
    }

    return data;
  }
}
