import Role from '../models/role';

export default class MembershipEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'roles')) {
      this.setRoles(data['roles']);
    }
  }


  get roles(): Array<any> | null {
    return this._fields['roles'] ?? null;
  }
  
  getRoles(): Array<any> | null {
      return this._fields['roles'] ?? null;
  }

  setRoles(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Role ? value : new Role(value),
    ) : null;

    this._fields['roles'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'roles')) {
      data['roles'] = this['roles'] !== null
          ? this._fields['roles'].map((role: Role) => role.jsonSerialize())
          : null;
    }

    return data;
  }
}
