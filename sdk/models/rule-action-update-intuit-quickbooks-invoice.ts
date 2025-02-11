import RuleActionUpdateIntuitQuickbooksInvoiceTemplate from '../models/rule-action-update-intuit-quickbooks-invoice-template';
import RuleAction from '../models/rule-action';

export default class RuleActionUpdateIntuitQuickbooksInvoice extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'update-intuit-quickbooks-invoice',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'unearnedRevenueAccount')) {
      this.setUnearnedRevenueAccount(data['unearnedRevenueAccount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxesAccount')) {
      this.setTaxesAccount(data['taxesAccount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'discountsAccount')) {
      this.setDiscountsAccount(data['discountsAccount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'department')) {
      this.setDepartment(data['department']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'template')) {
      this.setTemplate(data['template']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'credentialHash')) {
      this.setCredentialHash(data['credentialHash']);
    }
  }


  get unearnedRevenueAccount(): string {
    return this._fields['unearnedRevenueAccount'];
  }
  
  getUnearnedRevenueAccount(): string {
      return this._fields['unearnedRevenueAccount'];
  }

  setUnearnedRevenueAccount(value: string) {
    this._fields['unearnedRevenueAccount'] = value;

    return this;
  }

  get taxesAccount(): string | null {
    return this._fields['taxesAccount'] ?? null;
  }
  
  getTaxesAccount(): string | null {
      return this._fields['taxesAccount'] ?? null;
  }

  setTaxesAccount(value: null | string) {
    this._fields['taxesAccount'] = value;

    return this;
  }

  get discountsAccount(): string | null {
    return this._fields['discountsAccount'] ?? null;
  }
  
  getDiscountsAccount(): string | null {
      return this._fields['discountsAccount'] ?? null;
  }

  setDiscountsAccount(value: null | string) {
    this._fields['discountsAccount'] = value;

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

  get template(): RuleActionUpdateIntuitQuickbooksInvoiceTemplate | null {
    return this._fields['template'] ?? null;
  }
  
  getTemplate(): RuleActionUpdateIntuitQuickbooksInvoiceTemplate | null {
      return this._fields['template'] ?? null;
  }

  setTemplate(value: null | RuleActionUpdateIntuitQuickbooksInvoiceTemplate | any) {
    if (value !== null && !(value instanceof RuleActionUpdateIntuitQuickbooksInvoiceTemplate)) {
      value = new RuleActionUpdateIntuitQuickbooksInvoiceTemplate(value);
    }

    this._fields['template'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unearnedRevenueAccount')) {
      data['unearnedRevenueAccount'] = this['unearnedRevenueAccount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxesAccount')) {
      data['taxesAccount'] = this['taxesAccount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'discountsAccount')) {
      data['discountsAccount'] = this['discountsAccount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'department')) {
      data['department'] = this['department'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'template')) {
      data['template'] = this['template']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialHash')) {
      data['credentialHash'] = this['credentialHash'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
