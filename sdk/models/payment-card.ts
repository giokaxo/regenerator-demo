import { PaymentInstrument } from '../models/payment-instrument';
import ContactObject from '../models/contact-object';
import RiskMetadata from '../models/risk-metadata';
import PaymentCardEmbedded from '../models/payment-card-embedded';
import ResourceLink from '../models/resource-link';

export default class PaymentCard implements PaymentInstrument {
  get [PaymentInstrument](): true {
    return true;
  }

  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  STATUS_EXPIRED = 'expired';

  STATUS_DEACTIVATED = 'deactivated';

  STATUS_VERIFICATION_NEEDED = 'verification-needed';

  BRAND_VISA = 'Visa';

  BRAND_MASTER_CARD = 'MasterCard';

  BRAND_AMERICAN_EXPRESS = 'American Express';

  BRAND_DISCOVER = 'Discover';

  BRAND_MAESTRO = 'Maestro';

  BRAND_SOLO = 'Solo';

  BRAND_ELECTRON = 'Electron';

  BRAND_JCB = 'JCB';

  BRAND_VOYAGER = 'Voyager';

  BRAND_DINERS_CLUB = 'Diners Club';

  BRAND_SWITCH = 'Switch';

  BRAND_LASER = 'Laser';

  BRAND_CHINA_UNION_PAY = 'China UnionPay';

  BRAND_ASTRO_PAY_CARD = 'AstroPay Card';

  DIGITAL_WALLET_APPLE_PAY = 'Apple Pay';

  DIGITAL_WALLET_GOOGLE_PAY = 'Google Pay';

  DIGITAL_WALLET_SAMSUNG_PAY = 'Samsung Pay';

