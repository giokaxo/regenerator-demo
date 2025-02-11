
export default class EBANXCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'integrationKey')) {
      this.setIntegrationKey(data['integrationKey']);
    }
  }


  get integrationKey(): string {
    return this._fields['integrationKey'];
  }
  
  getIntegrationKey(): string {
      return this._fields['integrationKey'];
  }

  setIntegrationKey(value: string) {
    this._fields['integrationKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'integrationKey')) {
      data['integrationKey'] = this['integrationKey'];
    }

    return data;
  }
}
