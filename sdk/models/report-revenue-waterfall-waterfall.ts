
export default class ReportRevenueWaterfallWaterfall {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'recognizedMonth')) {
      this.setRecognizedMonth(data['recognizedMonth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
  }


  get recognizedMonth(): string | null {
    return this._fields['recognizedMonth'] ?? null;
  }
  
  getRecognizedMonth(): string | null {
      return this._fields['recognizedMonth'] ?? null;
  }

  setRecognizedMonth(value: null | string) {
    this._fields['recognizedMonth'] = value;

    return this;
  }

  get amount(): number | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): number | null {
      return this._fields['amount'] ?? null;
  }

  setAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recognizedMonth')) {
      data['recognizedMonth'] = this['recognizedMonth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }

    return data;
  }
}
