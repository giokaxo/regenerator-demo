import QuoteReactivateOrderItemsUsageLimitsSoftLimit from '../models/quote-reactivate-order-items-usage-limits-soft-limit';
import QuoteReactivateOrderItemsUsageLimitsHardLimit from '../models/quote-reactivate-order-items-usage-limits-hard-limit';

export default class QuoteReactivateOrderItemsUsageLimits {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'softLimit')) {
      this.setSoftLimit(data['softLimit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hardLimit')) {
      this.setHardLimit(data['hardLimit']);
    }
  }


  get softLimit(): QuoteReactivateOrderItemsUsageLimitsSoftLimit | null {
    return this._fields['softLimit'] ?? null;
  }
  
  getSoftLimit(): QuoteReactivateOrderItemsUsageLimitsSoftLimit | null {
      return this._fields['softLimit'] ?? null;
  }

  setSoftLimit(value: null | QuoteReactivateOrderItemsUsageLimitsSoftLimit | any) {
    if (value !== null && !(value instanceof QuoteReactivateOrderItemsUsageLimitsSoftLimit)) {
      value = new QuoteReactivateOrderItemsUsageLimitsSoftLimit(value);
    }

    this._fields['softLimit'] = value;

    return this;
  }

  get hardLimit(): QuoteReactivateOrderItemsUsageLimitsHardLimit | null {
    return this._fields['hardLimit'] ?? null;
  }
  
  getHardLimit(): QuoteReactivateOrderItemsUsageLimitsHardLimit | null {
      return this._fields['hardLimit'] ?? null;
  }

  setHardLimit(value: null | QuoteReactivateOrderItemsUsageLimitsHardLimit | any) {
    if (value !== null && !(value instanceof QuoteReactivateOrderItemsUsageLimitsHardLimit)) {
      value = new QuoteReactivateOrderItemsUsageLimitsHardLimit(value);
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
