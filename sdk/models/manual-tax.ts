import { Taxes } from '../models/taxes';
import TaxItem from '../models/tax-item';

export default class ManualTax implements Taxes {
  get [Taxes](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      this.setItems(data['items']);
    }
  }


  public get calculator() {
    return 'manual';
  }

  public getCalculator() {
    return 'manual';
  }

  get amount(): number | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): number | null {
      return this._fields['amount'] ?? null;
  }

  private setAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get items(): Array<any> {
    return this._fields['items'];
  }
  
  getItems(): Array<any> {
      return this._fields['items'];
  }

  setItems(value: Array<any>) {
    value = value.map(
      (value) => value instanceof TaxItem ? value : new TaxItem(value),
    );

    this._fields['items'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      calculator: 'manual',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'].map(
          (taxItem: TaxItem) => taxItem.jsonSerialize()
      );
    }

    return data;
  }
}
