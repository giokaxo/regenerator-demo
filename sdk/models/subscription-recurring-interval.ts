import ServicePeriodAnchorInstructionFactory from '../factories/service-period-anchor-instruction-factory';
import { ServicePeriodAnchorInstruction } from '../models/service-period-anchor-instruction';

export default class SubscriptionRecurringInterval {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'periodAnchorInstruction')) {
      this.setPeriodAnchorInstruction(data['periodAnchorInstruction']);
    }
  }


  get periodAnchorInstruction(): ServicePeriodAnchorInstruction | null {
    return this._fields['periodAnchorInstruction'] ?? null;
  }
  
  getPeriodAnchorInstruction(): ServicePeriodAnchorInstruction | null {
      return this._fields['periodAnchorInstruction'] ?? null;
  }

  setPeriodAnchorInstruction(value: null | ServicePeriodAnchorInstruction | any) {
    if (value !== null && !(value[ServicePeriodAnchorInstruction])) {
      value = ServicePeriodAnchorInstructionFactory.from(value);
    }

    this._fields['periodAnchorInstruction'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'periodAnchorInstruction')) {
      data['periodAnchorInstruction'] = this['periodAnchorInstruction']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
