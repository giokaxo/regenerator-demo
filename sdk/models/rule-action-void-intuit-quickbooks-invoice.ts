import RuleAction from '../models/rule-action';

export default class RuleActionVoidIntuitQuickbooksInvoice extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'void-intuit-quickbooks-invoice',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentialHash')) {
      this.setCredentialHash(data['credentialHash']);
    }
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialHash')) {
      data['credentialHash'] = this['credentialHash'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
