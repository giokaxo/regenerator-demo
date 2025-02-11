import RuleActionCreateInfusionsoftOrderContactBodyEmailAddresses from '../models/rule-action-create-infusionsoft-order-contact-body-email-addresses';
import RuleActionCreateInfusionsoftOrderContactBodyPhoneNumbers from '../models/rule-action-create-infusionsoft-order-contact-body-phone-numbers';

export default class RuleActionCreateInfusionsoftOrderContactBody {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'email_addresses')) {
      this.setEmailAddresses(data['email_addresses']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'phone_numbers')) {
      this.setPhoneNumbers(data['phone_numbers']);
    }
  }


  get emailAddresses(): Array<any> | null {
    return this._fields['email_addresses'] ?? null;
  }
  
  getEmailAddresses(): Array<any> | null {
      return this._fields['email_addresses'] ?? null;
  }

  setEmailAddresses(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof RuleActionCreateInfusionsoftOrderContactBodyEmailAddresses ? value : new RuleActionCreateInfusionsoftOrderContactBodyEmailAddresses(value),
    ) : null;

    this._fields['email_addresses'] = value;

    return this;
  }

  get phoneNumbers(): Array<any> | null {
    return this._fields['phone_numbers'] ?? null;
  }
  
  getPhoneNumbers(): Array<any> | null {
      return this._fields['phone_numbers'] ?? null;
  }

  setPhoneNumbers(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof RuleActionCreateInfusionsoftOrderContactBodyPhoneNumbers ? value : new RuleActionCreateInfusionsoftOrderContactBodyPhoneNumbers(value),
    ) : null;

    this._fields['phone_numbers'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'emailAddresses')) {
      data['email_addresses'] = this['emailAddresses'] !== null
          ? this._fields['email_addresses'].map((ruleActionCreateInfusionsoftOrderContactBodyEmailAddresses: RuleActionCreateInfusionsoftOrderContactBodyEmailAddresses) => ruleActionCreateInfusionsoftOrderContactBodyEmailAddresses.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'phoneNumbers')) {
      data['phone_numbers'] = this['phoneNumbers'] !== null
          ? this._fields['phone_numbers'].map((ruleActionCreateInfusionsoftOrderContactBodyPhoneNumbers: RuleActionCreateInfusionsoftOrderContactBodyPhoneNumbers) => ruleActionCreateInfusionsoftOrderContactBodyPhoneNumbers.jsonSerialize())
          : null;
    }

    return data;
  }
}
