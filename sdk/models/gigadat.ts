import GigadatCredentials from '../models/gigadat-credentials';
import GigadatSettings from '../models/gigadat-settings';
import GatewayAccount from '../models/gateway-account';

export default class Gigadat extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Gigadat',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): GigadatCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): GigadatCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: GigadatCredentials | any) {
    if (!(value instanceof GigadatCredentials)) {
      value = new GigadatCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): GigadatSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): GigadatSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | GigadatSettings | any) {
    if (value !== null && !(value instanceof GigadatSettings)) {
      value = new GigadatSettings(value);
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
