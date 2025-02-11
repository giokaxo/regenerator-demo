
export default class WorldpaySettings {
  ENFORCE_STORED_CREDENTIALS_DISABLED = 'disabled';

  ENFORCE_STORED_CREDENTIALS_MIT_ENABLED = 'mit-enabled';

  ENFORCE_STORED_CREDENTIALS_ALWAYS_ENABLED = 'always-enabled';

  MERCHANT_INITIATED_REASON_UNSCHEDULED = 'UNSCHEDULED';

  MERCHANT_INITIATED_REASON_RECURRING = 'RECURRING';

  MERCHANT_INITIATED_REASON_INSTALMENT = 'INSTALMENT';

  MERCHANT_INITIATED_REASON_REAUTH = 'REAUTH';

  MERCHANT_INITIATED_REASON_DELAYED = 'DELAYED';

  MERCHANT_INITIATED_REASON_INCREMENTAL = 'INCREMENTAL';

  MERCHANT_INITIATED_REASON_RESUBMISSION = 'RESUBMISSION';

  MERCHANT_INITIATED_REASON_NOSHOW = 'NOSHOW';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'delay')) {
      this.setDelay(data['delay']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'enforceStoredCredentials')) {
      this.setEnforceStoredCredentials(data['enforceStoredCredentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantInitiatedReason')) {
      this.setMerchantInitiatedReason(data['merchantInitiatedReason']);
    }
  }


  get delay(): number | null {
    return this._fields['delay'] ?? null;
  }
  
  getDelay(): number | null {
      return this._fields['delay'] ?? null;
  }

  setDelay(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['delay'] = value;

    return this;
  }

  get enforceStoredCredentials(): string | null {
    return this._fields['enforceStoredCredentials'] ?? null;
  }
  
  getEnforceStoredCredentials(): string | null {
      return this._fields['enforceStoredCredentials'] ?? null;
  }

  setEnforceStoredCredentials(value: null | string) {
    this._fields['enforceStoredCredentials'] = value;

    return this;
  }

  get merchantInitiatedReason(): string | null {
    return this._fields['merchantInitiatedReason'] ?? null;
  }
  
  getMerchantInitiatedReason(): string | null {
      return this._fields['merchantInitiatedReason'] ?? null;
  }

  setMerchantInitiatedReason(value: null | string) {
    this._fields['merchantInitiatedReason'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'delay')) {
      data['delay'] = this['delay'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enforceStoredCredentials')) {
      data['enforceStoredCredentials'] = this['enforceStoredCredentials'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantInitiatedReason')) {
      data['merchantInitiatedReason'] = this['merchantInitiatedReason'];
    }

    return data;
  }
}
