import MyFatoorahCredentials from '../models/my-fatoorah-credentials';
import GatewayAccount from '../models/gateway-account';

export default class MyFatoorah extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'MyFatoorah',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): MyFatoorahCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): MyFatoorahCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: MyFatoorahCredentials | any) {
    if (!(value instanceof MyFatoorahCredentials)) {
      value = new MyFatoorahCredentials(value);
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
