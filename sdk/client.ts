import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import AmlChecksApi from './api/aml-checks-api';
import AmlSettingsApi from './api/aml-settings-api';
import FilesApi from './api/files-api';
import CustomerAuthenticationApi from './api/customer-authentication-api';
import BlocklistsApi from './api/blocklists-api';
import CouponsApi from './api/coupons-api';
import CustomFieldsApi from './api/custom-fields-api';
import CustomersApi from './api/customers-api';
import DisputesApi from './api/disputes-api';
import ExternalIdentifiersApi from './api/external-identifiers-api';
import ExternalServicesSettingsApi from './api/external-services-settings-api';
import ApplicationInstancesApi from './api/application-instances-api';
import ApplicationsApi from './api/applications-api';
import InvoicesApi from './api/invoices-api';
import CreditMemosApi from './api/credit-memos-api';
import JournalAccountsApi from './api/journal-accounts-api';
import JournalEntriesApi from './api/journal-entries-api';
import KycRequestsApi from './api/kyc-requests-api';
import KycDocumentsApi from './api/kyc-documents-api';
import KycSettingsApi from './api/kyc-settings-api';
import PaymentInstrumentsApi from './api/payment-instruments-api';
import PlansApi from './api/plans-api';
import ProductsApi from './api/products-api';
import QuotesApi from './api/quotes-api';
import PurchaseApi from './api/purchase-api';
import SearchApi from './api/search-api';
import ShippingRatesApi from './api/shipping-rates-api';
import SubscriptionsApi from './api/subscriptions-api';
import SubscriptionPausesApi from './api/subscription-pauses-api';
import SubscriptionCancellationsApi from './api/subscription-cancellations-api';
import SubscriptionReactivationsApi from './api/subscription-reactivations-api';
import UsagesApi from './api/usages-api';
import TagsApi from './api/tags-api';
import PaymentTokensApi from './api/payment-tokens-api';
import DigitalWalletsApi from './api/digital-wallets-api';
import TransactionsApi from './api/transactions-api';
import PayoutsApi from './api/payouts-api';
import FeesApi from './api/fees-api';
import ApiKeysApi from './api/api-keys-api';
import BalanceTransactionsApi from './api/balance-transactions-api';
import BillingPortalsApi from './api/billing-portals-api';
import BroadcastMessagesApi from './api/broadcast-messages-api';
import DepositRequestsApi from './api/deposit-requests-api';
import DepositStrategiesApi from './api/deposit-strategies-api';
import DepositCustomPropertySetsApi from './api/deposit-custom-property-sets-api';
import CheckoutFormsApi from './api/checkout-forms-api';
import ServiceCredentialsApi from './api/service-credentials-api';
import CustomDomainsApi from './api/custom-domains-api';
import EmailDeliverySettingsApi from './api/email-delivery-settings-api';
import EmailMessagesApi from './api/email-messages-api';
import EmailNotificationsApi from './api/email-notifications-api';
import EventsApi from './api/events-api';
import AccountApi from './api/account-api';
import GatewayAccountsApi from './api/gateway-accounts-api';
import SegmentsApi from './api/segments-api';
import IntegrationsApi from './api/integrations-api';
import ListsApi from './api/lists-api';
import MembershipsApi from './api/memberships-api';
import OrganizationsApi from './api/organizations-api';
import PaymentCardsBankNamesApi from './api/payment-cards-bank-names-api';
import PaymentMethodsApi from './api/payment-methods-api';
import PayoutRequestsApi from './api/payout-requests-api';
import ProfileApi from './api/profile-api';
import PreviewsApi from './api/previews-api';
import RolesApi from './api/roles-api';
import SendThroughAttributionApi from './api/send-through-attribution-api';
import StatusApi from './api/status-api';
import TrackingApi from './api/tracking-api';
import UsersApi from './api/users-api';
import WebhooksApi from './api/webhooks-api';
import WebsitesApi from './api/websites-api';
import DataExportsApi from './api/data-exports-api';
import OrganizationExportsApi from './api/organization-exports-api';
import HistogramsApi from './api/histograms-api';
import ReportsApi from './api/reports-api';
import RiskScoreRulesApi from './api/risk-score-rules-api';
import RiskScoreSimulationJobsApi from './api/risk-score-simulation-jobs-api';
import AllowlistsApi from './api/allowlists-api';
import TagsRulesApi from './api/tags-rules-api';

