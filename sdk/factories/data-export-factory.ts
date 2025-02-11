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
import { DataExport } from '../models/data-export';

export default class DataExportFactory {
  static from(data: any = {}): DataExport {
    switch(data.resource) {
      case 'amlChecks': return new AmlChecksDataExport(data);
      case 'customers': return new CustomersDataExport(data);
      case 'disputes': return new DisputesDataExport(data);
      case 'invoiceItems': return new InvoiceItemsDataExport(data);
      case 'invoices': return new InvoicesDataExport(data);
      case 'revenueAudit': return new RevenueAuditDataExport(data);
      case 'subscriptions': return new SubscriptionsDataExport(data);
      case 'transactions': return new TransactionsDataExport(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}
