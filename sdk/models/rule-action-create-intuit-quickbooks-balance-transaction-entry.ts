import RuleAction from '../models/rule-action';

export default class RuleActionCreateIntuitQuickbooksBalanceTransactionEntry extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'create-intuit-quickbooks-balance-transaction-entry',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'debitAccount')) {
      this.setDebitAccount(data['debitAccount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'creditAccount')) {
      this.setCreditAccount(data['creditAccount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'credentialHash')) {
      this.setCredentialHash(data['credentialHash']);
    }
  }


  get debitAccount(): string {
    return this._fields['debitAccount'];
  }
  
  getDebitAccount(): string {
      return this._fields['debitAccount'];
  }

  setDebitAccount(value: string) {
    this._fields['debitAccount'] = value;

    return this;
  }

  get creditAccount(): string {
    return this._fields['creditAccount'];
  }
  
  getCreditAccount(): string {
      return this._fields['creditAccount'];
  }

  setCreditAccount(value: string) {
    this._fields['creditAccount'] = value;

    return this;
  }

  get description(): string {
    return this._fields['description'];
  }
  
  getDescription(): string {
      return this._fields['description'];
  }

  setDescription(value: string) {
    this._fields['description'] = value;

    return this;
  }

  get credentialHash(): string {
    return this._fields['credentialHash'];
  }
  
  getCredentialHash(): string {
      return this._fields['credentialHash'];
  }

  setCredentialHash(value: string) {
    this._fields['credentialHash'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'debitAccount')) {
      data['debitAccount'] = this['debitAccount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'creditAccount')) {
      data['creditAccount'] = this['creditAccount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialHash')) {
      data['credentialHash'] = this['credentialHash'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
