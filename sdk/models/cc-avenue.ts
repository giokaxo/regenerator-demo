import CCAvenueCredentials from '../models/cc-avenue-credentials';
import CCAvenueSettings from '../models/cc-avenue-settings';
import GatewayAccount from '../models/gateway-account';

export default class CCAvenue extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'CCAvenue',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): CCAvenueCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CCAvenueCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CCAvenueCredentials | any) {
    if (!(value instanceof CCAvenueCredentials)) {
      value = new CCAvenueCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): CCAvenueSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): CCAvenueSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | CCAvenueSettings | any) {
    if (value !== null && !(value instanceof CCAvenueSettings)) {
      value = new CCAvenueSettings(value);
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