export interface ClientConfig extends AxiosRequestConfig {
  apiKey?: string;
  sessionToken?: string;
  organizationId?: string;
  baseUrl?: string;
  timeout?: number;
  maxRedirects?: number;
}

export interface ApiKeyHeader {
  'REB-APIKEY': string;
}

export interface BearerHeader {
  Authorization: string;
}

export default class Client {
  // TODO servers
  static BASE_HOST = 'https://api.rebilly.com';

  static SANDBOX_HOST = 'https://api-sandbox.rebilly.com';

  SDK_VERSION = '1.0.0';

  private client: AxiosInstance;

  private amlChecksApi: AmlChecksApi;

  private amlSettingsApi: AmlSettingsApi;

  private filesApi: FilesApi;

  private customerAuthenticationApi: CustomerAuthenticationApi;

  private blocklistsApi: BlocklistsApi;

  private couponsApi: CouponsApi;

  private customFieldsApi: CustomFieldsApi;

  private customersApi: CustomersApi;

  private disputesApi: DisputesApi;

  private externalIdentifiersApi: ExternalIdentifiersApi;

  private externalServicesSettingsApi: ExternalServicesSettingsApi;

  private applicationInstancesApi: ApplicationInstancesApi;

  private applicationsApi: ApplicationsApi;

  private invoicesApi: InvoicesApi;

  private creditMemosApi: CreditMemosApi;

  private journalAccountsApi: JournalAccountsApi;

  private journalEntriesApi: JournalEntriesApi;

  private kycRequestsApi: KycRequestsApi;

  private kycDocumentsApi: KycDocumentsApi;

  private kycSettingsApi: KycSettingsApi;

  private paymentInstrumentsApi: PaymentInstrumentsApi;

  private plansApi: PlansApi;

  private productsApi: ProductsApi;

  private quotesApi: QuotesApi;

  private purchaseApi: PurchaseApi;

  private searchApi: SearchApi;

  private shippingRatesApi: ShippingRatesApi;

  private subscriptionsApi: SubscriptionsApi;

  private subscriptionPausesApi: SubscriptionPausesApi;

  private subscriptionCancellationsApi: SubscriptionCancellationsApi;

  private subscriptionReactivationsApi: SubscriptionReactivationsApi;

  private usagesApi: UsagesApi;

  private tagsApi: TagsApi;

  private paymentTokensApi: PaymentTokensApi;

  private digitalWalletsApi: DigitalWalletsApi;

  private transactionsApi: TransactionsApi;

  private payoutsApi: PayoutsApi;

  private feesApi: FeesApi;

  private apiKeysApi: ApiKeysApi;

  private balanceTransactionsApi: BalanceTransactionsApi;

  private billingPortalsApi: BillingPortalsApi;

  private broadcastMessagesApi: BroadcastMessagesApi;

  private depositRequestsApi: DepositRequestsApi;

  private depositStrategiesApi: DepositStrategiesApi;

  private depositCustomPropertySetsApi: DepositCustomPropertySetsApi;

  private checkoutFormsApi: CheckoutFormsApi;

  private serviceCredentialsApi: ServiceCredentialsApi;

  private customDomainsApi: CustomDomainsApi;

  private emailDeliverySettingsApi: EmailDeliverySettingsApi;

  private emailMessagesApi: EmailMessagesApi;

  private emailNotificationsApi: EmailNotificationsApi;

  private eventsApi: EventsApi;

  private accountApi: AccountApi;

  private gatewayAccountsApi: GatewayAccountsApi;

  private segmentsApi: SegmentsApi;

  private integrationsApi: IntegrationsApi;

  private listsApi: ListsApi;

  private membershipsApi: MembershipsApi;

  private organizationsApi: OrganizationsApi;

  private paymentCardsBankNamesApi: PaymentCardsBankNamesApi;

  private paymentMethodsApi: PaymentMethodsApi;

  private payoutRequestsApi: PayoutRequestsApi;

  private profileApi: ProfileApi;

  private previewsApi: PreviewsApi;

  private rolesApi: RolesApi;

