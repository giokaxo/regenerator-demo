import ChillstockCredentials from '../models/chillstock-credentials';
import ChillstockSettings from '../models/chillstock-settings';
import GatewayAccount from '../models/gateway-account';

export default class Chillstock extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Chillstock',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): ChillstockCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ChillstockCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ChillstockCredentials | any) {
    if (!(value instanceof ChillstockCredentials)) {
      value = new ChillstockCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): ChillstockSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): ChillstockSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | ChillstockSettings | any) {
    if (value !== null && !(value instanceof ChillstockSettings)) {
      value = new ChillstockSettings(value);
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
