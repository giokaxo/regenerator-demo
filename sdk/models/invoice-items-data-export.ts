import { DataExport } from '../models/data-export';
import DataExportArguments from '../models/data-export-arguments';
import DataExportRecurring from '../models/data-export-recurring';
import DataExportDateRange from '../models/data-export-date-range';
import InvoiceItemsDataExportEmbedded from '../models/invoice-items-data-export-embedded';
import ResourceLink from '../models/resource-link';

export default class InvoiceItemsDataExport implements DataExport {
  get [DataExport](): true {
    return true;
  }

  FORMAT_CSV = 'csv';

  FORMAT_JSON = 'json';

  FORMAT_JSON_API = 'json-api';

  FORMAT_XML = 'xml';

  STATUS_PENDING = 'pending';

  STATUS_QUEUED = 'queued';

  STATUS_PROCESSING = 'processing';

  STATUS_COMPLETED = 'completed';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'format')) {
      this.setFormat(data['format']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'arguments')) {
      this.setArguments(data['arguments']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'emailNotification')) {
      this.setEmailNotification(data['emailNotification']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fields')) {
      this.setFields(data['fields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recurring')) {
      this.setRecurring(data['recurring']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'userId')) {
      this.setUserId(data['userId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fileId')) {
      this.setFileId(data['fileId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recordCount')) {
      this.setRecordCount(data['recordCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'scheduledTime')) {
      this.setScheduledTime(data['scheduledTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dateRange')) {
      this.setDateRange(data['dateRange']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
    }
  }


  public get resource() {
    return 'invoiceItems';
  }

  public getResource() {
    return 'invoiceItems';
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

  get format(): string {
    return this._fields['format'];
  }
  
  getFormat(): string {
      return this._fields['format'];
  }

  setFormat(value: string) {
    this._fields['format'] = value;

    return this;
  }

  get arguments(): DataExportArguments | null {
    return this._fields['arguments'] ?? null;
  }
  
  getArguments(): DataExportArguments | null {
      return this._fields['arguments'] ?? null;
  }

  setArguments(value: null | DataExportArguments | any) {
    if (value !== null && !(value instanceof DataExportArguments)) {
      value = new DataExportArguments(value);
    }

    this._fields['arguments'] = value;

    return this;
  }

  get emailNotification(): Array<any> | null {
    return this._fields['emailNotification'] ?? null;
  }
  
  getEmailNotification(): Array<any> | null {
      return this._fields['emailNotification'] ?? null;
  }

  setEmailNotification(value: null | Array<any>) {
    this._fields['emailNotification'] = value;

    return this;
  }

  get fields(): Array<any> | null {
    return this._fields['fields'] ?? null;
  }
  
  getFields(): Array<any> | null {
      return this._fields['fields'] ?? null;
  }

  setFields(value: null | Array<any>) {
    this._fields['fields'] = value;

    return this;
  }

  get recurring(): DataExportRecurring | null {
    return this._fields['recurring'] ?? null;
  }
  
  getRecurring(): DataExportRecurring | null {
      return this._fields['recurring'] ?? null;
  }

  setRecurring(value: null | DataExportRecurring | any) {
    if (value !== null && !(value instanceof DataExportRecurring)) {
      value = new DataExportRecurring(value);
    }

    this._fields['recurring'] = value;

    return this;
  }

  get userId(): string | null {
    return this._fields['userId'] ?? null;
  }
  
  getUserId(): string | null {
      return this._fields['userId'] ?? null;
  }

  private setUserId(value: null | string) {
    this._fields['userId'] = value;

    return this;
  }

  get fileId(): string | null {
    return this._fields['fileId'] ?? null;
  }
  
  getFileId(): string | null {
      return this._fields['fileId'] ?? null;
  }

  private setFileId(value: null | string) {
    this._fields['fileId'] = value;

    return this;
  }

  get recordCount(): number | null {
    return this._fields['recordCount'] ?? null;
  }
  
  getRecordCount(): number | null {
      return this._fields['recordCount'] ?? null;
  }

  private setRecordCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['recordCount'] = value;

    return this;
  }

  get scheduledTime(): Date | null {
    return this._fields['scheduledTime'] ?? null;
  }
  
  getScheduledTime(): Date | null {
      return this._fields['scheduledTime'] ?? null;
  }

  private setScheduledTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['scheduledTime'] = value;

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

  get dateRange(): DataExportDateRange | null {
    return this._fields['dateRange'] ?? null;
  }
  
  getDateRange(): DataExportDateRange | null {
      return this._fields['dateRange'] ?? null;
  }

  setDateRange(value: null | DataExportDateRange | any) {
    if (value !== null && !(value instanceof DataExportDateRange)) {
      value = new DataExportDateRange(value);
    }

    this._fields['dateRange'] = value;

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

  get embedded(): InvoiceItemsDataExportEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): InvoiceItemsDataExportEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | InvoiceItemsDataExportEmbedded | any) {
    if (value !== null && !(value instanceof InvoiceItemsDataExportEmbedded)) {
      value = new InvoiceItemsDataExportEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      resource: 'invoiceItems',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'format')) {
      data['format'] = this['format'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'arguments')) {
      data['arguments'] = this['arguments']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'emailNotification')) {
      data['emailNotification'] = this['emailNotification'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fields')) {
      data['fields'] = this['fields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recurring')) {
      data['recurring'] = this['recurring']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'userId')) {
      data['userId'] = this['userId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fileId')) {
      data['fileId'] = this['fileId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recordCount')) {
      data['recordCount'] = this['recordCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'scheduledTime')) {
      data['scheduledTime'] = this['scheduledTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dateRange')) {
      data['dateRange'] = this['dateRange']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'embedded')) {
      data['_embedded'] = this['embedded']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
