import Transaction from '../models/transaction';
import GatewayAccount from '../models/gateway-account';
import Customer from '../models/customer';
import LeadSource from '../models/lead-source';
import Website from '../models/website';
import Organization from '../models/organization';
import Dispute from '../models/dispute';
import PaymentCard from '../models/payment-card';
import BankAccount from '../models/bank-account';
import Invoice from '../models/invoice';

export default class TransactionEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'parentTransaction')) {
      this.setParentTransaction(data['parentTransaction']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'childTransactions')) {
      this.setChildTransactions(data['childTransactions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'gatewayAccount')) {
      this.setGatewayAccount(data['gatewayAccount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customer')) {
      this.setCustomer(data['customer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'leadSource')) {
      this.setLeadSource(data['leadSource']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'website')) {
      this.setWebsite(data['website']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoices')) {
      this.setInvoices(data['invoices']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organization')) {
      this.setOrganization(data['organization']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dispute')) {
      this.setDispute(data['dispute']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentCard')) {
      this.setPaymentCard(data['paymentCard']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bankAccount')) {
      this.setBankAccount(data['bankAccount']);
    }
  }


  get parentTransaction(): Transaction | null {
    return this._fields['parentTransaction'] ?? null;
  }
  
  getParentTransaction(): Transaction | null {
      return this._fields['parentTransaction'] ?? null;
  }

  setParentTransaction(value: null | Transaction | any) {
    if (value !== null && !(value instanceof Transaction)) {
      value = new Transaction(value);
    }

    this._fields['parentTransaction'] = value;

    return this;
  }

  get childTransactions(): Array<any> | null {
    return this._fields['childTransactions'] ?? null;
  }
  
  getChildTransactions(): Array<any> | null {
      return this._fields['childTransactions'] ?? null;
  }

  setChildTransactions(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Transaction ? value : new Transaction(value),
    ) : null;

    this._fields['childTransactions'] = value;

    return this;
  }

  get gatewayAccount(): GatewayAccount | null {
    return this._fields['gatewayAccount'] ?? null;
  }
  
  getGatewayAccount(): GatewayAccount | null {
      return this._fields['gatewayAccount'] ?? null;
  }

  setGatewayAccount(value: null | GatewayAccount | any) {
    if (value !== null && !(value instanceof GatewayAccount)) {
      value = new GatewayAccount(value);
    }

    this._fields['gatewayAccount'] = value;

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

  get invoices(): Array<any> | null {
    return this._fields['invoices'] ?? null;
  }
  
  getInvoices(): Array<any> | null {
      return this._fields['invoices'] ?? null;
  }

  setInvoices(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Invoice ? value : new Invoice(value),
    ) : null;

    this._fields['invoices'] = value;

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

  get dispute(): Dispute | null {
    return this._fields['dispute'] ?? null;
  }
  
  getDispute(): Dispute | null {
      return this._fields['dispute'] ?? null;
  }

  setDispute(value: null | Dispute | any) {
    if (value !== null && !(value instanceof Dispute)) {
      value = new Dispute(value);
    }

    this._fields['dispute'] = value;

    return this;
  }

  get paymentCard(): PaymentCard | null {
    return this._fields['paymentCard'] ?? null;
  }
  
  getPaymentCard(): PaymentCard | null {
      return this._fields['paymentCard'] ?? null;
  }

  setPaymentCard(value: null | PaymentCard | any) {
    if (value !== null && !(value instanceof PaymentCard)) {
      value = new PaymentCard(value);
    }

    this._fields['paymentCard'] = value;

    return this;
  }

  get bankAccount(): BankAccount | null {
    return this._fields['bankAccount'] ?? null;
  }
  
  getBankAccount(): BankAccount | null {
      return this._fields['bankAccount'] ?? null;
  }

  setBankAccount(value: null | BankAccount | any) {
    if (value !== null && !(value instanceof BankAccount)) {
      value = new BankAccount(value);
    }

    this._fields['bankAccount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'parentTransaction')) {
      data['parentTransaction'] = this['parentTransaction']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'childTransactions')) {
      data['childTransactions'] = this['childTransactions'] !== null
          ? this._fields['childTransactions'].map((transaction: Transaction) => transaction.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gatewayAccount')) {
      data['gatewayAccount'] = this['gatewayAccount']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customer')) {
      data['customer'] = this['customer']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'leadSource')) {
      data['leadSource'] = this['leadSource']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'website')) {
      data['website'] = this['website']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoices')) {
      data['invoices'] = this['invoices'] !== null
          ? this._fields['invoices'].map((invoice: Invoice) => invoice.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organization')) {
      data['organization'] = this['organization']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dispute')) {
      data['dispute'] = this['dispute']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentCard')) {
      data['paymentCard'] = this['paymentCard']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bankAccount')) {
      data['bankAccount'] = this['bankAccount']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
