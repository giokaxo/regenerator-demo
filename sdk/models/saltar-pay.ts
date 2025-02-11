import SaltarPayCredentials from '../models/saltar-pay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class SaltarPay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'SaltarPay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): SaltarPayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): SaltarPayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: SaltarPayCredentials | any) {
    if (!(value instanceof SaltarPayCredentials)) {
      value = new SaltarPayCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentials')) {
      data['credentials'] = this['credentials'].jsonSerialize();
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
