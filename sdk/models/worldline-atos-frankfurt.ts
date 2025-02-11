import ThreeDSecureIO3dsServer from '../models/three-d-secure-io-3-ds-server';
import WorldlineAtosFrankfurtCredentials from '../models/worldline-atos-frankfurt-credentials';
import WorldlineAtosFrankfurtSettings from '../models/worldline-atos-frankfurt-settings';
import GatewayAccount from '../models/gateway-account';

export default class WorldlineAtosFrankfurt extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'WorldlineAtosFrankfurt',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'threeDSecureServer')) {
      this.setThreeDSecureServer(data['threeDSecureServer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get threeDSecureServer(): ThreeDSecureIO3dsServer | null {
    return this._fields['threeDSecureServer'] ?? null;
  }
  
  getThreeDSecureServer(): ThreeDSecureIO3dsServer | null {
      return this._fields['threeDSecureServer'] ?? null;
  }

  setThreeDSecureServer(value: null | ThreeDSecureIO3dsServer | any) {
    if (value !== null && !(value instanceof ThreeDSecureIO3dsServer)) {
      value = new ThreeDSecureIO3dsServer(value);
    }

    this._fields['threeDSecureServer'] = value;

    return this;
  }

  get credentials(): WorldlineAtosFrankfurtCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): WorldlineAtosFrankfurtCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: WorldlineAtosFrankfurtCredentials | any) {
    if (!(value instanceof WorldlineAtosFrankfurtCredentials)) {
      value = new WorldlineAtosFrankfurtCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): WorldlineAtosFrankfurtSettings {
    return this._fields['settings'];
  }
  
  getSettings(): WorldlineAtosFrankfurtSettings {
      return this._fields['settings'];
  }

  setSettings(value: WorldlineAtosFrankfurtSettings | any) {
    if (!(value instanceof WorldlineAtosFrankfurtSettings)) {
      value = new WorldlineAtosFrankfurtSettings(value);
    }

    this._fields['settings'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'threeDSecureServer')) {
      data['threeDSecureServer'] = this['threeDSecureServer']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentials')) {
      data['credentials'] = this['credentials'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings'].jsonSerialize();
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
