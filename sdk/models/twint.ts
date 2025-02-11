import TWINTCredentials from '../models/twint-credentials';
import TWINTSettings from '../models/twint-settings';
import GatewayAccount from '../models/gateway-account';

export default class TWINT extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'TWINT',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): TWINTCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): TWINTCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: TWINTCredentials | any) {
    if (!(value instanceof TWINTCredentials)) {
      value = new TWINTCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): TWINTSettings {
    return this._fields['settings'];
  }
  
  getSettings(): TWINTSettings {
      return this._fields['settings'];
  }

  setSettings(value: TWINTSettings | any) {
    if (!(value instanceof TWINTSettings)) {
      value = new TWINTSettings(value);
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
