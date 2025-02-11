import PlanFactory from '../factories/plan-factory';
import Product from '../models/product';
import { Plan } from '../models/plan';

export default class UpcomingInvoiceItemEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'product')) {
      this.setProduct(data['product']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'plan')) {
      this.setPlan(data['plan']);
    }
  }


  get product(): Product | null {
    return this._fields['product'] ?? null;
  }
  
  getProduct(): Product | null {
      return this._fields['product'] ?? null;
  }

  setProduct(value: null | Product | any) {
    if (value !== null && !(value instanceof Product)) {
      value = new Product(value);
    }

    this._fields['product'] = value;

    return this;
  }

  get plan(): Plan | null {
    return this._fields['plan'] ?? null;
  }
  
  getPlan(): Plan | null {
      return this._fields['plan'] ?? null;
  }

  setPlan(value: null | Plan | any) {
    if (value !== null && !(value[Plan])) {
      value = PlanFactory.from(value);
    }

    this._fields['plan'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'product')) {
      data['product'] = this['product']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'plan')) {
      data['plan'] = this['plan']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
