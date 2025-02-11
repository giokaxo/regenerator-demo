
export default class CCAvenueSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'useStandingInstructionApi')) {
      this.setUseStandingInstructionApi(data['useStandingInstructionApi']);
    }
  }


  get useStandingInstructionApi(): boolean | null {
    return this._fields['useStandingInstructionApi'] ?? null;
  }
  
  getUseStandingInstructionApi(): boolean | null {
      return this._fields['useStandingInstructionApi'] ?? null;
  }

  setUseStandingInstructionApi(value: null | boolean) {
    this._fields['useStandingInstructionApi'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useStandingInstructionApi')) {
      data['useStandingInstructionApi'] = this['useStandingInstructionApi'];
    }

    return data;
  }
}
