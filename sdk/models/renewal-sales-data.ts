
export default class RenewalSalesData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'aggregationValue')) {
      this.setAggregationValue(data['aggregationValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'newSales')) {
      this.setNewSales(data['newSales']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'newRefunds')) {
      this.setNewRefunds(data['newRefunds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'renewalSales')) {
      this.setRenewalSales(data['renewalSales']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'renewalRefunds')) {
      this.setRenewalRefunds(data['renewalRefunds']);
    }
  }


  get aggregationValue(): string | null {
    return this._fields['aggregationValue'] ?? null;
  }
  
  getAggregationValue(): string | null {
      return this._fields['aggregationValue'] ?? null;
  }

  setAggregationValue(value: null | string) {
    this._fields['aggregationValue'] = value;

    return this;
  }

  get newSales(): number | null {
    return this._fields['newSales'] ?? null;
  }
  
  getNewSales(): number | null {
      return this._fields['newSales'] ?? null;
  }

  setNewSales(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['newSales'] = value;

    return this;
  }

  get newRefunds(): number | null {
    return this._fields['newRefunds'] ?? null;
  }
  
  getNewRefunds(): number | null {
      return this._fields['newRefunds'] ?? null;
  }

  setNewRefunds(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['newRefunds'] = value;

    return this;
  }

  get renewalSales(): number | null {
    return this._fields['renewalSales'] ?? null;
  }
  
  getRenewalSales(): number | null {
      return this._fields['renewalSales'] ?? null;
  }

  setRenewalSales(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['renewalSales'] = value;

    return this;
  }

  get renewalRefunds(): number | null {
    return this._fields['renewalRefunds'] ?? null;
  }
  
  getRenewalRefunds(): number | null {
      return this._fields['renewalRefunds'] ?? null;
  }

  setRenewalRefunds(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['renewalRefunds'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aggregationValue')) {
      data['aggregationValue'] = this['aggregationValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'newSales')) {
      data['newSales'] = this['newSales'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'newRefunds')) {
      data['newRefunds'] = this['newRefunds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'renewalSales')) {
      data['renewalSales'] = this['renewalSales'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'renewalRefunds')) {
      data['renewalRefunds'] = this['renewalRefunds'];
    }

    return data;
  }
}
