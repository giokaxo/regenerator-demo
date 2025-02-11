import PaymenTechnologiesCredentials from '../models/paymen-technologies-credentials';
import PaymenTechnologiesSettings from '../models/paymen-technologies-settings';
import GatewayAccount from '../models/gateway-account';

export default class PaymenTechnologies extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'PaymenTechnologies',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): PaymenTechnologiesCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PaymenTechnologiesCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PaymenTechnologiesCredentials | any) {
    if (!(value instanceof PaymenTechnologiesCredentials)) {
      value = new PaymenTechnologiesCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): PaymenTechnologiesSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): PaymenTechnologiesSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | PaymenTechnologiesSettings | any) {
    if (value !== null && !(value instanceof PaymenTechnologiesSettings)) {
      value = new PaymenTechnologiesSettings(value);
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
