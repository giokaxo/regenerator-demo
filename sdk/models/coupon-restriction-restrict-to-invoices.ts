import { RedemptionRestriction } from '../models/redemption-restriction';
import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionRestrictToInvoices implements RedemptionRestriction, CouponRestriction {
  get [RedemptionRestriction](): true {
    return true;
  }

  get [CouponRestriction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceIds')) {
      this.setInvoiceIds(data['invoiceIds']);
    }
  }


  public get type() {
    return 'restrict-to-invoices';
  }

  public getType() {
    return 'restrict-to-invoices';
  }

  get invoiceIds(): Array<any> {
    return this._fields['invoiceIds'];
  }
  
  getInvoiceIds(): Array<any> {
      return this._fields['invoiceIds'];
  }

  setInvoiceIds(value: Array<any>) {
    this._fields['invoiceIds'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'restrict-to-invoices',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceIds')) {
      data['invoiceIds'] = this['invoiceIds'];
    }

    return data;
  }
}
