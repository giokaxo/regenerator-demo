import CouponRestrictionDiscountPerRedemption from '../models/coupon-restriction-discount-per-redemption';
import CouponRestrictionExclusiveApplication from '../models/coupon-restriction-exclusive-application';
import CouponRestrictionMinimumOrderAmount from '../models/coupon-restriction-minimum-order-amount';
import CouponRestrictionPaidByTime from '../models/coupon-restriction-paid-by-time';
import CouponRestrictionRedemptionsPerCustomer from '../models/coupon-restriction-redemptions-per-customer';
import CouponRestrictionRestrictToBxgy from '../models/coupon-restriction-restrict-to-bxgy';
import CouponRestrictionRestrictToCountries from '../models/coupon-restriction-restrict-to-countries';
import CouponRestrictionRestrictToCustomers from '../models/coupon-restriction-restrict-to-customers';
import CouponRestrictionRestrictToCustomerTags from '../models/coupon-restriction-restrict-to-customer-tags';
import CouponRestrictionRestrictToInvoices from '../models/coupon-restriction-restrict-to-invoices';
import CouponRestrictionRestrictToPlans from '../models/coupon-restriction-restrict-to-plans';
import CouponRestrictionRestrictToProducts from '../models/coupon-restriction-restrict-to-products';
import CouponRestrictionRestrictToSubscriptions from '../models/coupon-restriction-restrict-to-subscriptions';
import CouponRestrictionTotalRedemptions from '../models/coupon-restriction-total-redemptions';

export const CouponRestriction = Symbol('CouponRestriction');

export interface CouponRestriction {
  [CouponRestriction]: true;

  get type(): string;
  getType(): string;
  jsonSerialize(): Record<string, any>;
}
