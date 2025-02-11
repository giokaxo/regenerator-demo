
export default class RiskMetadataExtraData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'kountFraudSessionId')) {
      this.setKountFraudSessionId(data['kountFraudSessionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payPalMerchantSessionId')) {
      this.setPayPalMerchantSessionId(data['payPalMerchantSessionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'threatMetrixSessionId')) {
      this.setThreatMetrixSessionId(data['threatMetrixSessionId']);
    }
  }


  get kountFraudSessionId(): string | null {
    return this._fields['kountFraudSessionId'] ?? null;
  }
  
  getKountFraudSessionId(): string | null {
      return this._fields['kountFraudSessionId'] ?? null;
  }

  setKountFraudSessionId(value: null | string) {
    this._fields['kountFraudSessionId'] = value;

    return this;
  }

  get payPalMerchantSessionId(): string | null {
    return this._fields['payPalMerchantSessionId'] ?? null;
  }
  
  getPayPalMerchantSessionId(): string | null {
      return this._fields['payPalMerchantSessionId'] ?? null;
  }

  setPayPalMerchantSessionId(value: null | string) {
    this._fields['payPalMerchantSessionId'] = value;

    return this;
  }

  get threatMetrixSessionId(): string | null {
    return this._fields['threatMetrixSessionId'] ?? null;
  }
  
  getThreatMetrixSessionId(): string | null {
      return this._fields['threatMetrixSessionId'] ?? null;
  }

  setThreatMetrixSessionId(value: null | string) {
    this._fields['threatMetrixSessionId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'kountFraudSessionId')) {
      data['kountFraudSessionId'] = this['kountFraudSessionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payPalMerchantSessionId')) {
      data['payPalMerchantSessionId'] = this['payPalMerchantSessionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'threatMetrixSessionId')) {
      data['threatMetrixSessionId'] = this['threatMetrixSessionId'];
    }

    return data;
  }
}
