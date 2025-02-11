import Pay4FunCredentials from '../models/pay-4-fun-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Pay4Fun extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Pay4Fun',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): Pay4FunCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): Pay4FunCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: Pay4FunCredentials | any) {
    if (!(value instanceof Pay4FunCredentials)) {
      value = new Pay4FunCredentials(value);
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
