import KhelocardCredentials from '../models/khelocard-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Khelocard extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Khelocard',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): KhelocardCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): KhelocardCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: KhelocardCredentials | any) {
    if (!(value instanceof KhelocardCredentials)) {
      value = new KhelocardCredentials(value);
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
