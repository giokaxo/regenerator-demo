import TelrCredentials from '../models/telr-credentials';
import TelrSettings from '../models/telr-settings';
import GatewayAccount from '../models/gateway-account';

export default class Telr extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Telr',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): TelrCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): TelrCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: TelrCredentials | any) {
    if (!(value instanceof TelrCredentials)) {
      value = new TelrCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): TelrSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): TelrSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | TelrSettings | any) {
    if (value !== null && !(value instanceof TelrSettings)) {
      value = new TelrSettings(value);
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
