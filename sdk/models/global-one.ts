import GlobalOneCredentials from '../models/global-one-credentials';
import GatewayAccount from '../models/gateway-account';

export default class GlobalOne extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'GlobalOne',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): GlobalOneCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): GlobalOneCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: GlobalOneCredentials | any) {
    if (!(value instanceof GlobalOneCredentials)) {
      value = new GlobalOneCredentials(value);
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
