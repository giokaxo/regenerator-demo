import PagsmileCredentials from '../models/pagsmile-credentials';
import PagsmileSettings from '../models/pagsmile-settings';
import GatewayAccount from '../models/gateway-account';

export default class Pagsmile extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Pagsmile',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): PagsmileCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PagsmileCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PagsmileCredentials | any) {
    if (!(value instanceof PagsmileCredentials)) {
      value = new PagsmileCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): PagsmileSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): PagsmileSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | PagsmileSettings | any) {
    if (value !== null && !(value instanceof PagsmileSettings)) {
      value = new PagsmileSettings(value);
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
