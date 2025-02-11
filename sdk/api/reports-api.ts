import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import ApiLogSummary from '../models/api-log-summary';
import CumulativeSubscriptions from '../models/cumulative-subscriptions';
import DashboardResponse from '../models/dashboard-response';
import DccMarkup from '../models/dcc-markup';
import ReportDeclinedTransactions from '../models/report-declined-transactions';
import ReportDisputes from '../models/report-disputes';
import ReportEventsTriggeredSummary from '../models/report-events-triggered-summary';
import ReportRulesMatchedSummary from '../models/report-rules-matched-summary';
import FutureRenewals from '../models/future-renewals';
import ReportJournal from '../models/report-journal';
import GetKycAcceptanceSummaryReportResponse from '../models/get-kyc-acceptance-summary-report-response';
import ReportKycRejections from '../models/report-kyc-rejections';
import ReportKycRequests from '../models/report-kyc-requests';
import ReportMonthlyRecurringRevenue from '../models/report-monthly-recurring-revenue';
import RenewalSales from '../models/renewal-sales';
import ReportRetentionPercentage from '../models/report-retention-percentage';
import ReportRetentionValue from '../models/report-retention-value';
import ReportRevenueWaterfall from '../models/report-revenue-waterfall';
import RevenueEntry from '../models/revenue-entry';
import SubscriptionCancellationReport from '../models/subscription-cancellation-report';
import SubscriptionRenewal from '../models/subscription-renewal';
import ReportTax from '../models/report-tax';
import TimeSeriesTransaction from '../models/time-series-transaction';
import ReportDisputeDelays from '../models/report-dispute-delays';
import ReportTransactions from '../models/report-transactions';


