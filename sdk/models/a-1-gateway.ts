import A1GatewayCredentials from '../models/a-1-gateway-credentials';
import GatewayAccount from '../models/gateway-account';

export default class A1Gateway extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'A1Gateway',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): A1GatewayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): A1GatewayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: A1GatewayCredentials | any) {
    if (!(value instanceof A1GatewayCredentials)) {
      value = new A1GatewayCredentials(value);
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
