import MiFinityCredentials from '../models/mi-finity-credentials';
import GatewayAccount from '../models/gateway-account';

export default class MiFinity extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'MiFinity',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): MiFinityCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): MiFinityCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: MiFinityCredentials | any) {
    if (!(value instanceof MiFinityCredentials)) {
      value = new MiFinityCredentials(value);
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
