import ResourceLink from '../models/resource-link';

export default class EmailDeliverySetting {
  STATUS_PENDING = 'pending';

  STATUS_VERIFIED = 'verified';

  PROVIDER_REBILLY = 'rebilly';

  PROVIDER_SMTP = 'smtp';

  PROVIDER_AWS_SES = 'aws-ses';

  PROVIDER_MAILGUN = 'mailgun';

  PROVIDER_POSTMARK = 'postmark';

  PROVIDER_SENDGRID = 'sendgrid';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'from')) {
      this.setFrom(data['from']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'credentialId')) {
      this.setCredentialId(data['credentialId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'provider')) {
      this.setProvider(data['provider']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isDefault')) {
      this.setIsDefault(data['isDefault']);
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

  get from(): string {
    return this._fields['from'];
  }
  
  getFrom(): string {
      return this._fields['from'];
  }

  setFrom(value: string) {
    this._fields['from'] = value;

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

  get credentialId(): string | null {
    return this._fields['credentialId'] ?? null;
  }
  
  getCredentialId(): string | null {
      return this._fields['credentialId'] ?? null;
  }

  setCredentialId(value: null | string) {
    this._fields['credentialId'] = value;

    return this;
  }

  get provider(): string | null {
    return this._fields['provider'] ?? null;
  }
  
  getProvider(): string | null {
      return this._fields['provider'] ?? null;
  }

  private setProvider(value: null | string) {
    this._fields['provider'] = value;

    return this;
  }

  get isDefault(): boolean | null {
    return this._fields['isDefault'] ?? null;
  }
  
  getIsDefault(): boolean | null {
      return this._fields['isDefault'] ?? null;
  }

  setIsDefault(value: null | boolean) {
    this._fields['isDefault'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'from')) {
      data['from'] = this['from'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialId')) {
      data['credentialId'] = this['credentialId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'provider')) {
      data['provider'] = this['provider'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isDefault')) {
      data['isDefault'] = this['isDefault'];
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

    return data;
  }
}