  DIGITAL_WALLET_NULL = 'null';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fingerprint')) {
      this.setFingerprint(data['fingerprint']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bin')) {
      this.setBin(data['bin']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'last4')) {
      this.setLast4(data['last4']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'pan')) {
      this.setPan(data['pan']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expYear')) {
      this.setExpYear(data['expYear']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expMonth')) {
      this.setExpMonth(data['expMonth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cvv')) {
      this.setCvv(data['cvv']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'brand')) {
      this.setBrand(data['brand']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bankCountry')) {
      this.setBankCountry(data['bankCountry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bankName')) {
      this.setBankName(data['bankName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useAsBackup')) {
      this.setUseAsBackup(data['useAsBackup']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingPortalUrl')) {
      this.setBillingPortalUrl(data['billingPortalUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'stickyGatewayAccountId')) {
      this.setStickyGatewayAccountId(data['stickyGatewayAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expirationReminderTime')) {
      this.setExpirationReminderTime(data['expirationReminderTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expirationReminderNumber')) {
      this.setExpirationReminderNumber(data['expirationReminderNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'referenceData')) {
      this.setReferenceData(data['referenceData']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'digitalWallet')) {
      this.setDigitalWallet(data['digitalWallet']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskMetadata')) {
      this.setRiskMetadata(data['riskMetadata']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
    }
  }


  public get method() {
    return 'payment-card';
  }

  public getMethod() {
    return 'payment-card';
  }

  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get customerId(): string | null {
    return this._fields['customerId'] ?? null;
  }
  
  getCustomerId(): string | null {
      return this._fields['customerId'] ?? null;
  }

  setCustomerId(value: null | string) {
    this._fields['customerId'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get fingerprint(): string | null {
    return this._fields['fingerprint'] ?? null;
  }
  
  getFingerprint(): string | null {
      return this._fields['fingerprint'] ?? null;
  }

  private setFingerprint(value: null | string) {
    this._fields['fingerprint'] = value;

    return this;
  }

  get bin(): string | null {
    return this._fields['bin'] ?? null;
  }
  
  getBin(): string | null {
      return this._fields['bin'] ?? null;
  }

  private setBin(value: null | string) {
    this._fields['bin'] = value;

    return this;
  }

  get last4(): string | null {
    return this._fields['last4'] ?? null;
  }
  
  getLast4(): string | null {
      return this._fields['last4'] ?? null;
  }

  private setLast4(value: null | string) {
    this._fields['last4'] = value;

    return this;
  }

  get pan(): string | null {
    return this._fields['pan'] ?? null;
  }
  
  getPan(): string | null {
      return this._fields['pan'] ?? null;
  }

  setPan(value: null | string) {
    this._fields['pan'] = value;

    return this;
  }

  get expYear(): number | null {
    return this._fields['expYear'] ?? null;
  }
  
  getExpYear(): number | null {
      return this._fields['expYear'] ?? null;
  }

  setExpYear(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expYear'] = value;

    return this;
  }

  get expMonth(): number | null {
    return this._fields['expMonth'] ?? null;
  }
  
  getExpMonth(): number | null {
      return this._fields['expMonth'] ?? null;
  }

  setExpMonth(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expMonth'] = value;

    return this;
  }

  get cvv(): string | null {
    return this._fields['cvv'] ?? null;
  }
  
  getCvv(): string | null {
      return this._fields['cvv'] ?? null;
  }

  setCvv(value: null | string) {
    this._fields['cvv'] = value;

    return this;
  }

  get brand(): string | null {
    return this._fields['brand'] ?? null;
  }
  
  getBrand(): string | null {
      return this._fields['brand'] ?? null;
  }

  private setBrand(value: null | string) {
    this._fields['brand'] = value;

    return this;
  }

  get bankCountry(): string | null {
    return this._fields['bankCountry'] ?? null;
  }
  
  getBankCountry(): string | null {
      return this._fields['bankCountry'] ?? null;
  }

  private setBankCountry(value: null | string) {
    this._fields['bankCountry'] = value;

    return this;
  }

  get bankName(): string | null {
    return this._fields['bankName'] ?? null;
  }
  
  getBankName(): string | null {
      return this._fields['bankName'] ?? null;
  }

  private setBankName(value: null | string) {
    this._fields['bankName'] = value;

    return this;
  }

  get billingAddress(): ContactObject | null {
    return this._fields['billingAddress'] ?? null;
  }
  
  getBillingAddress(): ContactObject | null {
      return this._fields['billingAddress'] ?? null;
  }

  setBillingAddress(value: null | ContactObject | any) {
    if (value !== null && !(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['billingAddress'] = value;

    return this;
  }

  get useAsBackup(): boolean | null {
    return this._fields['useAsBackup'] ?? null;
  }
  
  getUseAsBackup(): boolean | null {
      return this._fields['useAsBackup'] ?? null;
  }

  setUseAsBackup(value: null | boolean) {
    this._fields['useAsBackup'] = value;

    return this;
  }

  get billingPortalUrl(): string | null {
    return this._fields['billingPortalUrl'] ?? null;
  }
  
  getBillingPortalUrl(): string | null {
      return this._fields['billingPortalUrl'] ?? null;
  }

  private setBillingPortalUrl(value: null | string) {
    this._fields['billingPortalUrl'] = value;

    return this;
  }

  get createdTime(): Date | null {
    return this._fields['createdTime'] ?? null;
  }
  
  getCreatedTime(): Date | null {
      return this._fields['createdTime'] ?? null;
  }

  private setCreatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['createdTime'] = value;

    return this;
  }

  get updatedTime(): Date | null {
    return this._fields['updatedTime'] ?? null;
  }
  
  getUpdatedTime(): Date | null {
      return this._fields['updatedTime'] ?? null;
  }

  private setUpdatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['updatedTime'] = value;

    return this;
  }

  get customFields(): Record<string, any> | null {
    return this._fields['customFields'] ?? null;
  }
  
  getCustomFields(): Record<string, any> | null {
      return this._fields['customFields'] ?? null;
  }

  setCustomFields(value: null | Record<string, any>) {
    this._fields['customFields'] = value;

    return this;
  }

  get stickyGatewayAccountId(): string | null {
    return this._fields['stickyGatewayAccountId'] ?? null;
  }
  
  getStickyGatewayAccountId(): string | null {
      return this._fields['stickyGatewayAccountId'] ?? null;
  }

  private setStickyGatewayAccountId(value: null | string) {
    this._fields['stickyGatewayAccountId'] = value;

    return this;
  }

  get expirationReminderTime(): Date | null {
    return this._fields['expirationReminderTime'] ?? null;
  }
  
  getExpirationReminderTime(): Date | null {
      return this._fields['expirationReminderTime'] ?? null;
  }

  private setExpirationReminderTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['expirationReminderTime'] = value;

    return this;
  }

  get expirationReminderNumber(): number | null {
    return this._fields['expirationReminderNumber'] ?? null;
  }
  
  getExpirationReminderNumber(): number | null {
      return this._fields['expirationReminderNumber'] ?? null;
  }

  private setExpirationReminderNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expirationReminderNumber'] = value;

    return this;
  }

  get referenceData(): Record<string, any> | null {
    return this._fields['referenceData'] ?? null;
  }
  
  getReferenceData(): Record<string, any> | null {
      return this._fields['referenceData'] ?? null;
  }

  setReferenceData(value: null | Record<string, any>) {
    this._fields['referenceData'] = value;

    return this;
  }

  get digitalWallet(): string | null {
    return this._fields['digitalWallet'] ?? null;
  }
  
  getDigitalWallet(): string | null {
      return this._fields['digitalWallet'] ?? null;
  }

  private setDigitalWallet(value: null | string) {
    this._fields['digitalWallet'] = value;

    return this;
  }

  get riskMetadata(): RiskMetadata | null {
    return this._fields['riskMetadata'] ?? null;
  }
  
  getRiskMetadata(): RiskMetadata | null {
      return this._fields['riskMetadata'] ?? null;
  }

  setRiskMetadata(value: null | RiskMetadata | any) {
    if (value !== null && !(value instanceof RiskMetadata)) {
      value = new RiskMetadata(value);
    }

    this._fields['riskMetadata'] = value;

    return this;
  }

  get revision(): number | null {
    return this._fields['revision'] ?? null;
  }
  
  getRevision(): number | null {
      return this._fields['revision'] ?? null;
  }

  private setRevision(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['revision'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  get embedded(): PaymentCardEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): PaymentCardEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | PaymentCardEmbedded | any) {
    if (value !== null && !(value instanceof PaymentCardEmbedded)) {
      value = new PaymentCardEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'payment-card',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fingerprint')) {
      data['fingerprint'] = this['fingerprint'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bin')) {
      data['bin'] = this['bin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'last4')) {
      data['last4'] = this['last4'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'pan')) {
      data['pan'] = this['pan'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expYear')) {
      data['expYear'] = this['expYear'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expMonth')) {
      data['expMonth'] = this['expMonth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cvv')) {
      data['cvv'] = this['cvv'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'brand')) {
      data['brand'] = this['brand'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bankCountry')) {
      data['bankCountry'] = this['bankCountry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bankName')) {
      data['bankName'] = this['bankName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useAsBackup')) {
      data['useAsBackup'] = this['useAsBackup'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingPortalUrl')) {
      data['billingPortalUrl'] = this['billingPortalUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'stickyGatewayAccountId')) {
      data['stickyGatewayAccountId'] = this['stickyGatewayAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expirationReminderTime')) {
      data['expirationReminderTime'] = this['expirationReminderTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expirationReminderNumber')) {
      data['expirationReminderNumber'] = this['expirationReminderNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'referenceData')) {
      data['referenceData'] = this['referenceData'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'digitalWallet')) {
      data['digitalWallet'] = this['digitalWallet'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskMetadata')) {
      data['riskMetadata'] = this['riskMetadata']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'embedded')) {
      data['_embedded'] = this['embedded']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
