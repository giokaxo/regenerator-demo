import ReportMonthlyRecurringRevenueDataBreakdown from '../models/report-monthly-recurring-revenue-data-breakdown';

export default class ReportMonthlyRecurringRevenueData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'period')) {
      this.setPeriod(data['period']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'total')) {
      this.setTotal(data['total']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'breakdown')) {
      this.setBreakdown(data['breakdown']);
    }
  }


  get period(): string | null {
    return this._fields['period'] ?? null;
  }
  
  getPeriod(): string | null {
      return this._fields['period'] ?? null;
  }

  setPeriod(value: null | string) {
    this._fields['period'] = value;

    return this;
  }

  get total(): number | null {
    return this._fields['total'] ?? null;
  }
  
  getTotal(): number | null {
      return this._fields['total'] ?? null;
  }

  setTotal(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['total'] = value;

    return this;
  }

  get breakdown(): ReportMonthlyRecurringRevenueDataBreakdown | null {
    return this._fields['breakdown'] ?? null;
  }
  
  getBreakdown(): ReportMonthlyRecurringRevenueDataBreakdown | null {
      return this._fields['breakdown'] ?? null;
  }

  setBreakdown(value: null | ReportMonthlyRecurringRevenueDataBreakdown | any) {
    if (value !== null && !(value instanceof ReportMonthlyRecurringRevenueDataBreakdown)) {
      value = new ReportMonthlyRecurringRevenueDataBreakdown(value);
    }

    this._fields['breakdown'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'period')) {
      data['period'] = this['period'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'total')) {
      data['total'] = this['total'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'breakdown')) {
      data['breakdown'] = this['breakdown']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