  private sendThroughAttributionApi: SendThroughAttributionApi;

  private statusApi: StatusApi;

  private trackingApi: TrackingApi;

  private usersApi: UsersApi;

  private webhooksApi: WebhooksApi;

  private websitesApi: WebsitesApi;

  private dataExportsApi: DataExportsApi;

  private organizationExportsApi: OrganizationExportsApi;

  private histogramsApi: HistogramsApi;

  private reportsApi: ReportsApi;

  private riskScoreRulesApi: RiskScoreRulesApi;

  private riskScoreSimulationJobsApi: RiskScoreSimulationJobsApi;

  private allowlistsApi: AllowlistsApi;

  private tagsRulesApi: TagsRulesApi;

  constructor(config: ClientConfig = {}) {
    let authenticationHeaders: ApiKeyHeader | BearerHeader | {} = {};
    if (config.apiKey) {
      authenticationHeaders = { 'REB-APIKEY': config.apiKey };
    } else if (config.sessionToken) {
      authenticationHeaders = { Authorization: `Bearer ${config.sessionToken}` };
    }

    if (config.baseUrl) {
      config.baseURL = config.baseUrl.replace(/^\/+/, '');
    } else {
      config.baseURL = Client.SANDBOX_HOST;
    }

    if (config.organizationId) {
      config.baseURL = `${config.baseUrl}/organizations/${config.organizationId}`;
    }

    const headers = {
      ...authenticationHeaders,
      [typeof window === 'undefined' ? 'User-Agent' : 'Reb-Api-Consumer']:
        `Rebilly-SDK-Typescript/${this.SDK_VERSION}`,
    };

    delete config.baseUrl;
    delete config.apiKey;
    delete config.sessionToken;

    this.client = axios.create({
      headers,
      ...config,
    });

    this.amlChecksApi = new AmlChecksApi(this);
    this.amlSettingsApi = new AmlSettingsApi(this);
    this.filesApi = new FilesApi(this);
    this.customerAuthenticationApi = new CustomerAuthenticationApi(this);
    this.blocklistsApi = new BlocklistsApi(this);
    this.couponsApi = new CouponsApi(this);
    this.customFieldsApi = new CustomFieldsApi(this);
    this.customersApi = new CustomersApi(this);
    this.disputesApi = new DisputesApi(this);
    this.externalIdentifiersApi = new ExternalIdentifiersApi(this);
    this.externalServicesSettingsApi = new ExternalServicesSettingsApi(this);
    this.applicationInstancesApi = new ApplicationInstancesApi(this);
    this.applicationsApi = new ApplicationsApi(this);
    this.invoicesApi = new InvoicesApi(this);
    this.creditMemosApi = new CreditMemosApi(this);
    this.journalAccountsApi = new JournalAccountsApi(this);
    this.journalEntriesApi = new JournalEntriesApi(this);
    this.kycRequestsApi = new KycRequestsApi(this);
    this.kycDocumentsApi = new KycDocumentsApi(this);
    this.kycSettingsApi = new KycSettingsApi(this);
    this.paymentInstrumentsApi = new PaymentInstrumentsApi(this);
    this.plansApi = new PlansApi(this);
    this.productsApi = new ProductsApi(this);
    this.quotesApi = new QuotesApi(this);
    this.purchaseApi = new PurchaseApi(this);
    this.searchApi = new SearchApi(this);
    this.shippingRatesApi = new ShippingRatesApi(this);
    this.subscriptionsApi = new SubscriptionsApi(this);
    this.subscriptionPausesApi = new SubscriptionPausesApi(this);
    this.subscriptionCancellationsApi = new SubscriptionCancellationsApi(this);
    this.subscriptionReactivationsApi = new SubscriptionReactivationsApi(this);
    this.usagesApi = new UsagesApi(this);
    this.tagsApi = new TagsApi(this);
    this.paymentTokensApi = new PaymentTokensApi(this);
    this.digitalWalletsApi = new DigitalWalletsApi(this);
    this.transactionsApi = new TransactionsApi(this);
    this.payoutsApi = new PayoutsApi(this);
    this.feesApi = new FeesApi(this);
    this.apiKeysApi = new ApiKeysApi(this);
    this.balanceTransactionsApi = new BalanceTransactionsApi(this);
    this.billingPortalsApi = new BillingPortalsApi(this);
    this.broadcastMessagesApi = new BroadcastMessagesApi(this);
    this.depositRequestsApi = new DepositRequestsApi(this);
    this.depositStrategiesApi = new DepositStrategiesApi(this);
    this.depositCustomPropertySetsApi = new DepositCustomPropertySetsApi(this);
    this.checkoutFormsApi = new CheckoutFormsApi(this);
    this.serviceCredentialsApi = new ServiceCredentialsApi(this);
    this.customDomainsApi = new CustomDomainsApi(this);
    this.emailDeliverySettingsApi = new EmailDeliverySettingsApi(this);
    this.emailMessagesApi = new EmailMessagesApi(this);
    this.emailNotificationsApi = new EmailNotificationsApi(this);
    this.eventsApi = new EventsApi(this);
    this.accountApi = new AccountApi(this);
    this.gatewayAccountsApi = new GatewayAccountsApi(this);
    this.segmentsApi = new SegmentsApi(this);
    this.integrationsApi = new IntegrationsApi(this);
    this.listsApi = new ListsApi(this);
    this.membershipsApi = new MembershipsApi(this);
    this.organizationsApi = new OrganizationsApi(this);
    this.paymentCardsBankNamesApi = new PaymentCardsBankNamesApi(this);
    this.paymentMethodsApi = new PaymentMethodsApi(this);
    this.payoutRequestsApi = new PayoutRequestsApi(this);
    this.profileApi = new ProfileApi(this);
    this.previewsApi = new PreviewsApi(this);
    this.rolesApi = new RolesApi(this);
    this.sendThroughAttributionApi = new SendThroughAttributionApi(this);
    this.statusApi = new StatusApi(this);
    this.trackingApi = new TrackingApi(this);
    this.usersApi = new UsersApi(this);
    this.webhooksApi = new WebhooksApi(this);
    this.websitesApi = new WebsitesApi(this);
    this.dataExportsApi = new DataExportsApi(this);
    this.organizationExportsApi = new OrganizationExportsApi(this);
    this.histogramsApi = new HistogramsApi(this);
    this.reportsApi = new ReportsApi(this);
    this.riskScoreRulesApi = new RiskScoreRulesApi(this);
    this.riskScoreSimulationJobsApi = new RiskScoreSimulationJobsApi(this);
    this.allowlistsApi = new AllowlistsApi(this);
    this.tagsRulesApi = new TagsRulesApi(this);
  }

