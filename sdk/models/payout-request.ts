import PayoutRequestCancellation from '../models/payout-request-cancellation';
import PayoutRequestAllocations from '../models/payout-request-allocations';
import ResourceLink from '../models/resource-link';

export default class PayoutRequest {
  STATUS_PENDING = 'pending';

  STATUS_INSTRUMENT_SELECTED = 'instrument-selected';

  STATUS_PARTIALLY_FULFILLED = 'partially-fulfilled';

  STATUS_FULFILLED = 'fulfilled';

  STATUS_CANCELED = 'canceled';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentId')) {
      this.setPaymentInstrumentId(data['paymentInstrumentId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'availableAmount')) {
      this.setAvailableAmount(data['availableAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'selectPaymentInstrumentUrl')) {
      this.setSelectPaymentInstrumentUrl(data['selectPaymentInstrumentUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'allocations')) {
      this.setAllocations(data['allocations']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'selectedPaymentInstrumentRedirectUrl')) {
      this.setSelectedPaymentInstrumentRedirectUrl(data['selectedPaymentInstrumentRedirectUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cancellationReason')) {
      this.setCancellationReason(data['cancellationReason']);
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

  get websiteId(): string {
    return this._fields['websiteId'];
  }
  
  getWebsiteId(): string {
      return this._fields['websiteId'];
  }

  setWebsiteId(value: string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get customerId(): string {
    return this._fields['customerId'];
  }
  
  getCustomerId(): string {
      return this._fields['customerId'];
  }

  setCustomerId(value: string) {
    this._fields['customerId'] = value;

    return this;
  }

  get paymentInstrumentId(): string | null {
    return this._fields['paymentInstrumentId'] ?? null;
  }
  
  getPaymentInstrumentId(): string | null {
      return this._fields['paymentInstrumentId'] ?? null;
  }

  setPaymentInstrumentId(value: null | string) {
    this._fields['paymentInstrumentId'] = value;

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

  get amount(): number {
    return this._fields['amount'];
  }
  
  getAmount(): number {
      return this._fields['amount'];
  }

  setAmount(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get availableAmount(): number | null {
    return this._fields['availableAmount'] ?? null;
  }
  
  getAvailableAmount(): number | null {
      return this._fields['availableAmount'] ?? null;
  }

  private setAvailableAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['availableAmount'] = value;

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

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  private setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get selectPaymentInstrumentUrl(): string | null {
    return this._fields['selectPaymentInstrumentUrl'] ?? null;
  }
  
  getSelectPaymentInstrumentUrl(): string | null {
      return this._fields['selectPaymentInstrumentUrl'] ?? null;
  }

  private setSelectPaymentInstrumentUrl(value: null | string) {
    this._fields['selectPaymentInstrumentUrl'] = value;

    return this;
  }

  get allocations(): Array<any> | null {
    return this._fields['allocations'] ?? null;
  }
  
  getAllocations(): Array<any> | null {
      return this._fields['allocations'] ?? null;
  }

  private setAllocations(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof PayoutRequestAllocations ? value : new PayoutRequestAllocations(value),
    ) : null;

    this._fields['allocations'] = value;

    return this;
  }

  get selectedPaymentInstrumentRedirectUrl(): string | null {
    return this._fields['selectedPaymentInstrumentRedirectUrl'] ?? null;
  }
  
  getSelectedPaymentInstrumentRedirectUrl(): string | null {
      return this._fields['selectedPaymentInstrumentRedirectUrl'] ?? null;
  }

  setSelectedPaymentInstrumentRedirectUrl(value: null | string) {
    this._fields['selectedPaymentInstrumentRedirectUrl'] = value;

    return this;
  }

  get cancellationReason(): PayoutRequestCancellation | null {
    return this._fields['cancellationReason'] ?? null;
  }
  
  getCancellationReason(): PayoutRequestCancellation | null {
      return this._fields['cancellationReason'] ?? null;
  }

  setCancellationReason(value: null | PayoutRequestCancellation | any) {
    if (value !== null && !(value instanceof PayoutRequestCancellation)) {
      value = new PayoutRequestCancellation(value);
    }

    this._fields['cancellationReason'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentId')) {
      data['paymentInstrumentId'] = this['paymentInstrumentId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'availableAmount')) {
      data['availableAmount'] = this['availableAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'selectPaymentInstrumentUrl')) {
      data['selectPaymentInstrumentUrl'] = this['selectPaymentInstrumentUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'allocations')) {
      data['allocations'] = this['allocations'] !== null
          ? this._fields['allocations'].map((payoutRequestAllocations: PayoutRequestAllocations) => payoutRequestAllocations.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'selectedPaymentInstrumentRedirectUrl')) {
      data['selectedPaymentInstrumentRedirectUrl'] = this['selectedPaymentInstrumentRedirectUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cancellationReason')) {
      data['cancellationReason'] = this['cancellationReason']?.jsonSerialize() ?? null;
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
