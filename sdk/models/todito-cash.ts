import ToditoCashCredentials from '../models/todito-cash-credentials';
import GatewayAccount from '../models/gateway-account';

export default class ToditoCash extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'ToditoCash',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): ToditoCashCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ToditoCashCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ToditoCashCredentials | any) {
    if (!(value instanceof ToditoCashCredentials)) {
      value = new ToditoCashCredentials(value);
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
