
export default class WebsiteSettingsPaymentFormFeatures {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'showCoupons')) {
      this.setShowCoupons(data['showCoupons']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fullPageRedirect')) {
      this.setFullPageRedirect(data['fullPageRedirect']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'skipRedirectOnPaymentComplete')) {
      this.setSkipRedirectOnPaymentComplete(data['skipRedirectOnPaymentComplete']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hideZeroAmountSummaryItems')) {
      this.setHideZeroAmountSummaryItems(data['hideZeroAmountSummaryItems']);
    }
  }


  get showCoupons(): Array<any> | null {
    return this._fields['showCoupons'] ?? null;
  }
  
  getShowCoupons(): Array<any> | null {
      return this._fields['showCoupons'] ?? null;
  }

  setShowCoupons(value: null | Array<any>) {
    this._fields['showCoupons'] = value;

    return this;
  }

  get fullPageRedirect(): boolean | null {
    return this._fields['fullPageRedirect'] ?? null;
  }
  
  getFullPageRedirect(): boolean | null {
      return this._fields['fullPageRedirect'] ?? null;
  }

  setFullPageRedirect(value: null | boolean) {
    this._fields['fullPageRedirect'] = value;

    return this;
  }

  get skipRedirectOnPaymentComplete(): boolean | null {
    return this._fields['skipRedirectOnPaymentComplete'] ?? null;
  }
  
  getSkipRedirectOnPaymentComplete(): boolean | null {
      return this._fields['skipRedirectOnPaymentComplete'] ?? null;
  }

  setSkipRedirectOnPaymentComplete(value: null | boolean) {
    this._fields['skipRedirectOnPaymentComplete'] = value;

    return this;
  }

  get hideZeroAmountSummaryItems(): boolean | null {
    return this._fields['hideZeroAmountSummaryItems'] ?? null;
  }
  
  getHideZeroAmountSummaryItems(): boolean | null {
      return this._fields['hideZeroAmountSummaryItems'] ?? null;
  }

  setHideZeroAmountSummaryItems(value: null | boolean) {
    this._fields['hideZeroAmountSummaryItems'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'showCoupons')) {
      data['showCoupons'] = this['showCoupons'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fullPageRedirect')) {
      data['fullPageRedirect'] = this['fullPageRedirect'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'skipRedirectOnPaymentComplete')) {
      data['skipRedirectOnPaymentComplete'] = this['skipRedirectOnPaymentComplete'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hideZeroAmountSummaryItems')) {
      data['hideZeroAmountSummaryItems'] = this['hideZeroAmountSummaryItems'];
    }

    return data;
  }
}
