import OriginalPlan from '../models/original-plan';
import FlexiblePlanFactory from '../factories/flexible-plan-factory';
import { ConfigurablePlan } from '../models/configurable-plan';

export default class ConfigurablePlanFactory
{
  static from(data: any): ConfigurablePlan
  {
    if (Object.keys(data).length === 1 && data.id) {
      return new OriginalPlan(data);
    }

    return FlexiblePlanFactory.from(data);
  }
}
