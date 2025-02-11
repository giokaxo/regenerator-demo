
export default class CoinbaseSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'tolerancePercentage')) {
      this.setTolerancePercentage(data['tolerancePercentage']);
    }
  }


  get tolerancePercentage(): number {
    return this._fields['tolerancePercentage'];
  }
  
  getTolerancePercentage(): number {
      return this._fields['tolerancePercentage'];
  }

  setTolerancePercentage(value: number | string) {
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
