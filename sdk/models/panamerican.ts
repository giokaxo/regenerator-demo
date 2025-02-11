import PanamericanCredentials from '../models/panamerican-credentials';
import PanamericanSettings from '../models/panamerican-settings';
import GatewayAccount from '../models/gateway-account';

export default class Panamerican extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Panamerican',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): PanamericanCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PanamericanCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PanamericanCredentials | any) {
    if (!(value instanceof PanamericanCredentials)) {
      value = new PanamericanCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): PanamericanSettings {
    return this._fields['settings'];
  }
  
  getSettings(): PanamericanSettings {
      return this._fields['settings'];
  }

  setSettings(value: PanamericanSettings | any) {
    if (!(value instanceof PanamericanSettings)) {
      value = new PanamericanSettings(value);
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
