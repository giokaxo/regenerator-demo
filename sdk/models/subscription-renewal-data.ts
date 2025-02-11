
export default class SubscriptionRenewalData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'planId')) {
      this.setPlanId(data['planId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'allRenewalCount')) {
      this.setAllRenewalCount(data['allRenewalCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'allDunningCount')) {
      this.setAllDunningCount(data['allDunningCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'abandonedCount')) {
      this.setAbandonedCount(data['abandonedCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paidRenewalCount')) {
      this.setPaidRenewalCount(data['paidRenewalCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paidDunningCount')) {
      this.setPaidDunningCount(data['paidDunningCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'refundedRenewalCount')) {
      this.setRefundedRenewalCount(data['refundedRenewalCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'refundedDunningCount')) {
      this.setRefundedDunningCount(data['refundedDunningCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'chargebackRenewalCount')) {
      this.setChargebackRenewalCount(data['chargebackRenewalCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'chargebackDunningCount')) {
      this.setChargebackDunningCount(data['chargebackDunningCount']);
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

  get allRenewalCount(): number | null {
    return this._fields['allRenewalCount'] ?? null;
  }
  
  getAllRenewalCount(): number | null {
      return this._fields['allRenewalCount'] ?? null;
  }

  setAllRenewalCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['allRenewalCount'] = value;

    return this;
  }

  get allDunningCount(): number | null {
    return this._fields['allDunningCount'] ?? null;
  }
  
  getAllDunningCount(): number | null {
      return this._fields['allDunningCount'] ?? null;
  }

  setAllDunningCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['allDunningCount'] = value;

    return this;
  }

  get abandonedCount(): number | null {
    return this._fields['abandonedCount'] ?? null;
  }
  
  getAbandonedCount(): number | null {
      return this._fields['abandonedCount'] ?? null;
  }

  setAbandonedCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['abandonedCount'] = value;

    return this;
  }

  get paidRenewalCount(): number | null {
    return this._fields['paidRenewalCount'] ?? null;
  }
  
  getPaidRenewalCount(): number | null {
      return this._fields['paidRenewalCount'] ?? null;
  }

  setPaidRenewalCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['paidRenewalCount'] = value;

    return this;
  }

  get paidDunningCount(): number | null {
    return this._fields['paidDunningCount'] ?? null;
  }
  
  getPaidDunningCount(): number | null {
      return this._fields['paidDunningCount'] ?? null;
  }

  setPaidDunningCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['paidDunningCount'] = value;

    return this;
  }

  get refundedRenewalCount(): number | null {
    return this._fields['refundedRenewalCount'] ?? null;
  }
  
  getRefundedRenewalCount(): number | null {
      return this._fields['refundedRenewalCount'] ?? null;
  }

  setRefundedRenewalCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['refundedRenewalCount'] = value;

    return this;
  }

  get refundedDunningCount(): number | null {
    return this._fields['refundedDunningCount'] ?? null;
  }
  
  getRefundedDunningCount(): number | null {
      return this._fields['refundedDunningCount'] ?? null;
  }

  setRefundedDunningCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['refundedDunningCount'] = value;

    return this;
  }

  get chargebackRenewalCount(): number | null {
    return this._fields['chargebackRenewalCount'] ?? null;
  }
  
  getChargebackRenewalCount(): number | null {
      return this._fields['chargebackRenewalCount'] ?? null;
  }

  setChargebackRenewalCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['chargebackRenewalCount'] = value;

    return this;
  }

  get chargebackDunningCount(): number | null {
    return this._fields['chargebackDunningCount'] ?? null;
  }
  
  getChargebackDunningCount(): number | null {
      return this._fields['chargebackDunningCount'] ?? null;
  }

  setChargebackDunningCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['chargebackDunningCount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'planId')) {
      data['planId'] = this['planId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'allRenewalCount')) {
      data['allRenewalCount'] = this['allRenewalCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'allDunningCount')) {
      data['allDunningCount'] = this['allDunningCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'abandonedCount')) {
      data['abandonedCount'] = this['abandonedCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paidRenewalCount')) {
      data['paidRenewalCount'] = this['paidRenewalCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paidDunningCount')) {
      data['paidDunningCount'] = this['paidDunningCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'refundedRenewalCount')) {
      data['refundedRenewalCount'] = this['refundedRenewalCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'refundedDunningCount')) {
      data['refundedDunningCount'] = this['refundedDunningCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'chargebackRenewalCount')) {
      data['chargebackRenewalCount'] = this['chargebackRenewalCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'chargebackDunningCount')) {
      data['chargebackDunningCount'] = this['chargebackDunningCount'];
    }

    return data;
  }
}
