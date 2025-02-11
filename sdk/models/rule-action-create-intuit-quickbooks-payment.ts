import RuleAction from '../models/rule-action';

export default class RuleActionCreateIntuitQuickbooksPayment extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'create-intuit-quickbooks-payment',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'depositAccount')) {
      this.setDepositAccount(data['depositAccount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'credentialHash')) {
      this.setCredentialHash(data['credentialHash']);
    }
  }


  get depositAccount(): string {
    return this._fields['depositAccount'];
  }
  
  getDepositAccount(): string {
      return this._fields['depositAccount'];
  }

  setDepositAccount(value: string) {
    this._fields['depositAccount'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'depositAccount')) {
      data['depositAccount'] = this['depositAccount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialHash')) {
      data['credentialHash'] = this['credentialHash'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
