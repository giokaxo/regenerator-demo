import AttachmentEmbedded from '../models/attachment-embedded';
import ResourceLink from '../models/resource-link';

export default class Attachment {
  RELATED_TYPE_CUSTOMER = 'customer';

  RELATED_TYPE_CUSTOMER_TIMELINE_COMMENT = 'customer-timeline-comment';

  RELATED_TYPE_CUSTOMER_EDD_TIMELINE_COMMENT = 'customer-edd-timeline-comment';

  RELATED_TYPE_DISPUTE = 'dispute';

  RELATED_TYPE_GATEWAY_TIMELINE_COMMENT = 'gateway-timeline-comment';

  RELATED_TYPE_INVOICE = 'invoice';

  RELATED_TYPE_INVOICE_TIMELINE_COMMENT = 'invoice-timeline-comment';

  RELATED_TYPE_ORDER_TIMELINE_COMMENT = 'order-timeline-comment';

  RELATED_TYPE_ORGANIZATION = 'organization';

  RELATED_TYPE_PAYMENT = 'payment';

  RELATED_TYPE_PLAN = 'plan';

  RELATED_TYPE_PRODUCT = 'product';

  RELATED_TYPE_SUBSCRIPTION = 'subscription';

  RELATED_TYPE_TRANSACTION = 'transaction';

  RELATED_TYPE_TRANSACTION_TIMELINE_COMMENT = 'transaction-timeline-comment';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fileId')) {
      this.setFileId(data['fileId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'relatedType')) {
      this.setRelatedType(data['relatedType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'relatedId')) {
      this.setRelatedId(data['relatedId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
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

  get fileId(): string {
    return this._fields['fileId'];
  }
  
  getFileId(): string {
      return this._fields['fileId'];
  }

  setFileId(value: string) {
    this._fields['fileId'] = value;

    return this;
  }

  get relatedType(): string {
    return this._fields['relatedType'];
  }
  
  getRelatedType(): string {
      return this._fields['relatedType'];
  }

  setRelatedType(value: string) {
    this._fields['relatedType'] = value;

    return this;
  }

  get relatedId(): string {
    return this._fields['relatedId'];
  }
  
  getRelatedId(): string {
      return this._fields['relatedId'];
  }

  setRelatedId(value: string) {
    this._fields['relatedId'] = value;

    return this;
  }

  get name(): string | null {
    return this._fields['name'] ?? null;
  }
  
  getName(): string | null {
      return this._fields['name'] ?? null;
  }

  setName(value: null | string) {
    this._fields['name'] = value;

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

  get embedded(): AttachmentEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): AttachmentEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | AttachmentEmbedded | any) {
    if (value !== null && !(value instanceof AttachmentEmbedded)) {
      value = new AttachmentEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fileId')) {
      data['fileId'] = this['fileId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'relatedType')) {
      data['relatedType'] = this['relatedType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'relatedId')) {
      data['relatedId'] = this['relatedId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
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
