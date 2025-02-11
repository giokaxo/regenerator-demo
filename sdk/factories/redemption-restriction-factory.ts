import CouponRestrictionDiscountPerRedemption from '../models/coupon-restriction-discount-per-redemption';
import CouponRestrictionMinimumOrderAmount from '../models/coupon-restriction-minimum-order-amount';
import CouponRestrictionPaidByTime from '../models/coupon-restriction-paid-by-time';
import CouponRestrictionRestrictToInvoices from '../models/coupon-restriction-restrict-to-invoices';
import CouponRestrictionRestrictToPlans from '../models/coupon-restriction-restrict-to-plans';
import CouponRestrictionRestrictToProducts from '../models/coupon-restriction-restrict-to-products';
import CouponRestrictionRestrictToSubscriptions from '../models/coupon-restriction-restrict-to-subscriptions';
import { RedemptionRestriction } from '../models/redemption-restriction';

export default class RedemptionRestrictionFactory {
  static from(data: any = {}): RedemptionRestriction {
    switch(data.type) {
      case 'discounts-per-redemption': return new CouponRestrictionDiscountPerRedemption(data);
      case 'minimum-order-amount': return new CouponRestrictionMinimumOrderAmount(data);
      case 'paid-by-time': return new CouponRestrictionPaidByTime(data);
      case 'restrict-to-invoices': return new CouponRestrictionRestrictToInvoices(data);
      case 'restrict-to-plans': return new CouponRestrictionRestrictToPlans(data);
      case 'restrict-to-products': return new CouponRestrictionRestrictToProducts(data);
      case 'restrict-to-subscriptions': return new CouponRestrictionRestrictToSubscriptions(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}
