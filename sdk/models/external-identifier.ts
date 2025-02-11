import ResourceLink from '../models/resource-link';

export default class ExternalIdentifier {
  RESOURCE_CUSTOMERS = 'customers';

  RESOURCE_INVOICES = 'invoices';

  RESOURCE_INVOICE_ITEMS = 'invoice-items';

  RESOURCE_TRANSACTIONS = 'transactions';

  RESOURCE_JOURNAL_ACCOUNTS = 'journal-accounts';

  RESOURCE_JOURNAL_ENTRIES = 'journal-entries';

  SERVICE_QUICKBOOKS_ONLINE = 'quickbooks-online';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'resource')) {
      this.setResource(data['resource']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'resourceId')) {
      this.setResourceId(data['resourceId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'service')) {
      this.setService(data['service']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'externalIdentifier')) {
      this.setExternalIdentifier(data['externalIdentifier']);
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


  get resource(): string | null {
    return this._fields['resource'] ?? null;
  }
  
  getResource(): string | null {
      return this._fields['resource'] ?? null;
  }

  private setResource(value: null | string) {
    this._fields['resource'] = value;

    return this;
  }

  get resourceId(): string | null {
    return this._fields['resourceId'] ?? null;
  }
  
  getResourceId(): string | null {
      return this._fields['resourceId'] ?? null;
  }

  private setResourceId(value: null | string) {
    this._fields['resourceId'] = value;

    return this;
  }

  get service(): string | null {
    return this._fields['service'] ?? null;
  }
  
  getService(): string | null {
      return this._fields['service'] ?? null;
  }

  private setService(value: null | string) {
    this._fields['service'] = value;

    return this;
  }

  get externalIdentifier(): string {
    return this._fields['externalIdentifier'];
  }
  
  getExternalIdentifier(): string {
      return this._fields['externalIdentifier'];
  }

  setExternalIdentifier(value: string) {
    this._fields['externalIdentifier'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'resource')) {
      data['resource'] = this['resource'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'resourceId')) {
      data['resourceId'] = this['resourceId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'service')) {
      data['service'] = this['service'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'externalIdentifier')) {
      data['externalIdentifier'] = this['externalIdentifier'];
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