  getAmlChecks() {
    return this.amlChecks;
  }

  get amlChecks() {
    return this.amlChecksApi;
  }

  getAmlSettings() {
    return this.amlSettings;
  }

  get amlSettings() {
    return this.amlSettingsApi;
  }

  getFiles() {
    return this.files;
  }

  get files() {
    return this.filesApi;
  }

  getCustomerAuthentication() {
    return this.customerAuthentication;
  }

  get customerAuthentication() {
    return this.customerAuthenticationApi;
  }

  getBlocklists() {
    return this.blocklists;
  }

  get blocklists() {
    return this.blocklistsApi;
  }

  getCoupons() {
    return this.coupons;
  }

  get coupons() {
    return this.couponsApi;
  }

  getCustomFields() {
    return this.customFields;
  }

  get customFields() {
    return this.customFieldsApi;
  }

  getCustomers() {
    return this.customers;
  }

  get customers() {
    return this.customersApi;
  }

  getDisputes() {
    return this.disputes;
  }

  get disputes() {
    return this.disputesApi;
  }

  getExternalIdentifiers() {
    return this.externalIdentifiers;
  }

  get externalIdentifiers() {
    return this.externalIdentifiersApi;
  }

  getExternalServicesSettings() {
    return this.externalServicesSettings;
  }

  get externalServicesSettings() {
    return this.externalServicesSettingsApi;
  }

  getApplicationInstances() {
    return this.applicationInstances;
  }

  get applicationInstances() {
    return this.applicationInstancesApi;
  }

  getApplications() {
    return this.applications;
  }

  get applications() {
    return this.applicationsApi;
  }

  getInvoices() {
    return this.invoices;
  }

