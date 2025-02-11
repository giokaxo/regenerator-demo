
export default class SubscriptionLineItems {
  TYPE_DEBIT = 'debit';

  TYPE_CREDIT = 'credit';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unitPriceAmount')) {
      this.setUnitPriceAmount(data['unitPriceAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unitPriceCurrency')) {
      this.setUnitPriceCurrency(data['unitPriceCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'quantity')) {
      this.setQuantity(data['quantity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'periodStartTime')) {
      this.setPeriodStartTime(data['periodStartTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'periodEndTime')) {
      this.setPeriodEndTime(data['periodEndTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
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

  get unitPriceAmount(): number | null {
    return this._fields['unitPriceAmount'] ?? null;
  }
  
  getUnitPriceAmount(): number | null {
      return this._fields['unitPriceAmount'] ?? null;
  }

  setUnitPriceAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['unitPriceAmount'] = value;

    return this;
  }

  get unitPriceCurrency(): string | null {
    return this._fields['unitPriceCurrency'] ?? null;
  }
  
  getUnitPriceCurrency(): string | null {
      return this._fields['unitPriceCurrency'] ?? null;
  }

  setUnitPriceCurrency(value: null | string) {
    this._fields['unitPriceCurrency'] = value;

    return this;
  }

  get quantity(): number | null {
    return this._fields['quantity'] ?? null;
  }
  
  getQuantity(): number | null {
      return this._fields['quantity'] ?? null;
  }

  setQuantity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['quantity'] = value;

    return this;
  }

  get periodStartTime(): Date | null {
    return this._fields['periodStartTime'] ?? null;
  }
  
  getPeriodStartTime(): Date | null {
      return this._fields['periodStartTime'] ?? null;
  }

  setPeriodStartTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['periodStartTime'] = value;

    return this;
  }

  get periodEndTime(): Date | null {
    return this._fields['periodEndTime'] ?? null;
  }
  
  getPeriodEndTime(): Date | null {
      return this._fields['periodEndTime'] ?? null;
  }

  setPeriodEndTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['periodEndTime'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unitPriceAmount')) {
      data['unitPriceAmount'] = this['unitPriceAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unitPriceCurrency')) {
      data['unitPriceCurrency'] = this['unitPriceCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'periodStartTime')) {
      data['periodStartTime'] = this['periodStartTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'periodEndTime')) {
      data['periodEndTime'] = this['periodEndTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }

    return data;
  }
}
