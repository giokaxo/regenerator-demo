import ReportTransactionsData from '../models/report-transactions-data';

export default class ReportTransactions {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'data')) {
      this.setData(data['data']);
    }
  }


  get data(): Array<any> | null {
    return this._fields['data'] ?? null;
  }
  
  getData(): Array<any> | null {
      return this._fields['data'] ?? null;
  }

  private setData(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ReportTransactionsData ? value : new ReportTransactionsData(value),
    ) : null;

    this._fields['data'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'data')) {
      data['data'] = this['data'] !== null
          ? this._fields['data'].map((reportTransactionsData: ReportTransactionsData) => reportTransactionsData.jsonSerialize())
          : null;
    }

    return data;
  }
}
