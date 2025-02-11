import NordikCoinCredentials from '../models/nordik-coin-credentials';
import GatewayAccount from '../models/gateway-account';

export default class NordikCoin extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'NordikCoin',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): NordikCoinCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): NordikCoinCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: NordikCoinCredentials | any) {
    if (!(value instanceof NordikCoinCredentials)) {
      value = new NordikCoinCredentials(value);
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
