
export default class RuleActionCreateInfusionsoftOrderContactBodyPhoneNumbers {
  FIELD_PHONE1 = 'PHONE1';

  FIELD_PHONE2 = 'PHONE2';

  FIELD_PHONE3 = 'PHONE3';

  FIELD_PHONE4 = 'PHONE4';

  FIELD_PHONE5 = 'PHONE5';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'number')) {
      this.setNumber(data['number']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'field')) {
      this.setField(data['field']);
    }
  }


  get number(): string | null {
    return this._fields['number'] ?? null;
  }
  
  getNumber(): string | null {
      return this._fields['number'] ?? null;
  }

  setNumber(value: null | string) {
    this._fields['number'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'number')) {
      data['number'] = this['number'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'field')) {
      data['field'] = this['field'];
    }

    return data;
  }
}
