import CASHlibCredentials from '../models/cas-hlib-credentials';
import GatewayAccount from '../models/gateway-account';

export default class CASHlib extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'CASHlib',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): CASHlibCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CASHlibCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CASHlibCredentials | any) {
    if (!(value instanceof CASHlibCredentials)) {
      value = new CASHlibCredentials(value);
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
