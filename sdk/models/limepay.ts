import LimepayCredentials from '../models/limepay-credentials';
import LimepaySettings from '../models/limepay-settings';
import GatewayAccount from '../models/gateway-account';

export default class Limepay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Limepay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): LimepayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): LimepayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: LimepayCredentials | any) {
    if (!(value instanceof LimepayCredentials)) {
      value = new LimepayCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): LimepaySettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): LimepaySettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | LimepaySettings | any) {
    if (value !== null && !(value instanceof LimepaySettings)) {
      value = new LimepaySettings(value);
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
