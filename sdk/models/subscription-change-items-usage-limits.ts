import SubscriptionChangeItemsUsageLimitsSoftLimit from '../models/subscription-change-items-usage-limits-soft-limit';
import SubscriptionChangeItemsUsageLimitsHardLimit from '../models/subscription-change-items-usage-limits-hard-limit';

export default class SubscriptionChangeItemsUsageLimits {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'softLimit')) {
      this.setSoftLimit(data['softLimit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hardLimit')) {
      this.setHardLimit(data['hardLimit']);
    }
  }


  get softLimit(): SubscriptionChangeItemsUsageLimitsSoftLimit | null {
    return this._fields['softLimit'] ?? null;
  }
  
  getSoftLimit(): SubscriptionChangeItemsUsageLimitsSoftLimit | null {
      return this._fields['softLimit'] ?? null;
  }

  setSoftLimit(value: null | SubscriptionChangeItemsUsageLimitsSoftLimit | any) {
    if (value !== null && !(value instanceof SubscriptionChangeItemsUsageLimitsSoftLimit)) {
      value = new SubscriptionChangeItemsUsageLimitsSoftLimit(value);
    }

    this._fields['softLimit'] = value;

    return this;
  }

  get hardLimit(): SubscriptionChangeItemsUsageLimitsHardLimit | null {
    return this._fields['hardLimit'] ?? null;
  }
  
  getHardLimit(): SubscriptionChangeItemsUsageLimitsHardLimit | null {
      return this._fields['hardLimit'] ?? null;
  }

  setHardLimit(value: null | SubscriptionChangeItemsUsageLimitsHardLimit | any) {
    if (value !== null && !(value instanceof SubscriptionChangeItemsUsageLimitsHardLimit)) {
      value = new SubscriptionChangeItemsUsageLimitsHardLimit(value);
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
