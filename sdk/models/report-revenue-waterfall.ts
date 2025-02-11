import ReportRevenueWaterfallWaterfall from '../models/report-revenue-waterfall-waterfall';

export default class ReportRevenueWaterfall {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'issuedMonth')) {
      this.setIssuedMonth(data['issuedMonth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'booked')) {
      this.setBooked(data['booked']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recognized')) {
      this.setRecognized(data['recognized']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'remaining')) {
      this.setRemaining(data['remaining']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'waterfall')) {
      this.setWaterfall(data['waterfall']);
    }
  }


  get issuedMonth(): string | null {
    return this._fields['issuedMonth'] ?? null;
  }
  
  getIssuedMonth(): string | null {
      return this._fields['issuedMonth'] ?? null;
  }

  setIssuedMonth(value: null | string) {
    this._fields['issuedMonth'] = value;

    return this;
  }

  get booked(): number | null {
    return this._fields['booked'] ?? null;
  }
  
  getBooked(): number | null {
      return this._fields['booked'] ?? null;
  }

  setBooked(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['booked'] = value;

    return this;
  }

  get recognized(): number | null {
    return this._fields['recognized'] ?? null;
  }
  
  getRecognized(): number | null {
      return this._fields['recognized'] ?? null;
  }

  setRecognized(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['recognized'] = value;

    return this;
  }

  get remaining(): number | null {
    return this._fields['remaining'] ?? null;
  }
  
  getRemaining(): number | null {
      return this._fields['remaining'] ?? null;
  }

  setRemaining(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['remaining'] = value;

    return this;
  }

  get waterfall(): Array<any> | null {
    return this._fields['waterfall'] ?? null;
  }
  
  getWaterfall(): Array<any> | null {
      return this._fields['waterfall'] ?? null;
  }

  setWaterfall(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ReportRevenueWaterfallWaterfall ? value : new ReportRevenueWaterfallWaterfall(value),
    ) : null;

    this._fields['waterfall'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'issuedMonth')) {
      data['issuedMonth'] = this['issuedMonth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'booked')) {
      data['booked'] = this['booked'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recognized')) {
      data['recognized'] = this['recognized'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'remaining')) {
      data['remaining'] = this['remaining'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'waterfall')) {
      data['waterfall'] = this['waterfall'] !== null
          ? this._fields['waterfall'].map((reportRevenueWaterfallWaterfall: ReportRevenueWaterfallWaterfall) => reportRevenueWaterfallWaterfall.jsonSerialize())
          : null;
    }

    return data;
  }
}
