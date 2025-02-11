
export default class EMSSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'delay')) {
      this.setDelay(data['delay']);
    }
  }


  get delay(): number | null {
    return this._fields['delay'] ?? null;
  }
  
  getDelay(): number | null {
      return this._fields['delay'] ?? null;
  }

  setDelay(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['delay'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'delay')) {
      data['delay'] = this['delay'];
    }

    return data;
  }
}
