import Money from '../models/money';
import PurchaseBumpOffer from '../models/purchase-bump-offer';

export default class TransactionBumpOffer {
  OUTCOME_PRESENTED = 'presented';

  OUTCOME_REJECTED = 'rejected';

  OUTCOME_SELECTED = 'selected';

  OUTCOME_UNKNOWN = 'unknown';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'order')) {
      this.setOrder(data['order']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'version')) {
      this.setVersion(data['version']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'language')) {
      this.setLanguage(data['language']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'outcome')) {
      this.setOutcome(data['outcome']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'presentedOffers')) {
      this.setPresentedOffers(data['presentedOffers']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'selectedOffer')) {
      this.setSelectedOffer(data['selectedOffer']);
    }
  }


  get order(): Money | null {
    return this._fields['order'] ?? null;
  }
  
  getOrder(): Money | null {
      return this._fields['order'] ?? null;
  }

  setOrder(value: null | Money | any) {
    if (value !== null && !(value instanceof Money)) {
      value = new Money(value);
    }

    this._fields['order'] = value;

    return this;
  }

  get version(): string | null {
    return this._fields['version'] ?? null;
  }
  
  getVersion(): string | null {
      return this._fields['version'] ?? null;
  }

  setVersion(value: null | string) {
    this._fields['version'] = value;

    return this;
  }

  get language(): string | null {
    return this._fields['language'] ?? null;
  }
  
  getLanguage(): string | null {
      return this._fields['language'] ?? null;
  }

  setLanguage(value: null | string) {
    this._fields['language'] = value;

    return this;
  }

  get outcome(): string | null {
    return this._fields['outcome'] ?? null;
  }
  
  getOutcome(): string | null {
      return this._fields['outcome'] ?? null;
  }

  private setOutcome(value: null | string) {
    this._fields['outcome'] = value;

    return this;
  }

  get presentedOffers(): Array<any> | null {
    return this._fields['presentedOffers'] ?? null;
  }
  
  getPresentedOffers(): Array<any> | null {
      return this._fields['presentedOffers'] ?? null;
  }

  private setPresentedOffers(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof PurchaseBumpOffer ? value : new PurchaseBumpOffer(value),
    ) : null;

    this._fields['presentedOffers'] = value;

    return this;
  }

  get selectedOffer(): PurchaseBumpOffer | null {
    return this._fields['selectedOffer'] ?? null;
  }
  
  getSelectedOffer(): PurchaseBumpOffer | null {
      return this._fields['selectedOffer'] ?? null;
  }

  private setSelectedOffer(value: null | PurchaseBumpOffer | any) {
    if (value !== null && !(value instanceof PurchaseBumpOffer)) {
      value = new PurchaseBumpOffer(value);
    }

    this._fields['selectedOffer'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'order')) {
      data['order'] = this['order']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'version')) {
      data['version'] = this['version'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'language')) {
      data['language'] = this['language'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'outcome')) {
      data['outcome'] = this['outcome'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'presentedOffers')) {
      data['presentedOffers'] = this['presentedOffers'] !== null
          ? this._fields['presentedOffers'].map((purchaseBumpOffer: PurchaseBumpOffer) => purchaseBumpOffer.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'selectedOffer')) {
      data['selectedOffer'] = this['selectedOffer']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
