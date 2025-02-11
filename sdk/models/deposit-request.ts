import DepositRequestCustomAmount from '../models/deposit-request-custom-amount';
import DepositRequestEmbedded from '../models/deposit-request-embedded';
import ResourceLink from '../models/resource-link';

export default class DepositRequest {
  STATUS_CREATED = 'created';

  STATUS_PENDING = 'pending';

  STATUS_INITIATED = 'initiated';

  STATUS_ATTEMPTED = 'attempted';

  STATUS_COMPLETED = 'completed';

  STATUS_EXPIRED = 'expired';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transactionIds')) {
      this.setTransactionIds(data['transactionIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amounts')) {
      this.setAmounts(data['amounts']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customAmount')) {
      this.setCustomAmount(data['customAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'redirectUrl')) {
      this.setRedirectUrl(data['redirectUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expirationTime')) {
      this.setExpirationTime(data['expirationTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'propertiesSchema')) {
      this.setPropertiesSchema(data['propertiesSchema']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'properties')) {
      this.setProperties(data['properties']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notificationUrl')) {
      this.setNotificationUrl(data['notificationUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cashierToken')) {
      this.setCashierToken(data['cashierToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
    }
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

  get websiteId(): string {
    return this._fields['websiteId'];
  }
  
  getWebsiteId(): string {
      return this._fields['websiteId'];
  }

  setWebsiteId(value: string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get customerId(): string {
    return this._fields['customerId'];
  }
  
  getCustomerId(): string {
      return this._fields['customerId'];
  }

  setCustomerId(value: string) {
    this._fields['customerId'] = value;

    return this;
  }

  get transactionIds(): Array<any> | null {
    return this._fields['transactionIds'] ?? null;
  }
  
  getTransactionIds(): Array<any> | null {
      return this._fields['transactionIds'] ?? null;
  }

  setTransactionIds(value: null | Array<any>) {
    this._fields['transactionIds'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  private setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get currency(): string {
    return this._fields['currency'];
  }
  
  getCurrency(): string {
      return this._fields['currency'];
  }

  setCurrency(value: string) {
    this._fields['currency'] = value;

    return this;
  }

  get amounts(): Array<any> | null {
    return this._fields['amounts'] ?? null;
  }
  
  getAmounts(): Array<any> | null {
      return this._fields['amounts'] ?? null;
  }

  setAmounts(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => typeof value === 'string' ? Number(value) : value,
    ) : null;

    this._fields['amounts'] = value;

    return this;
  }

  get customAmount(): DepositRequestCustomAmount | null {
    return this._fields['customAmount'] ?? null;
  }
  
  getCustomAmount(): DepositRequestCustomAmount | null {
      return this._fields['customAmount'] ?? null;
  }

  setCustomAmount(value: null | DepositRequestCustomAmount | any) {
    if (value !== null && !(value instanceof DepositRequestCustomAmount)) {
      value = new DepositRequestCustomAmount(value);
    }

    this._fields['customAmount'] = value;

    return this;
  }

  get redirectUrl(): string | null {
    return this._fields['redirectUrl'] ?? null;
  }
  
  getRedirectUrl(): string | null {
      return this._fields['redirectUrl'] ?? null;
  }

  setRedirectUrl(value: null | string) {
    this._fields['redirectUrl'] = value;

    return this;
  }

  get expirationTime(): Date | null {
    return this._fields['expirationTime'] ?? null;
  }
  
  getExpirationTime(): Date | null {
      return this._fields['expirationTime'] ?? null;
  }

  setExpirationTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['expirationTime'] = value;

    return this;
  }

  get propertiesSchema(): Record<string, any> | null {
    return this._fields['propertiesSchema'] ?? null;
  }
  
  getPropertiesSchema(): Record<string, any> | null {
      return this._fields['propertiesSchema'] ?? null;
  }

  private setPropertiesSchema(value: null | Record<string, any>) {
    this._fields['propertiesSchema'] = value;

    return this;
  }

  get properties(): Record<string, any> | null {
    return this._fields['properties'] ?? null;
  }
  
  getProperties(): Record<string, any> | null {
      return this._fields['properties'] ?? null;
  }

  private setProperties(value: null | Record<string, any>) {
    this._fields['properties'] = value;

    return this;
  }

  get notificationUrl(): string | null {
    return this._fields['notificationUrl'] ?? null;
  }
  
  getNotificationUrl(): string | null {
      return this._fields['notificationUrl'] ?? null;
  }

  setNotificationUrl(value: null | string) {
    this._fields['notificationUrl'] = value;

    return this;
  }

  get cashierToken(): string | null {
    return this._fields['cashierToken'] ?? null;
  }
  
  getCashierToken(): string | null {
      return this._fields['cashierToken'] ?? null;
  }

  private setCashierToken(value: null | string) {
    this._fields['cashierToken'] = value;

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

  get embedded(): DepositRequestEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): DepositRequestEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | DepositRequestEmbedded | any) {
    if (value !== null && !(value instanceof DepositRequestEmbedded)) {
      value = new DepositRequestEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionIds')) {
      data['transactionIds'] = this['transactionIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amounts')) {
      data['amounts'] = this['amounts'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customAmount')) {
      data['customAmount'] = this['customAmount']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'redirectUrl')) {
      data['redirectUrl'] = this['redirectUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expirationTime')) {
      data['expirationTime'] = this['expirationTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'propertiesSchema')) {
      data['propertiesSchema'] = this['propertiesSchema'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'properties')) {
      data['properties'] = this['properties'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notificationUrl')) {
      data['notificationUrl'] = this['notificationUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cashierToken')) {
      data['cashierToken'] = this['cashierToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
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
