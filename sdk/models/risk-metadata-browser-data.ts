
export default class RiskMetadataBrowserData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'colorDepth')) {
      this.setColorDepth(data['colorDepth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isJavaEnabled')) {
      this.setIsJavaEnabled(data['isJavaEnabled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'language')) {
      this.setLanguage(data['language']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'screenWidth')) {
      this.setScreenWidth(data['screenWidth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'screenHeight')) {
      this.setScreenHeight(data['screenHeight']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'timeZoneOffset')) {
      this.setTimeZoneOffset(data['timeZoneOffset']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isAdBlockEnabled')) {
      this.setIsAdBlockEnabled(data['isAdBlockEnabled']);
    }
  }


  get colorDepth(): number {
    return this._fields['colorDepth'];
  }
  
  getColorDepth(): number {
      return this._fields['colorDepth'];
  }

  setColorDepth(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['colorDepth'] = value;

    return this;
  }

  get isJavaEnabled(): boolean {
    return this._fields['isJavaEnabled'];
  }
  
  getIsJavaEnabled(): boolean {
      return this._fields['isJavaEnabled'];
  }

  setIsJavaEnabled(value: boolean) {
    this._fields['isJavaEnabled'] = value;

    return this;
  }

  get language(): string {
    return this._fields['language'];
  }
  
  getLanguage(): string {
      return this._fields['language'];
  }

  setLanguage(value: string) {
    this._fields['language'] = value;

    return this;
  }

  get screenWidth(): number {
    return this._fields['screenWidth'];
  }
  
  getScreenWidth(): number {
      return this._fields['screenWidth'];
  }

  setScreenWidth(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['screenWidth'] = value;

    return this;
  }

  get screenHeight(): number {
    return this._fields['screenHeight'];
  }
  
  getScreenHeight(): number {
      return this._fields['screenHeight'];
  }

  setScreenHeight(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['screenHeight'] = value;

    return this;
  }

  get timeZoneOffset(): number {
    return this._fields['timeZoneOffset'];
  }
  
  getTimeZoneOffset(): number {
      return this._fields['timeZoneOffset'];
  }

  setTimeZoneOffset(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['timeZoneOffset'] = value;

    return this;
  }

  get isAdBlockEnabled(): boolean | null {
    return this._fields['isAdBlockEnabled'] ?? null;
  }
  
  getIsAdBlockEnabled(): boolean | null {
      return this._fields['isAdBlockEnabled'] ?? null;
  }

  setIsAdBlockEnabled(value: null | boolean) {
    this._fields['isAdBlockEnabled'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'colorDepth')) {
      data['colorDepth'] = this['colorDepth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isJavaEnabled')) {
      data['isJavaEnabled'] = this['isJavaEnabled'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'language')) {
      data['language'] = this['language'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'screenWidth')) {
      data['screenWidth'] = this['screenWidth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'screenHeight')) {
      data['screenHeight'] = this['screenHeight'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'timeZoneOffset')) {
      data['timeZoneOffset'] = this['timeZoneOffset'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isAdBlockEnabled')) {
      data['isAdBlockEnabled'] = this['isAdBlockEnabled'];
    }

    return data;
  }
}
