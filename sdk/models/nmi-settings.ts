
export default class NMISettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'disableStoredCredentials')) {
      this.setDisableStoredCredentials(data['disableStoredCredentials']);
    }
  }


  get disableStoredCredentials(): boolean | null {
    return this._fields['disableStoredCredentials'] ?? null;
  }
  
  getDisableStoredCredentials(): boolean | null {
      return this._fields['disableStoredCredentials'] ?? null;
  }

  setDisableStoredCredentials(value: null | boolean) {
    this._fields['disableStoredCredentials'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'disableStoredCredentials')) {
      data['disableStoredCredentials'] = this['disableStoredCredentials'];
    }

    return data;
  }
}
