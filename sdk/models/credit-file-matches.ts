import CreditFileMatchesReferenceData from '../models/credit-file-matches-reference-data';
import CreditFileMatchesTrades from '../models/credit-file-matches-trades';

export default class CreditFileMatches {
  CREDIT_BUREAU_EQUIFAX = 'equifax';

  CREDIT_BUREAU_EXPERIAN = 'experian';

  CREDIT_BUREAU_TRANSUNION = 'transunion';

  CREDIT_BUREAU_TEST_BUREAU = 'test-bureau';

  DECISION_SINGLE_SOURCE = 'single-source';

  DECISION_DUAL_SOURCE = 'dual-source';

  DECISION_OTHER = 'other';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'creditBureau')) {
      this.setCreditBureau(data['creditBureau']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'creditFileNumber')) {
      this.setCreditFileNumber(data['creditFileNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'consultedDate')) {
      this.setConsultedDate(data['consultedDate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'decision')) {
      this.setDecision(data['decision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'trades')) {
      this.setTrades(data['trades']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'referenceData')) {
      this.setReferenceData(data['referenceData']);
    }
  }


  get creditBureau(): string | null {
    return this._fields['creditBureau'] ?? null;
  }
  
  getCreditBureau(): string | null {
      return this._fields['creditBureau'] ?? null;
  }

  private setCreditBureau(value: null | string) {
    this._fields['creditBureau'] = value;

    return this;
  }

  get creditFileNumber(): string | null {
    return this._fields['creditFileNumber'] ?? null;
  }
  
  getCreditFileNumber(): string | null {
      return this._fields['creditFileNumber'] ?? null;
  }

  private setCreditFileNumber(value: null | string) {
    this._fields['creditFileNumber'] = value;

    return this;
  }

  get name(): string | null {
    return this._fields['name'] ?? null;
  }
  
  getName(): string | null {
      return this._fields['name'] ?? null;
  }

  private setName(value: null | string) {
    this._fields['name'] = value;

    return this;
  }

  get consultedDate(): Date | null {
    return this._fields['consultedDate'] ?? null;
  }
  
  getConsultedDate(): Date | null {
      return this._fields['consultedDate'] ?? null;
  }

  private setConsultedDate(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['consultedDate'] = value;

    return this;
  }

  get decision(): string | null {
    return this._fields['decision'] ?? null;
  }
  
  getDecision(): string | null {
      return this._fields['decision'] ?? null;
  }

  private setDecision(value: null | string) {
    this._fields['decision'] = value;

    return this;
  }

  get trades(): Array<any> | null {
    return this._fields['trades'] ?? null;
  }
  
  getTrades(): Array<any> | null {
      return this._fields['trades'] ?? null;
  }

  private setTrades(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof CreditFileMatchesTrades ? value : new CreditFileMatchesTrades(value),
    ) : null;

    this._fields['trades'] = value;

    return this;
  }

  get referenceData(): CreditFileMatchesReferenceData | null {
    return this._fields['referenceData'] ?? null;
  }
  
  getReferenceData(): CreditFileMatchesReferenceData | null {
      return this._fields['referenceData'] ?? null;
  }

  setReferenceData(value: null | CreditFileMatchesReferenceData | any) {
    if (value !== null && !(value instanceof CreditFileMatchesReferenceData)) {
      value = new CreditFileMatchesReferenceData(value);
    }

    this._fields['referenceData'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'creditBureau')) {
      data['creditBureau'] = this['creditBureau'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'creditFileNumber')) {
      data['creditFileNumber'] = this['creditFileNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'consultedDate')) {
      data['consultedDate'] = this['consultedDate']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'decision')) {
      data['decision'] = this['decision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'trades')) {
      data['trades'] = this['trades'] !== null
          ? this._fields['trades'].map((creditFileMatchesTrades: CreditFileMatchesTrades) => creditFileMatchesTrades.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'referenceData')) {
      data['referenceData'] = this['referenceData']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
