import Role from '../models/role';

export default class RoleEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'juniorRoles')) {
      this.setJuniorRoles(data['juniorRoles']);
    }
  }


  get juniorRoles(): Role | null {
    return this._fields['juniorRoles'] ?? null;
  }
  
  getJuniorRoles(): Role | null {
      return this._fields['juniorRoles'] ?? null;
  }

  setJuniorRoles(value: null | Role | any) {
    if (value !== null && !(value instanceof Role)) {
      value = new Role(value);
    }

    this._fields['juniorRoles'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'juniorRoles')) {
      data['juniorRoles'] = this['juniorRoles']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
