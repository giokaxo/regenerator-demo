import KlarnaCredentials from '../models/klarna-credentials';
import KlarnaSettings from '../models/klarna-settings';
import GatewayAccount from '../models/gateway-account';

export default class Klarna extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Klarna',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): KlarnaCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): KlarnaCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: KlarnaCredentials | any) {
    if (!(value instanceof KlarnaCredentials)) {
      value = new KlarnaCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): KlarnaSettings {
    return this._fields['settings'];
  }
  
  getSettings(): KlarnaSettings {
      return this._fields['settings'];
  }

  setSettings(value: KlarnaSettings | any) {
    if (!(value instanceof KlarnaSettings)) {
      value = new KlarnaSettings(value);
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
