import AirpayCredentials from '../models/airpay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Airpay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Airpay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): AirpayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): AirpayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: AirpayCredentials | any) {
    if (!(value instanceof AirpayCredentials)) {
      value = new AirpayCredentials(value);
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
