import BVNKCredentials from '../models/bvnk-credentials';
import BVNKSettings from '../models/bvnk-settings';
import GatewayAccount from '../models/gateway-account';

export default class BVNK extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'BVNK',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): BVNKCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): BVNKCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: BVNKCredentials | any) {
    if (!(value instanceof BVNKCredentials)) {
      value = new BVNKCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): BVNKSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): BVNKSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | BVNKSettings | any) {
    if (value !== null && !(value instanceof BVNKSettings)) {
      value = new BVNKSettings(value);
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
