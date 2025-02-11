
export default class CCAvenueCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accessCode')) {
      this.setAccessCode(data['accessCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'workingKey')) {
      this.setWorkingKey(data['workingKey']);
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

  get accessCode(): string {
    return this._fields['accessCode'];
  }
  
  getAccessCode(): string {
      return this._fields['accessCode'];
  }

  setAccessCode(value: string) {
    this._fields['accessCode'] = value;

    return this;
  }

  get workingKey(): string {
    return this._fields['workingKey'];
  }
  
  getWorkingKey(): string {
      return this._fields['workingKey'];
  }

  setWorkingKey(value: string) {
    this._fields['workingKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accessCode')) {
      data['accessCode'] = this['accessCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'workingKey')) {
      data['workingKey'] = this['workingKey'];
    }

    return data;
  }
}
