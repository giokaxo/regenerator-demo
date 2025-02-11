
export default class CheckoutComCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'signatureKey')) {
      this.setSignatureKey(data['signatureKey']);
    }
  }


  get secretKey(): string {
    return this._fields['secretKey'];
  }
  
  getSecretKey(): string {
      return this._fields['secretKey'];
  }

  setSecretKey(value: string) {
    this._fields['secretKey'] = value;

    return this;
  }

  get signatureKey(): string | null {
    return this._fields['signatureKey'] ?? null;
  }
  
  getSignatureKey(): string | null {
      return this._fields['signatureKey'] ?? null;
  }

  setSignatureKey(value: null | string) {
    this._fields['signatureKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'signatureKey')) {
      data['signatureKey'] = this['signatureKey'];
    }

    return data;
  }
}
