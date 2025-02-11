
export default class RiskScoreBoolean {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'value')) {
      this.setValue(data['value']);
    }
  }


  get value(): number {
    return this._fields['value'];
  }
  
  getValue(): number {
      return this._fields['value'];
  }

  setValue(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['value'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'value')) {
      data['value'] = this['value'];
    }

    return data;
  }
}
