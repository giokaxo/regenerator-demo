import StripeCredentials from '../models/stripe-credentials';
import StripeSettings from '../models/stripe-settings';
import StripeThreeDSecureServer from '../models/stripe-three-d-secure-server';
import GatewayAccount from '../models/gateway-account';

export default class Stripe extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Stripe',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'threeDSecureServer')) {
      this.setThreeDSecureServer(data['threeDSecureServer']);
    }
  }


  get credentials(): StripeCredentials | null {
    return this._fields['credentials'] ?? null;
  }
  
  getCredentials(): StripeCredentials | null {
      return this._fields['credentials'] ?? null;
  }

  setCredentials(value: null | StripeCredentials | any) {
    if (value !== null && !(value instanceof StripeCredentials)) {
      value = new StripeCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): StripeSettings {
    return this._fields['settings'];
  }
  
  getSettings(): StripeSettings {
      return this._fields['settings'];
  }

  setSettings(value: StripeSettings | any) {
    if (!(value instanceof StripeSettings)) {
      value = new StripeSettings(value);
    }

    this._fields['settings'] = value;

    return this;
  }

  get threeDSecureServer(): StripeThreeDSecureServer | null {
    return this._fields['threeDSecureServer'] ?? null;
  }
  
  getThreeDSecureServer(): StripeThreeDSecureServer | null {
      return this._fields['threeDSecureServer'] ?? null;
  }

  setThreeDSecureServer(value: null | StripeThreeDSecureServer | any) {
    if (value !== null && !(value instanceof StripeThreeDSecureServer)) {
      value = new StripeThreeDSecureServer(value);
    }

    this._fields['threeDSecureServer'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentials')) {
      data['credentials'] = this['credentials']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'threeDSecureServer')) {
      data['threeDSecureServer'] = this['threeDSecureServer']?.jsonSerialize() ?? null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
