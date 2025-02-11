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
import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionFactory {
  static from(data: any = {}): CouponRestriction {
    switch(data.type) {
      case 'discounts-per-redemption': return new CouponRestrictionDiscountPerRedemption(data);
      case 'restrict-to-exclusive-application': return new CouponRestrictionExclusiveApplication(data);
      case 'minimum-order-amount': return new CouponRestrictionMinimumOrderAmount(data);
      case 'paid-by-time': return new CouponRestrictionPaidByTime(data);
      case 'redemptions-per-customer': return new CouponRestrictionRedemptionsPerCustomer(data);
      case 'restrict-to-bxgy': return new CouponRestrictionRestrictToBxgy(data);
      case 'restrict-to-countries': return new CouponRestrictionRestrictToCountries(data);
      case 'restrict-to-customers': return new CouponRestrictionRestrictToCustomers(data);
      case 'restrict-to-customer-tags': return new CouponRestrictionRestrictToCustomerTags(data);
      case 'restrict-to-invoices': return new CouponRestrictionRestrictToInvoices(data);
      case 'restrict-to-plans': return new CouponRestrictionRestrictToPlans(data);
      case 'restrict-to-products': return new CouponRestrictionRestrictToProducts(data);
      case 'restrict-to-subscriptions': return new CouponRestrictionRestrictToSubscriptions(data);
      case 'total-redemptions': return new CouponRestrictionTotalRedemptions(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}
