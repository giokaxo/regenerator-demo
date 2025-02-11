import XPayCredentials from '../models/x-pay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class XPay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'XPay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): XPayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): XPayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: XPayCredentials | any) {
    if (!(value instanceof XPayCredentials)) {
      value = new XPayCredentials(value);
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
