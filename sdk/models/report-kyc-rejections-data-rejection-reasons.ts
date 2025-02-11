
export default class ReportKycRejectionsDataRejectionReasons {
  REJECTION_REASON_DOCUMENT_UNREADABLE = 'document-unreadable';

  REJECTION_REASON_DOCUMENT_EXPIRED = 'document-expired';

  REJECTION_REASON_DOCUMENT_NOT_MATCHING = 'document-not-matching';

  REJECTION_REASON_DOCUMENT_DUPLICATE = 'document-duplicate';

  REJECTION_REASON_DOCUMENT_INVALID = 'document-invalid';

  REJECTION_REASON_DOCUMENT_NOT_OPEN = 'document-not-open';

  REJECTION_REASON_UNDERAGE_PERSON = 'underage-person';

  REJECTION_REASON_THIRD_PARTY_OR_MISMATCH = 'third-party-or-mismatch';

  REJECTION_REASON_EXPIRATION_DATE_MISSING = 'expiration-date-missing';

  REJECTION_REASON_ISSUE_DATE_MISSING = 'issue-date-missing';

  REJECTION_REASON_DOB_MISMATCH = 'dob-mismatch';

  REJECTION_REASON_NAME_MISMATCH = 'name-mismatch';

  REJECTION_REASON_CRITICAL_INFO_MISSING = 'critical-info-missing';

  REJECTION_REASON_OLD_ADDRESS_ON_ID = 'old-address-on-id';

  REJECTION_REASON_TAMPERED_DOCUMENT = 'tampered-document';

  REJECTION_REASON_OTHER = 'other';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'rejectionReason')) {
      this.setRejectionReason(data['rejectionReason']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'count')) {
      this.setCount(data['count']);
    }
  }


  get rejectionReason(): string | null {
    return this._fields['rejectionReason'] ?? null;
  }
  
  getRejectionReason(): string | null {
      return this._fields['rejectionReason'] ?? null;
  }

  setRejectionReason(value: null | string) {
    this._fields['rejectionReason'] = value;

    return this;
  }

  get count(): number | null {
    return this._fields['count'] ?? null;
  }
  
  getCount(): number | null {
      return this._fields['count'] ?? null;
  }

  setCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['count'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rejectionReason')) {
      data['rejectionReason'] = this['rejectionReason'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'count')) {
      data['count'] = this['count'];
    }

    return data;
  }
}
