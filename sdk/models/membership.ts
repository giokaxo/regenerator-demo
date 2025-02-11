import MembershipOrganization from '../models/membership-organization';
import MembershipUser from '../models/membership-user';
import MembershipEmbedded from '../models/membership-embedded';
import Acl from '../models/acl';
import ResourceLink from '../models/resource-link';

export default class Membership {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'organization')) {
      this.setOrganization(data['organization']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'user')) {
      this.setUser(data['user']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'allowedIps')) {
      this.setAllowedIps(data['allowedIps']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'permissions')) {
      this.setPermissions(data['permissions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isOwner')) {
      this.setIsOwner(data['isOwner']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isDefault')) {
      this.setIsDefault(data['isDefault']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'roleIds')) {
      this.setRoleIds(data['roleIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acl')) {
      this.setAcl(data['acl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
    }
  }


  get organization(): MembershipOrganization {
    return this._fields['organization'];
  }
  
  getOrganization(): MembershipOrganization {
      return this._fields['organization'];
  }

  setOrganization(value: MembershipOrganization | any) {
    if (!(value instanceof MembershipOrganization)) {
      value = new MembershipOrganization(value);
    }

    this._fields['organization'] = value;

    return this;
  }

  get user(): MembershipUser {
    return this._fields['user'];
  }
  
  getUser(): MembershipUser {
      return this._fields['user'];
  }

  setUser(value: MembershipUser | any) {
    if (!(value instanceof MembershipUser)) {
      value = new MembershipUser(value);
    }

    this._fields['user'] = value;

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

  get permissions(): Array<any> | null {
    return this._fields['permissions'] ?? null;
  }
  
  getPermissions(): Array<any> | null {
      return this._fields['permissions'] ?? null;
  }

  setPermissions(value: null | Array<any>) {
    this._fields['permissions'] = value;

    return this;
  }

  get isOwner(): boolean | null {
    return this._fields['isOwner'] ?? null;
  }
  
  getIsOwner(): boolean | null {
      return this._fields['isOwner'] ?? null;
  }

  setIsOwner(value: null | boolean) {
    this._fields['isOwner'] = value;

    return this;
  }

  get isDefault(): boolean | null {
    return this._fields['isDefault'] ?? null;
  }
  
  getIsDefault(): boolean | null {
      return this._fields['isDefault'] ?? null;
  }

  private setIsDefault(value: null | boolean) {
    this._fields['isDefault'] = value;

    return this;
  }

  get roleIds(): Array<any> | null {
    return this._fields['roleIds'] ?? null;
  }
  
  getRoleIds(): Array<any> | null {
      return this._fields['roleIds'] ?? null;
  }

  setRoleIds(value: null | Array<any>) {
    this._fields['roleIds'] = value;

    return this;
  }

  get acl(): Array<any> | null {
    return this._fields['acl'] ?? null;
  }
  
  getAcl(): Array<any> | null {
      return this._fields['acl'] ?? null;
  }

  private setAcl(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Acl ? value : new Acl(value),
    ) : null;

    this._fields['acl'] = value;

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

  get embedded(): MembershipEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): MembershipEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | MembershipEmbedded | any) {
    if (value !== null && !(value instanceof MembershipEmbedded)) {
      value = new MembershipEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organization')) {
      data['organization'] = this['organization'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'user')) {
      data['user'] = this['user'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'allowedIps')) {
      data['allowedIps'] = this['allowedIps'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'permissions')) {
      data['permissions'] = this['permissions'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isOwner')) {
      data['isOwner'] = this['isOwner'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isDefault')) {
      data['isDefault'] = this['isDefault'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'roleIds')) {
      data['roleIds'] = this['roleIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acl')) {
      data['acl'] = this['acl'] !== null
          ? this._fields['acl'].map((acl: Acl) => acl.jsonSerialize())
          : null;
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
