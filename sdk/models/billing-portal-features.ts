
export default class BillingPortalFeatures {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'authenticateWithPassword')) {
      this.setAuthenticateWithPassword(data['authenticateWithPassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'orderCancel')) {
      this.setOrderCancel(data['orderCancel']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'orderAddressEdit')) {
      this.setOrderAddressEdit(data['orderAddressEdit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentAdd')) {
      this.setPaymentInstrumentAdd(data['paymentInstrumentAdd']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentUpdate')) {
      this.setPaymentInstrumentUpdate(data['paymentInstrumentUpdate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentDeactivate')) {
      this.setPaymentInstrumentDeactivate(data['paymentInstrumentDeactivate']);
    }
  }


  get authenticateWithPassword(): boolean | null {
    return this._fields['authenticateWithPassword'] ?? null;
  }
  
  getAuthenticateWithPassword(): boolean | null {
      return this._fields['authenticateWithPassword'] ?? null;
  }

  setAuthenticateWithPassword(value: null | boolean) {
    this._fields['authenticateWithPassword'] = value;

    return this;
  }

  get orderCancel(): boolean | null {
    return this._fields['orderCancel'] ?? null;
  }
  
  getOrderCancel(): boolean | null {
      return this._fields['orderCancel'] ?? null;
  }

  setOrderCancel(value: null | boolean) {
    this._fields['orderCancel'] = value;

    return this;
  }

  get orderAddressEdit(): boolean | null {
    return this._fields['orderAddressEdit'] ?? null;
  }
  
  getOrderAddressEdit(): boolean | null {
      return this._fields['orderAddressEdit'] ?? null;
  }

  setOrderAddressEdit(value: null | boolean) {
    this._fields['orderAddressEdit'] = value;

    return this;
  }

  get paymentInstrumentAdd(): boolean | null {
    return this._fields['paymentInstrumentAdd'] ?? null;
  }
  
  getPaymentInstrumentAdd(): boolean | null {
      return this._fields['paymentInstrumentAdd'] ?? null;
  }

  setPaymentInstrumentAdd(value: null | boolean) {
    this._fields['paymentInstrumentAdd'] = value;

    return this;
  }

  get paymentInstrumentUpdate(): boolean | null {
    return this._fields['paymentInstrumentUpdate'] ?? null;
  }
  
  getPaymentInstrumentUpdate(): boolean | null {
      return this._fields['paymentInstrumentUpdate'] ?? null;
  }

  setPaymentInstrumentUpdate(value: null | boolean) {
    this._fields['paymentInstrumentUpdate'] = value;

    return this;
  }

  get paymentInstrumentDeactivate(): boolean | null {
    return this._fields['paymentInstrumentDeactivate'] ?? null;
  }
  
  getPaymentInstrumentDeactivate(): boolean | null {
      return this._fields['paymentInstrumentDeactivate'] ?? null;
  }

  setPaymentInstrumentDeactivate(value: null | boolean) {
    this._fields['paymentInstrumentDeactivate'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authenticateWithPassword')) {
      data['authenticateWithPassword'] = this['authenticateWithPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'orderCancel')) {
      data['orderCancel'] = this['orderCancel'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'orderAddressEdit')) {
      data['orderAddressEdit'] = this['orderAddressEdit'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentAdd')) {
      data['paymentInstrumentAdd'] = this['paymentInstrumentAdd'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentUpdate')) {
      data['paymentInstrumentUpdate'] = this['paymentInstrumentUpdate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentDeactivate')) {
      data['paymentInstrumentDeactivate'] = this['paymentInstrumentDeactivate'];
    }

    return data;
  }
}
