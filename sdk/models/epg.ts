import EPGCredentials from '../models/epg-credentials';
import GatewayAccount from '../models/gateway-account';

export default class EPG extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'EPG',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): EPGCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): EPGCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: EPGCredentials | any) {
    if (!(value instanceof EPGCredentials)) {
      value = new EPGCredentials(value);
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
