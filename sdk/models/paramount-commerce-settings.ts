
export default class ParamountCommerceSettings {
  MERCHANT_TRANSACTION_TYPE_POKER = 'POKER';

  MERCHANT_TRANSACTION_TYPE_CASINO = 'CASINO';

  MERCHANT_TRANSACTION_TYPE_BINGO = 'BINGO';

  MERCHANT_TRANSACTION_TYPE_SPORTS_BETTING = 'SPORTS_BETTING';

  MERCHANT_TRANSACTION_TYPE_DIGITAL_REMITTANCE = 'DIGITAL_REMITTANCE';

  MERCHANT_TRANSACTION_TYPE_E_SPORTS = 'E_SPORTS';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantSubId')) {
      this.setMerchantSubId(data['merchantSubId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantTransactionType')) {
      this.setMerchantTransactionType(data['merchantTransactionType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useDirectDeposit')) {
      this.setUseDirectDeposit(data['useDirectDeposit']);
    }
  }


  get merchantSubId(): string {
    return this._fields['merchantSubId'];
  }
  
  getMerchantSubId(): string {
      return this._fields['merchantSubId'];
  }

  setMerchantSubId(value: string) {
    this._fields['merchantSubId'] = value;

    return this;
  }

  get merchantTransactionType(): string {
    return this._fields['merchantTransactionType'];
  }
  
  getMerchantTransactionType(): string {
      return this._fields['merchantTransactionType'];
  }

  setMerchantTransactionType(value: string) {
    this._fields['merchantTransactionType'] = value;

    return this;
  }

  get useDirectDeposit(): boolean | null {
    return this._fields['useDirectDeposit'] ?? null;
  }
  
  getUseDirectDeposit(): boolean | null {
      return this._fields['useDirectDeposit'] ?? null;
  }

  setUseDirectDeposit(value: null | boolean) {
    this._fields['useDirectDeposit'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantSubId')) {
      data['merchantSubId'] = this['merchantSubId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantTransactionType')) {
      data['merchantTransactionType'] = this['merchantTransactionType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useDirectDeposit')) {
      data['useDirectDeposit'] = this['useDirectDeposit'];
    }

    return data;
  }
}
