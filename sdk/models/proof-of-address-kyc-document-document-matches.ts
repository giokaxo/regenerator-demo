import KycAddressMatches from '../models/kyc-address-matches';

export default class ProofOfAddressKycDocumentDocumentMatches {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'score')) {
      this.setScore(data['score']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'data')) {
      this.setData(data['data']);
    }
  }


  get score(): number | null {
    return this._fields['score'] ?? null;
  }
  
  getScore(): number | null {
      return this._fields['score'] ?? null;
  }

  setScore(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['score'] = value;

    return this;
  }

  get data(): KycAddressMatches | null {
    return this._fields['data'] ?? null;
  }
  
  getData(): KycAddressMatches | null {
      return this._fields['data'] ?? null;
  }

  setData(value: null | KycAddressMatches | any) {
    if (value !== null && !(value instanceof KycAddressMatches)) {
      value = new KycAddressMatches(value);
    }

    this._fields['data'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'score')) {
      data['score'] = this['score'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'data')) {
      data['data'] = this['data']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
