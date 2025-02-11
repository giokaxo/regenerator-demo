import TaxesFactory from '../factories/taxes-factory';
import { Taxes } from '../models/taxes';

export default class PatchQuote {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'tax')) {
      this.setTax(data['tax']);
    }
  }


  get tax(): Taxes | null {
    return this._fields['tax'] ?? null;
  }
  
  getTax(): Taxes | null {
      return this._fields['tax'] ?? null;
  }

  setTax(value: null | Taxes | any) {
    if (value !== null && !(value[Taxes])) {
      value = TaxesFactory.from(value);
    }

    this._fields['tax'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tax')) {
      data['tax'] = this['tax']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
