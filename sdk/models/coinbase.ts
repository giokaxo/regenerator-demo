import CoinbaseCredentials from '../models/coinbase-credentials';
import CoinbaseSettings from '../models/coinbase-settings';
import GatewayAccount from '../models/gateway-account';

export default class Coinbase extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Coinbase',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): CoinbaseCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CoinbaseCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CoinbaseCredentials | any) {
    if (!(value instanceof CoinbaseCredentials)) {
      value = new CoinbaseCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): CoinbaseSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): CoinbaseSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | CoinbaseSettings | any) {
    if (value !== null && !(value instanceof CoinbaseSettings)) {
      value = new CoinbaseSettings(value);
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
