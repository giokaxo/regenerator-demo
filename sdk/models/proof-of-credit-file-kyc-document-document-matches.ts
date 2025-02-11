import CreditFileMatches from '../models/credit-file-matches';

export default class ProofOfCreditFileKycDocumentDocumentMatches {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'data')) {
      this.setData(data['data']);
    }
  }


  get data(): CreditFileMatches | null {
    return this._fields['data'] ?? null;
  }
  
  getData(): CreditFileMatches | null {
      return this._fields['data'] ?? null;
  }

  setData(value: null | CreditFileMatches | any) {
    if (value !== null && !(value instanceof CreditFileMatches)) {
      value = new CreditFileMatches(value);
    }

    this._fields['data'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'data')) {
      data['data'] = this['data']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
