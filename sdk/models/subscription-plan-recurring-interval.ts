import ServicePeriodAnchorInstructionFactory from '../factories/service-period-anchor-instruction-factory';
import { ServicePeriodAnchorInstruction } from '../models/service-period-anchor-instruction';

export default class SubscriptionPlanRecurringInterval {
  UNIT_DAY = 'day';

  UNIT_WEEK = 'week';

  UNIT_MONTH = 'month';

  UNIT_YEAR = 'year';

  BILLING_TIMING_PREPAID = 'prepaid';

  BILLING_TIMING_POSTPAID = 'postpaid';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'periodAnchorInstruction')) {
      this.setPeriodAnchorInstruction(data['periodAnchorInstruction']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unit')) {
      this.setUnit(data['unit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'length')) {
      this.setLength(data['length']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'limit')) {
      this.setLimit(data['limit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingTiming')) {
      this.setBillingTiming(data['billingTiming']);
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

  get unit(): string {
    return this._fields['unit'];
  }
  
  getUnit(): string {
      return this._fields['unit'];
  }

  setUnit(value: string) {
    this._fields['unit'] = value;

    return this;
  }

  get length(): number {
    return this._fields['length'];
  }
  
  getLength(): number {
      return this._fields['length'];
  }

  setLength(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['length'] = value;

    return this;
  }

  get limit(): number | null {
    return this._fields['limit'] ?? null;
  }
  
  getLimit(): number | null {
      return this._fields['limit'] ?? null;
  }

  setLimit(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['limit'] = value;

    return this;
  }

  get billingTiming(): string | null {
    return this._fields['billingTiming'] ?? null;
  }
  
  getBillingTiming(): string | null {
      return this._fields['billingTiming'] ?? null;
  }

  setBillingTiming(value: null | string) {
    this._fields['billingTiming'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'periodAnchorInstruction')) {
      data['periodAnchorInstruction'] = this['periodAnchorInstruction']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unit')) {
      data['unit'] = this['unit'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'length')) {
      data['length'] = this['length'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'limit')) {
      data['limit'] = this['limit'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingTiming')) {
      data['billingTiming'] = this['billingTiming'];
    }

    return data;
  }
}
