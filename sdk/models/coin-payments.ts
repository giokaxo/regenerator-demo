import CoinPaymentsCredentials from '../models/coin-payments-credentials';
import CoinPaymentsSettings from '../models/coin-payments-settings';
import GatewayAccount from '../models/gateway-account';

export default class CoinPayments extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'CoinPayments',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): CoinPaymentsCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CoinPaymentsCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CoinPaymentsCredentials | any) {
    if (!(value instanceof CoinPaymentsCredentials)) {
      value = new CoinPaymentsCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): CoinPaymentsSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): CoinPaymentsSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | CoinPaymentsSettings | any) {
    if (value !== null && !(value instanceof CoinPaymentsSettings)) {
      value = new CoinPaymentsSettings(value);
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
