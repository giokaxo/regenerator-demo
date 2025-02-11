import STPMexicoCredentials from '../models/stp-mexico-credentials';
import GatewayAccount from '../models/gateway-account';

export default class STPMexico extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'STPMexico',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): STPMexicoCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): STPMexicoCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: STPMexicoCredentials | any) {
    if (!(value instanceof STPMexicoCredentials)) {
      value = new STPMexicoCredentials(value);
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
