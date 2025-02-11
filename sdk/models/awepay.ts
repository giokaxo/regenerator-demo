import AwepayCredentials from '../models/awepay-credentials';
import AwepaySettings from '../models/awepay-settings';
import GatewayAccount from '../models/gateway-account';

export default class Awepay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Awepay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): AwepayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): AwepayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: AwepayCredentials | any) {
    if (!(value instanceof AwepayCredentials)) {
      value = new AwepayCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): AwepaySettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): AwepaySettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | AwepaySettings | any) {
    if (value !== null && !(value instanceof AwepaySettings)) {
      value = new AwepaySettings(value);
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
