
export default class StripeSettings {
  SETUP_FUTURE_USAGE_OFF_SESSION = 'off_session';

  SETUP_FUTURE_USAGE_ON_SESSION = 'on_session';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'redirectUrl')) {
      this.setRedirectUrl(data['redirectUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'disablePaymentIntents')) {
      this.setDisablePaymentIntents(data['disablePaymentIntents']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'enforceOffSession')) {
      this.setEnforceOffSession(data['enforceOffSession']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'copyCredentialsFrom')) {
      this.setCopyCredentialsFrom(data['copyCredentialsFrom']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'setupFutureUsage')) {
      this.setSetupFutureUsage(data['setupFutureUsage']);
    }
  }


  get redirectUrl(): string {
    return this._fields['redirectUrl'];
  }
  
  getRedirectUrl(): string {
      return this._fields['redirectUrl'];
  }

  setRedirectUrl(value: string) {
    this._fields['redirectUrl'] = value;

    return this;
  }

  get disablePaymentIntents(): boolean | null {
    return this._fields['disablePaymentIntents'] ?? null;
  }
  
  getDisablePaymentIntents(): boolean | null {
      return this._fields['disablePaymentIntents'] ?? null;
  }

  setDisablePaymentIntents(value: null | boolean) {
    this._fields['disablePaymentIntents'] = value;

    return this;
  }

  get enforceOffSession(): boolean | null {
    return this._fields['enforceOffSession'] ?? null;
  }
  
  getEnforceOffSession(): boolean | null {
      return this._fields['enforceOffSession'] ?? null;
  }

  setEnforceOffSession(value: null | boolean) {
    this._fields['enforceOffSession'] = value;

    return this;
  }

  get copyCredentialsFrom(): string | null {
    return this._fields['copyCredentialsFrom'] ?? null;
  }
  
  getCopyCredentialsFrom(): string | null {
      return this._fields['copyCredentialsFrom'] ?? null;
  }

  setCopyCredentialsFrom(value: null | string) {
    this._fields['copyCredentialsFrom'] = value;

    return this;
  }

  get setupFutureUsage(): string | null {
    return this._fields['setupFutureUsage'] ?? null;
  }
  
  getSetupFutureUsage(): string | null {
      return this._fields['setupFutureUsage'] ?? null;
  }

  setSetupFutureUsage(value: null | string) {
    this._fields['setupFutureUsage'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'redirectUrl')) {
      data['redirectUrl'] = this['redirectUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'disablePaymentIntents')) {
      data['disablePaymentIntents'] = this['disablePaymentIntents'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enforceOffSession')) {
      data['enforceOffSession'] = this['enforceOffSession'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'copyCredentialsFrom')) {
      data['copyCredentialsFrom'] = this['copyCredentialsFrom'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'setupFutureUsage')) {
      data['setupFutureUsage'] = this['setupFutureUsage'];
    }

    return data;
  }
}
