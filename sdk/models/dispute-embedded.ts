import Transaction from '../models/transaction';

export default class DisputeEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'transaction')) {
      this.setTransaction(data['transaction']);
    }
  }


  get transaction(): Transaction | null {
    return this._fields['transaction'] ?? null;
  }
  
  getTransaction(): Transaction | null {
      return this._fields['transaction'] ?? null;
  }

  setTransaction(value: null | Transaction | any) {
    if (value !== null && !(value instanceof Transaction)) {
      value = new Transaction(value);
    }

    this._fields['transaction'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transaction')) {
      data['transaction'] = this['transaction']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
