import EMerchantPayCredentials from '../models/e-merchant-pay-credentials';
import EMerchantPaySettings from '../models/e-merchant-pay-settings';
import ThreeDSecureIO3dsServer from '../models/three-d-secure-io-3-ds-server';
import GatewayAccount from '../models/gateway-account';

export default class EMerchantPay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'eMerchantPay',
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


  get credentials(): EMerchantPayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): EMerchantPayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: EMerchantPayCredentials | any) {
    if (!(value instanceof EMerchantPayCredentials)) {
      value = new EMerchantPayCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): EMerchantPaySettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): EMerchantPaySettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | EMerchantPaySettings | any) {
    if (value !== null && !(value instanceof EMerchantPaySettings)) {
      value = new EMerchantPaySettings(value);
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
