import FundsMatches from '../models/funds-matches';

export default class ProofOfFundsKycDocumentParsedData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'data')) {
      this.setData(data['data']);
    }
  }


  get data(): FundsMatches | null {
    return this._fields['data'] ?? null;
  }
  
  getData(): FundsMatches | null {
      return this._fields['data'] ?? null;
  }

  setData(value: null | FundsMatches | any) {
    if (value !== null && !(value instanceof FundsMatches)) {
      value = new FundsMatches(value);
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
