import { BankAccountInstrument } from '../models/bank-account-instrument';

export default class IBANInstrument implements BankAccountInstrument {
  get [BankAccountInstrument](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accountNumber')) {
      this.setAccountNumber(data['accountNumber']);
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
    return 'IBAN';
  }

  public getAccountNumberType() {
    return 'IBAN';
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
      accountNumberType: 'IBAN',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountNumber')) {
      data['accountNumber'] = this['accountNumber'];
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
