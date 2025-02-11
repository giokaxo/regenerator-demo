
export default class AdyenSettingsSplitPayments {
  TYPE_BALANCE_ACCOUNT = 'BalanceAccount';

  TYPE_COMMISSION = 'Commission';

  TYPE_REMAINDER = 'Remainder';

  TYPE_PAYMENT_FEE = 'PaymentFee';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'percentage')) {
      this.setPercentage(data['percentage']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'commissionAmount')) {
      this.setCommissionAmount(data['commissionAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'account')) {
      this.setAccount(data['account']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantCountry')) {
      this.setMerchantCountry(data['merchantCountry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
  }


  get percentage(): number | null {
    return this._fields['percentage'] ?? null;
  }
  
  getPercentage(): number | null {
      return this._fields['percentage'] ?? null;
  }

  setPercentage(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['percentage'] = value;

    return this;
  }

  get commissionAmount(): number | null {
    return this._fields['commissionAmount'] ?? null;
  }
  
  getCommissionAmount(): number | null {
      return this._fields['commissionAmount'] ?? null;
  }

  setCommissionAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['commissionAmount'] = value;

    return this;
  }

  get currency(): string | null {
    return this._fields['currency'] ?? null;
  }
  
  getCurrency(): string | null {
      return this._fields['currency'] ?? null;
  }

  setCurrency(value: null | string) {
    this._fields['currency'] = value;

    return this;
  }

  get account(): string | null {
    return this._fields['account'] ?? null;
  }
  
  getAccount(): string | null {
      return this._fields['account'] ?? null;
  }

  setAccount(value: null | string) {
    this._fields['account'] = value;

    return this;
  }

  get merchantCountry(): string | null {
    return this._fields['merchantCountry'] ?? null;
  }
  
  getMerchantCountry(): string | null {
      return this._fields['merchantCountry'] ?? null;
  }

  setMerchantCountry(value: null | string) {
    this._fields['merchantCountry'] = value;

    return this;
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'percentage')) {
      data['percentage'] = this['percentage'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'commissionAmount')) {
      data['commissionAmount'] = this['commissionAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'account')) {
      data['account'] = this['account'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantCountry')) {
      data['merchantCountry'] = this['merchantCountry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }

    return data;
  }
}
