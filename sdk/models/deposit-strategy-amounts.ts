
export default class DepositStrategyAmounts {
  CALCULATOR_ABSOLUTE = 'absolute';

  CALCULATOR_PERCENT = 'percent';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'calculator')) {
      this.setCalculator(data['calculator']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'baseAmount')) {
      this.setBaseAmount(data['baseAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'increments')) {
      this.setIncrements(data['increments']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'adjustBaseToLastDeposit')) {
      this.setAdjustBaseToLastDeposit(data['adjustBaseToLastDeposit']);
    }
  }


  get calculator(): string {
    return this._fields['calculator'];
  }
  
  getCalculator(): string {
      return this._fields['calculator'];
  }

  setCalculator(value: string) {
    this._fields['calculator'] = value;

    return this;
  }

  get baseAmount(): number {
    return this._fields['baseAmount'];
  }
  
  getBaseAmount(): number {
      return this._fields['baseAmount'];
  }

  setBaseAmount(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['baseAmount'] = value;

    return this;
  }

  get increments(): Array<any> {
    return this._fields['increments'];
  }
  
  getIncrements(): Array<any> {
      return this._fields['increments'];
  }

  setIncrements(value: Array<any>) {
    value = value.map(
      (value) => typeof value === 'string' ? Number(value) : value,
    );

    this._fields['increments'] = value;

    return this;
  }

  get adjustBaseToLastDeposit(): boolean | null {
    return this._fields['adjustBaseToLastDeposit'] ?? null;
  }
  
  getAdjustBaseToLastDeposit(): boolean | null {
      return this._fields['adjustBaseToLastDeposit'] ?? null;
  }

  setAdjustBaseToLastDeposit(value: null | boolean) {
    this._fields['adjustBaseToLastDeposit'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'calculator')) {
      data['calculator'] = this['calculator'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'baseAmount')) {
      data['baseAmount'] = this['baseAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'increments')) {
      data['increments'] = this['increments'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'adjustBaseToLastDeposit')) {
      data['adjustBaseToLastDeposit'] = this['adjustBaseToLastDeposit'];
    }

    return data;
  }
}
