
export default class PostPermissionsEmulationRequest {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'permissions')) {
      this.setPermissions(data['permissions']);
    }
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'permissions')) {
      data['permissions'] = this['permissions'];
    }

    return data;
  }
}
