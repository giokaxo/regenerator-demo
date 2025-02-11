
export default class DateTimeCustomFieldAdditionalSchema {
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

  get default(): Date | null {
    return this._fields['default'] ?? null;
  }
  
  getDefault(): Date | null {
      return this._fields['default'] ?? null;
  }

  setDefault(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
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
      data['default'] = this['default']?.toISOString() ?? null;
    }

    return data;
  }
}
