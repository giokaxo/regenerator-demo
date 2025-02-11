
export default class OrganizationSettingsBilling {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'pendingOrderTtl')) {
      this.setPendingOrderTtl(data['pendingOrderTtl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'orderDelinquencyPeriod')) {
      this.setOrderDelinquencyPeriod(data['orderDelinquencyPeriod']);
    }
  }


  get pendingOrderTtl(): string | null {
    return this._fields['pendingOrderTtl'] ?? null;
  }
  
  getPendingOrderTtl(): string | null {
      return this._fields['pendingOrderTtl'] ?? null;
  }

  setPendingOrderTtl(value: null | string) {
    this._fields['pendingOrderTtl'] = value;

    return this;
  }

  get orderDelinquencyPeriod(): string | null {
    return this._fields['orderDelinquencyPeriod'] ?? null;
  }
  
  getOrderDelinquencyPeriod(): string | null {
      return this._fields['orderDelinquencyPeriod'] ?? null;
  }

  setOrderDelinquencyPeriod(value: null | string) {
    this._fields['orderDelinquencyPeriod'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'pendingOrderTtl')) {
      data['pendingOrderTtl'] = this['pendingOrderTtl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'orderDelinquencyPeriod')) {
      data['orderDelinquencyPeriod'] = this['orderDelinquencyPeriod'];
    }

    return data;
  }
}
