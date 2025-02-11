import CheckoutComCredentials from '../models/checkout-com-credentials';
import CheckoutComSettings from '../models/checkout-com-settings';
import ThreeDSecureIO3dsServer from '../models/three-d-secure-io-3-ds-server';
import GatewayAccount from '../models/gateway-account';

export default class CheckoutCom extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'CheckoutCom',
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


  get credentials(): CheckoutComCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CheckoutComCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CheckoutComCredentials | any) {
    if (!(value instanceof CheckoutComCredentials)) {
      value = new CheckoutComCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): CheckoutComSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): CheckoutComSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | CheckoutComSettings | any) {
    if (value !== null && !(value instanceof CheckoutComSettings)) {
      value = new CheckoutComSettings(value);
    }

    this._fields['settings'] = value;

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
