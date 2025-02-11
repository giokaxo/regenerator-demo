
export default class QuickBooksOnlineTransactionExternalServiceSettings {
  SYNC_PAYMENTS_MANUALLY = 'manually';

  SYNC_PAYMENTS_ALWAYS = 'always';

  SYNC_REFUND_RECEIPTS_MANUALLY = 'manually';

  SYNC_REFUND_RECEIPTS_ALWAYS = 'always';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'syncPayments')) {
      this.setSyncPayments(data['syncPayments']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'syncRefundReceipts')) {
      this.setSyncRefundReceipts(data['syncRefundReceipts']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'depositAccountId')) {
      this.setDepositAccountId(data['depositAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'department')) {
      this.setDepartment(data['department']);
    }
  }


  get syncPayments(): string | null {
    return this._fields['syncPayments'] ?? null;
  }
  
  getSyncPayments(): string | null {
      return this._fields['syncPayments'] ?? null;
  }

  setSyncPayments(value: null | string) {
    this._fields['syncPayments'] = value;

    return this;
  }

  get syncRefundReceipts(): string | null {
    return this._fields['syncRefundReceipts'] ?? null;
  }
  
  getSyncRefundReceipts(): string | null {
      return this._fields['syncRefundReceipts'] ?? null;
  }

  setSyncRefundReceipts(value: null | string) {
    this._fields['syncRefundReceipts'] = value;

    return this;
  }

  get depositAccountId(): string | null {
    return this._fields['depositAccountId'] ?? null;
  }
  
  getDepositAccountId(): string | null {
      return this._fields['depositAccountId'] ?? null;
  }

  setDepositAccountId(value: null | string) {
    this._fields['depositAccountId'] = value;

    return this;
  }

  get department(): string | null {
    return this._fields['department'] ?? null;
  }
  
  getDepartment(): string | null {
      return this._fields['department'] ?? null;
  }

  setDepartment(value: null | string) {
    this._fields['department'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'syncPayments')) {
      data['syncPayments'] = this['syncPayments'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'syncRefundReceipts')) {
      data['syncRefundReceipts'] = this['syncRefundReceipts'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'depositAccountId')) {
      data['depositAccountId'] = this['depositAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'department')) {
      data['department'] = this['department'];
    }

    return data;
  }
}
