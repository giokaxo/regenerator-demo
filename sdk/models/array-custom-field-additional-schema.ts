
export default class ArrayCustomFieldAdditionalSchema {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'allowedValues')) {
      this.setAllowedValues(data['allowedValues']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'required')) {
      this.setRequired(data['required']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'default')) {
      this.setDefault(data['default']);
    }
  }


  get allowedValues(): Array<any> | null {
    return this._fields['allowedValues'] ?? null;
  }
  
  getAllowedValues(): Array<any> | null {
      return this._fields['allowedValues'] ?? null;
  }

  setAllowedValues(value: null | Array<any>) {
    this._fields['allowedValues'] = value;

    return this;
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

  get default(): Array<any> | null {
    return this._fields['default'] ?? null;
  }
  
  getDefault(): Array<any> | null {
      return this._fields['default'] ?? null;
  }

  setDefault(value: null | Array<any>) {
    this._fields['default'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'allowedValues')) {
      data['allowedValues'] = this['allowedValues'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'required')) {
      data['required'] = this['required'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'default')) {
      data['default'] = this['default'];
    }

    return data;
  }
}
