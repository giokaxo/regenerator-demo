import ReportKycRejectionsDataRejectionReasons from '../models/report-kyc-rejections-data-rejection-reasons';

export default class ReportKycRejectionsData {
  DOCUMENT_TYPE_IDENTITY_PROOF = 'identity-proof';

  DOCUMENT_TYPE_ADDRESS_PROOF = 'address-proof';

  DOCUMENT_TYPE_FUNDS_PROOF = 'funds-proof';

  DOCUMENT_TYPE_PURCHASE_PROOF = 'purchase-proof';

  DOCUMENT_TYPE_CREDIT_FILE_PROOF = 'credit-file-proof';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'documentType')) {
      this.setDocumentType(data['documentType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rejectionReasons')) {
      this.setRejectionReasons(data['rejectionReasons']);
    }
  }


  get documentType(): string | null {
    return this._fields['documentType'] ?? null;
  }
  
  getDocumentType(): string | null {
      return this._fields['documentType'] ?? null;
  }

  setDocumentType(value: null | string) {
    this._fields['documentType'] = value;

    return this;
  }

  get rejectionReasons(): Array<any> | null {
    return this._fields['rejectionReasons'] ?? null;
  }
  
  getRejectionReasons(): Array<any> | null {
      return this._fields['rejectionReasons'] ?? null;
  }

  setRejectionReasons(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ReportKycRejectionsDataRejectionReasons ? value : new ReportKycRejectionsDataRejectionReasons(value),
    ) : null;

    this._fields['rejectionReasons'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'documentType')) {
      data['documentType'] = this['documentType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rejectionReasons')) {
      data['rejectionReasons'] = this['rejectionReasons'] !== null
          ? this._fields['rejectionReasons'].map((reportKycRejectionsDataRejectionReasons: ReportKycRejectionsDataRejectionReasons) => reportKycRejectionsDataRejectionReasons.jsonSerialize())
          : null;
    }

    return data;
  }
}
