import CouponRestrictionDiscountPerRedemption from '../models/coupon-restriction-discount-per-redemption';
import CouponRestrictionMinimumOrderAmount from '../models/coupon-restriction-minimum-order-amount';
import CouponRestrictionPaidByTime from '../models/coupon-restriction-paid-by-time';
import CouponRestrictionRestrictToInvoices from '../models/coupon-restriction-restrict-to-invoices';
import CouponRestrictionRestrictToPlans from '../models/coupon-restriction-restrict-to-plans';
import CouponRestrictionRestrictToProducts from '../models/coupon-restriction-restrict-to-products';
import CouponRestrictionRestrictToSubscriptions from '../models/coupon-restriction-restrict-to-subscriptions';

export const RedemptionRestriction = Symbol('RedemptionRestriction');

export interface RedemptionRestriction {
  [RedemptionRestriction]: true;

  get type(): string;
  getType(): string;
  jsonSerialize(): Record<string, any>;
}
