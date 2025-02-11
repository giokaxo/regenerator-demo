
export default class RedsysSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'terminal')) {
      this.setTerminal(data['terminal']);
    }
  }


  get terminal(): string | null {
    return this._fields['terminal'] ?? null;
  }
  
  getTerminal(): string | null {
      return this._fields['terminal'] ?? null;
  }

  setTerminal(value: null | string) {
    this._fields['terminal'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'terminal')) {
      data['terminal'] = this['terminal'];
    }

    return data;
  }
}
