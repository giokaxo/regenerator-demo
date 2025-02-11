import PaymeroCredentials from '../models/paymero-credentials';
import PaymeroSettings from '../models/paymero-settings';
import GatewayAccount from '../models/gateway-account';

export default class Paymero extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Paymero',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): PaymeroCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PaymeroCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PaymeroCredentials | any) {
    if (!(value instanceof PaymeroCredentials)) {
      value = new PaymeroCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): PaymeroSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): PaymeroSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | PaymeroSettings | any) {
    if (value !== null && !(value instanceof PaymeroSettings)) {
      value = new PaymeroSettings(value);
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
