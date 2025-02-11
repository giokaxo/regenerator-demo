import PagaditoCredentials from '../models/pagadito-credentials';
import PagaditoSettings from '../models/pagadito-settings';
import GatewayAccount from '../models/gateway-account';

export default class Pagadito extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Pagadito',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): PagaditoCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PagaditoCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PagaditoCredentials | any) {
    if (!(value instanceof PagaditoCredentials)) {
      value = new PagaditoCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): PagaditoSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): PagaditoSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | PagaditoSettings | any) {
    if (value !== null && !(value instanceof PagaditoSettings)) {
      value = new PagaditoSettings(value);
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
