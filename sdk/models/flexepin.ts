import FlexepinCredentials from '../models/flexepin-credentials';
import FlexepinSettings from '../models/flexepin-settings';
import GatewayAccount from '../models/gateway-account';

export default class Flexepin extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Flexepin',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): FlexepinCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): FlexepinCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: FlexepinCredentials | any) {
    if (!(value instanceof FlexepinCredentials)) {
      value = new FlexepinCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): FlexepinSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): FlexepinSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | FlexepinSettings | any) {
    if (value !== null && !(value instanceof FlexepinSettings)) {
      value = new FlexepinSettings(value);
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
