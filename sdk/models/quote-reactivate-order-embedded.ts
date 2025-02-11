import Customer from '../models/customer';
import Website from '../models/website';
import Subscription from '../models/subscription';
import Invoice from '../models/invoice';

export default class QuoteReactivateOrderEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'customer')) {
      this.setCustomer(data['customer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'website')) {
      this.setWebsite(data['website']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subscription')) {
      this.setSubscription(data['subscription']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoice')) {
      this.setInvoice(data['invoice']);
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

  get subscription(): Subscription | null {
    return this._fields['subscription'] ?? null;
  }
  
  getSubscription(): Subscription | null {
      return this._fields['subscription'] ?? null;
  }

  setSubscription(value: null | Subscription | any) {
    if (value !== null && !(value instanceof Subscription)) {
      value = new Subscription(value);
    }

    this._fields['subscription'] = value;

    return this;
  }

  get invoice(): Invoice | null {
    return this._fields['invoice'] ?? null;
  }
  
  getInvoice(): Invoice | null {
      return this._fields['invoice'] ?? null;
  }

  setInvoice(value: null | Invoice | any) {
    if (value !== null && !(value instanceof Invoice)) {
      value = new Invoice(value);
    }

    this._fields['invoice'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subscription')) {
      data['subscription'] = this['subscription']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoice')) {
      data['invoice'] = this['invoice']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
