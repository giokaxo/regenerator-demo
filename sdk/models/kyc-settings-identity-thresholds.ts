
export default class KycSettingsIdentityThresholds {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'rejectBelow')) {
      this.setRejectBelow(data['rejectBelow']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acceptAbove')) {
      this.setAcceptAbove(data['acceptAbove']);
    }
  }


  get rejectBelow(): number | null {
    return this._fields['rejectBelow'] ?? null;
  }
  
  getRejectBelow(): number | null {
      return this._fields['rejectBelow'] ?? null;
  }

  setRejectBelow(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['rejectBelow'] = value;

    return this;
  }

  get acceptAbove(): number | null {
    return this._fields['acceptAbove'] ?? null;
  }
  
  getAcceptAbove(): number | null {
      return this._fields['acceptAbove'] ?? null;
  }

  setAcceptAbove(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['acceptAbove'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rejectBelow')) {
      data['rejectBelow'] = this['rejectBelow'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acceptAbove')) {
      data['acceptAbove'] = this['acceptAbove'];
    }

    return data;
  }
}
