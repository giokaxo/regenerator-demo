import NetellerCredentials from '../models/neteller-credentials';
import NetellerSettings from '../models/neteller-settings';
import GatewayAccount from '../models/gateway-account';

export default class Neteller extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Neteller',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): NetellerCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): NetellerCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: NetellerCredentials | any) {
    if (!(value instanceof NetellerCredentials)) {
      value = new NetellerCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): NetellerSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): NetellerSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | NetellerSettings | any) {
    if (value !== null && !(value instanceof NetellerSettings)) {
      value = new NetellerSettings(value);
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
