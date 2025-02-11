import MonoloCredentials from '../models/monolo-credentials';
import MonoloSettings from '../models/monolo-settings';
import GatewayAccount from '../models/gateway-account';

export default class Monolo extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Monolo',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): MonoloCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): MonoloCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: MonoloCredentials | any) {
    if (!(value instanceof MonoloCredentials)) {
      value = new MonoloCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): MonoloSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): MonoloSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | MonoloSettings | any) {
    if (value !== null && !(value instanceof MonoloSettings)) {
      value = new MonoloSettings(value);
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
