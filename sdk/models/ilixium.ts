import IlixiumCredentials from '../models/ilixium-credentials';
import IlixiumSettings from '../models/ilixium-settings';
import IlixiumThreeDSecureServer from '../models/ilixium-three-d-secure-server';
import GatewayAccount from '../models/gateway-account';

export default class Ilixium extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Ilixium',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'threeDSecureServer')) {
      this.setThreeDSecureServer(data['threeDSecureServer']);
    }
  }


  get credentials(): IlixiumCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): IlixiumCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: IlixiumCredentials | any) {
    if (!(value instanceof IlixiumCredentials)) {
      value = new IlixiumCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): IlixiumSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): IlixiumSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | IlixiumSettings | any) {
    if (value !== null && !(value instanceof IlixiumSettings)) {
      value = new IlixiumSettings(value);
    }

    this._fields['settings'] = value;

    return this;
  }

  get threeDSecureServer(): IlixiumThreeDSecureServer | null {
    return this._fields['threeDSecureServer'] ?? null;
  }
  
  getThreeDSecureServer(): IlixiumThreeDSecureServer | null {
      return this._fields['threeDSecureServer'] ?? null;
  }

  setThreeDSecureServer(value: null | IlixiumThreeDSecureServer | any) {
    if (value !== null && !(value instanceof IlixiumThreeDSecureServer)) {
      value = new IlixiumThreeDSecureServer(value);
    }

    this._fields['threeDSecureServer'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'threeDSecureServer')) {
      data['threeDSecureServer'] = this['threeDSecureServer']?.jsonSerialize() ?? null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
