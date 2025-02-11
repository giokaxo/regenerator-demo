
export default class BVNKSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'payoutCurrency')) {
      this.setPayoutCurrency(data['payoutCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payoutNetwork')) {
      this.setPayoutNetwork(data['payoutNetwork']);
    }
  }


  get payoutCurrency(): string | null {
    return this._fields['payoutCurrency'] ?? null;
  }
  
  getPayoutCurrency(): string | null {
      return this._fields['payoutCurrency'] ?? null;
  }

  setPayoutCurrency(value: null | string) {
    this._fields['payoutCurrency'] = value;

    return this;
  }

  get payoutNetwork(): string | null {
    return this._fields['payoutNetwork'] ?? null;
  }
  
  getPayoutNetwork(): string | null {
      return this._fields['payoutNetwork'] ?? null;
  }

  setPayoutNetwork(value: null | string) {
    this._fields['payoutNetwork'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payoutCurrency')) {
      data['payoutCurrency'] = this['payoutCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payoutNetwork')) {
      data['payoutNetwork'] = this['payoutNetwork'];
    }

    return data;
  }
}
