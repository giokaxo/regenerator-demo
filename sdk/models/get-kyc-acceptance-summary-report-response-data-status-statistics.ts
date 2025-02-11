import GetKycAcceptanceSummaryReportResponseDataStatusStatisticsAccepted from '../models/get-kyc-acceptance-summary-report-response-data-status-statistics-accepted';
import GetKycAcceptanceSummaryReportResponseDataStatusStatisticsRejected from '../models/get-kyc-acceptance-summary-report-response-data-status-statistics-rejected';
import GetKycAcceptanceSummaryReportResponseDataStatusStatisticsPending from '../models/get-kyc-acceptance-summary-report-response-data-status-statistics-pending';
import GetKycAcceptanceSummaryReportResponseDataStatusStatisticsArchived from '../models/get-kyc-acceptance-summary-report-response-data-status-statistics-archived';

export default class GetKycAcceptanceSummaryReportResponseDataStatusStatistics {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accepted')) {
      this.setAccepted(data['accepted']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rejected')) {
      this.setRejected(data['rejected']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'pending')) {
      this.setPending(data['pending']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'archived')) {
      this.setArchived(data['archived']);
    }
  }


  get accepted(): GetKycAcceptanceSummaryReportResponseDataStatusStatisticsAccepted | null {
    return this._fields['accepted'] ?? null;
  }
  
  getAccepted(): GetKycAcceptanceSummaryReportResponseDataStatusStatisticsAccepted | null {
      return this._fields['accepted'] ?? null;
  }

  setAccepted(value: null | GetKycAcceptanceSummaryReportResponseDataStatusStatisticsAccepted | any) {
    if (value !== null && !(value instanceof GetKycAcceptanceSummaryReportResponseDataStatusStatisticsAccepted)) {
      value = new GetKycAcceptanceSummaryReportResponseDataStatusStatisticsAccepted(value);
    }

    this._fields['accepted'] = value;

    return this;
  }

  get rejected(): GetKycAcceptanceSummaryReportResponseDataStatusStatisticsRejected | null {
    return this._fields['rejected'] ?? null;
  }
  
  getRejected(): GetKycAcceptanceSummaryReportResponseDataStatusStatisticsRejected | null {
      return this._fields['rejected'] ?? null;
  }

  setRejected(value: null | GetKycAcceptanceSummaryReportResponseDataStatusStatisticsRejected | any) {
    if (value !== null && !(value instanceof GetKycAcceptanceSummaryReportResponseDataStatusStatisticsRejected)) {
      value = new GetKycAcceptanceSummaryReportResponseDataStatusStatisticsRejected(value);
    }

    this._fields['rejected'] = value;

    return this;
  }

  get pending(): GetKycAcceptanceSummaryReportResponseDataStatusStatisticsPending | null {
    return this._fields['pending'] ?? null;
  }
  
  getPending(): GetKycAcceptanceSummaryReportResponseDataStatusStatisticsPending | null {
      return this._fields['pending'] ?? null;
  }

  setPending(value: null | GetKycAcceptanceSummaryReportResponseDataStatusStatisticsPending | any) {
    if (value !== null && !(value instanceof GetKycAcceptanceSummaryReportResponseDataStatusStatisticsPending)) {
      value = new GetKycAcceptanceSummaryReportResponseDataStatusStatisticsPending(value);
    }

    this._fields['pending'] = value;

    return this;
  }

  get archived(): GetKycAcceptanceSummaryReportResponseDataStatusStatisticsArchived | null {
    return this._fields['archived'] ?? null;
  }
  
  getArchived(): GetKycAcceptanceSummaryReportResponseDataStatusStatisticsArchived | null {
      return this._fields['archived'] ?? null;
  }

  setArchived(value: null | GetKycAcceptanceSummaryReportResponseDataStatusStatisticsArchived | any) {
    if (value !== null && !(value instanceof GetKycAcceptanceSummaryReportResponseDataStatusStatisticsArchived)) {
      value = new GetKycAcceptanceSummaryReportResponseDataStatusStatisticsArchived(value);
    }

    this._fields['archived'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accepted')) {
      data['accepted'] = this['accepted']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rejected')) {
      data['rejected'] = this['rejected']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'pending')) {
      data['pending'] = this['pending']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'archived')) {
      data['archived'] = this['archived']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
