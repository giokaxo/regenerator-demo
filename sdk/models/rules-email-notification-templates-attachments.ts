
export default class RulesEmailNotificationTemplatesAttachments {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'resourceType')) {
      this.setResourceType(data['resourceType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'resourceId')) {
      this.setResourceId(data['resourceId']);
    }
  }


  get resourceType(): string {
    return this._fields['resourceType'];
  }
  
  getResourceType(): string {
      return this._fields['resourceType'];
  }

  setResourceType(value: string) {
    this._fields['resourceType'] = value;

    return this;
  }

  get resourceId(): string {
    return this._fields['resourceId'];
  }
  
  getResourceId(): string {
      return this._fields['resourceId'];
  }

  setResourceId(value: string) {
    this._fields['resourceId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'resourceType')) {
      data['resourceType'] = this['resourceType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'resourceId')) {
      data['resourceId'] = this['resourceId'];
    }

    return data;
  }
}