export default class ReportsApi {
  constructor(private client: Client) {}
  async getApiLogSummary({ 
    periodStart,
    periodEnd,
    limit = null,
    offset = null }: {
    periodStart: Date,
    periodEnd: Date,
    limit?: number | null,
    offset?: number | null
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/api-log-summary?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ApiLogSummary(response.data);
  }
  async getCumulativeSubscriptions({ 
    aggregationField,
    periodStart,
    periodEnd,
    limit = null,
    offset = null,
    filter = null }: {
    aggregationField: string,
    periodStart: Date,
    periodEnd: Date,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null
  })  {
    const queryParams = { 
      ...(aggregationField ? { aggregationField: aggregationField.toString() } : {}),
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/cumulative-subscriptions?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new CumulativeSubscriptions(response.data);
  }
  async getDashboardMetrics({ 
    periodStart,
    periodEnd,
    metrics = null,
    segments = null }: {
    periodStart: Date,
    periodEnd: Date,
    metrics?: string | null,
    segments?: string | null
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(metrics ? { metrics: metrics.toString() } : {}),
      ...(segments ? { segments: segments.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/dashboard?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return response.data.map((item: any) => new DashboardResponse(item));
  }
  async getDccMarkup({ 
    aggregationField,
    periodStart,
    periodEnd,
    limit = null,
    offset = null,
    filter = null }: {
    aggregationField: string,
    periodStart: Date,
    periodEnd: Date,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null
  })  {
    const queryParams = { 
      ...(aggregationField ? { aggregationField: aggregationField.toString() } : {}),
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/dcc-markup?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new DccMarkup(response.data);
  }
  async getDeclinedTransactions({ 
    aggregationField,
    periodStart,
    periodEnd,
    limit = null,
    offset = null,
    filter = null }: {
    aggregationField: string,
    periodStart: Date,
    periodEnd: Date,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null
  })  {
    const queryParams = { 
      ...(aggregationField ? { aggregationField: aggregationField.toString() } : {}),
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/declined-transactions?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportDeclinedTransactions(response.data);
  }
  async getDisputes({ 
    aggregationField,
    periodMonth,
    limit = null,
    offset = null,
    filter = null }: {
    aggregationField: string,
    periodMonth: string,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null
  })  {
    const queryParams = { 
      ...(aggregationField ? { aggregationField: aggregationField.toString() } : {}),
      ...(periodMonth ? { periodMonth: periodMonth.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/disputes?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportDisputes(response.data);
  }
  async getEventsTriggeredSummary({ 
    periodStart,
    periodEnd,
    limit = null,
    offset = null }: {
    periodStart: Date,
    periodEnd: Date,
    limit?: number | null,
    offset?: number | null
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/events-triggered?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportEventsTriggeredSummary(response.data);
  }
  async getFutureRenewals({ 
    periodStart,
    periodEnd,
    limit = null,
    offset = null }: {
    periodStart: string,
    periodEnd: string,
    limit?: number | null,
    offset?: number | null
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toString() } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/future-renewals?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new FutureRenewals(response.data);
  }
  async getJournal({ 
    currency,
    recognizedAt,
    aggregationField,
    bookedFrom = null,
    bookedTo = null,
    limit = null,
    offset = null,
    filter = null }: {
    currency: string,
    recognizedAt: string,
    aggregationField: string,
    bookedFrom?: string | null,
    bookedTo?: string | null,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null
  })  {
    const queryParams = { 
      ...(currency ? { currency: currency.toString() } : {}),
      ...(recognizedAt ? { recognizedAt: recognizedAt.toString() } : {}),
      ...(aggregationField ? { aggregationField: aggregationField.toString() } : {}),
      ...(bookedFrom ? { bookedFrom: bookedFrom.toString() } : {}),
      ...(bookedTo ? { bookedTo: bookedTo.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/journal?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportJournal(response.data);
  }
  async getKycAcceptanceSummary({ 
    periodStart,
    periodEnd }: {
    periodStart: Date,
    periodEnd: Date
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/kyc-acceptance-summary?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new GetKycAcceptanceSummaryReportResponse(response.data);
  }
  async getKycRejectionSummary({ 
    periodStart,
    periodEnd }: {
    periodStart: Date,
    periodEnd: Date
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/kyc-rejection-summary?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportKycRejections(response.data);
  }
  async getKycRequestSummary({ 
    periodStart,
    periodEnd }: {
    periodStart: Date,
    periodEnd: Date
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/kyc-request-summary?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportKycRequests(response.data);
  }
  async getMonthlyRecurringRevenue({ 
    currency,
    periodStart,
    periodEnd,
    limit = null,
    offset = null }: {
    currency: string,
    periodStart: string,
    periodEnd: string,
    limit?: number | null,
    offset?: number | null
  })  {
    const queryParams = { 
      ...(currency ? { currency: currency.toString() } : {}),
      ...(periodStart ? { periodStart: periodStart.toString() } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/monthly-recurring-revenue?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportMonthlyRecurringRevenue(response.data);
  }
  async getRenewalSales({ 
    periodStart,
    periodEnd,
    limit = null,
    offset = null }: {
    periodStart: string,
    periodEnd: string,
    limit?: number | null,
    offset?: number | null
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toString() } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/renewal-sales?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new RenewalSales(response.data);
  }
  async getRetentionPercentage({ 
    aggregationField,
    aggregationPeriod,
    periodStart,
    periodEnd,
    includeSwitchedSubscriptions = null,
    limit = null,
    offset = null,
    filter = null,
    criteria = null }: {
    aggregationField: string,
    aggregationPeriod: string,
    periodStart: Date,
    periodEnd: Date,
    includeSwitchedSubscriptions?: string | null,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    criteria?: string | null
  })  {
    const queryParams = { 
      ...(aggregationField ? { aggregationField: aggregationField.toString() } : {}),
      ...(aggregationPeriod ? { aggregationPeriod: aggregationPeriod.toString() } : {}),
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(includeSwitchedSubscriptions ? { includeSwitchedSubscriptions: includeSwitchedSubscriptions.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(criteria ? { criteria: criteria.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/retention-percentage?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportRetentionPercentage(response.data);
  }
  async getRetentionValue({ 
    aggregationField,
    aggregationPeriod,
    periodStart,
    periodEnd,
    includeRefunds = null,
    includeDisputes = null,
    limit = null,
    offset = null,
    filter = null,
    sort = null,
    criteria = null }: {
    aggregationField: string,
    aggregationPeriod: string,
    periodStart: Date,
    periodEnd: Date,
    includeRefunds?: string | null,
    includeDisputes?: string | null,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    sort?: Array<any> | null,
    criteria?: string | null
  })  {
    const queryParams = { 
      ...(aggregationField ? { aggregationField: aggregationField.toString() } : {}),
      ...(aggregationPeriod ? { aggregationPeriod: aggregationPeriod.toString() } : {}),
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(includeRefunds ? { includeRefunds: includeRefunds.toString() } : {}),
      ...(includeDisputes ? { includeDisputes: includeDisputes.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(criteria ? { criteria: criteria.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/retention-value?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportRetentionValue(response.data);
  }
  async getRevenueAudit({ 
    filter = null,
    sort = null,
    limit = null,
    offset = null }: {
    filter?: string | null,
    sort?: Array<any> | null,
    limit?: number | null,
    offset?: number | null
  }= {})  {
    const queryParams = { 
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/revenue-audit?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<RevenueEntry>(
      response.data.map((item: any) => new RevenueEntry(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getRevenueWaterfall({ 
    currency,
    issuedFrom,
    issuedTo,
    recognizedTo }: {
    currency: string,
    issuedFrom: string,
    issuedTo: string,
    recognizedTo: string
  })  {
    const queryParams = { 
      ...(currency ? { currency: currency.toString() } : {}),
      ...(issuedFrom ? { issuedFrom: issuedFrom.toString() } : {}),
      ...(issuedTo ? { issuedTo: issuedTo.toString() } : {}),
      ...(recognizedTo ? { recognizedTo: recognizedTo.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/revenue-waterfall?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return response.data.map((item: any) => new ReportRevenueWaterfall(item));
  }
  async getSubscriptionCancellation({ 
    periodStart,
    periodEnd,
    aggregationField,
    limit = null,
    offset = null,
    filter = null }: {
    periodStart: Date,
    periodEnd: Date,
    aggregationField: string,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(aggregationField ? { aggregationField: aggregationField.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/subscription-cancellation?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new SubscriptionCancellationReport(response.data);
  }
  async getSubscriptionRenewal({ 
    periodStart,
    periodEnd,
    limit = null,
    offset = null }: {
    periodStart: Date,
    periodEnd: Date,
    limit?: number | null,
    offset?: number | null
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/subscription-renewal?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new SubscriptionRenewal(response.data);
  }
  async getTax({ 
    periodStart,
    periodEnd,
    accountingMethod,
    limit = null,
    offset = null }: {
    periodStart: Date,
    periodEnd: Date,
    accountingMethod: string,
    limit?: number | null,
    offset?: number | null
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(accountingMethod ? { accountingMethod: accountingMethod.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/tax?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportTax(response.data);
  }
  async getTimeSeriesTransaction({ 
    type,
    subaggregate,
    periodStart,
    periodEnd,
    limit = null,
    offset = null }: {
    type: string,
    subaggregate: string,
    periodStart: Date,
    periodEnd: Date,
    limit?: number | null,
    offset?: number | null
  })  {
    const queryParams = { 
      ...(type ? { type: type.toString() } : {}),
      ...(subaggregate ? { subaggregate: subaggregate.toString() } : {}),
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/time-series-transaction?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new TimeSeriesTransaction(response.data);
  }
  async getTransactions({ 
    periodStart,
    periodEnd,
    aggregationField,
    limit = null,
    offset = null,
    filter = null }: {
    periodStart: Date,
    periodEnd: Date,
    aggregationField: string,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(aggregationField ? { aggregationField: aggregationField.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/transactions?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportTransactions(response.data);
  }
  async getTransactionsTimeDispute({ 
    aggregationField,
    periodStart,
    periodEnd,
    limit = null,
    offset = null,
    filter = null }: {
    aggregationField: string,
    periodStart: Date,
    periodEnd: Date,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null
  })  {
    const queryParams = { 
      ...(aggregationField ? { aggregationField: aggregationField.toString() } : {}),
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/reports/transactions-time-dispute?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportDisputeDelays(response.data);
  }
  async getTriggeredEventRuleReport({ 
    eventType,
    periodStart,
    periodEnd,
    limit = null,
    offset = null }: {
    eventType: string,
    periodStart: Date,
    periodEnd: Date,
    limit?: number | null,
    offset?: number | null
  })  {
    const pathParams = {eventType: eventType};
  
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/experimental/reports/events-triggered/{eventType}/rules'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ReportRulesMatchedSummary(response.data);
  }}
