import QuoteChangeOrderItemsUsageLimitsSoftLimit from '../models/quote-change-order-items-usage-limits-soft-limit';
import QuoteChangeOrderItemsUsageLimitsHardLimit from '../models/quote-change-order-items-usage-limits-hard-limit';

export default class QuoteChangeOrderItemsUsageLimits {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'softLimit')) {
      this.setSoftLimit(data['softLimit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hardLimit')) {
      this.setHardLimit(data['hardLimit']);
    }
  }


  get softLimit(): QuoteChangeOrderItemsUsageLimitsSoftLimit | null {
    return this._fields['softLimit'] ?? null;
  }
  
  getSoftLimit(): QuoteChangeOrderItemsUsageLimitsSoftLimit | null {
      return this._fields['softLimit'] ?? null;
  }

  setSoftLimit(value: null | QuoteChangeOrderItemsUsageLimitsSoftLimit | any) {
    if (value !== null && !(value instanceof QuoteChangeOrderItemsUsageLimitsSoftLimit)) {
      value = new QuoteChangeOrderItemsUsageLimitsSoftLimit(value);
    }

    this._fields['softLimit'] = value;

    return this;
  }

  get hardLimit(): QuoteChangeOrderItemsUsageLimitsHardLimit | null {
    return this._fields['hardLimit'] ?? null;
  }
  
  getHardLimit(): QuoteChangeOrderItemsUsageLimitsHardLimit | null {
      return this._fields['hardLimit'] ?? null;
  }

  setHardLimit(value: null | QuoteChangeOrderItemsUsageLimitsHardLimit | any) {
    if (value !== null && !(value instanceof QuoteChangeOrderItemsUsageLimitsHardLimit)) {
      value = new QuoteChangeOrderItemsUsageLimitsHardLimit(value);
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
