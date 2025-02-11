import OneTimeSalePlan from '../models/one-time-sale-plan';
import SubscriptionPlan from '../models/subscription-plan';
import TrialOnlyPlan from '../models/trial-only-plan';
import PlanSetup from '../models/plan-setup';

export const Plan = Symbol('Plan');

export interface Plan {
  [Plan]: true;

  get id(): string | null;
  getId(): string | null;

  get name(): string;
  getName(): string;
  setName(value: string): this;
  get description(): string | null;
  getDescription(): string | null;
  setDescription(value: null | string): this;
  get richDescription(): string | null;
  getRichDescription(): string | null;
  setRichDescription(value: null | string): this;
  get productId(): string;
  getProductId(): string;
  setProductId(value: string): this;
  get productOptions(): Record<string, any> | null;
  getProductOptions(): Record<string, any> | null;
  setProductOptions(value: null | Record<string, any>): this;
  get currency(): string;
  getCurrency(): string;
  setCurrency(value: string): this;
  get currencySign(): string | null;
  getCurrencySign(): string | null;

  get setup(): PlanSetup | null;
  getSetup(): PlanSetup | null;
  setSetup(value: null | PlanSetup | any): this;
  get customFields(): Record<string, any> | null;
  getCustomFields(): Record<string, any> | null;
  setCustomFields(value: null | Record<string, any>): this;
  get isActive(): boolean | null;
  getIsActive(): boolean | null;
  setIsActive(value: null | boolean): this;
  get revision(): number | null;
  getRevision(): number | null;

  get isTrialOnly(): boolean | null;
  getIsTrialOnly(): boolean | null;

  get createdTime(): Date | null;
  getCreatedTime(): Date | null;

  get updatedTime(): Date | null;
  getUpdatedTime(): Date | null;

  get links(): Array<any> | null;
  getLinks(): Array<any> | null;
  jsonSerialize(): Record<string, any>;
}
