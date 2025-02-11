import UPayCardCredentials from '../models/u-pay-card-credentials';
import UPayCardSettings from '../models/u-pay-card-settings';
import GatewayAccount from '../models/gateway-account';

export default class UPayCard extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'UPayCard',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): UPayCardCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): UPayCardCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: UPayCardCredentials | any) {
    if (!(value instanceof UPayCardCredentials)) {
      value = new UPayCardCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): UPayCardSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): UPayCardSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | UPayCardSettings | any) {
    if (value !== null && !(value instanceof UPayCardSettings)) {
      value = new UPayCardSettings(value);
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
