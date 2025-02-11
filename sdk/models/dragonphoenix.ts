import DragonphoenixCredentials from '../models/dragonphoenix-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Dragonphoenix extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Dragonphoenix',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): DragonphoenixCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): DragonphoenixCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: DragonphoenixCredentials | any) {
    if (!(value instanceof DragonphoenixCredentials)) {
      value = new DragonphoenixCredentials(value);
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
