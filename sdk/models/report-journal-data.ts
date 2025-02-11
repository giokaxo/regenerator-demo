
export default class ReportJournalData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'aggregationValue')) {
      this.setAggregationValue(data['aggregationValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bookedMonth')) {
      this.setBookedMonth(data['bookedMonth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bookedAmount')) {
      this.setBookedAmount(data['bookedAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recognizedAmount')) {
      this.setRecognizedAmount(data['recognizedAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'remainingAmount')) {
      this.setRemainingAmount(data['remainingAmount']);
    }
  }


  get aggregationValue(): string | null {
    return this._fields['aggregationValue'] ?? null;
  }
  
  getAggregationValue(): string | null {
      return this._fields['aggregationValue'] ?? null;
  }

  setAggregationValue(value: null | string) {
    this._fields['aggregationValue'] = value;

    return this;
  }

  get bookedMonth(): string | null {
    return this._fields['bookedMonth'] ?? null;
  }
  
  getBookedMonth(): string | null {
      return this._fields['bookedMonth'] ?? null;
  }

  setBookedMonth(value: null | string) {
    this._fields['bookedMonth'] = value;

    return this;
  }

  get bookedAmount(): number | null {
    return this._fields['bookedAmount'] ?? null;
  }
  
  getBookedAmount(): number | null {
      return this._fields['bookedAmount'] ?? null;
  }

  setBookedAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['bookedAmount'] = value;

    return this;
  }

  get recognizedAmount(): number | null {
    return this._fields['recognizedAmount'] ?? null;
  }
  
  getRecognizedAmount(): number | null {
      return this._fields['recognizedAmount'] ?? null;
  }

  setRecognizedAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['recognizedAmount'] = value;

    return this;
  }

  get remainingAmount(): number | null {
    return this._fields['remainingAmount'] ?? null;
  }
  
  getRemainingAmount(): number | null {
      return this._fields['remainingAmount'] ?? null;
  }

  setRemainingAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['remainingAmount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aggregationValue')) {
      data['aggregationValue'] = this['aggregationValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bookedMonth')) {
      data['bookedMonth'] = this['bookedMonth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bookedAmount')) {
      data['bookedAmount'] = this['bookedAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recognizedAmount')) {
      data['recognizedAmount'] = this['recognizedAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'remainingAmount')) {
      data['remainingAmount'] = this['remainingAmount'];
    }

    return data;
  }
}
