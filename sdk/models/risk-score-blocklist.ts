import RiskScoreBlocklistType from '../models/risk-score-blocklist-type';

export default class RiskScoreBlocklist {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'address')) {
      this.setAddress(data['address']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bank-account')) {
      this.setBankAccount(data['bank-account']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bin')) {
      this.setBin(data['bin']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      this.setCountry(data['country']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customer-id')) {
      this.setCustomerId(data['customer-id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'email')) {
      this.setEmail(data['email']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'email-domain')) {
      this.setEmailDomain(data['email-domain']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fingerprint')) {
      this.setFingerprint(data['fingerprint']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ip-address')) {
      this.setIpAddress(data['ip-address']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payment-card')) {
      this.setPaymentCard(data['payment-card']);
    }
  }


  get address(): RiskScoreBlocklistType | null {
    return this._fields['address'] ?? null;
  }
  
  getAddress(): RiskScoreBlocklistType | null {
      return this._fields['address'] ?? null;
  }

  setAddress(value: null | RiskScoreBlocklistType | any) {
    if (value !== null && !(value instanceof RiskScoreBlocklistType)) {
      value = new RiskScoreBlocklistType(value);
    }

    this._fields['address'] = value;

    return this;
  }

  get bankAccount(): RiskScoreBlocklistType | null {
    return this._fields['bank-account'] ?? null;
  }
  
  getBankAccount(): RiskScoreBlocklistType | null {
      return this._fields['bank-account'] ?? null;
  }

  setBankAccount(value: null | RiskScoreBlocklistType | any) {
    if (value !== null && !(value instanceof RiskScoreBlocklistType)) {
      value = new RiskScoreBlocklistType(value);
    }

    this._fields['bank-account'] = value;

    return this;
  }

  get bin(): RiskScoreBlocklistType | null {
    return this._fields['bin'] ?? null;
  }
  
  getBin(): RiskScoreBlocklistType | null {
      return this._fields['bin'] ?? null;
  }

  setBin(value: null | RiskScoreBlocklistType | any) {
    if (value !== null && !(value instanceof RiskScoreBlocklistType)) {
      value = new RiskScoreBlocklistType(value);
    }

    this._fields['bin'] = value;

    return this;
  }

  get country(): RiskScoreBlocklistType | null {
    return this._fields['country'] ?? null;
  }
  
  getCountry(): RiskScoreBlocklistType | null {
      return this._fields['country'] ?? null;
  }

  setCountry(value: null | RiskScoreBlocklistType | any) {
    if (value !== null && !(value instanceof RiskScoreBlocklistType)) {
      value = new RiskScoreBlocklistType(value);
    }

    this._fields['country'] = value;

    return this;
  }

  get customerId(): RiskScoreBlocklistType | null {
    return this._fields['customer-id'] ?? null;
  }
  
  getCustomerId(): RiskScoreBlocklistType | null {
      return this._fields['customer-id'] ?? null;
  }

  setCustomerId(value: null | RiskScoreBlocklistType | any) {
    if (value !== null && !(value instanceof RiskScoreBlocklistType)) {
      value = new RiskScoreBlocklistType(value);
    }

    this._fields['customer-id'] = value;

    return this;
  }

  get email(): RiskScoreBlocklistType | null {
    return this._fields['email'] ?? null;
  }
  
  getEmail(): RiskScoreBlocklistType | null {
      return this._fields['email'] ?? null;
  }

  setEmail(value: null | RiskScoreBlocklistType | any) {
    if (value !== null && !(value instanceof RiskScoreBlocklistType)) {
      value = new RiskScoreBlocklistType(value);
    }

    this._fields['email'] = value;

    return this;
  }

  get emailDomain(): RiskScoreBlocklistType | null {
    return this._fields['email-domain'] ?? null;
  }
  
  getEmailDomain(): RiskScoreBlocklistType | null {
      return this._fields['email-domain'] ?? null;
  }

  setEmailDomain(value: null | RiskScoreBlocklistType | any) {
    if (value !== null && !(value instanceof RiskScoreBlocklistType)) {
      value = new RiskScoreBlocklistType(value);
    }

    this._fields['email-domain'] = value;

    return this;
  }

  get fingerprint(): RiskScoreBlocklistType | null {
    return this._fields['fingerprint'] ?? null;
  }
  
  getFingerprint(): RiskScoreBlocklistType | null {
      return this._fields['fingerprint'] ?? null;
  }

  setFingerprint(value: null | RiskScoreBlocklistType | any) {
    if (value !== null && !(value instanceof RiskScoreBlocklistType)) {
      value = new RiskScoreBlocklistType(value);
    }

    this._fields['fingerprint'] = value;

    return this;
  }

  get ipAddress(): RiskScoreBlocklistType | null {
    return this._fields['ip-address'] ?? null;
  }
  
  getIpAddress(): RiskScoreBlocklistType | null {
      return this._fields['ip-address'] ?? null;
  }

  setIpAddress(value: null | RiskScoreBlocklistType | any) {
    if (value !== null && !(value instanceof RiskScoreBlocklistType)) {
      value = new RiskScoreBlocklistType(value);
    }

    this._fields['ip-address'] = value;

    return this;
  }

  get paymentCard(): RiskScoreBlocklistType | null {
    return this._fields['payment-card'] ?? null;
  }
  
  getPaymentCard(): RiskScoreBlocklistType | null {
      return this._fields['payment-card'] ?? null;
  }

  setPaymentCard(value: null | RiskScoreBlocklistType | any) {
    if (value !== null && !(value instanceof RiskScoreBlocklistType)) {
      value = new RiskScoreBlocklistType(value);
    }

    this._fields['payment-card'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'address')) {
      data['address'] = this['address']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bankAccount')) {
      data['bank-account'] = this['bankAccount']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bin')) {
      data['bin'] = this['bin']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'country')) {
      data['country'] = this['country']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customer-id'] = this['customerId']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'email')) {
      data['email'] = this['email']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'emailDomain')) {
      data['email-domain'] = this['emailDomain']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fingerprint')) {
      data['fingerprint'] = this['fingerprint']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ipAddress')) {
      data['ip-address'] = this['ipAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentCard')) {
      data['payment-card'] = this['paymentCard']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
