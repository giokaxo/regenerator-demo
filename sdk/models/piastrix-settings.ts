
export default class PiastrixSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'tolerancePercentage')) {
      this.setTolerancePercentage(data['tolerancePercentage']);
    }
  }


  get tolerancePercentage(): number | null {
    return this._fields['tolerancePercentage'] ?? null;
  }
  
  getTolerancePercentage(): number | null {
      return this._fields['tolerancePercentage'] ?? null;
  }

  setTolerancePercentage(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['tolerancePercentage'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tolerancePercentage')) {
      data['tolerancePercentage'] = this['tolerancePercentage'];
    }

    return data;
  }
}
