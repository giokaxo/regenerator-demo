
export default class ReportKycRequestsData {
  REJECTION_REASON_ABANDONED = 'abandoned';

  REJECTION_REASON_EXPIRED = 'expired';

  REJECTION_REASON_FAILED = 'failed';

  REJECTION_REASON_FULFILLED = 'fulfilled';

  REJECTION_REASON_PENDING_REVIEW = 'pending-review';

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
