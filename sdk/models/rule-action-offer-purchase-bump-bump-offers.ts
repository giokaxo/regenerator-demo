import PurchaseBumpOffer from '../models/purchase-bump-offer';
import RuleActionOfferPurchaseBumpBumpOffersChoices from '../models/rule-action-offer-purchase-bump-bump-offers-choices';

export default class RuleActionOfferPurchaseBumpBumpOffers {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'weight')) {
      this.setWeight(data['weight']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'offers')) {
      this.setOffers(data['offers']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'choices')) {
      this.setChoices(data['choices']);
    }
  }


  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get weight(): number {
    return this._fields['weight'];
  }
  
  getWeight(): number {
      return this._fields['weight'];
  }

  setWeight(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['weight'] = value;

    return this;
  }

  get offers(): Array<any> {
    return this._fields['offers'];
  }
  
  getOffers(): Array<any> {
      return this._fields['offers'];
  }

  setOffers(value: Array<any>) {
    value = value.map(
      (value) => value instanceof PurchaseBumpOffer ? value : new PurchaseBumpOffer(value),
    );

    this._fields['offers'] = value;

    return this;
  }

  get choices(): Array<any> {
    return this._fields['choices'];
  }
  
  getChoices(): Array<any> {
      return this._fields['choices'];
  }

  setChoices(value: Array<any>) {
    value = value.map(
      (value) => value instanceof RuleActionOfferPurchaseBumpBumpOffersChoices ? value : new RuleActionOfferPurchaseBumpBumpOffersChoices(value),
    );

    this._fields['choices'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'weight')) {
      data['weight'] = this['weight'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'offers')) {
      data['offers'] = this['offers'].map(
          (purchaseBumpOffer: PurchaseBumpOffer) => purchaseBumpOffer.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'choices')) {
      data['choices'] = this['choices'].map(
          (ruleActionOfferPurchaseBumpBumpOffersChoices: RuleActionOfferPurchaseBumpBumpOffersChoices) => ruleActionOfferPurchaseBumpBumpOffersChoices.jsonSerialize()
      );
    }

    return data;
  }
}
