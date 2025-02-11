import Pin4PayCredentials from '../models/pin-4-pay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Pin4Pay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Pin4Pay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): Pin4PayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): Pin4PayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: Pin4PayCredentials | any) {
    if (!(value instanceof Pin4PayCredentials)) {
      value = new Pin4PayCredentials(value);
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
