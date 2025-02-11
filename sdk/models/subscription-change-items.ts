import ConfigurablePlanFactory from '../factories/configurable-plan-factory';
import { ConfigurablePlan } from '../models/configurable-plan';
import SubscriptionChangeItemsUsageLimits from '../models/subscription-change-items-usage-limits';

export default class SubscriptionChangeItems {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'plan')) {
      this.setPlan(data['plan']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'quantity')) {
      this.setQuantity(data['quantity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'usageLimits')) {
      this.setUsageLimits(data['usageLimits']);
    }
  }


  get plan(): ConfigurablePlan {
    return this._fields['plan'];
  }
  
  getPlan(): ConfigurablePlan {
      return this._fields['plan'];
  }

  setPlan(value: ConfigurablePlan | any) {
    if (!(value[ConfigurablePlan])) {
      value = ConfigurablePlanFactory.from(value);
    }

    this._fields['plan'] = value;

    return this;
  }

  get quantity(): number | null {
    return this._fields['quantity'] ?? null;
  }
  
  getQuantity(): number | null {
      return this._fields['quantity'] ?? null;
  }

  setQuantity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['quantity'] = value;

    return this;
  }

  get usageLimits(): SubscriptionChangeItemsUsageLimits | null {
    return this._fields['usageLimits'] ?? null;
  }
  
  getUsageLimits(): SubscriptionChangeItemsUsageLimits | null {
      return this._fields['usageLimits'] ?? null;
  }

  setUsageLimits(value: null | SubscriptionChangeItemsUsageLimits | any) {
    if (value !== null && !(value instanceof SubscriptionChangeItemsUsageLimits)) {
      value = new SubscriptionChangeItemsUsageLimits(value);
    }

    this._fields['usageLimits'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'plan')) {
      data['plan'] = this['plan'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'usageLimits')) {
      data['usageLimits'] = this['usageLimits']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
