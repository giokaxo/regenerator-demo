import LeadSource from '../models/lead-source';

export default class CustomerEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'leadSource')) {
      this.setLeadSource(data['leadSource']);
    }
  }


  get leadSource(): LeadSource | null {
    return this._fields['leadSource'] ?? null;
  }
  
  getLeadSource(): LeadSource | null {
      return this._fields['leadSource'] ?? null;
  }

  setLeadSource(value: null | LeadSource | any) {
    if (value !== null && !(value instanceof LeadSource)) {
      value = new LeadSource(value);
    }

    this._fields['leadSource'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'leadSource')) {
      data['leadSource'] = this['leadSource']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
