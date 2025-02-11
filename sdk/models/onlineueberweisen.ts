import OnlineueberweisenCredentials from '../models/onlineueberweisen-credentials';
import OnlineueberweisenSettings from '../models/onlineueberweisen-settings';
import GatewayAccount from '../models/gateway-account';

export default class Onlineueberweisen extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Onlineueberweisen',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): OnlineueberweisenCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): OnlineueberweisenCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: OnlineueberweisenCredentials | any) {
    if (!(value instanceof OnlineueberweisenCredentials)) {
      value = new OnlineueberweisenCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): OnlineueberweisenSettings {
    return this._fields['settings'];
  }
  
  getSettings(): OnlineueberweisenSettings {
      return this._fields['settings'];
  }

  setSettings(value: OnlineueberweisenSettings | any) {
    if (!(value instanceof OnlineueberweisenSettings)) {
      value = new OnlineueberweisenSettings(value);
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
