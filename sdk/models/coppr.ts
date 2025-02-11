import CopprCredentials from '../models/coppr-credentials';
import CopprSettings from '../models/coppr-settings';
import GatewayAccount from '../models/gateway-account';

export default class Coppr extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Coppr',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): CopprCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CopprCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CopprCredentials | any) {
    if (!(value instanceof CopprCredentials)) {
      value = new CopprCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): CopprSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): CopprSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | CopprSettings | any) {
    if (value !== null && !(value instanceof CopprSettings)) {
      value = new CopprSettings(value);
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
