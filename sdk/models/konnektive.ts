import KonnektiveCredentials from '../models/konnektive-credentials';
import KonnektiveSettings from '../models/konnektive-settings';
import GatewayAccount from '../models/gateway-account';

export default class Konnektive extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Konnektive',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): KonnektiveCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): KonnektiveCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: KonnektiveCredentials | any) {
    if (!(value instanceof KonnektiveCredentials)) {
      value = new KonnektiveCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): KonnektiveSettings {
    return this._fields['settings'];
  }
  
  getSettings(): KonnektiveSettings {
      return this._fields['settings'];
  }

  setSettings(value: KonnektiveSettings | any) {
    if (!(value instanceof KonnektiveSettings)) {
      value = new KonnektiveSettings(value);
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
      data['settings'] = this['settings'].jsonSerialize();
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