  get invoices() {
    return this.invoicesApi;
  }

  getCreditMemos() {
    return this.creditMemos;
  }

  get creditMemos() {
    return this.creditMemosApi;
  }

  getJournalAccounts() {
    return this.journalAccounts;
  }

  get journalAccounts() {
    return this.journalAccountsApi;
  }

  getJournalEntries() {
    return this.journalEntries;
  }

  get journalEntries() {
    return this.journalEntriesApi;
  }

  getKycRequests() {
    return this.kycRequests;
  }

  get kycRequests() {
    return this.kycRequestsApi;
  }

  getKycDocuments() {
    return this.kycDocuments;
  }

  get kycDocuments() {
    return this.kycDocumentsApi;
  }

  getKycSettings() {
    return this.kycSettings;
  }

  get kycSettings() {
    return this.kycSettingsApi;
  }

  getPaymentInstruments() {
    return this.paymentInstruments;
  }

  get paymentInstruments() {
    return this.paymentInstrumentsApi;
  }

  getPlans() {
    return this.plans;
  }

  get plans() {
    return this.plansApi;
  }

  getProducts() {
    return this.products;
  }

  get products() {
    return this.productsApi;
  }

  getQuotes() {
    return this.quotes;
  }

  get quotes() {
    return this.quotesApi;
  }

  getPurchase() {
    return this.purchase;
  }

  get purchase() {
    return this.purchaseApi;
  }

  getSearch() {
    return this.search;
  }

  get search() {
    return this.searchApi;
  }

  getShippingRates() {
    return this.shippingRates;
  }

  get shippingRates() {
    return this.shippingRatesApi;
  }

  getSubscriptions() {
    return this.subscriptions;
  }

  get subscriptions() {
    return this.subscriptionsApi;
  }

  getSubscriptionPauses() {
    return this.subscriptionPauses;
  }

  get subscriptionPauses() {
    return this.subscriptionPausesApi;
  }

  getSubscriptionCancellations() {
    return this.subscriptionCancellations;
  }

  get subscriptionCancellations() {
    return this.subscriptionCancellationsApi;
  }

  getSubscriptionReactivations() {
    return this.subscriptionReactivations;
  }

  get subscriptionReactivations() {
    return this.subscriptionReactivationsApi;
  }

  getUsages() {
    return this.usages;
  }

  get usages() {
    return this.usagesApi;
  }

  getTags() {
    return this.tags;
  }

  get tags() {
    return this.tagsApi;
  }

  getPaymentTokens() {
    return this.paymentTokens;
  }

  get paymentTokens() {
    return this.paymentTokensApi;
  }

  getDigitalWallets() {
    return this.digitalWallets;
  }

  get digitalWallets() {
    return this.digitalWalletsApi;
  }

  getTransactions() {
    return this.transactions;
  }

  get transactions() {
    return this.transactionsApi;
  }

  getPayouts() {
    return this.payouts;
  }

  get payouts() {
    return this.payoutsApi;
  }

  getFees() {
    return this.fees;
  }

  get fees() {
    return this.feesApi;
  }

  getApiKeys() {
    return this.apiKeys;
  }

  get apiKeys() {
    return this.apiKeysApi;
  }

  getBalanceTransactions() {
    return this.balanceTransactions;
  }

  get balanceTransactions() {
    return this.balanceTransactionsApi;
  }

  getBillingPortals() {
    return this.billingPortals;
  }

  get billingPortals() {
    return this.billingPortalsApi;
  }

  getBroadcastMessages() {
    return this.broadcastMessages;
  }

  get broadcastMessages() {
    return this.broadcastMessagesApi;
  }

  getDepositRequests() {
    return this.depositRequests;
  }

  get depositRequests() {
    return this.depositRequestsApi;
  }

  getDepositStrategies() {
    return this.depositStrategies;
  }

  get depositStrategies() {
    return this.depositStrategiesApi;
  }

  getDepositCustomPropertySets() {
    return this.depositCustomPropertySets;
  }

  get depositCustomPropertySets() {
    return this.depositCustomPropertySetsApi;
  }

  getCheckoutForms() {
    return this.checkoutForms;
  }

  get checkoutForms() {
    return this.checkoutFormsApi;
  }

