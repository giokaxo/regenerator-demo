import RuleAction from '../models/rule-action';

export default class RuleActionCreateIntuitQuickbooksRefundReceipt extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'create-intuit-quickbooks-refund-receipt',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'depositAccount')) {
      this.setDepositAccount(data['depositAccount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'department')) {
      this.setDepartment(data['department']);
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

  get department(): string | null {
    return this._fields['department'] ?? null;
  }
  
  getDepartment(): string | null {
      return this._fields['department'] ?? null;
  }

  setDepartment(value: null | string) {
    this._fields['department'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'department')) {
      data['department'] = this['department'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialHash')) {
      data['credentialHash'] = this['credentialHash'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
