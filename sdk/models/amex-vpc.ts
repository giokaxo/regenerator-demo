import AmexVPCCredentials from '../models/amex-vpc-credentials';
import AmexVPCSettings from '../models/amex-vpc-settings';
import GatewayAccount from '../models/gateway-account';

export default class AmexVPC extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'AmexVPC',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): AmexVPCCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): AmexVPCCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: AmexVPCCredentials | any) {
    if (!(value instanceof AmexVPCCredentials)) {
      value = new AmexVPCCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): AmexVPCSettings {
    return this._fields['settings'];
  }
  
  getSettings(): AmexVPCSettings {
      return this._fields['settings'];
  }

  setSettings(value: AmexVPCSettings | any) {
    if (!(value instanceof AmexVPCSettings)) {
      value = new AmexVPCSettings(value);
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
