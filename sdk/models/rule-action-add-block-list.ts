import RuleAction from '../models/rule-action';

export default class RuleActionAddBlockList extends RuleAction {
  TYPE_CUSTOMER_ID = 'customer-id';

  TYPE_EMAIL = 'email';

  TYPE_FINGERPRINT = 'fingerprint';

  TYPE_IP_ADDRESS = 'ip-address';

  TYPE_PAYMENT_CARD = 'payment-card';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'blocklist',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ttl')) {
      this.setTtl(data['ttl']);
    }
  }


  get type(): string {
    return this._fields['type'];
  }
  
  getType(): string {
      return this._fields['type'];
  }

  setType(value: string) {
    this._fields['type'] = value;

    return this;
  }

  get ttl(): number | null {
    return this._fields['ttl'] ?? null;
  }
  
  getTtl(): number | null {
      return this._fields['ttl'] ?? null;
  }

  setTtl(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['ttl'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ttl')) {
      data['ttl'] = this['ttl'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
