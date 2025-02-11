import JetonCredentials from '../models/jeton-credentials';
import JetonSettings from '../models/jeton-settings';
import GatewayAccount from '../models/gateway-account';

export default class Jeton extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Jeton',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): JetonCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): JetonCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: JetonCredentials | any) {
    if (!(value instanceof JetonCredentials)) {
      value = new JetonCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): JetonSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): JetonSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | JetonSettings | any) {
    if (value !== null && !(value instanceof JetonSettings)) {
      value = new JetonSettings(value);
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
