import ParamountInteracCredentials from '../models/paramount-interac-credentials';
import ParamountInteracSettings from '../models/paramount-interac-settings';
import GatewayAccount from '../models/gateway-account';

export default class ParamountInterac extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'ParamountInterac',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): ParamountInteracCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ParamountInteracCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ParamountInteracCredentials | any) {
    if (!(value instanceof ParamountInteracCredentials)) {
      value = new ParamountInteracCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): ParamountInteracSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): ParamountInteracSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | ParamountInteracSettings | any) {
    if (value !== null && !(value instanceof ParamountInteracSettings)) {
      value = new ParamountInteracSettings(value);
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
