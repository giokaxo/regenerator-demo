import GetKycAcceptanceSummaryReportResponseDataDocumentType from '../models/get-kyc-acceptance-summary-report-response-data-document-type';
import GetKycAcceptanceSummaryReportResponseDataStatusStatistics from '../models/get-kyc-acceptance-summary-report-response-data-status-statistics';

export default class GetKycAcceptanceSummaryReportResponseData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'documentType')) {
      this.setDocumentType(data['documentType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'statusStatistics')) {
      this.setStatusStatistics(data['statusStatistics']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'total')) {
      this.setTotal(data['total']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accuracyRate')) {
      this.setAccuracyRate(data['accuracyRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acceptanceRate')) {
      this.setAcceptanceRate(data['acceptanceRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'manualReviewTime')) {
      this.setManualReviewTime(data['manualReviewTime']);
    }
  }


  get documentType(): GetKycAcceptanceSummaryReportResponseDataDocumentType | null {
    return this._fields['documentType'] ?? null;
  }
  
  getDocumentType(): GetKycAcceptanceSummaryReportResponseDataDocumentType | null {
      return this._fields['documentType'] ?? null;
  }

  setDocumentType(value: null | GetKycAcceptanceSummaryReportResponseDataDocumentType | any) {
    if (value !== null && !(value instanceof GetKycAcceptanceSummaryReportResponseDataDocumentType)) {
      value = new GetKycAcceptanceSummaryReportResponseDataDocumentType(value);
    }

    this._fields['documentType'] = value;

    return this;
  }

  get statusStatistics(): GetKycAcceptanceSummaryReportResponseDataStatusStatistics | null {
    return this._fields['statusStatistics'] ?? null;
  }
  
  getStatusStatistics(): GetKycAcceptanceSummaryReportResponseDataStatusStatistics | null {
      return this._fields['statusStatistics'] ?? null;
  }

  setStatusStatistics(value: null | GetKycAcceptanceSummaryReportResponseDataStatusStatistics | any) {
    if (value !== null && !(value instanceof GetKycAcceptanceSummaryReportResponseDataStatusStatistics)) {
      value = new GetKycAcceptanceSummaryReportResponseDataStatusStatistics(value);
    }

    this._fields['statusStatistics'] = value;

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

  get accuracyRate(): number | null {
    return this._fields['accuracyRate'] ?? null;
  }
  
  getAccuracyRate(): number | null {
      return this._fields['accuracyRate'] ?? null;
  }

  setAccuracyRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['accuracyRate'] = value;

    return this;
  }

  get acceptanceRate(): number | null {
    return this._fields['acceptanceRate'] ?? null;
  }
  
  getAcceptanceRate(): number | null {
      return this._fields['acceptanceRate'] ?? null;
  }

  setAcceptanceRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['acceptanceRate'] = value;

    return this;
  }

  get manualReviewTime(): number | null {
    return this._fields['manualReviewTime'] ?? null;
  }
  
  getManualReviewTime(): number | null {
      return this._fields['manualReviewTime'] ?? null;
  }

  setManualReviewTime(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['manualReviewTime'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'documentType')) {
      data['documentType'] = this['documentType']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'statusStatistics')) {
      data['statusStatistics'] = this['statusStatistics']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'total')) {
      data['total'] = this['total'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accuracyRate')) {
      data['accuracyRate'] = this['accuracyRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acceptanceRate')) {
      data['acceptanceRate'] = this['acceptanceRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'manualReviewTime')) {
      data['manualReviewTime'] = this['manualReviewTime'];
    }

    return data;
  }
}
