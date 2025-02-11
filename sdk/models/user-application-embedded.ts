import ApplicationInstance from '../models/application-instance';

export default class UserApplicationEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'applicationInstance')) {
      this.setApplicationInstance(data['applicationInstance']);
    }
  }


  get applicationInstance(): ApplicationInstance | null {
    return this._fields['applicationInstance'] ?? null;
  }
  
  getApplicationInstance(): ApplicationInstance | null {
      return this._fields['applicationInstance'] ?? null;
  }

  setApplicationInstance(value: null | ApplicationInstance | any) {
    if (value !== null && !(value instanceof ApplicationInstance)) {
      value = new ApplicationInstance(value);
    }

    this._fields['applicationInstance'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'applicationInstance')) {
      data['applicationInstance'] = this['applicationInstance']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
