
export default class PostDepositRequestAmountLimits {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'minimum')) {
      this.setMinimum(data['minimum']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'maximum')) {
      this.setMaximum(data['maximum']);
    }
  }


  get minimum(): number | null {
    return this._fields['minimum'] ?? null;
  }
  
  getMinimum(): number | null {
      return this._fields['minimum'] ?? null;
  }

  setMinimum(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['minimum'] = value;

    return this;
  }

  get maximum(): number | null {
    return this._fields['maximum'] ?? null;
  }
  
  getMaximum(): number | null {
      return this._fields['maximum'] ?? null;
  }

  setMaximum(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['maximum'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'minimum')) {
      data['minimum'] = this['minimum'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'maximum')) {
      data['maximum'] = this['maximum'];
    }

    return data;
  }
}
