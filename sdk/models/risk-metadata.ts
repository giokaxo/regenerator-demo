import RiskMetadataBrowserData from '../models/risk-metadata-browser-data';
import RiskMetadataExtraData from '../models/risk-metadata-extra-data';

export default class RiskMetadata {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'ipAddress')) {
      this.setIpAddress(data['ipAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fingerprint')) {
      this.setFingerprint(data['fingerprint']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'httpHeaders')) {
      this.setHttpHeaders(data['httpHeaders']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'browserData')) {
      this.setBrowserData(data['browserData']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'extraData')) {
      this.setExtraData(data['extraData']);
    }
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
    if (Object.prototype.hasOwnProperty.call(data, 'hostingName')) {
      this.setHostingName(data['hostingName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isp')) {
      this.setIsp(data['isp']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      this.setCountry(data['country']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'region')) {
      this.setRegion(data['region']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'city')) {
      this.setCity(data['city']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'latitude')) {
      this.setLatitude(data['latitude']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'longitude')) {
      this.setLongitude(data['longitude']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'postalCode')) {
      this.setPostalCode(data['postalCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'timeZone')) {
      this.setTimeZone(data['timeZone']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accuracyRadius')) {
      this.setAccuracyRadius(data['accuracyRadius']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'distance')) {
      this.setDistance(data['distance']);
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
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentApprovedTransactionCount')) {
      this.setPaymentInstrumentApprovedTransactionCount(data['paymentInstrumentApprovedTransactionCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'score')) {
      this.setScore(data['score']);
    }
  }


  get ipAddress(): string | null {
    return this._fields['ipAddress'] ?? null;
  }
  
  getIpAddress(): string | null {
      return this._fields['ipAddress'] ?? null;
  }

  setIpAddress(value: null | string) {
    this._fields['ipAddress'] = value;

    return this;
  }

  get fingerprint(): string | null {
    return this._fields['fingerprint'] ?? null;
  }
  
  getFingerprint(): string | null {
      return this._fields['fingerprint'] ?? null;
  }

  setFingerprint(value: null | string) {
    this._fields['fingerprint'] = value;

    return this;
  }

  get httpHeaders(): Record<string, any> | null {
    return this._fields['httpHeaders'] ?? null;
  }
  
  getHttpHeaders(): Record<string, any> | null {
      return this._fields['httpHeaders'] ?? null;
  }

  setHttpHeaders(value: null | Record<string, any>) {
    this._fields['httpHeaders'] = value;

    return this;
  }

  get browserData(): RiskMetadataBrowserData | null {
    return this._fields['browserData'] ?? null;
  }
  
  getBrowserData(): RiskMetadataBrowserData | null {
      return this._fields['browserData'] ?? null;
  }

  setBrowserData(value: null | RiskMetadataBrowserData | any) {
    if (value !== null && !(value instanceof RiskMetadataBrowserData)) {
      value = new RiskMetadataBrowserData(value);
    }

    this._fields['browserData'] = value;

    return this;
  }

  get extraData(): RiskMetadataExtraData | null {
    return this._fields['extraData'] ?? null;
  }
  
  getExtraData(): RiskMetadataExtraData | null {
      return this._fields['extraData'] ?? null;
  }

  setExtraData(value: null | RiskMetadataExtraData | any) {
    if (value !== null && !(value instanceof RiskMetadataExtraData)) {
      value = new RiskMetadataExtraData(value);
    }

    this._fields['extraData'] = value;

    return this;
  }

  get isProxy(): boolean | null {
    return this._fields['isProxy'] ?? null;
  }
  
  getIsProxy(): boolean | null {
      return this._fields['isProxy'] ?? null;
  }

  private setIsProxy(value: null | boolean) {
    this._fields['isProxy'] = value;

    return this;
  }

  get isVpn(): boolean | null {
    return this._fields['isVpn'] ?? null;
  }
  
  getIsVpn(): boolean | null {
      return this._fields['isVpn'] ?? null;
  }

  private setIsVpn(value: null | boolean) {
    this._fields['isVpn'] = value;

    return this;
  }

  get isTor(): boolean | null {
    return this._fields['isTor'] ?? null;
  }
  
  getIsTor(): boolean | null {
      return this._fields['isTor'] ?? null;
  }

  private setIsTor(value: null | boolean) {
    this._fields['isTor'] = value;

    return this;
  }

  get isHosting(): boolean | null {
    return this._fields['isHosting'] ?? null;
  }
  
  getIsHosting(): boolean | null {
      return this._fields['isHosting'] ?? null;
  }

  private setIsHosting(value: null | boolean) {
    this._fields['isHosting'] = value;

    return this;
  }

  get hostingName(): string | null {
    return this._fields['hostingName'] ?? null;
  }
  
  getHostingName(): string | null {
      return this._fields['hostingName'] ?? null;
  }

  private setHostingName(value: null | string) {
    this._fields['hostingName'] = value;

    return this;
  }

  get isp(): string | null {
    return this._fields['isp'] ?? null;
  }
  
  getIsp(): string | null {
      return this._fields['isp'] ?? null;
  }

  private setIsp(value: null | string) {
    this._fields['isp'] = value;

    return this;
  }

  get country(): string | null {
    return this._fields['country'] ?? null;
  }
  
  getCountry(): string | null {
      return this._fields['country'] ?? null;
  }

  private setCountry(value: null | string) {
    this._fields['country'] = value;

    return this;
  }

  get region(): string | null {
    return this._fields['region'] ?? null;
  }
  
  getRegion(): string | null {
      return this._fields['region'] ?? null;
  }

  private setRegion(value: null | string) {
    this._fields['region'] = value;

    return this;
  }

  get city(): string | null {
    return this._fields['city'] ?? null;
  }
  
  getCity(): string | null {
      return this._fields['city'] ?? null;
  }

  private setCity(value: null | string) {
    this._fields['city'] = value;

    return this;
  }

  get latitude(): number | null {
    return this._fields['latitude'] ?? null;
  }
  
  getLatitude(): number | null {
      return this._fields['latitude'] ?? null;
  }

  private setLatitude(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['latitude'] = value;

    return this;
  }

  get longitude(): number | null {
    return this._fields['longitude'] ?? null;
  }
  
  getLongitude(): number | null {
      return this._fields['longitude'] ?? null;
  }

  private setLongitude(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['longitude'] = value;

    return this;
  }

  get postalCode(): string | null {
    return this._fields['postalCode'] ?? null;
  }
  
  getPostalCode(): string | null {
      return this._fields['postalCode'] ?? null;
  }

  private setPostalCode(value: null | string) {
    this._fields['postalCode'] = value;

    return this;
  }

  get timeZone(): string | null {
    return this._fields['timeZone'] ?? null;
  }
  
  getTimeZone(): string | null {
      return this._fields['timeZone'] ?? null;
  }

  private setTimeZone(value: null | string) {
    this._fields['timeZone'] = value;

    return this;
  }

  get accuracyRadius(): number | null {
    return this._fields['accuracyRadius'] ?? null;
  }
  
  getAccuracyRadius(): number | null {
      return this._fields['accuracyRadius'] ?? null;
  }

  private setAccuracyRadius(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['accuracyRadius'] = value;

    return this;
  }

  get distance(): number | null {
    return this._fields['distance'] ?? null;
  }
  
  getDistance(): number | null {
      return this._fields['distance'] ?? null;
  }

  private setDistance(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['distance'] = value;

    return this;
  }

  get hasMismatchedBillingAddressCountry(): boolean | null {
    return this._fields['hasMismatchedBillingAddressCountry'] ?? null;
  }
  
  getHasMismatchedBillingAddressCountry(): boolean | null {
      return this._fields['hasMismatchedBillingAddressCountry'] ?? null;
  }

  private setHasMismatchedBillingAddressCountry(value: null | boolean) {
    this._fields['hasMismatchedBillingAddressCountry'] = value;

    return this;
  }

  get hasMismatchedBankCountry(): boolean | null {
    return this._fields['hasMismatchedBankCountry'] ?? null;
  }
  
  getHasMismatchedBankCountry(): boolean | null {
      return this._fields['hasMismatchedBankCountry'] ?? null;
  }

  private setHasMismatchedBankCountry(value: null | boolean) {
    this._fields['hasMismatchedBankCountry'] = value;

    return this;
  }

  get hasMismatchedTimeZone(): boolean | null {
    return this._fields['hasMismatchedTimeZone'] ?? null;
  }
  
  getHasMismatchedTimeZone(): boolean | null {
      return this._fields['hasMismatchedTimeZone'] ?? null;
  }

  private setHasMismatchedTimeZone(value: null | boolean) {
    this._fields['hasMismatchedTimeZone'] = value;

    return this;
  }

  get hasMismatchedHolderName(): boolean | null {
    return this._fields['hasMismatchedHolderName'] ?? null;
  }
  
  getHasMismatchedHolderName(): boolean | null {
      return this._fields['hasMismatchedHolderName'] ?? null;
  }

  private setHasMismatchedHolderName(value: null | boolean) {
    this._fields['hasMismatchedHolderName'] = value;

    return this;
  }

  get hasFakeName(): boolean | null {
    return this._fields['hasFakeName'] ?? null;
  }
  
  getHasFakeName(): boolean | null {
      return this._fields['hasFakeName'] ?? null;
  }

  private setHasFakeName(value: null | boolean) {
    this._fields['hasFakeName'] = value;

    return this;
  }

  get isHighRiskCountry(): boolean | null {
    return this._fields['isHighRiskCountry'] ?? null;
  }
  
  getIsHighRiskCountry(): boolean | null {
      return this._fields['isHighRiskCountry'] ?? null;
  }

  private setIsHighRiskCountry(value: null | boolean) {
    this._fields['isHighRiskCountry'] = value;

    return this;
  }

  get paymentInstrumentVelocity(): number | null {
    return this._fields['paymentInstrumentVelocity'] ?? null;
  }
  
  getPaymentInstrumentVelocity(): number | null {
      return this._fields['paymentInstrumentVelocity'] ?? null;
  }

  private setPaymentInstrumentVelocity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['paymentInstrumentVelocity'] = value;

    return this;
  }

  get declinedPaymentInstrumentVelocity(): number | null {
    return this._fields['declinedPaymentInstrumentVelocity'] ?? null;
  }
  
  getDeclinedPaymentInstrumentVelocity(): number | null {
      return this._fields['declinedPaymentInstrumentVelocity'] ?? null;
  }

  private setDeclinedPaymentInstrumentVelocity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['declinedPaymentInstrumentVelocity'] = value;

    return this;
  }

  get deviceVelocity(): number | null {
    return this._fields['deviceVelocity'] ?? null;
  }
  
  getDeviceVelocity(): number | null {
      return this._fields['deviceVelocity'] ?? null;
  }

  private setDeviceVelocity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['deviceVelocity'] = value;

    return this;
  }

  get ipVelocity(): number | null {
    return this._fields['ipVelocity'] ?? null;
  }
  
  getIpVelocity(): number | null {
      return this._fields['ipVelocity'] ?? null;
  }

  private setIpVelocity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['ipVelocity'] = value;

    return this;
  }

  get emailVelocity(): number | null {
    return this._fields['emailVelocity'] ?? null;
  }
  
  getEmailVelocity(): number | null {
      return this._fields['emailVelocity'] ?? null;
  }

  private setEmailVelocity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['emailVelocity'] = value;

    return this;
  }

  get billingAddressVelocity(): number | null {
    return this._fields['billingAddressVelocity'] ?? null;
  }
  
  getBillingAddressVelocity(): number | null {
      return this._fields['billingAddressVelocity'] ?? null;
  }

  private setBillingAddressVelocity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['billingAddressVelocity'] = value;

    return this;
  }

