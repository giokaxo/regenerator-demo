import BuckarooCredentials from '../models/buckaroo-credentials';
import BuckarooSettings from '../models/buckaroo-settings';
import GatewayAccount from '../models/gateway-account';

export default class Buckaroo extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Buckaroo',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): BuckarooCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): BuckarooCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: BuckarooCredentials | any) {
    if (!(value instanceof BuckarooCredentials)) {
      value = new BuckarooCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): BuckarooSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): BuckarooSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | BuckarooSettings | any) {
    if (value !== null && !(value instanceof BuckarooSettings)) {
      value = new BuckarooSettings(value);
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
