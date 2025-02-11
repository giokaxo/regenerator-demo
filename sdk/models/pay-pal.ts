import PayPalCredentials from '../models/pay-pal-credentials';
import PayPalSettings from '../models/pay-pal-settings';
import GatewayAccount from '../models/gateway-account';

export default class PayPal extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'PayPal',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): PayPalCredentials | null {
    return this._fields['credentials'] ?? null;
  }
  
  getCredentials(): PayPalCredentials | null {
      return this._fields['credentials'] ?? null;
  }

  setCredentials(value: null | PayPalCredentials | any) {
    if (value !== null && !(value instanceof PayPalCredentials)) {
      value = new PayPalCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): PayPalSettings {
    return this._fields['settings'];
  }
  
  getSettings(): PayPalSettings {
      return this._fields['settings'];
  }

  setSettings(value: PayPalSettings | any) {
    if (!(value instanceof PayPalSettings)) {
      value = new PayPalSettings(value);
    }

    this._fields['settings'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentials')) {
      data['credentials'] = this['credentials']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings'].jsonSerialize();
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
