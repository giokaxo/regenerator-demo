import ContactObject from '../models/contact-object';
import RiskMetadata from '../models/risk-metadata';
import BankAccountCreatePlain from '../models/bank-account-create-plain';

export default class BBANType extends BankAccountCreatePlain {
  METHOD_ACH = 'ach';

  ACCOUNT_TYPE_CHECKING = 'checking';

  ACCOUNT_TYPE_SAVINGS = 'savings';

  ACCOUNT_TYPE_OTHER = 'other';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      accountNumberType: 'BBAN',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'method')) {
      this.setMethod(data['method']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountNumber')) {
      this.setAccountNumber(data['accountNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'routingNumber')) {
      this.setRoutingNumber(data['routingNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountType')) {
      this.setAccountType(data['accountType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bankName')) {
      this.setBankName(data['bankName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bic')) {
      this.setBic(data['bic']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskMetadata')) {
      this.setRiskMetadata(data['riskMetadata']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useAsBackup')) {
      this.setUseAsBackup(data['useAsBackup']);
    }
  }


  get method(): string {
    return this._fields['method'];
  }
  
  getMethod(): string {
      return this._fields['method'];
  }

  setMethod(value: string) {
    this._fields['method'] = value;

    return this;
  }

  get customerId(): string {
    return this._fields['customerId'];
  }
  
  getCustomerId(): string {
      return this._fields['customerId'];
  }

  setCustomerId(value: string) {
    this._fields['customerId'] = value;

    return this;
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

  get billingAddress(): ContactObject {
    return this._fields['billingAddress'];
  }
  
  getBillingAddress(): ContactObject {
      return this._fields['billingAddress'];
  }

  setBillingAddress(value: ContactObject | any) {
    if (!(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['billingAddress'] = value;

    return this;
  }

  get customFields(): Record<string, any> | null {
    return this._fields['customFields'] ?? null;
  }
  
  getCustomFields(): Record<string, any> | null {
      return this._fields['customFields'] ?? null;
  }

  setCustomFields(value: null | Record<string, any>) {
    this._fields['customFields'] = value;

    return this;
  }

  get riskMetadata(): RiskMetadata | null {
    return this._fields['riskMetadata'] ?? null;
  }
  
  getRiskMetadata(): RiskMetadata | null {
      return this._fields['riskMetadata'] ?? null;
  }

  setRiskMetadata(value: null | RiskMetadata | any) {
    if (value !== null && !(value instanceof RiskMetadata)) {
      value = new RiskMetadata(value);
    }

    this._fields['riskMetadata'] = value;

    return this;
  }

  get useAsBackup(): boolean | null {
    return this._fields['useAsBackup'] ?? null;
  }
  
  getUseAsBackup(): boolean | null {
      return this._fields['useAsBackup'] ?? null;
  }

  setUseAsBackup(value: null | boolean) {
    this._fields['useAsBackup'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'method')) {
      data['method'] = this['method'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountNumber')) {
      data['accountNumber'] = this['accountNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'routingNumber')) {
      data['routingNumber'] = this['routingNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountType')) {
      data['accountType'] = this['accountType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bankName')) {
      data['bankName'] = this['bankName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bic')) {
      data['bic'] = this['bic'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskMetadata')) {
      data['riskMetadata'] = this['riskMetadata']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useAsBackup')) {
      data['useAsBackup'] = this['useAsBackup'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
