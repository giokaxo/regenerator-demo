import SubscriptionCancellationLineItemSubtotal from '../models/subscription-cancellation-line-item-subtotal';
import SubscriptionCancellationLineItems from '../models/subscription-cancellation-line-items';
import ResourceLink from '../models/resource-link';

export default class PatchSubscriptionCancellationRequest {
  CANCELED_BY_MERCHANT = 'merchant';

  CANCELED_BY_CUSTOMER = 'customer';

  CANCELED_BY_REBILLY = 'rebilly';

  STATUS_DRAFT = 'draft';

  STATUS_CONFIRMED = 'confirmed';

  STATUS_COMPLETED = 'completed';

  STATUS_REVOKED = 'revoked';

  REASON_DID_NOT_USE = 'did-not-use';

  REASON_DID_NOT_WANT = 'did-not-want';

  REASON_MISSING_FEATURES = 'missing-features';

  REASON_BUGS_OR_PROBLEMS = 'bugs-or-problems';

  REASON_DO_NOT_REMEMBER = 'do-not-remember';

  REASON_RISK_WARNING = 'risk-warning';

  REASON_CONTRACT_EXPIRED = 'contract-expired';

  REASON_TOO_EXPENSIVE = 'too-expensive';

  REASON_OTHER = 'other';

  REASON_BILLING_FAILURE = 'billing-failure';

  CHURN_TIME_POLICY_NULL = 'null';

  CHURN_TIME_POLICY_NOW = 'now';

  CHURN_TIME_POLICY_AT_NEXT_RENEWAL = 'at-next-renewal';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'canceledBy')) {
      this.setCanceledBy(data['canceledBy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subscriptionId')) {
      this.setSubscriptionId(data['subscriptionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'proratedInvoiceId')) {
      this.setProratedInvoiceId(data['proratedInvoiceId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'appliedInvoiceId')) {
      this.setAppliedInvoiceId(data['appliedInvoiceId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reason')) {
      this.setReason(data['reason']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'prorated')) {
      this.setProrated(data['prorated']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'canceledTime')) {
      this.setCanceledTime(data['canceledTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'churnTime')) {
      this.setChurnTime(data['churnTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'churnTimePolicy')) {
      this.setChurnTimePolicy(data['churnTimePolicy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lineItems')) {
      this.setLineItems(data['lineItems']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lineItemSubtotal')) {
      this.setLineItemSubtotal(data['lineItemSubtotal']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get canceledBy(): string | null {
    return this._fields['canceledBy'] ?? null;
  }
  
  getCanceledBy(): string | null {
      return this._fields['canceledBy'] ?? null;
  }

  private setCanceledBy(value: null | string) {
    this._fields['canceledBy'] = value;

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

  get subscriptionId(): string {
    return this._fields['subscriptionId'];
  }
  
  getSubscriptionId(): string {
      return this._fields['subscriptionId'];
  }

  setSubscriptionId(value: string) {
    this._fields['subscriptionId'] = value;

    return this;
  }

  get proratedInvoiceId(): string | null {
    return this._fields['proratedInvoiceId'] ?? null;
  }
  
  getProratedInvoiceId(): string | null {
      return this._fields['proratedInvoiceId'] ?? null;
  }

  private setProratedInvoiceId(value: null | string) {
    this._fields['proratedInvoiceId'] = value;

    return this;
  }

  get appliedInvoiceId(): string | null {
    return this._fields['appliedInvoiceId'] ?? null;
  }
  
  getAppliedInvoiceId(): string | null {
      return this._fields['appliedInvoiceId'] ?? null;
  }

  private setAppliedInvoiceId(value: null | string) {
    this._fields['appliedInvoiceId'] = value;

    return this;
  }

  get reason(): string | null {
    return this._fields['reason'] ?? null;
  }
  
  getReason(): string | null {
      return this._fields['reason'] ?? null;
  }

  setReason(value: null | string) {
    this._fields['reason'] = value;

    return this;
  }

  get description(): string | null {
    return this._fields['description'] ?? null;
  }
  
  getDescription(): string | null {
      return this._fields['description'] ?? null;
  }

  setDescription(value: null | string) {
    this._fields['description'] = value;

    return this;
  }

  get prorated(): boolean | null {
    return this._fields['prorated'] ?? null;
  }
  
  getProrated(): boolean | null {
      return this._fields['prorated'] ?? null;
  }

  setProrated(value: null | boolean) {
    this._fields['prorated'] = value;

    return this;
  }

  get canceledTime(): Date | null {
    return this._fields['canceledTime'] ?? null;
  }
  
  getCanceledTime(): Date | null {
      return this._fields['canceledTime'] ?? null;
  }

  private setCanceledTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['canceledTime'] = value;

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

  get churnTime(): Date | null {
    return this._fields['churnTime'] ?? null;
  }
  
  getChurnTime(): Date | null {
      return this._fields['churnTime'] ?? null;
  }

  setChurnTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['churnTime'] = value;

    return this;
  }

  get churnTimePolicy(): string | null {
    return this._fields['churnTimePolicy'] ?? null;
  }
  
  getChurnTimePolicy(): string | null {
      return this._fields['churnTimePolicy'] ?? null;
  }

  setChurnTimePolicy(value: null | string) {
    this._fields['churnTimePolicy'] = value;

    return this;
  }

  get lineItems(): Array<any> | null {
    return this._fields['lineItems'] ?? null;
  }
  
  getLineItems(): Array<any> | null {
      return this._fields['lineItems'] ?? null;
  }

  setLineItems(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof SubscriptionCancellationLineItems ? value : new SubscriptionCancellationLineItems(value),
    ) : null;

    this._fields['lineItems'] = value;

    return this;
  }

  get lineItemSubtotal(): SubscriptionCancellationLineItemSubtotal | null {
    return this._fields['lineItemSubtotal'] ?? null;
  }
  
  getLineItemSubtotal(): SubscriptionCancellationLineItemSubtotal | null {
      return this._fields['lineItemSubtotal'] ?? null;
  }

  setLineItemSubtotal(value: null | SubscriptionCancellationLineItemSubtotal | any) {
    if (value !== null && !(value instanceof SubscriptionCancellationLineItemSubtotal)) {
      value = new SubscriptionCancellationLineItemSubtotal(value);
    }

    this._fields['lineItemSubtotal'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'canceledBy')) {
      data['canceledBy'] = this['canceledBy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subscriptionId')) {
      data['subscriptionId'] = this['subscriptionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'proratedInvoiceId')) {
      data['proratedInvoiceId'] = this['proratedInvoiceId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'appliedInvoiceId')) {
      data['appliedInvoiceId'] = this['appliedInvoiceId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reason')) {
      data['reason'] = this['reason'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'prorated')) {
      data['prorated'] = this['prorated'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'canceledTime')) {
      data['canceledTime'] = this['canceledTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'churnTime')) {
      data['churnTime'] = this['churnTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'churnTimePolicy')) {
      data['churnTimePolicy'] = this['churnTimePolicy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lineItems')) {
      data['lineItems'] = this['lineItems'] !== null
          ? this._fields['lineItems'].map((subscriptionCancellationLineItems: SubscriptionCancellationLineItems) => subscriptionCancellationLineItems.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lineItemSubtotal')) {
      data['lineItemSubtotal'] = this['lineItemSubtotal']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
