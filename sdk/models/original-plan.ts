import { ConfigurablePlan } from '../models/configurable-plan';

export default class OriginalPlan implements ConfigurablePlan {
  get [ConfigurablePlan](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
  }


  get id(): string {
    return this._fields['id'];
  }
  
  getId(): string {
      return this._fields['id'];
  }

  setId(value: string) {
    this._fields['id'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }

    return data;
  }
}
