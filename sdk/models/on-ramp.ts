import OnRampCredentials from '../models/on-ramp-credentials';
import OnRampSettings from '../models/on-ramp-settings';
import GatewayAccount from '../models/gateway-account';

export default class OnRamp extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'OnRamp',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): OnRampCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): OnRampCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: OnRampCredentials | any) {
    if (!(value instanceof OnRampCredentials)) {
      value = new OnRampCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): OnRampSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): OnRampSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | OnRampSettings | any) {
    if (value !== null && !(value instanceof OnRampSettings)) {
      value = new OnRampSettings(value);
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
