import ICEPAYCredentials from '../models/icepay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class ICEPAY extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'ICEPAY',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): ICEPAYCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ICEPAYCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ICEPAYCredentials | any) {
    if (!(value instanceof ICEPAYCredentials)) {
      value = new ICEPAYCredentials(value);
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
