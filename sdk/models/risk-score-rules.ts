import RiskScoreBoolean from '../models/risk-score-boolean';
import RiskScoreBracket from '../models/risk-score-bracket';

export default class RiskScoreRules {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'isProxy')) {
      this.setIsProxy(data['isProxy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isVpn')) {
      this.setIsVpn(data['isVpn']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isTor')) {
      this.setIsTor(data['isTor']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isHosting')) {
      this.setIsHosting(data['isHosting']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasMismatchedBillingAddressCountry')) {
      this.setHasMismatchedBillingAddressCountry(data['hasMismatchedBillingAddressCountry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasMismatchedBankCountry')) {
      this.setHasMismatchedBankCountry(data['hasMismatchedBankCountry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasMismatchedTimeZone')) {
      this.setHasMismatchedTimeZone(data['hasMismatchedTimeZone']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasMismatchedHolderName')) {
      this.setHasMismatchedHolderName(data['hasMismatchedHolderName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasFakeName')) {
      this.setHasFakeName(data['hasFakeName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isHighRiskCountry')) {
      this.setIsHighRiskCountry(data['isHighRiskCountry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentVelocity')) {
      this.setPaymentInstrumentVelocity(data['paymentInstrumentVelocity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'declinedPaymentInstrumentVelocity')) {
      this.setDeclinedPaymentInstrumentVelocity(data['declinedPaymentInstrumentVelocity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'deviceVelocity')) {
      this.setDeviceVelocity(data['deviceVelocity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ipVelocity')) {
      this.setIpVelocity(data['ipVelocity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'emailVelocity')) {
      this.setEmailVelocity(data['emailVelocity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddressVelocity')) {
      this.setBillingAddressVelocity(data['billingAddressVelocity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isRebill')) {
      this.setIsRebill(data['isRebill']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isRetry')) {
      this.setIsRetry(data['isRetry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerLifetimeValue')) {
      this.setCustomerLifetimeValue(data['customerLifetimeValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'browserAdBlockEnabled')) {
      this.setBrowserAdBlockEnabled(data['browserAdBlockEnabled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentApprovedTransactionCount')) {
      this.setPaymentInstrumentApprovedTransactionCount(data['paymentInstrumentApprovedTransactionCount']);
    }
  }


  get isProxy(): RiskScoreBoolean {
    return this._fields['isProxy'];
  }
  
  getIsProxy(): RiskScoreBoolean {
      return this._fields['isProxy'];
  }

  setIsProxy(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['isProxy'] = value;

    return this;
  }

  get isVpn(): RiskScoreBoolean {
    return this._fields['isVpn'];
  }
  
  getIsVpn(): RiskScoreBoolean {
      return this._fields['isVpn'];
  }

  setIsVpn(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['isVpn'] = value;

    return this;
  }

  get isTor(): RiskScoreBoolean {
    return this._fields['isTor'];
  }
  
  getIsTor(): RiskScoreBoolean {
      return this._fields['isTor'];
  }

  setIsTor(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['isTor'] = value;

    return this;
  }

  get isHosting(): RiskScoreBoolean {
    return this._fields['isHosting'];
  }
  
  getIsHosting(): RiskScoreBoolean {
      return this._fields['isHosting'];
  }

  setIsHosting(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['isHosting'] = value;

    return this;
  }

  get hasMismatchedBillingAddressCountry(): RiskScoreBoolean {
    return this._fields['hasMismatchedBillingAddressCountry'];
  }
  
  getHasMismatchedBillingAddressCountry(): RiskScoreBoolean {
      return this._fields['hasMismatchedBillingAddressCountry'];
  }

  setHasMismatchedBillingAddressCountry(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['hasMismatchedBillingAddressCountry'] = value;

    return this;
  }

  get hasMismatchedBankCountry(): RiskScoreBoolean {
    return this._fields['hasMismatchedBankCountry'];
  }
  
  getHasMismatchedBankCountry(): RiskScoreBoolean {
      return this._fields['hasMismatchedBankCountry'];
  }

  setHasMismatchedBankCountry(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['hasMismatchedBankCountry'] = value;

    return this;
  }

  get hasMismatchedTimeZone(): RiskScoreBoolean {
    return this._fields['hasMismatchedTimeZone'];
  }
  
  getHasMismatchedTimeZone(): RiskScoreBoolean {
      return this._fields['hasMismatchedTimeZone'];
  }

  setHasMismatchedTimeZone(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['hasMismatchedTimeZone'] = value;

    return this;
  }

  get hasMismatchedHolderName(): RiskScoreBoolean {
    return this._fields['hasMismatchedHolderName'];
  }
  
  getHasMismatchedHolderName(): RiskScoreBoolean {
      return this._fields['hasMismatchedHolderName'];
  }

  setHasMismatchedHolderName(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['hasMismatchedHolderName'] = value;

    return this;
  }

  get hasFakeName(): RiskScoreBoolean {
    return this._fields['hasFakeName'];
  }
  
  getHasFakeName(): RiskScoreBoolean {
      return this._fields['hasFakeName'];
  }

  setHasFakeName(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['hasFakeName'] = value;

    return this;
  }

  get isHighRiskCountry(): RiskScoreBoolean {
    return this._fields['isHighRiskCountry'];
  }
  
  getIsHighRiskCountry(): RiskScoreBoolean {
      return this._fields['isHighRiskCountry'];
  }

  setIsHighRiskCountry(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['isHighRiskCountry'] = value;

    return this;
  }

  get paymentInstrumentVelocity(): RiskScoreBracket {
    return this._fields['paymentInstrumentVelocity'];
  }
  
  getPaymentInstrumentVelocity(): RiskScoreBracket {
      return this._fields['paymentInstrumentVelocity'];
  }

  setPaymentInstrumentVelocity(value: RiskScoreBracket | any) {
    if (!(value instanceof RiskScoreBracket)) {
      value = new RiskScoreBracket(value);
    }

    this._fields['paymentInstrumentVelocity'] = value;

    return this;
  }

  get declinedPaymentInstrumentVelocity(): RiskScoreBracket {
    return this._fields['declinedPaymentInstrumentVelocity'];
  }
  
  getDeclinedPaymentInstrumentVelocity(): RiskScoreBracket {
      return this._fields['declinedPaymentInstrumentVelocity'];
  }

  setDeclinedPaymentInstrumentVelocity(value: RiskScoreBracket | any) {
    if (!(value instanceof RiskScoreBracket)) {
      value = new RiskScoreBracket(value);
    }

    this._fields['declinedPaymentInstrumentVelocity'] = value;

    return this;
  }

  get deviceVelocity(): RiskScoreBracket {
    return this._fields['deviceVelocity'];
  }
  
  getDeviceVelocity(): RiskScoreBracket {
      return this._fields['deviceVelocity'];
  }

  setDeviceVelocity(value: RiskScoreBracket | any) {
    if (!(value instanceof RiskScoreBracket)) {
      value = new RiskScoreBracket(value);
    }

    this._fields['deviceVelocity'] = value;

    return this;
  }

  get ipVelocity(): RiskScoreBracket {
    return this._fields['ipVelocity'];
  }
  
  getIpVelocity(): RiskScoreBracket {
      return this._fields['ipVelocity'];
  }

  setIpVelocity(value: RiskScoreBracket | any) {
    if (!(value instanceof RiskScoreBracket)) {
      value = new RiskScoreBracket(value);
    }

    this._fields['ipVelocity'] = value;

    return this;
  }

  get emailVelocity(): RiskScoreBracket {
    return this._fields['emailVelocity'];
  }
  
  getEmailVelocity(): RiskScoreBracket {
      return this._fields['emailVelocity'];
  }

  setEmailVelocity(value: RiskScoreBracket | any) {
    if (!(value instanceof RiskScoreBracket)) {
      value = new RiskScoreBracket(value);
    }

    this._fields['emailVelocity'] = value;

    return this;
  }

  get billingAddressVelocity(): RiskScoreBracket {
    return this._fields['billingAddressVelocity'];
  }
  
  getBillingAddressVelocity(): RiskScoreBracket {
      return this._fields['billingAddressVelocity'];
  }

  setBillingAddressVelocity(value: RiskScoreBracket | any) {
    if (!(value instanceof RiskScoreBracket)) {
      value = new RiskScoreBracket(value);
    }

    this._fields['billingAddressVelocity'] = value;

    return this;
  }

  get isRebill(): RiskScoreBoolean {
    return this._fields['isRebill'];
  }
  
  getIsRebill(): RiskScoreBoolean {
      return this._fields['isRebill'];
  }

  setIsRebill(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['isRebill'] = value;

    return this;
  }

  get isRetry(): RiskScoreBoolean {
    return this._fields['isRetry'];
  }
  
  getIsRetry(): RiskScoreBoolean {
      return this._fields['isRetry'];
  }

  setIsRetry(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['isRetry'] = value;

    return this;
  }

  get customerLifetimeValue(): RiskScoreBracket {
    return this._fields['customerLifetimeValue'];
  }
  
  getCustomerLifetimeValue(): RiskScoreBracket {
      return this._fields['customerLifetimeValue'];
  }

  setCustomerLifetimeValue(value: RiskScoreBracket | any) {
    if (!(value instanceof RiskScoreBracket)) {
      value = new RiskScoreBracket(value);
    }

    this._fields['customerLifetimeValue'] = value;

    return this;
  }

  get browserAdBlockEnabled(): RiskScoreBoolean {
    return this._fields['browserAdBlockEnabled'];
  }
  
  getBrowserAdBlockEnabled(): RiskScoreBoolean {
      return this._fields['browserAdBlockEnabled'];
  }

  setBrowserAdBlockEnabled(value: RiskScoreBoolean | any) {
    if (!(value instanceof RiskScoreBoolean)) {
      value = new RiskScoreBoolean(value);
    }

    this._fields['browserAdBlockEnabled'] = value;

    return this;
  }

  get paymentInstrumentApprovedTransactionCount(): RiskScoreBracket {
    return this._fields['paymentInstrumentApprovedTransactionCount'];
  }
  
  getPaymentInstrumentApprovedTransactionCount(): RiskScoreBracket {
      return this._fields['paymentInstrumentApprovedTransactionCount'];
  }

  setPaymentInstrumentApprovedTransactionCount(value: RiskScoreBracket | any) {
    if (!(value instanceof RiskScoreBracket)) {
      value = new RiskScoreBracket(value);
    }

    this._fields['paymentInstrumentApprovedTransactionCount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isProxy')) {
      data['isProxy'] = this['isProxy'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isVpn')) {
      data['isVpn'] = this['isVpn'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isTor')) {
      data['isTor'] = this['isTor'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isHosting')) {
      data['isHosting'] = this['isHosting'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMismatchedBillingAddressCountry')) {
      data['hasMismatchedBillingAddressCountry'] = this['hasMismatchedBillingAddressCountry'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMismatchedBankCountry')) {
      data['hasMismatchedBankCountry'] = this['hasMismatchedBankCountry'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMismatchedTimeZone')) {
      data['hasMismatchedTimeZone'] = this['hasMismatchedTimeZone'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMismatchedHolderName')) {
      data['hasMismatchedHolderName'] = this['hasMismatchedHolderName'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasFakeName')) {
      data['hasFakeName'] = this['hasFakeName'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isHighRiskCountry')) {
      data['isHighRiskCountry'] = this['isHighRiskCountry'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentVelocity')) {
      data['paymentInstrumentVelocity'] = this['paymentInstrumentVelocity'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'declinedPaymentInstrumentVelocity')) {
      data['declinedPaymentInstrumentVelocity'] = this['declinedPaymentInstrumentVelocity'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'deviceVelocity')) {
      data['deviceVelocity'] = this['deviceVelocity'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ipVelocity')) {
      data['ipVelocity'] = this['ipVelocity'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'emailVelocity')) {
      data['emailVelocity'] = this['emailVelocity'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddressVelocity')) {
      data['billingAddressVelocity'] = this['billingAddressVelocity'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isRebill')) {
      data['isRebill'] = this['isRebill'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isRetry')) {
      data['isRetry'] = this['isRetry'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerLifetimeValue')) {
      data['customerLifetimeValue'] = this['customerLifetimeValue'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'browserAdBlockEnabled')) {
      data['browserAdBlockEnabled'] = this['browserAdBlockEnabled'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentApprovedTransactionCount')) {
      data['paymentInstrumentApprovedTransactionCount'] = this['paymentInstrumentApprovedTransactionCount'].jsonSerialize();
    }

    return data;
  }
}
