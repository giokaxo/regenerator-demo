import Organization from '../models/organization';

export default class ApiTrackingEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'organization')) {
      this.setOrganization(data['organization']);
    }
  }


  get organization(): Organization | null {
    return this._fields['organization'] ?? null;
  }
  
  getOrganization(): Organization | null {
      return this._fields['organization'] ?? null;
  }

  setOrganization(value: null | Organization | any) {
    if (value !== null && !(value instanceof Organization)) {
      value = new Organization(value);
    }

    this._fields['organization'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organization')) {
      data['organization'] = this['organization']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
