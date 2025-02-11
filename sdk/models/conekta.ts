import ConektaCredentials from '../models/conekta-credentials';
import ConektaSettings from '../models/conekta-settings';
import GatewayAccount from '../models/gateway-account';

export default class Conekta extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Conekta',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): ConektaCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ConektaCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ConektaCredentials | any) {
    if (!(value instanceof ConektaCredentials)) {
      value = new ConektaCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): ConektaSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): ConektaSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | ConektaSettings | any) {
    if (value !== null && !(value instanceof ConektaSettings)) {
      value = new ConektaSettings(value);
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
