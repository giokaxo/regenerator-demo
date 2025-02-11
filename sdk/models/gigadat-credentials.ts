
export default class GigadatCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'campaignId')) {
      this.setCampaignId(data['campaignId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accessToken')) {
      this.setAccessToken(data['accessToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'securityToken')) {
      this.setSecurityToken(data['securityToken']);
    }
  }


  get campaignId(): string {
    return this._fields['campaignId'];
  }
  
  getCampaignId(): string {
      return this._fields['campaignId'];
  }

  setCampaignId(value: string) {
    this._fields['campaignId'] = value;

    return this;
  }

  get accessToken(): string {
    return this._fields['accessToken'];
  }
  
  getAccessToken(): string {
      return this._fields['accessToken'];
  }

  setAccessToken(value: string) {
    this._fields['accessToken'] = value;

    return this;
  }

  get securityToken(): string {
    return this._fields['securityToken'];
  }
  
  getSecurityToken(): string {
      return this._fields['securityToken'];
  }

  setSecurityToken(value: string) {
    this._fields['securityToken'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'campaignId')) {
      data['campaignId'] = this['campaignId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accessToken')) {
      data['accessToken'] = this['accessToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'securityToken')) {
      data['securityToken'] = this['securityToken'];
    }

    return data;
  }
}
