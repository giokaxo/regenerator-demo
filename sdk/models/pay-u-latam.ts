import PayULatamCredentials from '../models/pay-u-latam-credentials';
import GatewayAccount from '../models/gateway-account';

export default class PayULatam extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'PayULatam',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): PayULatamCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PayULatamCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PayULatamCredentials | any) {
    if (!(value instanceof PayULatamCredentials)) {
      value = new PayULatamCredentials(value);
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
