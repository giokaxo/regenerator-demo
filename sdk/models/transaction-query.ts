
export default class TransactionQuery {
  RESULT_ABANDONED = 'abandoned';

  RESULT_APPROVED = 'approved';

  RESULT_CANCELED = 'canceled';

  RESULT_DECLINED = 'declined';

  RESULT_UNKNOWN = 'unknown';

  STATUS_COMPLETED = 'completed';

  STATUS_CONN_ERROR = 'conn-error';

  STATUS_DISPUTED = 'disputed';

  STATUS_NEVER_SENT = 'never-sent';

  STATUS_OFFSITE = 'offsite';

  STATUS_PARTIALLY_REFUNDED = 'partially-refunded';

  STATUS_PENDING = 'pending';

  STATUS_REFUNDED = 'refunded';

  STATUS_SENDING = 'sending';

  STATUS_SUSPENDED = 'suspended';

  STATUS_TIMEOUT = 'timeout';

  STATUS_VOIDED = 'voided';

  STATUS_WAITING_APPROVAL = 'waiting-approval';

  STATUS_WAITING_CAPTURE = 'waiting-capture';

  STATUS_WAITING_GATEWAY = 'waiting-gateway';

  STATUS_WAITING_REFUND = 'waiting-refund';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'transactionId')) {
      this.setTransactionId(data['transactionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'result')) {
      this.setResult(data['result']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
  }


  get transactionId(): string | null {
    return this._fields['transactionId'] ?? null;
  }
  
  getTransactionId(): string | null {
      return this._fields['transactionId'] ?? null;
  }

  setTransactionId(value: null | string) {
    this._fields['transactionId'] = value;

    return this;
  }

  get result(): string | null {
    return this._fields['result'] ?? null;
  }
  
  getResult(): string | null {
      return this._fields['result'] ?? null;
  }

  private setResult(value: null | string) {
    this._fields['result'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  private setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get amount(): number | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): number | null {
      return this._fields['amount'] ?? null;
  }

  private setAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get currency(): string | null {
    return this._fields['currency'] ?? null;
  }
  
  getCurrency(): string | null {
      return this._fields['currency'] ?? null;
  }

  private setCurrency(value: null | string) {
    this._fields['currency'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionId')) {
      data['transactionId'] = this['transactionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'result')) {
      data['result'] = this['result'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }

    return data;
  }
}
