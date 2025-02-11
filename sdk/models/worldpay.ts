import WorldpayCredentials from '../models/worldpay-credentials';
import ThreeDSecureIO3dsServer from '../models/three-d-secure-io-3-ds-server';
import WorldpaySettings from '../models/worldpay-settings';
import GatewayAccount from '../models/gateway-account';

export default class Worldpay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Worldpay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'threeDSecureServer')) {
      this.setThreeDSecureServer(data['threeDSecureServer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): WorldpayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): WorldpayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: WorldpayCredentials | any) {
    if (!(value instanceof WorldpayCredentials)) {
      value = new WorldpayCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
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

  get settings(): WorldpaySettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): WorldpaySettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | WorldpaySettings | any) {
    if (value !== null && !(value instanceof WorldpaySettings)) {
      value = new WorldpaySettings(value);
    }

    this._fields['settings'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentials')) {
      data['credentials'] = this['credentials'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'threeDSecureServer')) {
      data['threeDSecureServer'] = this['threeDSecureServer']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings']?.jsonSerialize() ?? null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
