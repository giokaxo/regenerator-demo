import ApcoPayCredentials from '../models/apco-pay-credentials';
import ApcoPaySettings from '../models/apco-pay-settings';
import GatewayAccount from '../models/gateway-account';

export default class ApcoPay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'ApcoPay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): ApcoPayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ApcoPayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ApcoPayCredentials | any) {
    if (!(value instanceof ApcoPayCredentials)) {
      value = new ApcoPayCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): ApcoPaySettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): ApcoPaySettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | ApcoPaySettings | any) {
    if (value !== null && !(value instanceof ApcoPaySettings)) {
      value = new ApcoPaySettings(value);
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
