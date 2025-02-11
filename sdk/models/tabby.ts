import TabbyCredentials from '../models/tabby-credentials';
import TabbySettings from '../models/tabby-settings';
import GatewayAccount from '../models/gateway-account';

export default class Tabby extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Tabby',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): TabbyCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): TabbyCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: TabbyCredentials | any) {
    if (!(value instanceof TabbyCredentials)) {
      value = new TabbyCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): TabbySettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): TabbySettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | TabbySettings | any) {
    if (value !== null && !(value instanceof TabbySettings)) {
      value = new TabbySettings(value);
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
