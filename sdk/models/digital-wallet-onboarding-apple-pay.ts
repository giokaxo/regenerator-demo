
export default class DigitalWalletOnboardingApplePay {
  STATUS_FAILED = 'failed';

  STATUS_REGISTERED = 'registered';

  STATUS_ALREADY_REGISTERED = 'already-registered';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'domain')) {
      this.setDomain(data['domain']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
  }


  get domain(): string {
    return this._fields['domain'];
  }
  
  getDomain(): string {
      return this._fields['domain'];
  }

  setDomain(value: string) {
    this._fields['domain'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'domain')) {
      data['domain'] = this['domain'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }

    return data;
  }
}
