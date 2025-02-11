import AdjustPaymentMethodFactory from '../factories/adjust-payment-method-factory';
import { AdjustPaymentMethod } from '../models/adjust-payment-method';
import RuleAction from '../models/rule-action';

export default class RuleActionAdjustReadyToPay extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'adjust-ready-to-pay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'prioritizeActivePaymentInstruments')) {
      this.setPrioritizeActivePaymentInstruments(data['prioritizeActivePaymentInstruments']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentMethods')) {
      this.setPaymentMethods(data['paymentMethods']);
    }
  }


  get prioritizeActivePaymentInstruments(): boolean | null {
    return this._fields['prioritizeActivePaymentInstruments'] ?? null;
  }
  
  getPrioritizeActivePaymentInstruments(): boolean | null {
      return this._fields['prioritizeActivePaymentInstruments'] ?? null;
  }

  setPrioritizeActivePaymentInstruments(value: null | boolean) {
    this._fields['prioritizeActivePaymentInstruments'] = value;

    return this;
  }

  get paymentMethods(): Array<any> | null {
    return this._fields['paymentMethods'] ?? null;
  }
  
  getPaymentMethods(): Array<any> | null {
      return this._fields['paymentMethods'] ?? null;
  }

  setPaymentMethods(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value[AdjustPaymentMethod] ? value : AdjustPaymentMethodFactory.from(value),
    ) : null;

    this._fields['paymentMethods'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'prioritizeActivePaymentInstruments')) {
      data['prioritizeActivePaymentInstruments'] = this['prioritizeActivePaymentInstruments'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentMethods')) {
      data['paymentMethods'] = this['paymentMethods'] !== null
          ? this._fields['paymentMethods'].map((adjustPaymentMethod: AdjustPaymentMethod) => adjustPaymentMethod.jsonSerialize())
          : null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
