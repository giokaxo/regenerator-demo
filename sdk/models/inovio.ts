import InovioCredentials from '../models/inovio-credentials';
import InovioSettings from '../models/inovio-settings';
import GatewayAccount from '../models/gateway-account';

export default class Inovio extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Inovio',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): InovioCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): InovioCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: InovioCredentials | any) {
    if (!(value instanceof InovioCredentials)) {
      value = new InovioCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): InovioSettings {
    return this._fields['settings'];
  }
  
  getSettings(): InovioSettings {
      return this._fields['settings'];
  }

  setSettings(value: InovioSettings | any) {
    if (!(value instanceof InovioSettings)) {
      value = new InovioSettings(value);
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
