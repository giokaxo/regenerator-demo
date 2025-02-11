import PayperCredentials from '../models/payper-credentials';
import PayperSettings from '../models/payper-settings';
import GatewayAccount from '../models/gateway-account';

export default class Payper extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Payper',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): PayperCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PayperCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PayperCredentials | any) {
    if (!(value instanceof PayperCredentials)) {
      value = new PayperCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): PayperSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): PayperSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | PayperSettings | any) {
    if (value !== null && !(value instanceof PayperSettings)) {
      value = new PayperSettings(value);
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
