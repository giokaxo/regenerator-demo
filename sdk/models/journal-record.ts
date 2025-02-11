import JournalRecordEmbedded from '../models/journal-record-embedded';
import ResourceLink from '../models/resource-link';

export default class JournalRecord {
  TYPE_AUTOMATED = 'automated';

  TYPE_MANUAL = 'manual';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'journalEntryId')) {
      this.setJournalEntryId(data['journalEntryId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceId')) {
      this.setInvoiceId(data['invoiceId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceItemId')) {
      this.setInvoiceItemId(data['invoiceItemId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'estimatedAmount')) {
      this.setEstimatedAmount(data['estimatedAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recognizedAmount')) {
      this.setRecognizedAmount(data['recognizedAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'debitAccountId')) {
      this.setDebitAccountId(data['debitAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'creditAccountId')) {
      this.setCreditAccountId(data['creditAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
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

  setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get journalEntryId(): string {
    return this._fields['journalEntryId'];
  }
  
  getJournalEntryId(): string {
      return this._fields['journalEntryId'];
  }

  private setJournalEntryId(value: string) {
    this._fields['journalEntryId'] = value;

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

  get invoiceId(): string {
    return this._fields['invoiceId'];
  }
  
  getInvoiceId(): string {
      return this._fields['invoiceId'];
  }

  setInvoiceId(value: string) {
    this._fields['invoiceId'] = value;

    return this;
  }

  get invoiceItemId(): string {
    return this._fields['invoiceItemId'];
  }
  
  getInvoiceItemId(): string {
      return this._fields['invoiceItemId'];
  }

  setInvoiceItemId(value: string) {
    this._fields['invoiceItemId'] = value;

    return this;
  }

  get type(): string {
    return this._fields['type'];
  }
  
  getType(): string {
      return this._fields['type'];
  }

  private setType(value: string) {
    this._fields['type'] = value;

    return this;
  }

  get estimatedAmount(): number | null {
    return this._fields['estimatedAmount'] ?? null;
  }
  
  getEstimatedAmount(): number | null {
      return this._fields['estimatedAmount'] ?? null;
  }

  setEstimatedAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['estimatedAmount'] = value;

    return this;
  }

  get recognizedAmount(): number | null {
    return this._fields['recognizedAmount'] ?? null;
  }
  
  getRecognizedAmount(): number | null {
      return this._fields['recognizedAmount'] ?? null;
  }

  setRecognizedAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['recognizedAmount'] = value;

    return this;
  }

  get debitAccountId(): string | null {
    return this._fields['debitAccountId'] ?? null;
  }
  
  getDebitAccountId(): string | null {
      return this._fields['debitAccountId'] ?? null;
  }

  setDebitAccountId(value: null | string) {
    this._fields['debitAccountId'] = value;

    return this;
  }

  get creditAccountId(): string | null {
    return this._fields['creditAccountId'] ?? null;
  }
  
  getCreditAccountId(): string | null {
      return this._fields['creditAccountId'] ?? null;
  }

  setCreditAccountId(value: null | string) {
    this._fields['creditAccountId'] = value;

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

  get embedded(): JournalRecordEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): JournalRecordEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | JournalRecordEmbedded | any) {
    if (value !== null && !(value instanceof JournalRecordEmbedded)) {
      value = new JournalRecordEmbedded(value);
    }

    this._fields['_embedded'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'journalEntryId')) {
      data['journalEntryId'] = this['journalEntryId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceId')) {
      data['invoiceId'] = this['invoiceId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceItemId')) {
      data['invoiceItemId'] = this['invoiceItemId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'estimatedAmount')) {
      data['estimatedAmount'] = this['estimatedAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recognizedAmount')) {
      data['recognizedAmount'] = this['recognizedAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'debitAccountId')) {
      data['debitAccountId'] = this['debitAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'creditAccountId')) {
      data['creditAccountId'] = this['creditAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'embedded')) {
      data['_embedded'] = this['embedded']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
