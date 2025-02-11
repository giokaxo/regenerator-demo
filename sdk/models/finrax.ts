import FinraxCredentials from '../models/finrax-credentials';
import FinraxSettings from '../models/finrax-settings';
import GatewayAccount from '../models/gateway-account';

export default class Finrax extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Finrax',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): FinraxCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): FinraxCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: FinraxCredentials | any) {
    if (!(value instanceof FinraxCredentials)) {
      value = new FinraxCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): FinraxSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): FinraxSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | FinraxSettings | any) {
    if (value !== null && !(value instanceof FinraxSettings)) {
      value = new FinraxSettings(value);
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
