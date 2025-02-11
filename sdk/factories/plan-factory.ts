import TrialOnlyPlan from '../models/trial-only-plan';
import SubscriptionPlan from '../models/subscription-plan';
import OneTimeSalePlan from '../models/one-time-sale-plan';
import { Plan } from '../models/plan';

export default class PlanFactory {
  static from(data: any): Plan {
    if (data.isTrialOnly) {
      return new TrialOnlyPlan(data);
    }
    if (data.recurringInterval) {
      return new SubscriptionPlan(data);
    }

    return new OneTimeSalePlan(data);
  }
}
