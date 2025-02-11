import EcoPayzCredentials from '../models/eco-payz-credentials';
import EcoPayzSettings from '../models/eco-payz-settings';
import GatewayAccount from '../models/gateway-account';

export default class EcoPayz extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'ecoPayz',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): EcoPayzCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): EcoPayzCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: EcoPayzCredentials | any) {
    if (!(value instanceof EcoPayzCredentials)) {
      value = new EcoPayzCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): EcoPayzSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): EcoPayzSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | EcoPayzSettings | any) {
    if (value !== null && !(value instanceof EcoPayzSettings)) {
      value = new EcoPayzSettings(value);
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
