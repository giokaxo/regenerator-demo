import PlanPriceFormulaFactory from '../factories/plan-price-formula-factory';
import { Plan } from '../models/plan';
import { FlexiblePlan } from '../models/flexible-plan';
import { PlanPriceFormula } from '../models/plan-price-formula';
import PlanSetup from '../models/plan-setup';
import SubscriptionPlanRecurringInterval from '../models/subscription-plan-recurring-interval';
import PlanTrial from '../models/plan-trial';
import SubscriptionPlanMeteredBilling from '../models/subscription-plan-metered-billing';
import InvoiceTimeShift from '../models/invoice-time-shift';
import ResourceLink from '../models/resource-link';

export default class SubscriptionPlan implements Plan, FlexiblePlan {
  get [Plan](): true {
    return true;
  }

  get [FlexiblePlan](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'richDescription')) {
      this.setRichDescription(data['richDescription']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'productId')) {
      this.setProductId(data['productId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'productOptions')) {
      this.setProductOptions(data['productOptions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currencySign')) {
      this.setCurrencySign(data['currencySign']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'pricing')) {
      this.setPricing(data['pricing']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'setup')) {
      this.setSetup(data['setup']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isActive')) {
      this.setIsActive(data['isActive']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isTrialOnly')) {
      this.setIsTrialOnly(data['isTrialOnly']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recurringInterval')) {
      this.setRecurringInterval(data['recurringInterval']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'trial')) {
      this.setTrial(data['trial']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'meteredBilling')) {
      this.setMeteredBilling(data['meteredBilling']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceTimeShift')) {
      this.setInvoiceTimeShift(data['invoiceTimeShift']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get description(): string | null {
    return this._fields['description'] ?? null;
  }
  
  getDescription(): string | null {
      return this._fields['description'] ?? null;
  }

  setDescription(value: null | string) {
    this._fields['description'] = value;

    return this;
  }

  get richDescription(): string | null {
    return this._fields['richDescription'] ?? null;
  }
  
  getRichDescription(): string | null {
      return this._fields['richDescription'] ?? null;
  }

  setRichDescription(value: null | string) {
    this._fields['richDescription'] = value;

    return this;
  }

  get productId(): string {
    return this._fields['productId'];
  }
  
  getProductId(): string {
      return this._fields['productId'];
  }

  setProductId(value: string) {
    this._fields['productId'] = value;

    return this;
  }

  get productOptions(): Record<string, any> | null {
    return this._fields['productOptions'] ?? null;
  }
  
  getProductOptions(): Record<string, any> | null {
      return this._fields['productOptions'] ?? null;
  }

  setProductOptions(value: null | Record<string, any>) {
    this._fields['productOptions'] = value;

    return this;
  }

  get currency(): string {
    return this._fields['currency'];
  }
  
  getCurrency(): string {
      return this._fields['currency'];
  }

  setCurrency(value: string) {
    this._fields['currency'] = value;

    return this;
  }

  get currencySign(): string | null {
    return this._fields['currencySign'] ?? null;
  }
  
  getCurrencySign(): string | null {
      return this._fields['currencySign'] ?? null;
  }

  private setCurrencySign(value: null | string) {
    this._fields['currencySign'] = value;

    return this;
  }

  get pricing(): PlanPriceFormula {
    return this._fields['pricing'];
  }
  
  getPricing(): PlanPriceFormula {
      return this._fields['pricing'];
  }

  setPricing(value: PlanPriceFormula | any) {
    if (!(value[PlanPriceFormula])) {
      value = PlanPriceFormulaFactory.from(value);
    }

    this._fields['pricing'] = value;

    return this;
  }

  get setup(): PlanSetup | null {
    return this._fields['setup'] ?? null;
  }
  
  getSetup(): PlanSetup | null {
      return this._fields['setup'] ?? null;
  }

  setSetup(value: null | PlanSetup | any) {
    if (value !== null && !(value instanceof PlanSetup)) {
      value = new PlanSetup(value);
    }

    this._fields['setup'] = value;

    return this;
  }

  get customFields(): Record<string, any> | null {
    return this._fields['customFields'] ?? null;
  }
  
  getCustomFields(): Record<string, any> | null {
      return this._fields['customFields'] ?? null;
  }

  setCustomFields(value: null | Record<string, any>) {
    this._fields['customFields'] = value;

    return this;
  }

  get isActive(): boolean | null {
    return this._fields['isActive'] ?? null;
  }
  
  getIsActive(): boolean | null {
      return this._fields['isActive'] ?? null;
  }

  setIsActive(value: null | boolean) {
    this._fields['isActive'] = value;

    return this;
  }

  get revision(): number | null {
    return this._fields['revision'] ?? null;
  }
  
  getRevision(): number | null {
      return this._fields['revision'] ?? null;
  }

  private setRevision(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['revision'] = value;

    return this;
  }

  get isTrialOnly(): boolean | null {
    return this._fields['isTrialOnly'] ?? null;
  }
  
  getIsTrialOnly(): boolean | null {
      return this._fields['isTrialOnly'] ?? null;
  }

  private setIsTrialOnly(value: null | boolean) {
    this._fields['isTrialOnly'] = value;

    return this;
  }

  get recurringInterval(): SubscriptionPlanRecurringInterval | null {
    return this._fields['recurringInterval'] ?? null;
  }
  
  getRecurringInterval(): SubscriptionPlanRecurringInterval | null {
      return this._fields['recurringInterval'] ?? null;
  }

  setRecurringInterval(value: null | SubscriptionPlanRecurringInterval | any) {
    if (value !== null && !(value instanceof SubscriptionPlanRecurringInterval)) {
      value = new SubscriptionPlanRecurringInterval(value);
    }

    this._fields['recurringInterval'] = value;

    return this;
  }

  get trial(): PlanTrial | null {
    return this._fields['trial'] ?? null;
  }
  
  getTrial(): PlanTrial | null {
      return this._fields['trial'] ?? null;
  }

  setTrial(value: null | PlanTrial | any) {
    if (value !== null && !(value instanceof PlanTrial)) {
      value = new PlanTrial(value);
    }

    this._fields['trial'] = value;

    return this;
  }

  get meteredBilling(): SubscriptionPlanMeteredBilling | null {
    return this._fields['meteredBilling'] ?? null;
  }
  
  getMeteredBilling(): SubscriptionPlanMeteredBilling | null {
      return this._fields['meteredBilling'] ?? null;
  }

  setMeteredBilling(value: null | SubscriptionPlanMeteredBilling | any) {
    if (value !== null && !(value instanceof SubscriptionPlanMeteredBilling)) {
      value = new SubscriptionPlanMeteredBilling(value);
    }

    this._fields['meteredBilling'] = value;

    return this;
  }

  get invoiceTimeShift(): InvoiceTimeShift | null {
    return this._fields['invoiceTimeShift'] ?? null;
  }
  
  getInvoiceTimeShift(): InvoiceTimeShift | null {
      return this._fields['invoiceTimeShift'] ?? null;
  }

  setInvoiceTimeShift(value: null | InvoiceTimeShift | any) {
    if (value !== null && !(value instanceof InvoiceTimeShift)) {
      value = new InvoiceTimeShift(value);
    }

    this._fields['invoiceTimeShift'] = value;

    return this;
  }

  get createdTime(): Date | null {
    return this._fields['createdTime'] ?? null;
  }
  
  getCreatedTime(): Date | null {
      return this._fields['createdTime'] ?? null;
  }

  private setCreatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['createdTime'] = value;

    return this;
  }

  get updatedTime(): Date | null {
    return this._fields['updatedTime'] ?? null;
  }
  
  getUpdatedTime(): Date | null {
      return this._fields['updatedTime'] ?? null;
  }

  private setUpdatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['updatedTime'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'richDescription')) {
      data['richDescription'] = this['richDescription'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'productId')) {
      data['productId'] = this['productId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'productOptions')) {
      data['productOptions'] = this['productOptions'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currencySign')) {
      data['currencySign'] = this['currencySign'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'pricing')) {
      data['pricing'] = this['pricing'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'setup')) {
      data['setup'] = this['setup']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isActive')) {
      data['isActive'] = this['isActive'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isTrialOnly')) {
      data['isTrialOnly'] = this['isTrialOnly'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recurringInterval')) {
      data['recurringInterval'] = this['recurringInterval']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'trial')) {
      data['trial'] = this['trial']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'meteredBilling')) {
      data['meteredBilling'] = this['meteredBilling']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceTimeShift')) {
      data['invoiceTimeShift'] = this['invoiceTimeShift']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
