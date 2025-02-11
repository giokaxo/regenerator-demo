import SeamlessChexCredentials from '../models/seamless-chex-credentials';
import GatewayAccount from '../models/gateway-account';

export default class SeamlessChex extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'SeamlessChex',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): SeamlessChexCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): SeamlessChexCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: SeamlessChexCredentials | any) {
    if (!(value instanceof SeamlessChexCredentials)) {
      value = new SeamlessChexCredentials(value);
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
