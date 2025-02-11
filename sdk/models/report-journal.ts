import ReportJournalData from '../models/report-journal-data';

export default class ReportJournal {
  AGGREGATION_FIELD_PRODUCT_ACCOUNTING_CODE = 'product.accountingCode';

  AGGREGATION_FIELD_PRODUCT_ID = 'product.id';

  AGGREGATION_FIELD_PLAN_ID = 'plan.id';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'aggregationField')) {
      this.setAggregationField(data['aggregationField']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bookedFrom')) {
      this.setBookedFrom(data['bookedFrom']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bookedTo')) {
      this.setBookedTo(data['bookedTo']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recognizedAt')) {
      this.setRecognizedAt(data['recognizedAt']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'data')) {
      this.setData(data['data']);
    }
  }


  get aggregationField(): string | null {
    return this._fields['aggregationField'] ?? null;
  }
  
  getAggregationField(): string | null {
      return this._fields['aggregationField'] ?? null;
  }

  setAggregationField(value: null | string) {
    this._fields['aggregationField'] = value;

    return this;
  }

  get currency(): string | null {
    return this._fields['currency'] ?? null;
  }
  
  getCurrency(): string | null {
      return this._fields['currency'] ?? null;
  }

  setCurrency(value: null | string) {
    this._fields['currency'] = value;

    return this;
  }

  get bookedFrom(): string | null {
    return this._fields['bookedFrom'] ?? null;
  }
  
  getBookedFrom(): string | null {
      return this._fields['bookedFrom'] ?? null;
  }

  setBookedFrom(value: null | string) {
    this._fields['bookedFrom'] = value;

    return this;
  }

  get bookedTo(): string | null {
    return this._fields['bookedTo'] ?? null;
  }
  
  getBookedTo(): string | null {
      return this._fields['bookedTo'] ?? null;
  }

  setBookedTo(value: null | string) {
    this._fields['bookedTo'] = value;

    return this;
  }

  get recognizedAt(): string | null {
    return this._fields['recognizedAt'] ?? null;
  }
  
  getRecognizedAt(): string | null {
      return this._fields['recognizedAt'] ?? null;
  }

  setRecognizedAt(value: null | string) {
    this._fields['recognizedAt'] = value;

    return this;
  }

  get data(): Array<any> | null {
    return this._fields['data'] ?? null;
  }
  
  getData(): Array<any> | null {
      return this._fields['data'] ?? null;
  }

  setData(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ReportJournalData ? value : new ReportJournalData(value),
    ) : null;

    this._fields['data'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aggregationField')) {
      data['aggregationField'] = this['aggregationField'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bookedFrom')) {
      data['bookedFrom'] = this['bookedFrom'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bookedTo')) {
      data['bookedTo'] = this['bookedTo'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recognizedAt')) {
      data['recognizedAt'] = this['recognizedAt'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'data')) {
      data['data'] = this['data'] !== null
          ? this._fields['data'].map((reportJournalData: ReportJournalData) => reportJournalData.jsonSerialize())
          : null;
    }

    return data;
  }
}
