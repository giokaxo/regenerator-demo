import SubscriptionOrOneTimeSaleItemUsageLimitsSoftLimit from '../models/subscription-or-one-time-sale-item-usage-limits-soft-limit';
import SubscriptionOrOneTimeSaleItemUsageLimitsHardLimit from '../models/subscription-or-one-time-sale-item-usage-limits-hard-limit';

export default class SubscriptionOrOneTimeSaleItemUsageLimits {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'softLimit')) {
      this.setSoftLimit(data['softLimit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hardLimit')) {
      this.setHardLimit(data['hardLimit']);
    }
  }


  get softLimit(): SubscriptionOrOneTimeSaleItemUsageLimitsSoftLimit | null {
    return this._fields['softLimit'] ?? null;
  }
  
  getSoftLimit(): SubscriptionOrOneTimeSaleItemUsageLimitsSoftLimit | null {
      return this._fields['softLimit'] ?? null;
  }

  setSoftLimit(value: null | SubscriptionOrOneTimeSaleItemUsageLimitsSoftLimit | any) {
    if (value !== null && !(value instanceof SubscriptionOrOneTimeSaleItemUsageLimitsSoftLimit)) {
      value = new SubscriptionOrOneTimeSaleItemUsageLimitsSoftLimit(value);
    }

    this._fields['softLimit'] = value;

    return this;
  }

  get hardLimit(): SubscriptionOrOneTimeSaleItemUsageLimitsHardLimit | null {
    return this._fields['hardLimit'] ?? null;
  }
  
  getHardLimit(): SubscriptionOrOneTimeSaleItemUsageLimitsHardLimit | null {
      return this._fields['hardLimit'] ?? null;
  }

  setHardLimit(value: null | SubscriptionOrOneTimeSaleItemUsageLimitsHardLimit | any) {
    if (value !== null && !(value instanceof SubscriptionOrOneTimeSaleItemUsageLimitsHardLimit)) {
      value = new SubscriptionOrOneTimeSaleItemUsageLimitsHardLimit(value);
    }

    this._fields['hardLimit'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'softLimit')) {
      data['softLimit'] = this['softLimit']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hardLimit')) {
      data['hardLimit'] = this['hardLimit']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
