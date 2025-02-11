
export default class QuickBooksOnlineInvoiceExternalServiceSettings {
  SYNC_MANUALLY = 'manually';

  SYNC_WHEN_ISSUED = 'when-issued';

  SYNC_ALWAYS = 'always';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'sync')) {
      this.setSync(data['sync']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unearnedRevenueAccountId')) {
      this.setUnearnedRevenueAccountId(data['unearnedRevenueAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxesAccountId')) {
      this.setTaxesAccountId(data['taxesAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'department')) {
      this.setDepartment(data['department']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'itemName')) {
      this.setItemName(data['itemName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'itemDescription')) {
      this.setItemDescription(data['itemDescription']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'itemSku')) {
      this.setItemSku(data['itemSku']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'itemLineDescription')) {
      this.setItemLineDescription(data['itemLineDescription']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxName')) {
      this.setTaxName(data['taxName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxDescription')) {
      this.setTaxDescription(data['taxDescription']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxSku')) {
      this.setTaxSku(data['taxSku']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxLineDescription')) {
      this.setTaxLineDescription(data['taxLineDescription']);
    }
  }


  get sync(): string | null {
    return this._fields['sync'] ?? null;
  }
  
  getSync(): string | null {
      return this._fields['sync'] ?? null;
  }

  setSync(value: null | string) {
    this._fields['sync'] = value;

    return this;
  }

  get unearnedRevenueAccountId(): string | null {
    return this._fields['unearnedRevenueAccountId'] ?? null;
  }
  
  getUnearnedRevenueAccountId(): string | null {
      return this._fields['unearnedRevenueAccountId'] ?? null;
  }

  setUnearnedRevenueAccountId(value: null | string) {
    this._fields['unearnedRevenueAccountId'] = value;

    return this;
  }

  get taxesAccountId(): string | null {
    return this._fields['taxesAccountId'] ?? null;
  }
  
  getTaxesAccountId(): string | null {
      return this._fields['taxesAccountId'] ?? null;
  }

  setTaxesAccountId(value: null | string) {
    this._fields['taxesAccountId'] = value;

    return this;
  }

  get department(): string | null {
    return this._fields['department'] ?? null;
  }
  
  getDepartment(): string | null {
      return this._fields['department'] ?? null;
  }

  setDepartment(value: null | string) {
    this._fields['department'] = value;

    return this;
  }

  get itemName(): string | null {
    return this._fields['itemName'] ?? null;
  }
  
  getItemName(): string | null {
      return this._fields['itemName'] ?? null;
  }

  setItemName(value: null | string) {
    this._fields['itemName'] = value;

    return this;
  }

  get itemDescription(): string | null {
    return this._fields['itemDescription'] ?? null;
  }
  
  getItemDescription(): string | null {
      return this._fields['itemDescription'] ?? null;
  }

  setItemDescription(value: null | string) {
    this._fields['itemDescription'] = value;

    return this;
  }

  get itemSku(): string | null {
    return this._fields['itemSku'] ?? null;
  }
  
  getItemSku(): string | null {
      return this._fields['itemSku'] ?? null;
  }

  setItemSku(value: null | string) {
    this._fields['itemSku'] = value;

    return this;
  }

  get itemLineDescription(): string | null {
    return this._fields['itemLineDescription'] ?? null;
  }
  
  getItemLineDescription(): string | null {
      return this._fields['itemLineDescription'] ?? null;
  }

  setItemLineDescription(value: null | string) {
    this._fields['itemLineDescription'] = value;

    return this;
  }

  get taxName(): string | null {
    return this._fields['taxName'] ?? null;
  }
  
  getTaxName(): string | null {
      return this._fields['taxName'] ?? null;
  }

  setTaxName(value: null | string) {
    this._fields['taxName'] = value;

    return this;
  }

  get taxDescription(): string | null {
    return this._fields['taxDescription'] ?? null;
  }
  
  getTaxDescription(): string | null {
      return this._fields['taxDescription'] ?? null;
  }

  setTaxDescription(value: null | string) {
    this._fields['taxDescription'] = value;

    return this;
  }

  get taxSku(): string | null {
    return this._fields['taxSku'] ?? null;
  }
  
  getTaxSku(): string | null {
      return this._fields['taxSku'] ?? null;
  }

  setTaxSku(value: null | string) {
    this._fields['taxSku'] = value;

    return this;
  }

  get taxLineDescription(): string | null {
    return this._fields['taxLineDescription'] ?? null;
  }
  
  getTaxLineDescription(): string | null {
      return this._fields['taxLineDescription'] ?? null;
  }

  setTaxLineDescription(value: null | string) {
    this._fields['taxLineDescription'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sync')) {
      data['sync'] = this['sync'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unearnedRevenueAccountId')) {
      data['unearnedRevenueAccountId'] = this['unearnedRevenueAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxesAccountId')) {
      data['taxesAccountId'] = this['taxesAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'department')) {
      data['department'] = this['department'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'itemName')) {
      data['itemName'] = this['itemName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'itemDescription')) {
      data['itemDescription'] = this['itemDescription'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'itemSku')) {
      data['itemSku'] = this['itemSku'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'itemLineDescription')) {
      data['itemLineDescription'] = this['itemLineDescription'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxName')) {
      data['taxName'] = this['taxName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxDescription')) {
      data['taxDescription'] = this['taxDescription'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxSku')) {
      data['taxSku'] = this['taxSku'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxLineDescription')) {
      data['taxLineDescription'] = this['taxLineDescription'];
    }

    return data;
  }
}
