
export default class NumberCustomFieldAdditionalSchema {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'minimum')) {
      this.setMinimum(data['minimum']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'maximum')) {
      this.setMaximum(data['maximum']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'required')) {
      this.setRequired(data['required']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'default')) {
      this.setDefault(data['default']);
    }
  }


  get minimum(): number | null {
    return this._fields['minimum'] ?? null;
  }
  
  getMinimum(): number | null {
      return this._fields['minimum'] ?? null;
  }

  setMinimum(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['minimum'] = value;

    return this;
  }

  get maximum(): number | null {
    return this._fields['maximum'] ?? null;
  }
  
  getMaximum(): number | null {
      return this._fields['maximum'] ?? null;
  }

  setMaximum(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['maximum'] = value;

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

  get default(): number | null {
    return this._fields['default'] ?? null;
  }
  
  getDefault(): number | null {
      return this._fields['default'] ?? null;
  }

  setDefault(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['default'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'minimum')) {
      data['minimum'] = this['minimum'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'maximum')) {
      data['maximum'] = this['maximum'];
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
