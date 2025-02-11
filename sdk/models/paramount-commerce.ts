import ParamountCommerceCredentials from '../models/paramount-commerce-credentials';
import ParamountCommerceSettings from '../models/paramount-commerce-settings';
import GatewayAccount from '../models/gateway-account';

export default class ParamountCommerce extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'ParamountCommerce',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): ParamountCommerceCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ParamountCommerceCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ParamountCommerceCredentials | any) {
    if (!(value instanceof ParamountCommerceCredentials)) {
      value = new ParamountCommerceCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): ParamountCommerceSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): ParamountCommerceSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | ParamountCommerceSettings | any) {
    if (value !== null && !(value instanceof ParamountCommerceSettings)) {
      value = new ParamountCommerceSettings(value);
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
