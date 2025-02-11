import WalpayCredentials from '../models/walpay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Walpay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Walpay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): WalpayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): WalpayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: WalpayCredentials | any) {
    if (!(value instanceof WalpayCredentials)) {
      value = new WalpayCredentials(value);
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
