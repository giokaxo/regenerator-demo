import PurchaseMatches from '../models/purchase-matches';

export default class ProofOfPurchaseKycDocumentParsedData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'data')) {
      this.setData(data['data']);
    }
  }


  get data(): PurchaseMatches | null {
    return this._fields['data'] ?? null;
  }
  
  getData(): PurchaseMatches | null {
      return this._fields['data'] ?? null;
  }

  setData(value: null | PurchaseMatches | any) {
    if (value !== null && !(value instanceof PurchaseMatches)) {
      value = new PurchaseMatches(value);
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
