
export default class PayPalCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'partnerId')) {
      this.setPartnerId(data['partnerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'partnerClientId')) {
      this.setPartnerClientId(data['partnerClientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'partnerSecret')) {
      this.setPartnerSecret(data['partnerSecret']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'partnerBnCode')) {
      this.setPartnerBnCode(data['partnerBnCode']);
    }
  }


  get partnerId(): string | null {
    return this._fields['partnerId'] ?? null;
  }
  
  getPartnerId(): string | null {
      return this._fields['partnerId'] ?? null;
  }

  setPartnerId(value: null | string) {
    this._fields['partnerId'] = value;

    return this;
  }

  get partnerClientId(): string | null {
    return this._fields['partnerClientId'] ?? null;
  }
  
  getPartnerClientId(): string | null {
      return this._fields['partnerClientId'] ?? null;
  }

  setPartnerClientId(value: null | string) {
    this._fields['partnerClientId'] = value;

    return this;
  }

  get partnerSecret(): string | null {
    return this._fields['partnerSecret'] ?? null;
  }
  
  getPartnerSecret(): string | null {
      return this._fields['partnerSecret'] ?? null;
  }

  setPartnerSecret(value: null | string) {
    this._fields['partnerSecret'] = value;

    return this;
  }

  get partnerBnCode(): string | null {
    return this._fields['partnerBnCode'] ?? null;
  }
  
  getPartnerBnCode(): string | null {
      return this._fields['partnerBnCode'] ?? null;
  }

  setPartnerBnCode(value: null | string) {
    this._fields['partnerBnCode'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'partnerId')) {
      data['partnerId'] = this['partnerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'partnerClientId')) {
      data['partnerClientId'] = this['partnerClientId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'partnerSecret')) {
      data['partnerSecret'] = this['partnerSecret'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'partnerBnCode')) {
      data['partnerBnCode'] = this['partnerBnCode'];
    }

    return data;
  }
}