  getServiceCredentials() {
    return this.serviceCredentials;
  }

  get serviceCredentials() {
    return this.serviceCredentialsApi;
  }

  getCustomDomains() {
    return this.customDomains;
  }

  get customDomains() {
    return this.customDomainsApi;
  }

  getEmailDeliverySettings() {
    return this.emailDeliverySettings;
  }

  get emailDeliverySettings() {
    return this.emailDeliverySettingsApi;
  }

  getEmailMessages() {
    return this.emailMessages;
  }

  get emailMessages() {
    return this.emailMessagesApi;
  }

  getEmailNotifications() {
    return this.emailNotifications;
  }

  get emailNotifications() {
    return this.emailNotificationsApi;
  }

  getEvents() {
    return this.events;
  }

  get events() {
    return this.eventsApi;
  }

  getAccount() {
    return this.account;
  }

  get account() {
    return this.accountApi;
  }

  getGatewayAccounts() {
    return this.gatewayAccounts;
  }

  get gatewayAccounts() {
    return this.gatewayAccountsApi;
  }

  getSegments() {
    return this.segments;
  }

  get segments() {
    return this.segmentsApi;
  }

  getIntegrations() {
    return this.integrations;
  }

  get integrations() {
    return this.integrationsApi;
  }

  getLists() {
    return this.lists;
  }

  get lists() {
    return this.listsApi;
  }

  getMemberships() {
    return this.memberships;
  }

  get memberships() {
    return this.membershipsApi;
  }

  getOrganizations() {
    return this.organizations;
  }

  get organizations() {
    return this.organizationsApi;
  }

  getPaymentCardsBankNames() {
    return this.paymentCardsBankNames;
  }

  get paymentCardsBankNames() {
    return this.paymentCardsBankNamesApi;
  }

  getPaymentMethods() {
    return this.paymentMethods;
  }

  get paymentMethods() {
    return this.paymentMethodsApi;
  }

  getPayoutRequests() {
    return this.payoutRequests;
  }

  get payoutRequests() {
    return this.payoutRequestsApi;
  }

  getProfile() {
    return this.profile;
  }

  get profile() {
    return this.profileApi;
  }

  getPreviews() {
    return this.previews;
  }

  get previews() {
    return this.previewsApi;
  }

  getRoles() {
    return this.roles;
  }

  get roles() {
    return this.rolesApi;
  }

  getSendThroughAttribution() {
    return this.sendThroughAttribution;
  }

  get sendThroughAttribution() {
    return this.sendThroughAttributionApi;
  }

  getStatus() {
    return this.status;
  }

  get status() {
    return this.statusApi;
  }

  getTracking() {
    return this.tracking;
  }

  get tracking() {
    return this.trackingApi;
  }

  getUsers() {
    return this.users;
  }

  get users() {
    return this.usersApi;
  }

  getWebhooks() {
    return this.webhooks;
  }

  get webhooks() {
    return this.webhooksApi;
  }

  getWebsites() {
    return this.websites;
  }

  get websites() {
    return this.websitesApi;
  }

  getDataExports() {
    return this.dataExports;
  }

  get dataExports() {
    return this.dataExportsApi;
  }

  getOrganizationExports() {
    return this.organizationExports;
  }

  get organizationExports() {
    return this.organizationExportsApi;
  }

  getHistograms() {
    return this.histograms;
  }

  get histograms() {
    return this.histogramsApi;
  }

  getReports() {
    return this.reports;
  }

  get reports() {
    return this.reportsApi;
  }

  getRiskScoreRules() {
    return this.riskScoreRules;
  }

  get riskScoreRules() {
    return this.riskScoreRulesApi;
  }

  getRiskScoreSimulationJobs() {
    return this.riskScoreSimulationJobs;
  }

  get riskScoreSimulationJobs() {
    return this.riskScoreSimulationJobsApi;
  }

  getAllowlists() {
    return this.allowlists;
  }

  get allowlists() {
    return this.allowlistsApi;
  }

  getTagsRules() {
    return this.tagsRules;
  }

  get tagsRules() {
    return this.tagsRulesApi;
  }

  send(requestConfig: AxiosRequestConfig) {
    return this.client.request(requestConfig);
  }
}
