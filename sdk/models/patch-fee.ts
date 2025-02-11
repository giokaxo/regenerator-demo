import FeeFormulaFactory from '../factories/fee-formula-factory';
import { FeeFormula } from '../models/fee-formula';
import SettlementSettings from '../models/settlement-settings';

export default class PatchFee {
  TYPE_BUY = 'buy';

  TYPE_SELL = 'sell';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'filter')) {
      this.setFilter(data['filter']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'formula')) {
      this.setFormula(data['formula']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settlementSettings')) {
      this.setSettlementSettings(data['settlementSettings']);
    }
  }


  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  get name(): string | null {
    return this._fields['name'] ?? null;
  }
  
  getName(): string | null {
      return this._fields['name'] ?? null;
  }

  setName(value: null | string) {
    this._fields['name'] = value;

    return this;
  }

  get filter(): string | null {
    return this._fields['filter'] ?? null;
  }
  
  getFilter(): string | null {
      return this._fields['filter'] ?? null;
  }

  setFilter(value: null | string) {
    this._fields['filter'] = value;

    return this;
  }

  get formula(): FeeFormula | null {
    return this._fields['formula'] ?? null;
  }
  
  getFormula(): FeeFormula | null {
      return this._fields['formula'] ?? null;
  }

  setFormula(value: null | FeeFormula | any) {
    if (value !== null && !(value[FeeFormula])) {
      value = FeeFormulaFactory.from(value);
    }

    this._fields['formula'] = value;

    return this;
  }

  get settlementSettings(): SettlementSettings | null {
    return this._fields['settlementSettings'] ?? null;
  }
  
  getSettlementSettings(): SettlementSettings | null {
      return this._fields['settlementSettings'] ?? null;
  }

  setSettlementSettings(value: null | SettlementSettings | any) {
    if (value !== null && !(value instanceof SettlementSettings)) {
      value = new SettlementSettings(value);
    }

    this._fields['settlementSettings'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'filter')) {
      data['filter'] = this['filter'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'formula')) {
      data['formula'] = this['formula']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementSettings')) {
      data['settlementSettings'] = this['settlementSettings']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
