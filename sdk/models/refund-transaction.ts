import { BalanceTransaction } from '../models/balance-transaction';
import ResourceLink from '../models/resource-link';

export default class RefundTransaction implements BalanceTransaction {
  get [BalanceTransaction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'parentId')) {
      this.setParentId(data['parentId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transactionId')) {
      this.setTransactionId(data['transactionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settlementCurrency')) {
      this.setSettlementCurrency(data['settlementCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settlementAmount')) {
      this.setSettlementAmount(data['settlementAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settlementTime')) {
      this.setSettlementTime(data['settlementTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settlementRate')) {
      this.setSettlementRate(data['settlementRate']);
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


  public get type() {
    return 'refund';
  }

  public getType() {
    return 'refund';
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

  get parentId(): string | null {
    return this._fields['parentId'] ?? null;
  }
  
  getParentId(): string | null {
      return this._fields['parentId'] ?? null;
  }

  setParentId(value: null | string) {
    this._fields['parentId'] = value;

    return this;
  }

  get transactionId(): string | null {
    return this._fields['transactionId'] ?? null;
  }
  
  getTransactionId(): string | null {
      return this._fields['transactionId'] ?? null;
  }

  setTransactionId(value: null | string) {
    this._fields['transactionId'] = value;

    return this;
  }

  get settlementCurrency(): string | null {
    return this._fields['settlementCurrency'] ?? null;
  }
  
  getSettlementCurrency(): string | null {
      return this._fields['settlementCurrency'] ?? null;
  }

  setSettlementCurrency(value: null | string) {
    this._fields['settlementCurrency'] = value;

    return this;
  }

  get settlementAmount(): number | null {
    return this._fields['settlementAmount'] ?? null;
  }
  
  getSettlementAmount(): number | null {
      return this._fields['settlementAmount'] ?? null;
  }

  setSettlementAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['settlementAmount'] = value;

    return this;
  }

  get settlementTime(): Date | null {
    return this._fields['settlementTime'] ?? null;
  }
  
  getSettlementTime(): Date | null {
      return this._fields['settlementTime'] ?? null;
  }

  private setSettlementTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['settlementTime'] = value;

    return this;
  }

  get settlementRate(): number | null {
    return this._fields['settlementRate'] ?? null;
  }
  
  getSettlementRate(): number | null {
      return this._fields['settlementRate'] ?? null;
  }

  setSettlementRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['settlementRate'] = value;

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
    const data: Record<string, any> = {
      type: 'refund',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'parentId')) {
      data['parentId'] = this['parentId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionId')) {
      data['transactionId'] = this['transactionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementCurrency')) {
      data['settlementCurrency'] = this['settlementCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementAmount')) {
      data['settlementAmount'] = this['settlementAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementTime')) {
      data['settlementTime'] = this['settlementTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementRate')) {
      data['settlementRate'] = this['settlementRate'];
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
