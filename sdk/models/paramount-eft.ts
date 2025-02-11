import ParamountEftCredentials from '../models/paramount-eft-credentials';
import GatewayAccount from '../models/gateway-account';

export default class ParamountEft extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'ParamountEft',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): ParamountEftCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ParamountEftCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ParamountEftCredentials | any) {
    if (!(value instanceof ParamountEftCredentials)) {
      value = new ParamountEftCredentials(value);
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
