
export default class RiskScoreBracketBrackets {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'start')) {
      this.setStart(data['start']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'end')) {
      this.setEnd(data['end']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'value')) {
      this.setValue(data['value']);
    }
  }


  get start(): number {
    return this._fields['start'];
  }
  
  getStart(): number {
      return this._fields['start'];
  }

  setStart(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['start'] = value;

    return this;
  }

  get end(): number {
    return this._fields['end'];
  }
  
  getEnd(): number {
      return this._fields['end'];
  }

  setEnd(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['end'] = value;

    return this;
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'start')) {
      data['start'] = this['start'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'end')) {
      data['end'] = this['end'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'value')) {
      data['value'] = this['value'];
    }

    return data;
  }
}
