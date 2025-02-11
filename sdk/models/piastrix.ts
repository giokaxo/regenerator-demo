import PiastrixCredentials from '../models/piastrix-credentials';
import PiastrixSettings from '../models/piastrix-settings';
import GatewayAccount from '../models/gateway-account';

export default class Piastrix extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Piastrix',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): PiastrixCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PiastrixCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PiastrixCredentials | any) {
    if (!(value instanceof PiastrixCredentials)) {
      value = new PiastrixCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): PiastrixSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): PiastrixSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | PiastrixSettings | any) {
    if (value !== null && !(value instanceof PiastrixSettings)) {
      value = new PiastrixSettings(value);
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