  get paymentInstrumentApprovedTransactionCount(): number | null {
    return this._fields['paymentInstrumentApprovedTransactionCount'] ?? null;
  }
  
  getPaymentInstrumentApprovedTransactionCount(): number | null {
      return this._fields['paymentInstrumentApprovedTransactionCount'] ?? null;
  }

  private setPaymentInstrumentApprovedTransactionCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['paymentInstrumentApprovedTransactionCount'] = value;

    return this;
  }

  get score(): number | null {
    return this._fields['score'] ?? null;
  }
  
  getScore(): number | null {
      return this._fields['score'] ?? null;
  }

  private setScore(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['score'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ipAddress')) {
      data['ipAddress'] = this['ipAddress'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fingerprint')) {
      data['fingerprint'] = this['fingerprint'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'httpHeaders')) {
      data['httpHeaders'] = this['httpHeaders'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'browserData')) {
      data['browserData'] = this['browserData']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'extraData')) {
      data['extraData'] = this['extraData']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isProxy')) {
      data['isProxy'] = this['isProxy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isVpn')) {
      data['isVpn'] = this['isVpn'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isTor')) {
      data['isTor'] = this['isTor'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isHosting')) {
      data['isHosting'] = this['isHosting'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hostingName')) {
      data['hostingName'] = this['hostingName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isp')) {
      data['isp'] = this['isp'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'country')) {
      data['country'] = this['country'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'region')) {
      data['region'] = this['region'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'city')) {
      data['city'] = this['city'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'latitude')) {
      data['latitude'] = this['latitude'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'longitude')) {
      data['longitude'] = this['longitude'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'postalCode')) {
      data['postalCode'] = this['postalCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'timeZone')) {
      data['timeZone'] = this['timeZone'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accuracyRadius')) {
      data['accuracyRadius'] = this['accuracyRadius'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'distance')) {
      data['distance'] = this['distance'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMismatchedBillingAddressCountry')) {
      data['hasMismatchedBillingAddressCountry'] = this['hasMismatchedBillingAddressCountry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMismatchedBankCountry')) {
      data['hasMismatchedBankCountry'] = this['hasMismatchedBankCountry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMismatchedTimeZone')) {
      data['hasMismatchedTimeZone'] = this['hasMismatchedTimeZone'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMismatchedHolderName')) {
      data['hasMismatchedHolderName'] = this['hasMismatchedHolderName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasFakeName')) {
      data['hasFakeName'] = this['hasFakeName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isHighRiskCountry')) {
      data['isHighRiskCountry'] = this['isHighRiskCountry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentVelocity')) {
      data['paymentInstrumentVelocity'] = this['paymentInstrumentVelocity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'declinedPaymentInstrumentVelocity')) {
      data['declinedPaymentInstrumentVelocity'] = this['declinedPaymentInstrumentVelocity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'deviceVelocity')) {
      data['deviceVelocity'] = this['deviceVelocity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ipVelocity')) {
      data['ipVelocity'] = this['ipVelocity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'emailVelocity')) {
      data['emailVelocity'] = this['emailVelocity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddressVelocity')) {
      data['billingAddressVelocity'] = this['billingAddressVelocity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentApprovedTransactionCount')) {
      data['paymentInstrumentApprovedTransactionCount'] = this['paymentInstrumentApprovedTransactionCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'score')) {
      data['score'] = this['score'];
    }

    return data;
  }
}
