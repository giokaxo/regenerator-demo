import CoinGateCredentials from '../models/coin-gate-credentials';
import CoinGateSettings from '../models/coin-gate-settings';
import GatewayAccount from '../models/gateway-account';

export default class CoinGate extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'CoinGate',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): CoinGateCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CoinGateCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CoinGateCredentials | any) {
    if (!(value instanceof CoinGateCredentials)) {
      value = new CoinGateCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): CoinGateSettings {
    return this._fields['settings'];
  }
  
  getSettings(): CoinGateSettings {
      return this._fields['settings'];
  }

  setSettings(value: CoinGateSettings | any) {
    if (!(value instanceof CoinGateSettings)) {
      value = new CoinGateSettings(value);
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
      data['settings'] = this['settings'].jsonSerialize();
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
