import AsiaPaymentGatewayCredentials from '../models/asia-payment-gateway-credentials';
import AsiaPaymentGatewaySettings from '../models/asia-payment-gateway-settings';
import GatewayAccount from '../models/gateway-account';

export default class AsiaPaymentGateway extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'AsiaPaymentGateway',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): AsiaPaymentGatewayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): AsiaPaymentGatewayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: AsiaPaymentGatewayCredentials | any) {
    if (!(value instanceof AsiaPaymentGatewayCredentials)) {
      value = new AsiaPaymentGatewayCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): AsiaPaymentGatewaySettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): AsiaPaymentGatewaySettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | AsiaPaymentGatewaySettings | any) {
    if (value !== null && !(value instanceof AsiaPaymentGatewaySettings)) {
      value = new AsiaPaymentGatewaySettings(value);
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
