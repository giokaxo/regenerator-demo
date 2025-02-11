import FeeFormulaFactory from '../factories/fee-formula-factory';
import { FeeFormula } from '../models/fee-formula';
import SettlementSettings from '../models/settlement-settings';
import ResourceLink from '../models/resource-link';

export default class Fee {
  TYPE_BUY = 'buy';

  TYPE_SELL = 'sell';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
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
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
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

  get type(): string {
    return this._fields['type'];
  }
  
  getType(): string {
      return this._fields['type'];
  }

  setType(value: string) {
    this._fields['type'] = value;

    return this;
  }

  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
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

  get formula(): FeeFormula {
    return this._fields['formula'];
  }
  
  getFormula(): FeeFormula {
      return this._fields['formula'];
  }

  setFormula(value: FeeFormula | any) {
    if (!(value[FeeFormula])) {
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

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
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
      data['formula'] = this['formula'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementSettings')) {
      data['settlementSettings'] = this['settlementSettings']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
