
export default class EcoPayzSettings {
  VALID_CURRENCY_CAD = 'CAD';

  VALID_CURRENCY_EUR = 'EUR';

  VALID_CURRENCY_GBP = 'GBP';

  VALID_CURRENCY_USD = 'USD';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'validCurrency')) {
      this.setValidCurrency(data['validCurrency']);
    }
  }


  get validCurrency(): string {
    return this._fields['validCurrency'];
  }
  
  getValidCurrency(): string {
      return this._fields['validCurrency'];
  }

  setValidCurrency(value: string) {
    this._fields['validCurrency'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'validCurrency')) {
      data['validCurrency'] = this['validCurrency'];
    }

    return data;
  }
}
