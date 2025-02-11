import UserApplicationEmbedded from '../models/user-application-embedded';
import ResourceLink from '../models/resource-link';

export default class UserApplication {
  STATUS_PENDING_APPROVAL = 'pending-approval';

  STATUS_AVAILABLE = 'available';

  STATUS_DISABLED = 'disabled';

  PERMISSIONS_DELETE_APPLICATION_INSTANCE = 'DeleteApplicationInstance';

  PERMISSIONS_GET_APPLICATION_INSTANCE_CONFIGURATION = 'GetApplicationInstanceConfiguration';

  PERMISSIONS_GET_CUSTOMER = 'GetCustomer';

  PERMISSIONS_GET_CUSTOMER_COLLECTION = 'GetCustomerCollection';

  PERMISSIONS_GET_INVOICE = 'GetInvoice';

  PERMISSIONS_GET_INVOICE_COLLECTION = 'GetInvoiceCollection';

  PERMISSIONS_GET_PLAN = 'GetPlan';

  PERMISSIONS_GET_PLAN_COLLECTION = 'GetPlanCollection';

  PERMISSIONS_GET_PRODUCT = 'GetProduct';

  PERMISSIONS_GET_PRODUCT_COLLECTION = 'GetProductCollection';

  PERMISSIONS_GET_SUBSCRIPTION = 'GetSubscription';

  PERMISSIONS_GET_SUBSCRIPTION_COLLECTION = 'GetSubscriptionCollection';

  PERMISSIONS_GET_TRANSACTION = 'GetTransaction';

  PERMISSIONS_GET_TRANSACTION_COLLECTION = 'GetTransactionCollection';

  PERMISSIONS_GET_WEBHOOK = 'GetWebhook';

  PERMISSIONS_GET_WEBSITE = 'GetWebsite';

  PERMISSIONS_GET_WEBSITE_COLLECTION = 'GetWebsiteCollection';

  PERMISSIONS_POST_COUPON = 'PostCoupon';

  PERMISSIONS_POST_COUPON_REDEMPTION = 'PostCouponRedemption';

  PERMISSIONS_POST_GATEWAY_ACCOUNT_DOWNTIME_SCHEDULE = 'PostGatewayAccountDowntimeSchedule';

  PERMISSIONS_POST_PAYOUT = 'PostPayout';

  PERMISSIONS_POST_SERVICE_CREDENTIAL = 'PostServiceCredential';

  PERMISSIONS_POST_WEBHOOK = 'PostWebhook';

  PERMISSIONS_POST_WEBHOOK_CREDENTIAL_HASH = 'PostWebhookCredentialHash';

  PERMISSIONS_PUT_APPLICATION_INSTANCE_CONFIGURATION = 'PutApplicationInstanceConfiguration';

  PERMISSIONS_PUT_COUPON = 'PutCoupon';

  CONFIGURED_BY_USER = 'user';

  CONFIGURED_BY_APPLICATION = 'application';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'logoId')) {
      this.setLogoId(data['logoId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'authorName')) {
      this.setAuthorName(data['authorName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'authorLogoId')) {
      this.setAuthorLogoId(data['authorLogoId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tagline')) {
      this.setTagline(data['tagline']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'permissions')) {
      this.setPermissions(data['permissions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'configurationUrl')) {
      this.setConfigurationUrl(data['configurationUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'configuredBy')) {
      this.setConfiguredBy(data['configuredBy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'properties')) {
      this.setProperties(data['properties']);
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

  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get logoId(): string {
    return this._fields['logoId'];
  }
  
  getLogoId(): string {
      return this._fields['logoId'];
  }

  setLogoId(value: string) {
    this._fields['logoId'] = value;

    return this;
  }

  get authorName(): string {
    return this._fields['authorName'];
  }
  
  getAuthorName(): string {
      return this._fields['authorName'];
  }

  setAuthorName(value: string) {
    this._fields['authorName'] = value;

    return this;
  }

  get authorLogoId(): string | null {
    return this._fields['authorLogoId'] ?? null;
  }
  
  getAuthorLogoId(): string | null {
      return this._fields['authorLogoId'] ?? null;
  }

  setAuthorLogoId(value: null | string) {
    this._fields['authorLogoId'] = value;

    return this;
  }

  get tagline(): string {
    return this._fields['tagline'];
  }
  
  getTagline(): string {
      return this._fields['tagline'];
  }

  setTagline(value: string) {
    this._fields['tagline'] = value;

    return this;
  }

  get description(): string {
    return this._fields['description'];
  }
  
  getDescription(): string {
      return this._fields['description'];
  }

  setDescription(value: string) {
    this._fields['description'] = value;

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

  get permissions(): Array<any> {
    return this._fields['permissions'];
  }
  
  getPermissions(): Array<any> {
      return this._fields['permissions'];
  }

  setPermissions(value: Array<any>) {
    this._fields['permissions'] = value;

    return this;
  }

  get configurationUrl(): string | null {
    return this._fields['configurationUrl'] ?? null;
  }
  
  getConfigurationUrl(): string | null {
      return this._fields['configurationUrl'] ?? null;
  }

  setConfigurationUrl(value: null | string) {
    this._fields['configurationUrl'] = value;

    return this;
  }

  get configuredBy(): string | null {
    return this._fields['configuredBy'] ?? null;
  }
  
  getConfiguredBy(): string | null {
      return this._fields['configuredBy'] ?? null;
  }

  private setConfiguredBy(value: null | string) {
    this._fields['configuredBy'] = value;

    return this;
  }

  get properties(): Record<string, any> | null {
    return this._fields['properties'] ?? null;
  }
  
  getProperties(): Record<string, any> | null {
      return this._fields['properties'] ?? null;
  }

  setProperties(value: null | Record<string, any>) {
    this._fields['properties'] = value;

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

  get embedded(): UserApplicationEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): UserApplicationEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | UserApplicationEmbedded | any) {
    if (value !== null && !(value instanceof UserApplicationEmbedded)) {
      value = new UserApplicationEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'logoId')) {
      data['logoId'] = this['logoId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authorName')) {
      data['authorName'] = this['authorName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authorLogoId')) {
      data['authorLogoId'] = this['authorLogoId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tagline')) {
      data['tagline'] = this['tagline'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'permissions')) {
      data['permissions'] = this['permissions'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'configurationUrl')) {
      data['configurationUrl'] = this['configurationUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'configuredBy')) {
      data['configuredBy'] = this['configuredBy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'properties')) {
      data['properties'] = this['properties'];
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
