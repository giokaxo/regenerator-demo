import MercadoPagoCredentials from '../models/mercado-pago-credentials';
import MercadoPagoSettings from '../models/mercado-pago-settings';
import GatewayAccount from '../models/gateway-account';

export default class MercadoPago extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'MercadoPago',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): MercadoPagoCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): MercadoPagoCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: MercadoPagoCredentials | any) {
    if (!(value instanceof MercadoPagoCredentials)) {
      value = new MercadoPagoCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): MercadoPagoSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): MercadoPagoSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | MercadoPagoSettings | any) {
    if (value !== null && !(value instanceof MercadoPagoSettings)) {
      value = new MercadoPagoSettings(value);
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
