import { CheckoutFormPlan } from '../models/checkout-form-plan';

export default class CheckoutFormVariablePlan implements CheckoutFormPlan {
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
    if (Object.prototype.hasOwnProperty.call(data, 'minimum')) {
      this.setMinimum(data['minimum']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'multipleOf')) {
      this.setMultipleOf(data['multipleOf']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'maximum')) {
      this.setMaximum(data['maximum']);
    }
  }


  public get type() {
    return 'variable';
  }

  public getType() {
    return 'variable';
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

  get minimum(): number | null {
    return this._fields['minimum'] ?? null;
  }
  
  getMinimum(): number | null {
      return this._fields['minimum'] ?? null;
  }

  setMinimum(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['minimum'] = value;

    return this;
  }

  get multipleOf(): number | null {
    return this._fields['multipleOf'] ?? null;
  }
  
  getMultipleOf(): number | null {
      return this._fields['multipleOf'] ?? null;
  }

  setMultipleOf(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['multipleOf'] = value;

    return this;
  }

  get maximum(): number | null {
    return this._fields['maximum'] ?? null;
  }
  
  getMaximum(): number | null {
      return this._fields['maximum'] ?? null;
  }

  setMaximum(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['maximum'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'variable',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'planId')) {
      data['planId'] = this['planId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'minimum')) {
      data['minimum'] = this['minimum'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'multipleOf')) {
      data['multipleOf'] = this['multipleOf'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'maximum')) {
      data['maximum'] = this['maximum'];
    }

    return data;
  }
}
