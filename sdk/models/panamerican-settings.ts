
export default class PanamericanSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'extraStep')) {
      this.setExtraStep(data['extraStep']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'convertToAscii')) {
      this.setConvertToAscii(data['convertToAscii']);
    }
  }


  get extraStep(): boolean {
    return this._fields['extraStep'];
  }
  
  getExtraStep(): boolean {
      return this._fields['extraStep'];
  }

  setExtraStep(value: boolean) {
    this._fields['extraStep'] = value;

    return this;
  }

  get convertToAscii(): boolean | null {
    return this._fields['convertToAscii'] ?? null;
  }
  
  getConvertToAscii(): boolean | null {
      return this._fields['convertToAscii'] ?? null;
  }

  setConvertToAscii(value: null | boolean) {
    this._fields['convertToAscii'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'extraStep')) {
      data['extraStep'] = this['extraStep'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'convertToAscii')) {
      data['convertToAscii'] = this['convertToAscii'];
    }

    return data;
  }
}
