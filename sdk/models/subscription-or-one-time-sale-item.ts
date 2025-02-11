import ConfigurablePlanFactory from '../factories/configurable-plan-factory';
import { ConfigurablePlan } from '../models/configurable-plan';
import SubscriptionOrOneTimeSaleItemUsageLimits from '../models/subscription-or-one-time-sale-item-usage-limits';
import SubscriptionOrOneTimeSaleItemEmbedded from '../models/subscription-or-one-time-sale-item-embedded';

export default class SubscriptionOrOneTimeSaleItem {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'planId')) {
      this.setPlanId(data['planId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'quantity')) {
      this.setQuantity(data['quantity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'quantityFilled')) {
      this.setQuantityFilled(data['quantityFilled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'plan')) {
      this.setPlan(data['plan']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'usageLimits')) {
      this.setUsageLimits(data['usageLimits']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isModified')) {
      this.setIsModified(data['isModified']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isGrandfathered')) {
      this.setIsGrandfathered(data['isGrandfathered']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
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

  get quantityFilled(): number | null {
    return this._fields['quantityFilled'] ?? null;
  }
  
  getQuantityFilled(): number | null {
      return this._fields['quantityFilled'] ?? null;
  }

  setQuantityFilled(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['quantityFilled'] = value;

    return this;
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

  get usageLimits(): SubscriptionOrOneTimeSaleItemUsageLimits | null {
    return this._fields['usageLimits'] ?? null;
  }
  
  getUsageLimits(): SubscriptionOrOneTimeSaleItemUsageLimits | null {
      return this._fields['usageLimits'] ?? null;
  }

  setUsageLimits(value: null | SubscriptionOrOneTimeSaleItemUsageLimits | any) {
    if (value !== null && !(value instanceof SubscriptionOrOneTimeSaleItemUsageLimits)) {
      value = new SubscriptionOrOneTimeSaleItemUsageLimits(value);
    }

    this._fields['usageLimits'] = value;

    return this;
  }

  get revision(): number | null {
    return this._fields['revision'] ?? null;
  }
  
  getRevision(): number | null {
      return this._fields['revision'] ?? null;
  }

  private setRevision(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['revision'] = value;

    return this;
  }

  get isModified(): boolean | null {
    return this._fields['isModified'] ?? null;
  }
  
  getIsModified(): boolean | null {
      return this._fields['isModified'] ?? null;
  }

  private setIsModified(value: null | boolean) {
    this._fields['isModified'] = value;

    return this;
  }

  get isGrandfathered(): boolean | null {
    return this._fields['isGrandfathered'] ?? null;
  }
  
  getIsGrandfathered(): boolean | null {
      return this._fields['isGrandfathered'] ?? null;
  }

  private setIsGrandfathered(value: null | boolean) {
    this._fields['isGrandfathered'] = value;

    return this;
  }

  get embedded(): SubscriptionOrOneTimeSaleItemEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): SubscriptionOrOneTimeSaleItemEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | SubscriptionOrOneTimeSaleItemEmbedded | any) {
    if (value !== null && !(value instanceof SubscriptionOrOneTimeSaleItemEmbedded)) {
      value = new SubscriptionOrOneTimeSaleItemEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'planId')) {
      data['planId'] = this['planId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantityFilled')) {
      data['quantityFilled'] = this['quantityFilled'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'plan')) {
      data['plan'] = this['plan'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'usageLimits')) {
      data['usageLimits'] = this['usageLimits']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isModified')) {
      data['isModified'] = this['isModified'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isGrandfathered')) {
      data['isGrandfathered'] = this['isGrandfathered'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'embedded')) {
      data['_embedded'] = this['embedded']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
