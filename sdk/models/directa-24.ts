import Directa24Credentials from '../models/directa-24-credentials';
import Directa24Settings from '../models/directa-24-settings';
import GatewayAccount from '../models/gateway-account';

export default class Directa24 extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Directa24',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): Directa24Credentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): Directa24Credentials {
      return this._fields['credentials'];
  }

  setCredentials(value: Directa24Credentials | any) {
    if (!(value instanceof Directa24Credentials)) {
      value = new Directa24Credentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): Directa24Settings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): Directa24Settings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | Directa24Settings | any) {
    if (value !== null && !(value instanceof Directa24Settings)) {
      value = new Directa24Settings(value);
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
