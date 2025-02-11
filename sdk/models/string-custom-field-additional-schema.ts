
export default class StringCustomFieldAdditionalSchema {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'allowedValues')) {
      this.setAllowedValues(data['allowedValues']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'maxLength')) {
      this.setMaxLength(data['maxLength']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'pattern')) {
      this.setPattern(data['pattern']);
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

  get maxLength(): number | null {
    return this._fields['maxLength'] ?? null;
  }
  
  getMaxLength(): number | null {
      return this._fields['maxLength'] ?? null;
  }

  setMaxLength(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['maxLength'] = value;

    return this;
  }

  get pattern(): string | null {
    return this._fields['pattern'] ?? null;
  }
  
  getPattern(): string | null {
      return this._fields['pattern'] ?? null;
  }

  setPattern(value: null | string) {
    this._fields['pattern'] = value;

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

  get default(): string | null {
    return this._fields['default'] ?? null;
  }
  
  getDefault(): string | null {
      return this._fields['default'] ?? null;
  }

  setDefault(value: null | string) {
    this._fields['default'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'allowedValues')) {
      data['allowedValues'] = this['allowedValues'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'maxLength')) {
      data['maxLength'] = this['maxLength'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'pattern')) {
      data['pattern'] = this['pattern'];
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
