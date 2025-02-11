import DLocalCredentials from '../models/d-local-credentials';
import DLocalSettings from '../models/d-local-settings';
import GatewayAccount from '../models/gateway-account';

export default class DLocal extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'dLocal',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): DLocalCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): DLocalCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: DLocalCredentials | any) {
    if (!(value instanceof DLocalCredentials)) {
      value = new DLocalCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): DLocalSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): DLocalSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | DLocalSettings | any) {
    if (value !== null && !(value instanceof DLocalSettings)) {
      value = new DLocalSettings(value);
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
