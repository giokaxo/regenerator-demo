import ConfigurablePlanFactory from '../factories/configurable-plan-factory';
import { ConfigurablePlan } from '../models/configurable-plan';
import QuoteReactivateOrderItemsUsageLimits from '../models/quote-reactivate-order-items-usage-limits';
import QuoteReactivateOrderItemsEmbedded from '../models/quote-reactivate-order-items-embedded';

export default class QuoteReactivateOrderItems {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'quantity')) {
      this.setQuantity(data['quantity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'plan')) {
      this.setPlan(data['plan']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'priceDescription')) {
      this.setPriceDescription(data['priceDescription']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'usageLimits')) {
      this.setUsageLimits(data['usageLimits']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
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

  get quantity(): number {
    return this._fields['quantity'];
  }
  
  getQuantity(): number {
      return this._fields['quantity'];
  }

  setQuantity(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['quantity'] = value;

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

  get description(): string | null {
    return this._fields['description'] ?? null;
  }
  
  getDescription(): string | null {
      return this._fields['description'] ?? null;
  }

  setDescription(value: null | string) {
    this._fields['description'] = value;

    return this;
  }

  get priceDescription(): string | null {
    return this._fields['priceDescription'] ?? null;
  }
  
  getPriceDescription(): string | null {
      return this._fields['priceDescription'] ?? null;
  }

  setPriceDescription(value: null | string) {
    this._fields['priceDescription'] = value;

    return this;
  }

  get usageLimits(): QuoteReactivateOrderItemsUsageLimits | null {
    return this._fields['usageLimits'] ?? null;
  }
  
  getUsageLimits(): QuoteReactivateOrderItemsUsageLimits | null {
      return this._fields['usageLimits'] ?? null;
  }

  setUsageLimits(value: null | QuoteReactivateOrderItemsUsageLimits | any) {
    if (value !== null && !(value instanceof QuoteReactivateOrderItemsUsageLimits)) {
      value = new QuoteReactivateOrderItemsUsageLimits(value);
    }

    this._fields['usageLimits'] = value;

    return this;
  }

  get createdTime(): Date | null {
    return this._fields['createdTime'] ?? null;
  }
  
  getCreatedTime(): Date | null {
      return this._fields['createdTime'] ?? null;
  }

  private setCreatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['createdTime'] = value;

    return this;
  }

  get updatedTime(): Date | null {
    return this._fields['updatedTime'] ?? null;
  }
  
  getUpdatedTime(): Date | null {
      return this._fields['updatedTime'] ?? null;
  }

  private setUpdatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['updatedTime'] = value;

    return this;
  }

  get embedded(): QuoteReactivateOrderItemsEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): QuoteReactivateOrderItemsEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | QuoteReactivateOrderItemsEmbedded | any) {
    if (value !== null && !(value instanceof QuoteReactivateOrderItemsEmbedded)) {
      value = new QuoteReactivateOrderItemsEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'plan')) {
      data['plan'] = this['plan'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'priceDescription')) {
      data['priceDescription'] = this['priceDescription'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'usageLimits')) {
      data['usageLimits'] = this['usageLimits']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'embedded')) {
      data['_embedded'] = this['embedded']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
