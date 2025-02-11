
export default class AmlSettingsPriorityEnforcements {
  VERY_STRONG_P0 = 'p0';

  VERY_STRONG_P1 = 'p1';

  VERY_STRONG_P2 = 'p2';

  VERY_STRONG_P3 = 'p3';

  STRONG_P0 = 'p0';

  STRONG_P1 = 'p1';

  STRONG_P2 = 'p2';

  STRONG_P3 = 'p3';

  MEDIUM_P0 = 'p0';

  MEDIUM_P1 = 'p1';

  MEDIUM_P2 = 'p2';

  MEDIUM_P3 = 'p3';

  WEAK_P0 = 'p0';

  WEAK_P1 = 'p1';

  WEAK_P2 = 'p2';

  WEAK_P3 = 'p3';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'veryStrong')) {
      this.setVeryStrong(data['veryStrong']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'strong')) {
      this.setStrong(data['strong']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'medium')) {
      this.setMedium(data['medium']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'weak')) {
      this.setWeak(data['weak']);
    }
  }


  get veryStrong(): string | null {
    return this._fields['veryStrong'] ?? null;
  }
  
  getVeryStrong(): string | null {
      return this._fields['veryStrong'] ?? null;
  }

  setVeryStrong(value: null | string) {
    this._fields['veryStrong'] = value;

    return this;
  }

  get strong(): string | null {
    return this._fields['strong'] ?? null;
  }
  
  getStrong(): string | null {
      return this._fields['strong'] ?? null;
  }

  setStrong(value: null | string) {
    this._fields['strong'] = value;

    return this;
  }

  get medium(): string | null {
    return this._fields['medium'] ?? null;
  }
  
  getMedium(): string | null {
      return this._fields['medium'] ?? null;
  }

  setMedium(value: null | string) {
    this._fields['medium'] = value;

    return this;
  }

  get weak(): string | null {
    return this._fields['weak'] ?? null;
  }
  
  getWeak(): string | null {
      return this._fields['weak'] ?? null;
  }

  setWeak(value: null | string) {
    this._fields['weak'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'veryStrong')) {
      data['veryStrong'] = this['veryStrong'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'strong')) {
      data['strong'] = this['strong'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'medium')) {
      data['medium'] = this['medium'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'weak')) {
      data['weak'] = this['weak'];
    }

    return data;
  }
}
