import Gate2wayCredentials from '../models/gate-2-way-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Gate2way extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'gate2way',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): Gate2wayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): Gate2wayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: Gate2wayCredentials | any) {
    if (!(value instanceof Gate2wayCredentials)) {
      value = new Gate2wayCredentials(value);
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
