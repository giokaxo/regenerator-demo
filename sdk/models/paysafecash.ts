import PaysafecashCredentials from '../models/paysafecash-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Paysafecash extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Paysafecash',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): PaysafecashCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PaysafecashCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PaysafecashCredentials | any) {
    if (!(value instanceof PaysafecashCredentials)) {
      value = new PaysafecashCredentials(value);
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
