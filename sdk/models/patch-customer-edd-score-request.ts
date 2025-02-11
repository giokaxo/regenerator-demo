import PatchCustomerEddScoreRequestScore from '../models/patch-customer-edd-score-request-score';

export default class PatchCustomerEddScoreRequest {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'score')) {
      this.setScore(data['score']);
    }
  }


  get score(): PatchCustomerEddScoreRequestScore {
    return this._fields['score'];
  }
  
  getScore(): PatchCustomerEddScoreRequestScore {
      return this._fields['score'];
  }

  setScore(value: PatchCustomerEddScoreRequestScore | any) {
    if (!(value instanceof PatchCustomerEddScoreRequestScore)) {
      value = new PatchCustomerEddScoreRequestScore(value);
    }

    this._fields['score'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'score')) {
      data['score'] = this['score'].jsonSerialize();
    }

    return data;
  }
}
