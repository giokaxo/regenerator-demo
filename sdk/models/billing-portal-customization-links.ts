
export default class BillingPortalCustomizationLinks {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'refundPolicy')) {
      this.setRefundPolicy(data['refundPolicy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'privacyPolicy')) {
      this.setPrivacyPolicy(data['privacyPolicy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'termsOfService')) {
      this.setTermsOfService(data['termsOfService']);
    }
  }


  get refundPolicy(): string | null {
    return this._fields['refundPolicy'] ?? null;
  }
  
  getRefundPolicy(): string | null {
      return this._fields['refundPolicy'] ?? null;
  }

  setRefundPolicy(value: null | string) {
    this._fields['refundPolicy'] = value;

    return this;
  }

  get privacyPolicy(): string | null {
    return this._fields['privacyPolicy'] ?? null;
  }
  
  getPrivacyPolicy(): string | null {
      return this._fields['privacyPolicy'] ?? null;
  }

  setPrivacyPolicy(value: null | string) {
    this._fields['privacyPolicy'] = value;

    return this;
  }

  get termsOfService(): string | null {
    return this._fields['termsOfService'] ?? null;
  }
  
  getTermsOfService(): string | null {
      return this._fields['termsOfService'] ?? null;
  }

  setTermsOfService(value: null | string) {
    this._fields['termsOfService'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'refundPolicy')) {
      data['refundPolicy'] = this['refundPolicy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'privacyPolicy')) {
      data['privacyPolicy'] = this['privacyPolicy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'termsOfService')) {
      data['termsOfService'] = this['termsOfService'];
    }

    return data;
  }
}
