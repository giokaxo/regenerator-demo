import PlugnpayCredentials from '../models/plugnpay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Plugnpay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Plugnpay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): PlugnpayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PlugnpayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PlugnpayCredentials | any) {
    if (!(value instanceof PlugnpayCredentials)) {
      value = new PlugnpayCredentials(value);
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
