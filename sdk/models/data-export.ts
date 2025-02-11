import AmlChecksDataExport from '../models/aml-checks-data-export';
import CustomersDataExport from '../models/customers-data-export';
import DisputesDataExport from '../models/disputes-data-export';
import InvoiceItemsDataExport from '../models/invoice-items-data-export';
import InvoicesDataExport from '../models/invoices-data-export';
import RevenueAuditDataExport from '../models/revenue-audit-data-export';
import SubscriptionsDataExport from '../models/subscriptions-data-export';
import TransactionsDataExport from '../models/transactions-data-export';
import DataExportArguments from '../models/data-export-arguments';
import DataExportRecurring from '../models/data-export-recurring';
import DataExportDateRange from '../models/data-export-date-range';

export const DataExport = Symbol('DataExport');

export interface DataExport {
  [DataExport]: true;

  get resource(): string;
  getResource(): string;

  get id(): string | null;
  getId(): string | null;

  get name(): string;
  getName(): string;
  setName(value: string): this;
  get arguments(): DataExportArguments | null;
  getArguments(): DataExportArguments | null;
  setArguments(value: null | DataExportArguments | any): this;
  get emailNotification(): Array<any> | null;
  getEmailNotification(): Array<any> | null;
  setEmailNotification(value: null | Array<any>): this;
  get fields(): Array<any> | null;
  getFields(): Array<any> | null;
  setFields(value: null | Array<any>): this;
  get recurring(): DataExportRecurring | null;
  getRecurring(): DataExportRecurring | null;
  setRecurring(value: null | DataExportRecurring | any): this;
  get userId(): string | null;
  getUserId(): string | null;

  get fileId(): string | null;
  getFileId(): string | null;

  get recordCount(): number | null;
  getRecordCount(): number | null;

  get scheduledTime(): Date | null;
  getScheduledTime(): Date | null;

  get createdTime(): Date | null;
  getCreatedTime(): Date | null;

  get updatedTime(): Date | null;
  getUpdatedTime(): Date | null;

  get status(): string | null;
  getStatus(): string | null;

  get dateRange(): DataExportDateRange | null;
  getDateRange(): DataExportDateRange | null;
  setDateRange(value: null | DataExportDateRange | any): this;
  get links(): Array<any> | null;
  getLinks(): Array<any> | null;
  jsonSerialize(): Record<string, any>;
}
