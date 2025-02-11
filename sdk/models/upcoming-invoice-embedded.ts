import Customer from '../models/customer';
import Website from '../models/website';
import Organization from '../models/organization';
import LeadSource from '../models/lead-source';

export default class UpcomingInvoiceEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'customer')) {
      this.setCustomer(data['customer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'website')) {
      this.setWebsite(data['website']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organization')) {
      this.setOrganization(data['organization']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'leadSource')) {
      this.setLeadSource(data['leadSource']);
    }
  }


  get customer(): Customer | null {
    return this._fields['customer'] ?? null;
  }
  
  getCustomer(): Customer | null {
      return this._fields['customer'] ?? null;
  }

  setCustomer(value: null | Customer | any) {
    if (value !== null && !(value instanceof Customer)) {
      value = new Customer(value);
    }

    this._fields['customer'] = value;

    return this;
  }

  get website(): Website | null {
    return this._fields['website'] ?? null;
  }
  
  getWebsite(): Website | null {
      return this._fields['website'] ?? null;
  }

  setWebsite(value: null | Website | any) {
    if (value !== null && !(value instanceof Website)) {
      value = new Website(value);
    }

    this._fields['website'] = value;

    return this;
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customer')) {
      data['customer'] = this['customer']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'website')) {
      data['website'] = this['website']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organization')) {
      data['organization'] = this['organization']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'leadSource')) {
      data['leadSource'] = this['leadSource']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
