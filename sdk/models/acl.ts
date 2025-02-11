import ApiKeyScope from '../models/api-key-scope';

export default class Acl {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'scope')) {
      this.setScope(data['scope']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'permissions')) {
      this.setPermissions(data['permissions']);
    }
  }


  get scope(): ApiKeyScope {
    return this._fields['scope'];
  }
  
  getScope(): ApiKeyScope {
      return this._fields['scope'];
  }

  setScope(value: ApiKeyScope | any) {
    if (!(value instanceof ApiKeyScope)) {
      value = new ApiKeyScope(value);
    }

    this._fields['scope'] = value;

    return this;
  }

  get permissions(): Array<any> {
    return this._fields['permissions'];
  }
  
  getPermissions(): Array<any> {
      return this._fields['permissions'];
  }

  setPermissions(value: Array<any>) {
    this._fields['permissions'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'scope')) {
      data['scope'] = this['scope'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'permissions')) {
      data['permissions'] = this['permissions'];
    }

    return data;
  }
}
