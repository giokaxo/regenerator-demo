import DisputeEmbedded from '../models/dispute-embedded';
import ResourceLink from '../models/resource-link';

export default class Dispute {
  CATEGORY_FRAUD = 'fraud';

  CATEGORY_AUTHORIZATION = 'authorization';

  CATEGORY_PROCESSING_ERRORS = 'processing-errors';

  CATEGORY_CONSUMER_DISPUTES = 'consumer-disputes';

  CATEGORY_UNCATEGORIZED = 'uncategorized';

  CATEGORY_BANK_RETURN = 'bank-return';

  TYPE_INFORMATION_REQUEST = 'information-request';

  TYPE_FIRST_CHARGEBACK = 'first-chargeback';

  TYPE_SECOND_CHARGEBACK = 'second-chargeback';

  TYPE_ARBITRATION = 'arbitration';

  TYPE_FRAUD = 'fraud';

  TYPE_ETHOCA_ALERT = 'ethoca-alert';

  TYPE_VERIFI_ALERT = 'verifi-alert';

  TYPE_BANK_RETURN = 'bank-return';

  TYPE_PAYPAL_CLAIM = 'paypal-claim';

  TYPE_REPRESENTMENT = 'representment';

  STATUS_RESPONSE_NEEDED = 'response-needed';

  STATUS_UNDER_REVIEW = 'under-review';

  STATUS_FORFEITED = 'forfeited';

  STATUS_WON = 'won';

  STATUS_LOST = 'lost';

  STATUS_UNKNOWN = 'unknown';

  SOURCE_NULL = 'null';

  SOURCE_API = 'api';

  SOURCE_MANUAL = 'manual';

  SOURCE_SFTP = 'sftp';

  SOURCE_WEBHOOK = 'webhook';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transactionId')) {
      this.setTransactionId(data['transactionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acquirerReferenceNumber')) {
      this.setAcquirerReferenceNumber(data['acquirerReferenceNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'caseId')) {
      this.setCaseId(data['caseId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reasonCode')) {
      this.setReasonCode(data['reasonCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reasonDescription')) {
      this.setReasonDescription(data['reasonDescription']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'category')) {
      this.setCategory(data['category']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'postedTime')) {
      this.setPostedTime(data['postedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'deadlineTime')) {
      this.setDeadlineTime(data['deadlineTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rawResponse')) {
      this.setRawResponse(data['rawResponse']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'resolvedTime')) {
      this.setResolvedTime(data['resolvedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'source')) {
      this.setSource(data['source']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
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

  get customerId(): string | null {
    return this._fields['customerId'] ?? null;
  }
  
  getCustomerId(): string | null {
      return this._fields['customerId'] ?? null;
  }

  private setCustomerId(value: null | string) {
    this._fields['customerId'] = value;

    return this;
  }

  get transactionId(): string | null {
    return this._fields['transactionId'] ?? null;
  }
  
  getTransactionId(): string | null {
      return this._fields['transactionId'] ?? null;
  }

  setTransactionId(value: null | string) {
    this._fields['transactionId'] = value;

    return this;
  }

  get currency(): string | null {
    return this._fields['currency'] ?? null;
  }
  
  getCurrency(): string | null {
      return this._fields['currency'] ?? null;
  }

  setCurrency(value: null | string) {
    this._fields['currency'] = value;

    return this;
  }

  get amount(): number | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): number | null {
      return this._fields['amount'] ?? null;
  }

  setAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get acquirerReferenceNumber(): string | null {
    return this._fields['acquirerReferenceNumber'] ?? null;
  }
  
  getAcquirerReferenceNumber(): string | null {
      return this._fields['acquirerReferenceNumber'] ?? null;
  }

  setAcquirerReferenceNumber(value: null | string) {
    this._fields['acquirerReferenceNumber'] = value;

    return this;
  }

  get caseId(): string | null {
    return this._fields['caseId'] ?? null;
  }
  
  getCaseId(): string | null {
      return this._fields['caseId'] ?? null;
  }

  setCaseId(value: null | string) {
    this._fields['caseId'] = value;

    return this;
  }

  get reasonCode(): string | null {
    return this._fields['reasonCode'] ?? null;
  }
  
  getReasonCode(): string | null {
      return this._fields['reasonCode'] ?? null;
  }

  setReasonCode(value: null | string) {
    this._fields['reasonCode'] = value;

    return this;
  }

  get reasonDescription(): string | null {
    return this._fields['reasonDescription'] ?? null;
  }
  
  getReasonDescription(): string | null {
      return this._fields['reasonDescription'] ?? null;
  }

  private setReasonDescription(value: null | string) {
    this._fields['reasonDescription'] = value;

    return this;
  }

  get category(): string | null {
    return this._fields['category'] ?? null;
  }
  
  getCategory(): string | null {
      return this._fields['category'] ?? null;
  }

  private setCategory(value: null | string) {
    this._fields['category'] = value;

    return this;
  }

  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  setType(value: null | string) {
    this._fields['type'] = value;

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

  get postedTime(): Date | null {
    return this._fields['postedTime'] ?? null;
  }
  
  getPostedTime(): Date | null {
      return this._fields['postedTime'] ?? null;
  }

  setPostedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['postedTime'] = value;

    return this;
  }

  get deadlineTime(): Date | null {
    return this._fields['deadlineTime'] ?? null;
  }
  
  getDeadlineTime(): Date | null {
      return this._fields['deadlineTime'] ?? null;
  }

  setDeadlineTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['deadlineTime'] = value;

    return this;
  }

  get rawResponse(): string | null {
    return this._fields['rawResponse'] ?? null;
  }
  
  getRawResponse(): string | null {
      return this._fields['rawResponse'] ?? null;
  }

  private setRawResponse(value: null | string) {
    this._fields['rawResponse'] = value;

    return this;
  }

  get resolvedTime(): Date | null {
    return this._fields['resolvedTime'] ?? null;
  }
  
  getResolvedTime(): Date | null {
      return this._fields['resolvedTime'] ?? null;
  }

  private setResolvedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['resolvedTime'] = value;

    return this;
  }

  get source(): string | null {
    return this._fields['source'] ?? null;
  }
  
  getSource(): string | null {
      return this._fields['source'] ?? null;
  }

  private setSource(value: null | string) {
    this._fields['source'] = value;

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

  get embedded(): DisputeEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): DisputeEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | DisputeEmbedded | any) {
    if (value !== null && !(value instanceof DisputeEmbedded)) {
      value = new DisputeEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionId')) {
      data['transactionId'] = this['transactionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acquirerReferenceNumber')) {
      data['acquirerReferenceNumber'] = this['acquirerReferenceNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'caseId')) {
      data['caseId'] = this['caseId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reasonCode')) {
      data['reasonCode'] = this['reasonCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reasonDescription')) {
      data['reasonDescription'] = this['reasonDescription'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'category')) {
      data['category'] = this['category'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'postedTime')) {
      data['postedTime'] = this['postedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'deadlineTime')) {
      data['deadlineTime'] = this['deadlineTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rawResponse')) {
      data['rawResponse'] = this['rawResponse'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'resolvedTime')) {
      data['resolvedTime'] = this['resolvedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'source')) {
      data['source'] = this['source'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
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
