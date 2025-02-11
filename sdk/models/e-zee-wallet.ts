import EZeeWalletCredentials from '../models/e-zee-wallet-credentials';
import GatewayAccount from '../models/gateway-account';

export default class EZeeWallet extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'eZeeWallet',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): EZeeWalletCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): EZeeWalletCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: EZeeWalletCredentials | any) {
    if (!(value instanceof EZeeWalletCredentials)) {
      value = new EZeeWalletCredentials(value);
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
