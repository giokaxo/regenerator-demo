import INOVAPAYCredentials from '../models/inovapay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class INOVAPAY extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'INOVAPAY',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): INOVAPAYCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): INOVAPAYCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: INOVAPAYCredentials | any) {
    if (!(value instanceof INOVAPAYCredentials)) {
      value = new INOVAPAYCredentials(value);
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
