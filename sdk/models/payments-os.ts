import PaymentsOSCredentials from '../models/payments-os-credentials';
import ThreeDSecureIO3dsServer from '../models/three-d-secure-io-3-ds-server';
import GatewayAccount from '../models/gateway-account';

export default class PaymentsOS extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'PaymentsOS',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'threeDSecureServer')) {
      this.setThreeDSecureServer(data['threeDSecureServer']);
    }
  }


  get credentials(): PaymentsOSCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PaymentsOSCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PaymentsOSCredentials | any) {
    if (!(value instanceof PaymentsOSCredentials)) {
      value = new PaymentsOSCredentials(value);
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentials')) {
      data['credentials'] = this['credentials'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'threeDSecureServer')) {
      data['threeDSecureServer'] = this['threeDSecureServer']?.jsonSerialize() ?? null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
