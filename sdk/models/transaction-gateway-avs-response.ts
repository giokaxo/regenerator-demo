
export default class TransactionGatewayAvsResponse {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'code')) {
      this.setCode(data['code']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'message')) {
      this.setMessage(data['message']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'originalCode')) {
      this.setOriginalCode(data['originalCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'originalMessage')) {
      this.setOriginalMessage(data['originalMessage']);
    }
  }


  get code(): string | null {
    return this._fields['code'] ?? null;
  }
  
  getCode(): string | null {
      return this._fields['code'] ?? null;
  }

  setCode(value: null | string) {
    this._fields['code'] = value;

    return this;
  }

  get message(): string | null {
    return this._fields['message'] ?? null;
  }
  
  getMessage(): string | null {
      return this._fields['message'] ?? null;
  }

  setMessage(value: null | string) {
    this._fields['message'] = value;

    return this;
  }

  get originalCode(): string | null {
    return this._fields['originalCode'] ?? null;
  }
  
  getOriginalCode(): string | null {
      return this._fields['originalCode'] ?? null;
  }

  setOriginalCode(value: null | string) {
    this._fields['originalCode'] = value;

    return this;
  }

  get originalMessage(): string | null {
    return this._fields['originalMessage'] ?? null;
  }
  
  getOriginalMessage(): string | null {
      return this._fields['originalMessage'] ?? null;
  }

  setOriginalMessage(value: null | string) {
    this._fields['originalMessage'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'code')) {
      data['code'] = this['code'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'message')) {
      data['message'] = this['message'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'originalCode')) {
      data['originalCode'] = this['originalCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'originalMessage')) {
      data['originalMessage'] = this['originalMessage'];
    }

    return data;
  }
}
