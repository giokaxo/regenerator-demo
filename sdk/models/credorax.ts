import CredoraxCredentials from '../models/credorax-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Credorax extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Credorax',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): CredoraxCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CredoraxCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CredoraxCredentials | any) {
    if (!(value instanceof CredoraxCredentials)) {
      value = new CredoraxCredentials(value);
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
