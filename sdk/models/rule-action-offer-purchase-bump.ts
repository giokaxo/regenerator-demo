import RuleActionOfferPurchaseBumpBumpOffers from '../models/rule-action-offer-purchase-bump-bump-offers';
import RuleAction from '../models/rule-action';

export default class RuleActionOfferPurchaseBump extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'offer-purchase-bump',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'bumpOffers')) {
      this.setBumpOffers(data['bumpOffers']);
    }
  }


  get bumpOffers(): Array<any> {
    return this._fields['bumpOffers'];
  }
  
  getBumpOffers(): Array<any> {
      return this._fields['bumpOffers'];
  }

  setBumpOffers(value: Array<any>) {
    value = value.map(
      (value) => value instanceof RuleActionOfferPurchaseBumpBumpOffers ? value : new RuleActionOfferPurchaseBumpBumpOffers(value),
    );

    this._fields['bumpOffers'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bumpOffers')) {
      data['bumpOffers'] = this['bumpOffers'].map(
          (ruleActionOfferPurchaseBumpBumpOffers: RuleActionOfferPurchaseBumpBumpOffers) => ruleActionOfferPurchaseBumpBumpOffers.jsonSerialize()
      );
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
