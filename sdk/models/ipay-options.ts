import IpayOptionsCredentials from '../models/ipay-options-credentials';
import IpayOptionsSettings from '../models/ipay-options-settings';
import GatewayAccount from '../models/gateway-account';

export default class IpayOptions extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'IpayOptions',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): IpayOptionsCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): IpayOptionsCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: IpayOptionsCredentials | any) {
    if (!(value instanceof IpayOptionsCredentials)) {
      value = new IpayOptionsCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): IpayOptionsSettings {
    return this._fields['settings'];
  }
  
  getSettings(): IpayOptionsSettings {
      return this._fields['settings'];
  }

  setSettings(value: IpayOptionsSettings | any) {
    if (!(value instanceof IpayOptionsSettings)) {
      value = new IpayOptionsSettings(value);
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
