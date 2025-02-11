import CircleCredentials from '../models/circle-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Circle extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Circle',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): CircleCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CircleCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CircleCredentials | any) {
    if (!(value instanceof CircleCredentials)) {
      value = new CircleCredentials(value);
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
