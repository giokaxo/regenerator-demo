
export default class PayPalSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'redirectUrl')) {
      this.setRedirectUrl(data['redirectUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'enableGuestCheckout')) {
      this.setEnableGuestCheckout(data['enableGuestCheckout']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useHostedCheckoutForm')) {
      this.setUseHostedCheckoutForm(data['useHostedCheckoutForm']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'forceGuestCheckout')) {
      this.setForceGuestCheckout(data['forceGuestCheckout']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'enableAlternativePaymentMethods')) {
      this.setEnableAlternativePaymentMethods(data['enableAlternativePaymentMethods']);
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

  get enableGuestCheckout(): boolean | null {
    return this._fields['enableGuestCheckout'] ?? null;
  }
  
  getEnableGuestCheckout(): boolean | null {
      return this._fields['enableGuestCheckout'] ?? null;
  }

  setEnableGuestCheckout(value: null | boolean) {
    this._fields['enableGuestCheckout'] = value;

    return this;
  }

  get useHostedCheckoutForm(): boolean | null {
    return this._fields['useHostedCheckoutForm'] ?? null;
  }
  
  getUseHostedCheckoutForm(): boolean | null {
      return this._fields['useHostedCheckoutForm'] ?? null;
  }

  setUseHostedCheckoutForm(value: null | boolean) {
    this._fields['useHostedCheckoutForm'] = value;

    return this;
  }

  get forceGuestCheckout(): boolean | null {
    return this._fields['forceGuestCheckout'] ?? null;
  }
  
  getForceGuestCheckout(): boolean | null {
      return this._fields['forceGuestCheckout'] ?? null;
  }

  setForceGuestCheckout(value: null | boolean) {
    this._fields['forceGuestCheckout'] = value;

    return this;
  }

  get enableAlternativePaymentMethods(): boolean | null {
    return this._fields['enableAlternativePaymentMethods'] ?? null;
  }
  
  getEnableAlternativePaymentMethods(): boolean | null {
      return this._fields['enableAlternativePaymentMethods'] ?? null;
  }

  setEnableAlternativePaymentMethods(value: null | boolean) {
    this._fields['enableAlternativePaymentMethods'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'redirectUrl')) {
      data['redirectUrl'] = this['redirectUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enableGuestCheckout')) {
      data['enableGuestCheckout'] = this['enableGuestCheckout'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useHostedCheckoutForm')) {
      data['useHostedCheckoutForm'] = this['useHostedCheckoutForm'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'forceGuestCheckout')) {
      data['forceGuestCheckout'] = this['forceGuestCheckout'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enableAlternativePaymentMethods')) {
      data['enableAlternativePaymentMethods'] = this['enableAlternativePaymentMethods'];
    }

    return data;
  }
}
