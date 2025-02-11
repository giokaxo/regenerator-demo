import GetKycAcceptanceSummaryReportResponseData from '../models/get-kyc-acceptance-summary-report-response-data';

export default class GetKycAcceptanceSummaryReportResponse {
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

  setData(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof GetKycAcceptanceSummaryReportResponseData ? value : new GetKycAcceptanceSummaryReportResponseData(value),
    ) : null;

    this._fields['data'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'data')) {
      data['data'] = this['data'] !== null
          ? this._fields['data'].map((getKycAcceptanceSummaryReportResponseData: GetKycAcceptanceSummaryReportResponseData) => getKycAcceptanceSummaryReportResponseData.jsonSerialize())
          : null;
    }

    return data;
  }
}
