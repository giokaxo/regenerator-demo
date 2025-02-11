import MuchBetterCredentials from '../models/much-better-credentials';
import MuchBetterSettings from '../models/much-better-settings';
import GatewayAccount from '../models/gateway-account';

export default class MuchBetter extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'MuchBetter',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): MuchBetterCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): MuchBetterCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: MuchBetterCredentials | any) {
    if (!(value instanceof MuchBetterCredentials)) {
      value = new MuchBetterCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): MuchBetterSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): MuchBetterSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | MuchBetterSettings | any) {
    if (value !== null && !(value instanceof MuchBetterSettings)) {
      value = new MuchBetterSettings(value);
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
