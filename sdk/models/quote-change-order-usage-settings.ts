
export default class QuoteChangeOrderUsageSettings {
  POLICY_RESET = 'reset';

  POLICY_TRANSFER = 'transfer';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'planId')) {
      this.setPlanId(data['planId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'policy')) {
      this.setPolicy(data['policy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transferTo')) {
      this.setTransferTo(data['transferTo']);
    }
  }


  get planId(): string | null {
    return this._fields['planId'] ?? null;
  }
  
  getPlanId(): string | null {
      return this._fields['planId'] ?? null;
  }

  setPlanId(value: null | string) {
    this._fields['planId'] = value;

    return this;
  }

  get policy(): string | null {
    return this._fields['policy'] ?? null;
  }
  
  getPolicy(): string | null {
      return this._fields['policy'] ?? null;
  }

  setPolicy(value: null | string) {
    this._fields['policy'] = value;

    return this;
  }

  get transferTo(): string | null {
    return this._fields['transferTo'] ?? null;
  }
  
  getTransferTo(): string | null {
      return this._fields['transferTo'] ?? null;
  }

  setTransferTo(value: null | string) {
    this._fields['transferTo'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'planId')) {
      data['planId'] = this['planId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'policy')) {
      data['policy'] = this['policy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transferTo')) {
      data['transferTo'] = this['transferTo'];
    }

    return data;
  }
}
