import Wallet88Credentials from '../models/wallet-88-credentials';
import Wallet88Settings from '../models/wallet-88-settings';
import GatewayAccount from '../models/gateway-account';

export default class Wallet88 extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Wallet88',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): Wallet88Credentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): Wallet88Credentials {
      return this._fields['credentials'];
  }

  setCredentials(value: Wallet88Credentials | any) {
    if (!(value instanceof Wallet88Credentials)) {
      value = new Wallet88Credentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): Wallet88Settings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): Wallet88Settings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | Wallet88Settings | any) {
    if (value !== null && !(value instanceof Wallet88Settings)) {
      value = new Wallet88Settings(value);
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
