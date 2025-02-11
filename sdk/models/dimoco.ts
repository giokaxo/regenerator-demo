import DimocoCredentials from '../models/dimoco-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Dimoco extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Dimoco',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): DimocoCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): DimocoCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: DimocoCredentials | any) {
    if (!(value instanceof DimocoCredentials)) {
      value = new DimocoCredentials(value);
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
