
export default class PaymeroSettings {
  MAIN_CURRENCY_TRX = 'TRX';

  MAIN_CURRENCY_ETH = 'ETH';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'targetCurrency')) {
      this.setTargetCurrency(data['targetCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'mainCurrency')) {
      this.setMainCurrency(data['mainCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amountExceeded')) {
      this.setAmountExceeded(data['amountExceeded']);
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

  get mainCurrency(): string | null {
    return this._fields['mainCurrency'] ?? null;
  }
  
  getMainCurrency(): string | null {
      return this._fields['mainCurrency'] ?? null;
  }

  setMainCurrency(value: null | string) {
    this._fields['mainCurrency'] = value;

    return this;
  }

  get amountExceeded(): boolean | null {
    return this._fields['amountExceeded'] ?? null;
  }
  
  getAmountExceeded(): boolean | null {
      return this._fields['amountExceeded'] ?? null;
  }

  setAmountExceeded(value: null | boolean) {
    this._fields['amountExceeded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'targetCurrency')) {
      data['targetCurrency'] = this['targetCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mainCurrency')) {
      data['mainCurrency'] = this['mainCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amountExceeded')) {
      data['amountExceeded'] = this['amountExceeded'];
    }

    return data;
  }
}
