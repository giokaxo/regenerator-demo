import ChaseCredentials from '../models/chase-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Chase extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Chase',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): ChaseCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ChaseCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ChaseCredentials | any) {
    if (!(value instanceof ChaseCredentials)) {
      value = new ChaseCredentials(value);
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
