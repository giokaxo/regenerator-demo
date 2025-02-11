
export default class PurchaseBumpOffer {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'offerId')) {
      this.setOfferId(data['offerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'offerType')) {
      this.setOfferType(data['offerType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bumpAmount')) {
      this.setBumpAmount(data['bumpAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bumpAmountInUsd')) {
      this.setBumpAmountInUsd(data['bumpAmountInUsd']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
  }


  get offerId(): string {
    return this._fields['offerId'];
  }
  
  getOfferId(): string {
      return this._fields['offerId'];
  }

  setOfferId(value: string) {
    this._fields['offerId'] = value;

    return this;
  }

  get offerType(): string {
    return this._fields['offerType'];
  }
  
  getOfferType(): string {
      return this._fields['offerType'];
  }

  setOfferType(value: string) {
    this._fields['offerType'] = value;

    return this;
  }

  get bumpAmount(): number {
    return this._fields['bumpAmount'];
  }
  
  getBumpAmount(): number {
      return this._fields['bumpAmount'];
  }

  setBumpAmount(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['bumpAmount'] = value;

    return this;
  }

  get bumpAmountInUsd(): number | null {
    return this._fields['bumpAmountInUsd'] ?? null;
  }
  
  getBumpAmountInUsd(): number | null {
      return this._fields['bumpAmountInUsd'] ?? null;
  }

  private setBumpAmountInUsd(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['bumpAmountInUsd'] = value;

    return this;
  }

  get customFields(): Record<string, any> | null {
    return this._fields['customFields'] ?? null;
  }
  
  getCustomFields(): Record<string, any> | null {
      return this._fields['customFields'] ?? null;
  }

  setCustomFields(value: null | Record<string, any>) {
    this._fields['customFields'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'offerId')) {
      data['offerId'] = this['offerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'offerType')) {
      data['offerType'] = this['offerType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bumpAmount')) {
      data['bumpAmount'] = this['bumpAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bumpAmountInUsd')) {
      data['bumpAmountInUsd'] = this['bumpAmountInUsd'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }

    return data;
  }
}
