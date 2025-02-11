import { BankAccountInstrument } from '../models/bank-account-instrument';

export default class BBANInstrument implements BankAccountInstrument {
  get [BankAccountInstrument](): true {
    return true;
  }

  ACCOUNT_TYPE_CHECKING = 'checking';

  ACCOUNT_TYPE_SAVINGS = 'savings';

  ACCOUNT_TYPE_OTHER = 'other';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accountNumber')) {
      this.setAccountNumber(data['accountNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'routingNumber')) {
      this.setRoutingNumber(data['routingNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountType')) {
      this.setAccountType(data['accountType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bic')) {
      this.setBic(data['bic']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bankName')) {
      this.setBankName(data['bankName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'last4')) {
      this.setLast4(data['last4']);
    }
  }


  public get accountNumberType() {
    return 'BBAN';
  }

  public getAccountNumberType() {
    return 'BBAN';
  }

  get accountNumber(): string {
    return this._fields['accountNumber'];
  }
  
  getAccountNumber(): string {
      return this._fields['accountNumber'];
  }

  setAccountNumber(value: string) {
    this._fields['accountNumber'] = value;

    return this;
  }

  get routingNumber(): string {
    return this._fields['routingNumber'];
  }
  
  getRoutingNumber(): string {
      return this._fields['routingNumber'];
  }

  setRoutingNumber(value: string) {
    this._fields['routingNumber'] = value;

    return this;
  }

  get accountType(): string {
    return this._fields['accountType'];
  }
  
  getAccountType(): string {
      return this._fields['accountType'];
  }

  setAccountType(value: string) {
    this._fields['accountType'] = value;

    return this;
  }

  get bic(): string | null {
    return this._fields['bic'] ?? null;
  }
  
  getBic(): string | null {
      return this._fields['bic'] ?? null;
  }

  setBic(value: null | string) {
    this._fields['bic'] = value;

    return this;
  }

  get bankName(): string | null {
    return this._fields['bankName'] ?? null;
  }
  
  getBankName(): string | null {
      return this._fields['bankName'] ?? null;
  }

  setBankName(value: null | string) {
    this._fields['bankName'] = value;

    return this;
  }

  get last4(): string | null {
    return this._fields['last4'] ?? null;
  }
  
  getLast4(): string | null {
      return this._fields['last4'] ?? null;
  }

  private setLast4(value: null | string) {
    this._fields['last4'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      accountNumberType: 'BBAN',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountNumber')) {
      data['accountNumber'] = this['accountNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'routingNumber')) {
      data['routingNumber'] = this['routingNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountType')) {
      data['accountType'] = this['accountType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bic')) {
      data['bic'] = this['bic'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bankName')) {
      data['bankName'] = this['bankName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'last4')) {
      data['last4'] = this['last4'];
    }

    return data;
  }
}
