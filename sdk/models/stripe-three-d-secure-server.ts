
export default class StripeThreeDSecureServer {
  NAME_STRIPE3DS_SERVER = 'Stripe3dsServer';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'enforceThreeDSecure')) {
      this.setEnforceThreeDSecure(data['enforceThreeDSecure']);
    }
  }


  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get enforceThreeDSecure(): boolean | null {
    return this._fields['enforceThreeDSecure'] ?? null;
  }
  
  getEnforceThreeDSecure(): boolean | null {
      return this._fields['enforceThreeDSecure'] ?? null;
  }

  setEnforceThreeDSecure(value: null | boolean) {
    this._fields['enforceThreeDSecure'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enforceThreeDSecure')) {
      data['enforceThreeDSecure'] = this['enforceThreeDSecure'];
    }

    return data;
  }
}
