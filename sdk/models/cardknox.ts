import CardknoxCredentials from '../models/cardknox-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Cardknox extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Cardknox',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): CardknoxCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CardknoxCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CardknoxCredentials | any) {
    if (!(value instanceof CardknoxCredentials)) {
      value = new CardknoxCredentials(value);
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
