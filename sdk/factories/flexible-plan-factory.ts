import TrialOnlyPlan from '../models/trial-only-plan';
import SubscriptionPlan from '../models/subscription-plan';
import OneTimeSalePlan from '../models/one-time-sale-plan';
import { FlexiblePlan } from '../models/flexible-plan';

export default class FlexiblePlanFactory {
  static from(data: any): FlexiblePlan {
    if (data.isTrialOnly) {
      return new TrialOnlyPlan(data);
    }
    if (data.recurringInterval) {
      return new SubscriptionPlan(data);
    }

    return new OneTimeSalePlan(data);
  }
}
