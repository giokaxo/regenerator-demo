import ZotapayCredentials from '../models/zotapay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Zotapay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Zotapay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): ZotapayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ZotapayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ZotapayCredentials | any) {
    if (!(value instanceof ZotapayCredentials)) {
      value = new ZotapayCredentials(value);
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
