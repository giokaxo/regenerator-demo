import { CheckoutFormPlan } from '../models/checkout-form-plan';

export default class CheckoutFormFixedPlan implements CheckoutFormPlan {
  get [CheckoutFormPlan](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'planId')) {
      this.setPlanId(data['planId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'quantity')) {
      this.setQuantity(data['quantity']);
    }
  }


  public get type() {
    return 'fixed';
  }

  public getType() {
    return 'fixed';
  }

  get planId(): string {
    return this._fields['planId'];
  }
  
  getPlanId(): string {
      return this._fields['planId'];
  }

  setPlanId(value: string) {
    this._fields['planId'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'fixed',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'planId')) {
      data['planId'] = this['planId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }

    return data;
  }
}
