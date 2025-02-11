
export default class CopprCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
  }


  get organizationId(): string {
    return this._fields['organizationId'];
  }
  
  getOrganizationId(): string {
      return this._fields['organizationId'];
  }

  setOrganizationId(value: string) {
    this._fields['organizationId'] = value;

    return this;
  }

  get apiKey(): string {
    return this._fields['apiKey'];
  }
  
  getApiKey(): string {
      return this._fields['apiKey'];
  }

  setApiKey(value: string) {
    this._fields['apiKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['apiKey'] = this['apiKey'];
    }

    return data;
  }
}
