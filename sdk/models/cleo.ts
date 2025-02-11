import CleoCredentials from '../models/cleo-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Cleo extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Cleo',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): CleoCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CleoCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CleoCredentials | any) {
    if (!(value instanceof CleoCredentials)) {
      value = new CleoCredentials(value);
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
