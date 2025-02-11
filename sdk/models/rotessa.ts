import RotessaCredentials from '../models/rotessa-credentials';
import RotessaSettings from '../models/rotessa-settings';
import GatewayAccount from '../models/gateway-account';

export default class Rotessa extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Rotessa',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): RotessaCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): RotessaCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: RotessaCredentials | any) {
    if (!(value instanceof RotessaCredentials)) {
      value = new RotessaCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): RotessaSettings {
    return this._fields['settings'];
  }
  
  getSettings(): RotessaSettings {
      return this._fields['settings'];
  }

  setSettings(value: RotessaSettings | any) {
    if (!(value instanceof RotessaSettings)) {
      value = new RotessaSettings(value);
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
      data['settings'] = this['settings'].jsonSerialize();
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
