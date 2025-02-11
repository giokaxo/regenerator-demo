import OrganizationExportResources from '../models/organization-export-resources';
import ResourceLink from '../models/resource-link';

export default class OrganizationExport {
  STATUS_PENDING = 'pending';

  STATUS_PROCESSING = 'processing';

  STATUS_COMPLETED = 'completed';

  STATUS_QUEUED = 'queued';

  STATUS_FAILED = 'failed';

  STATUS_EXPIRED = 'expired';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'userId')) {
      this.setUserId(data['userId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fileId')) {
      this.setFileId(data['fileId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'resources')) {
      this.setResources(data['resources']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'retentionTime')) {
      this.setRetentionTime(data['retentionTime']);
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

  get userId(): string | null {
    return this._fields['userId'] ?? null;
  }
  
  getUserId(): string | null {
      return this._fields['userId'] ?? null;
  }

  private setUserId(value: null | string) {
    this._fields['userId'] = value;

    return this;
  }

  get fileId(): string | null {
    return this._fields['fileId'] ?? null;
  }
  
  getFileId(): string | null {
      return this._fields['fileId'] ?? null;
  }

  private setFileId(value: null | string) {
    this._fields['fileId'] = value;

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

  get resources(): Array<any> | null {
    return this._fields['resources'] ?? null;
  }
  
  getResources(): Array<any> | null {
      return this._fields['resources'] ?? null;
  }

  private setResources(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof OrganizationExportResources ? value : new OrganizationExportResources(value),
    ) : null;

    this._fields['resources'] = value;

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

  get retentionTime(): Date | null {
    return this._fields['retentionTime'] ?? null;
  }
  
  getRetentionTime(): Date | null {
      return this._fields['retentionTime'] ?? null;
  }

  private setRetentionTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['retentionTime'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'userId')) {
      data['userId'] = this['userId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fileId')) {
      data['fileId'] = this['fileId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'resources')) {
      data['resources'] = this['resources'] !== null
          ? this._fields['resources'].map((organizationExportResources: OrganizationExportResources) => organizationExportResources.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'retentionTime')) {
      data['retentionTime'] = this['retentionTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
