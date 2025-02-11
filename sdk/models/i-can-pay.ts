import ICanPayCredentials from '../models/i-can-pay-credentials';
import ICanPaySettings from '../models/i-can-pay-settings';
import GatewayAccount from '../models/gateway-account';

export default class ICanPay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'iCanPay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): ICanPayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ICanPayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ICanPayCredentials | any) {
    if (!(value instanceof ICanPayCredentials)) {
      value = new ICanPayCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): ICanPaySettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): ICanPaySettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | ICanPaySettings | any) {
    if (value !== null && !(value instanceof ICanPaySettings)) {
      value = new ICanPaySettings(value);
    }

    this._fields['settings'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentials')) {
      data['credentials'] = this['credentials'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings']?.jsonSerialize() ?? null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
