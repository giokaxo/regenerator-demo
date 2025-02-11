import WesternUnionCredentials from '../models/western-union-credentials';
import GatewayAccount from '../models/gateway-account';

export default class WesternUnion extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'WesternUnion',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): WesternUnionCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): WesternUnionCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: WesternUnionCredentials | any) {
    if (!(value instanceof WesternUnionCredentials)) {
      value = new WesternUnionCredentials(value);
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
