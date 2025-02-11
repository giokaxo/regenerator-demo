import QuoteCreateOrderItemsUsageLimitsSoftLimit from '../models/quote-create-order-items-usage-limits-soft-limit';
import QuoteCreateOrderItemsUsageLimitsHardLimit from '../models/quote-create-order-items-usage-limits-hard-limit';

export default class QuoteCreateOrderItemsUsageLimits {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'softLimit')) {
      this.setSoftLimit(data['softLimit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hardLimit')) {
      this.setHardLimit(data['hardLimit']);
    }
  }


  get softLimit(): QuoteCreateOrderItemsUsageLimitsSoftLimit | null {
    return this._fields['softLimit'] ?? null;
  }
  
  getSoftLimit(): QuoteCreateOrderItemsUsageLimitsSoftLimit | null {
      return this._fields['softLimit'] ?? null;
  }

  setSoftLimit(value: null | QuoteCreateOrderItemsUsageLimitsSoftLimit | any) {
    if (value !== null && !(value instanceof QuoteCreateOrderItemsUsageLimitsSoftLimit)) {
      value = new QuoteCreateOrderItemsUsageLimitsSoftLimit(value);
    }

    this._fields['softLimit'] = value;

    return this;
  }

  get hardLimit(): QuoteCreateOrderItemsUsageLimitsHardLimit | null {
    return this._fields['hardLimit'] ?? null;
  }
  
  getHardLimit(): QuoteCreateOrderItemsUsageLimitsHardLimit | null {
      return this._fields['hardLimit'] ?? null;
  }

  setHardLimit(value: null | QuoteCreateOrderItemsUsageLimitsHardLimit | any) {
    if (value !== null && !(value instanceof QuoteCreateOrderItemsUsageLimitsHardLimit)) {
      value = new QuoteCreateOrderItemsUsageLimitsHardLimit(value);
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
