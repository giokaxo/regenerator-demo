
export default class CoinGateSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'targetCurrency')) {
      this.setTargetCurrency(data['targetCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tolerancePercentage')) {
      this.setTolerancePercentage(data['tolerancePercentage']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'adjustAmount')) {
      this.setAdjustAmount(data['adjustAmount']);
    }
  }


  get targetCurrency(): string | null {
    return this._fields['targetCurrency'] ?? null;
  }
  
  getTargetCurrency(): string | null {
      return this._fields['targetCurrency'] ?? null;
  }

  setTargetCurrency(value: null | string) {
    this._fields['targetCurrency'] = value;

    return this;
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

  get adjustAmount(): boolean | null {
    return this._fields['adjustAmount'] ?? null;
  }
  
  getAdjustAmount(): boolean | null {
      return this._fields['adjustAmount'] ?? null;
  }

  setAdjustAmount(value: null | boolean) {
    this._fields['adjustAmount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'targetCurrency')) {
      data['targetCurrency'] = this['targetCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tolerancePercentage')) {
      data['tolerancePercentage'] = this['tolerancePercentage'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'adjustAmount')) {
      data['adjustAmount'] = this['adjustAmount'];
    }

    return data;
  }
}
