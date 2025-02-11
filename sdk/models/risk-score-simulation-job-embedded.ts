import Transaction from '../models/transaction';

export default class RiskScoreSimulationJobEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'transactions')) {
      this.setTransactions(data['transactions']);
    }
  }


  get transactions(): Array<any> | null {
    return this._fields['transactions'] ?? null;
  }
  
  getTransactions(): Array<any> | null {
      return this._fields['transactions'] ?? null;
  }

  setTransactions(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Transaction ? value : new Transaction(value),
    ) : null;

    this._fields['transactions'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactions')) {
      data['transactions'] = this['transactions'] !== null
          ? this._fields['transactions'].map((transaction: Transaction) => transaction.jsonSerialize())
          : null;
    }

    return data;
  }
}
