
export default class PostDepositRequestCustomAmount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'minimum')) {
      this.setMinimum(data['minimum']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'multipleOf')) {
      this.setMultipleOf(data['multipleOf']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'maximum')) {
      this.setMaximum(data['maximum']);
    }
  }


  get minimum(): number {
    return this._fields['minimum'];
  }
  
  getMinimum(): number {
      return this._fields['minimum'];
  }

  setMinimum(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['minimum'] = value;

    return this;
  }

  get multipleOf(): number {
    return this._fields['multipleOf'];
  }
  
  getMultipleOf(): number {
      return this._fields['multipleOf'];
  }

  setMultipleOf(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['multipleOf'] = value;

    return this;
  }

  get maximum(): number {
    return this._fields['maximum'];
  }
  
  getMaximum(): number {
      return this._fields['maximum'];
  }

  setMaximum(value: number | string) {
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'multipleOf')) {
      data['multipleOf'] = this['multipleOf'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'maximum')) {
      data['maximum'] = this['maximum'];
    }

    return data;
  }
}
