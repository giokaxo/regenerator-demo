import CryptonatorCredentials from '../models/cryptonator-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Cryptonator extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Cryptonator',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): CryptonatorCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CryptonatorCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CryptonatorCredentials | any) {
    if (!(value instanceof CryptonatorCredentials)) {
      value = new CryptonatorCredentials(value);
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
