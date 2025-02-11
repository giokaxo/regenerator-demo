import InvoiceRetryInstructionAttempts from '../models/invoice-retry-instruction-attempts';

export default class InvoiceRetryInstruction {
  AFTER_ATTEMPT_POLICIES_CHANGE_SUBSCRIPTION_RENEWAL_TIME = 'change-subscription-renewal-time';

  AFTER_RETRY_END_POLICIES_ABANDON_INVOICE = 'abandon-invoice';

  AFTER_RETRY_END_POLICIES_CANCEL_SUBSCRIPTION = 'cancel-subscription';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'attempts')) {
      this.setAttempts(data['attempts']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'afterAttemptPolicies')) {
      this.setAfterAttemptPolicies(data['afterAttemptPolicies']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'afterRetryEndPolicies')) {
      this.setAfterRetryEndPolicies(data['afterRetryEndPolicies']);
    }
  }


  get attempts(): Array<any> {
    return this._fields['attempts'];
  }
  
  getAttempts(): Array<any> {
      return this._fields['attempts'];
  }

  setAttempts(value: Array<any>) {
    value = value.map(
      (value) => value instanceof InvoiceRetryInstructionAttempts ? value : new InvoiceRetryInstructionAttempts(value),
    );

    this._fields['attempts'] = value;

    return this;
  }

  get afterAttemptPolicies(): Array<any> {
    return this._fields['afterAttemptPolicies'];
  }
  
  getAfterAttemptPolicies(): Array<any> {
      return this._fields['afterAttemptPolicies'];
  }

  setAfterAttemptPolicies(value: Array<any>) {
    this._fields['afterAttemptPolicies'] = value;

    return this;
  }

  get afterRetryEndPolicies(): Array<any> {
    return this._fields['afterRetryEndPolicies'];
  }
  
  getAfterRetryEndPolicies(): Array<any> {
      return this._fields['afterRetryEndPolicies'];
  }

  setAfterRetryEndPolicies(value: Array<any>) {
    this._fields['afterRetryEndPolicies'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'attempts')) {
      data['attempts'] = this['attempts'].map(
          (invoiceRetryInstructionAttempts: InvoiceRetryInstructionAttempts) => invoiceRetryInstructionAttempts.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'afterAttemptPolicies')) {
      data['afterAttemptPolicies'] = this['afterAttemptPolicies'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'afterRetryEndPolicies')) {
      data['afterRetryEndPolicies'] = this['afterRetryEndPolicies'];
    }

    return data;
  }
}
