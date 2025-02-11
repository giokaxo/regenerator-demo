import PostFinanceCredentials from '../models/post-finance-credentials';
import PostFinanceSettings from '../models/post-finance-settings';
import GatewayAccount from '../models/gateway-account';

export default class PostFinance extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'PostFinance',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): PostFinanceCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PostFinanceCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PostFinanceCredentials | any) {
    if (!(value instanceof PostFinanceCredentials)) {
      value = new PostFinanceCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): PostFinanceSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): PostFinanceSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | PostFinanceSettings | any) {
    if (value !== null && !(value instanceof PostFinanceSettings)) {
      value = new PostFinanceSettings(value);
    }

    this._fields['settings'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentials')) {
      data['credentials'] = this['credentials'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings']?.jsonSerialize() ?? null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
