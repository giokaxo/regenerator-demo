import PayvisionCredentials from '../models/payvision-credentials';
import PayvisionSettings from '../models/payvision-settings';
import GatewayAccount from '../models/gateway-account';

export default class Payvision extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Payvision',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): PayvisionCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PayvisionCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PayvisionCredentials | any) {
    if (!(value instanceof PayvisionCredentials)) {
      value = new PayvisionCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): PayvisionSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): PayvisionSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | PayvisionSettings | any) {
    if (value !== null && !(value instanceof PayvisionSettings)) {
      value = new PayvisionSettings(value);
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
