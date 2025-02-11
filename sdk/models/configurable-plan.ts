import { FlexiblePlan } from '../models/flexible-plan';
import OriginalPlan from '../models/original-plan';

export const ConfigurablePlan = Symbol('ConfigurablePlan');

export interface ConfigurablePlan {
  [ConfigurablePlan]: true;

  get id(): string | null;
  getId(): string | null;
  jsonSerialize(): Record<string, any>;
}
