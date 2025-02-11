
export default class CustomerInformation {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'refundsAmount')) {
      this.setRefundsAmount(data['refundsAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revenueAmount')) {
      this.setRevenueAmount(data['revenueAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'disputesAmount')) {
      this.setDisputesAmount(data['disputesAmount']);
    }
  }


  get currency(): string | null {
    return this._fields['currency'] ?? null;
  }
  
  getCurrency(): string | null {
      return this._fields['currency'] ?? null;
  }

  private setCurrency(value: null | string) {
    this._fields['currency'] = value;

    return this;
  }

  get refundsAmount(): number | null {
    return this._fields['refundsAmount'] ?? null;
  }
  
  getRefundsAmount(): number | null {
      return this._fields['refundsAmount'] ?? null;
  }

  private setRefundsAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['refundsAmount'] = value;

    return this;
  }

  get revenueAmount(): number | null {
    return this._fields['revenueAmount'] ?? null;
  }
  
  getRevenueAmount(): number | null {
      return this._fields['revenueAmount'] ?? null;
  }

  private setRevenueAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['revenueAmount'] = value;

    return this;
  }

  get disputesAmount(): number | null {
    return this._fields['disputesAmount'] ?? null;
  }
  
  getDisputesAmount(): number | null {
      return this._fields['disputesAmount'] ?? null;
  }

  private setDisputesAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['disputesAmount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'refundsAmount')) {
      data['refundsAmount'] = this['refundsAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revenueAmount')) {
      data['revenueAmount'] = this['revenueAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'disputesAmount')) {
      data['disputesAmount'] = this['disputesAmount'];
    }

    return data;
  }
}
