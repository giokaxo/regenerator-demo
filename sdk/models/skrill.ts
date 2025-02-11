import SkrillCredentials from '../models/skrill-credentials';
import SkrillSettings from '../models/skrill-settings';
import GatewayAccount from '../models/gateway-account';

export default class Skrill extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Skrill',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): SkrillCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): SkrillCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: SkrillCredentials | any) {
    if (!(value instanceof SkrillCredentials)) {
      value = new SkrillCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): SkrillSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): SkrillSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | SkrillSettings | any) {
    if (value !== null && !(value instanceof SkrillSettings)) {
      value = new SkrillSettings(value);
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
