import OrbitalCredentials from '../models/orbital-credentials';
import OrbitalSettings from '../models/orbital-settings';
import GatewayAccount from '../models/gateway-account';

export default class Orbital extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Orbital',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): OrbitalCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): OrbitalCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: OrbitalCredentials | any) {
    if (!(value instanceof OrbitalCredentials)) {
      value = new OrbitalCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): OrbitalSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): OrbitalSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | OrbitalSettings | any) {
    if (value !== null && !(value instanceof OrbitalSettings)) {
      value = new OrbitalSettings(value);
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
