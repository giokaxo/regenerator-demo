import USAePayCredentials from '../models/us-ae-pay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class USAePay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'USAePay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): USAePayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): USAePayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: USAePayCredentials | any) {
    if (!(value instanceof USAePayCredentials)) {
      value = new USAePayCredentials(value);
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
