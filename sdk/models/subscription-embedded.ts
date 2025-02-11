import PaymentInstrumentFactory from '../factories/payment-instrument-factory';
import Invoice from '../models/invoice';
import Customer from '../models/customer';
import Website from '../models/website';
import LeadSource from '../models/lead-source';
import ShippingRate from '../models/shipping-rate';
import { PaymentInstrument } from '../models/payment-instrument';
import UpcomingInvoice from '../models/upcoming-invoice';

export default class SubscriptionEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'recentInvoice')) {
      this.setRecentInvoice(data['recentInvoice']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'initialInvoice')) {
      this.setInitialInvoice(data['initialInvoice']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customer')) {
      this.setCustomer(data['customer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'website')) {
      this.setWebsite(data['website']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'leadSource')) {
      this.setLeadSource(data['leadSource']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'shippingRate')) {
      this.setShippingRate(data['shippingRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrument')) {
      this.setPaymentInstrument(data['paymentInstrument']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'upcomingInvoice')) {
      this.setUpcomingInvoice(data['upcomingInvoice']);
    }
  }


  get recentInvoice(): Invoice | null {
    return this._fields['recentInvoice'] ?? null;
  }
  
  getRecentInvoice(): Invoice | null {
      return this._fields['recentInvoice'] ?? null;
  }

  setRecentInvoice(value: null | Invoice | any) {
    if (value !== null && !(value instanceof Invoice)) {
      value = new Invoice(value);
    }

    this._fields['recentInvoice'] = value;

    return this;
  }

  get initialInvoice(): Invoice | null {
    return this._fields['initialInvoice'] ?? null;
  }
  
  getInitialInvoice(): Invoice | null {
      return this._fields['initialInvoice'] ?? null;
  }

  setInitialInvoice(value: null | Invoice | any) {
    if (value !== null && !(value instanceof Invoice)) {
      value = new Invoice(value);
    }

    this._fields['initialInvoice'] = value;

    return this;
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

  get shippingRate(): ShippingRate | null {
    return this._fields['shippingRate'] ?? null;
  }
  
  getShippingRate(): ShippingRate | null {
      return this._fields['shippingRate'] ?? null;
  }

  setShippingRate(value: null | ShippingRate | any) {
    if (value !== null && !(value instanceof ShippingRate)) {
      value = new ShippingRate(value);
    }

    this._fields['shippingRate'] = value;

    return this;
  }

  get paymentInstrument(): PaymentInstrument | null {
    return this._fields['paymentInstrument'] ?? null;
  }
  
  getPaymentInstrument(): PaymentInstrument | null {
      return this._fields['paymentInstrument'] ?? null;
  }

  setPaymentInstrument(value: null | PaymentInstrument | any) {
    if (value !== null && !(value[PaymentInstrument])) {
      value = PaymentInstrumentFactory.from(value);
    }

    this._fields['paymentInstrument'] = value;

    return this;
  }

  get upcomingInvoice(): UpcomingInvoice | null {
    return this._fields['upcomingInvoice'] ?? null;
  }
  
  getUpcomingInvoice(): UpcomingInvoice | null {
      return this._fields['upcomingInvoice'] ?? null;
  }

  setUpcomingInvoice(value: null | UpcomingInvoice | any) {
    if (value !== null && !(value instanceof UpcomingInvoice)) {
      value = new UpcomingInvoice(value);
    }

    this._fields['upcomingInvoice'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recentInvoice')) {
      data['recentInvoice'] = this['recentInvoice']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'initialInvoice')) {
      data['initialInvoice'] = this['initialInvoice']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customer')) {
      data['customer'] = this['customer']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'website')) {
      data['website'] = this['website']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'leadSource')) {
      data['leadSource'] = this['leadSource']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shippingRate')) {
      data['shippingRate'] = this['shippingRate']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrument')) {
      data['paymentInstrument'] = this['paymentInstrument']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'upcomingInvoice')) {
      data['upcomingInvoice'] = this['upcomingInvoice']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
