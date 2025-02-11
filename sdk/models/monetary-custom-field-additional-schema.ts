import MonetaryCustomFieldAdditionalSchemaDefault from '../models/monetary-custom-field-additional-schema-default';

export default class MonetaryCustomFieldAdditionalSchema {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'required')) {
      this.setRequired(data['required']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'default')) {
      this.setDefault(data['default']);
    }
  }


  get required(): boolean | null {
    return this._fields['required'] ?? null;
  }
  
  getRequired(): boolean | null {
      return this._fields['required'] ?? null;
  }

  setRequired(value: null | boolean) {
    this._fields['required'] = value;

    return this;
  }

  get default(): MonetaryCustomFieldAdditionalSchemaDefault | null {
    return this._fields['default'] ?? null;
  }
  
  getDefault(): MonetaryCustomFieldAdditionalSchemaDefault | null {
      return this._fields['default'] ?? null;
  }

  setDefault(value: null | MonetaryCustomFieldAdditionalSchemaDefault | any) {
    if (value !== null && !(value instanceof MonetaryCustomFieldAdditionalSchemaDefault)) {
      value = new MonetaryCustomFieldAdditionalSchemaDefault(value);
    }

    this._fields['default'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'required')) {
      data['required'] = this['required'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'default')) {
      data['default'] = this['default']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
