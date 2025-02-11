import RoleEmbedded from '../models/role-embedded';
import Acl from '../models/acl';
import ResourceLink from '../models/resource-link';

export default class Role {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acl')) {
      this.setAcl(data['acl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'allowedIps')) {
      this.setAllowedIps(data['allowedIps']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'seniorIds')) {
      this.setSeniorIds(data['seniorIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'juniorIds')) {
      this.setJuniorIds(data['juniorIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'usersCount')) {
      this.setUsersCount(data['usersCount']);
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

  get acl(): Array<any> {
    return this._fields['acl'];
  }
  
  getAcl(): Array<any> {
      return this._fields['acl'];
  }

  setAcl(value: Array<any>) {
    value = value.map(
      (value) => value instanceof Acl ? value : new Acl(value),
    );

    this._fields['acl'] = value;

    return this;
  }

  get allowedIps(): Array<any> | null {
    return this._fields['allowedIps'] ?? null;
  }
  
  getAllowedIps(): Array<any> | null {
      return this._fields['allowedIps'] ?? null;
  }

  setAllowedIps(value: null | Array<any>) {
    this._fields['allowedIps'] = value;

    return this;
  }

  get seniorIds(): Array<any> | null {
    return this._fields['seniorIds'] ?? null;
  }
  
  getSeniorIds(): Array<any> | null {
      return this._fields['seniorIds'] ?? null;
  }

  private setSeniorIds(value: null | Array<any>) {
    this._fields['seniorIds'] = value;

    return this;
  }

  get juniorIds(): Array<any> | null {
    return this._fields['juniorIds'] ?? null;
  }
  
  getJuniorIds(): Array<any> | null {
      return this._fields['juniorIds'] ?? null;
  }

  setJuniorIds(value: null | Array<any>) {
    this._fields['juniorIds'] = value;

    return this;
  }

  get usersCount(): number | null {
    return this._fields['usersCount'] ?? null;
  }
  
  getUsersCount(): number | null {
      return this._fields['usersCount'] ?? null;
  }

  private setUsersCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['usersCount'] = value;

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

  get embedded(): RoleEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): RoleEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | RoleEmbedded | any) {
    if (value !== null && !(value instanceof RoleEmbedded)) {
      value = new RoleEmbedded(value);
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acl')) {
      data['acl'] = this['acl'].map(
          (acl: Acl) => acl.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'allowedIps')) {
      data['allowedIps'] = this['allowedIps'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'seniorIds')) {
      data['seniorIds'] = this['seniorIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'juniorIds')) {
      data['juniorIds'] = this['juniorIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'usersCount')) {
      data['usersCount'] = this['usersCount'];
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
