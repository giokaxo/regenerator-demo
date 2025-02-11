
export default class PaymentInstrumentNameInquiry {
  RESULT_FULL_MATCH = 'full-match';

  RESULT_PARTIAL_MATCH = 'partial-match';

  RESULT_NO_MATCH = 'no-match';

  RESULT_NOT_SUPPORTED = 'not-supported';

  RESULT_UNKNOWN = 'unknown';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'gatewayAccountId')) {
      this.setGatewayAccountId(data['gatewayAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'result')) {
      this.setResult(data['result']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'response')) {
      this.setResponse(data['response']);
    }
  }


  get gatewayAccountId(): string {
    return this._fields['gatewayAccountId'];
  }
  
  getGatewayAccountId(): string {
      return this._fields['gatewayAccountId'];
  }

  setGatewayAccountId(value: string) {
    this._fields['gatewayAccountId'] = value;

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

  get response(): string | null {
    return this._fields['response'] ?? null;
  }
  
  getResponse(): string | null {
      return this._fields['response'] ?? null;
  }

  private setResponse(value: null | string) {
    this._fields['response'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gatewayAccountId')) {
      data['gatewayAccountId'] = this['gatewayAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'result')) {
      data['result'] = this['result'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'response')) {
      data['response'] = this['response'];
    }

    return data;
  }
}
