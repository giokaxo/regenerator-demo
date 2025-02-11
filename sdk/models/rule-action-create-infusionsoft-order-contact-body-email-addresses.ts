
export default class RuleActionCreateInfusionsoftOrderContactBodyEmailAddresses {
  FIELD_EMAIL1 = 'EMAIL1';

  FIELD_EMAIL2 = 'EMAIL2';

  FIELD_EMAIL3 = 'EMAIL3';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'email')) {
      this.setEmail(data['email']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'field')) {
      this.setField(data['field']);
    }
  }


  get email(): string | null {
    return this._fields['email'] ?? null;
  }
  
  getEmail(): string | null {
      return this._fields['email'] ?? null;
  }

  setEmail(value: null | string) {
    this._fields['email'] = value;

    return this;
  }

  get field(): string | null {
    return this._fields['field'] ?? null;
  }
  
  getField(): string | null {
      return this._fields['field'] ?? null;
  }

  setField(value: null | string) {
    this._fields['field'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'email')) {
      data['email'] = this['email'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'field')) {
      data['field'] = this['field'];
    }

    return data;
  }
}
