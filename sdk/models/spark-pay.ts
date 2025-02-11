import SparkPayCredentials from '../models/spark-pay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class SparkPay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'SparkPay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): SparkPayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): SparkPayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: SparkPayCredentials | any) {
    if (!(value instanceof SparkPayCredentials)) {
      value = new SparkPayCredentials(value);
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
