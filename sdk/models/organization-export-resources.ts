
export default class OrganizationExportResources {
  TYPE_CUSTOMERS = 'customers';

  TYPE_USERS = 'users';

  TYPE_PAYMENT_INSTRUMENTS = 'payment-instruments';

  TYPE_INVOICES = 'invoices';

  TYPE_ORDERS = 'orders';

  TYPE_TRANSACTIONS = 'transactions';

  TYPE_DISPUTES = 'disputes';

  TYPE_GATEWAY_ACCOUNTS = 'gateway-accounts';

  TYPE_BLOCKLISTS = 'blocklists';

  TYPE_LISTS = 'lists';

  TYPE_WEBHOOKS = 'webhooks';

  TYPE_PRODUCTS = 'products';

  TYPE_WEBSITES = 'websites';

  TYPE_PLANS = 'plans';

  TYPE_CREDIT_MEMOS = 'credit-memos';

  TYPE_FILES = 'files';

  TYPE_EMAIL_NOTIFICATIONS = 'email-notifications';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recordCount')) {
      this.setRecordCount(data['recordCount']);
    }
  }


  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  private setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  get recordCount(): number | null {
    return this._fields['recordCount'] ?? null;
  }
  
  getRecordCount(): number | null {
      return this._fields['recordCount'] ?? null;
  }

  private setRecordCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['recordCount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recordCount')) {
      data['recordCount'] = this['recordCount'];
    }

    return data;
  }
}
