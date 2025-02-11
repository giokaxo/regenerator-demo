
export default class IngenicoCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiKeyId')) {
      this.setApiKeyId(data['apiKeyId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiSecretKey')) {
      this.setApiSecretKey(data['apiSecretKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'skipFraudService')) {
      this.setSkipFraudService(data['skipFraudService']);
    }
  }


  get merchantId(): string {
    return this._fields['merchantId'];
  }
  
  getMerchantId(): string {
      return this._fields['merchantId'];
  }

  setMerchantId(value: string) {
    this._fields['merchantId'] = value;

    return this;
  }

  get apiKeyId(): string {
    return this._fields['apiKeyId'];
  }
  
  getApiKeyId(): string {
      return this._fields['apiKeyId'];
  }

  setApiKeyId(value: string) {
    this._fields['apiKeyId'] = value;

    return this;
  }

  get apiSecretKey(): string {
    return this._fields['apiSecretKey'];
  }
  
  getApiSecretKey(): string {
      return this._fields['apiSecretKey'];
  }

  setApiSecretKey(value: string) {
    this._fields['apiSecretKey'] = value;

    return this;
  }

  get skipFraudService(): boolean | null {
    return this._fields['skipFraudService'] ?? null;
  }
  
  getSkipFraudService(): boolean | null {
      return this._fields['skipFraudService'] ?? null;
  }

  setSkipFraudService(value: null | boolean) {
    this._fields['skipFraudService'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKeyId')) {
      data['apiKeyId'] = this['apiKeyId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiSecretKey')) {
      data['apiSecretKey'] = this['apiSecretKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'skipFraudService')) {
      data['skipFraudService'] = this['skipFraudService'];
    }

    return data;
  }
}
