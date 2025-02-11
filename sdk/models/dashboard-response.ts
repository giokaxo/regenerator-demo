import DashboardResponseSegments from '../models/dashboard-response-segments';

export default class DashboardResponse {
  METRIC_APPROVAL_RATE = 'approvalRate';

  METRIC_SALES_COUNT = 'salesCount';

  METRIC_SALES_VALUE = 'salesValue';

  METRIC_REFUNDS_VALUE = 'refundsValue';

  METRIC_CHARGEBACKS_COUNT = 'chargebacksCount';

  METRIC_CHARGEBACKS_VALUE = 'chargebacksValue';

  METRIC_TRANSACTIONS_COUNT = 'transactionsCount';

  METRIC_REDEEMED_COUPONS_COUNT = 'redeemedCouponsCount';

  METRIC_NEW_LEADS_COUNT = 'newLeadsCount';

  METRIC_NEW_CUSTOMERS_COUNT = 'newCustomersCount';

  METRIC_APPLIED_COUPONS_COUNT = 'appliedCouponsCount';

  METRIC_TRIAL_CONVERSIONS_COUNT = 'trialConversionsCount';

  METRIC_TRIAL_CONVERSIONS_RATE = 'trialConversionsRate';

  METRIC_RENEWAL_SUCCESS_RATE = 'renewalSuccessRate';

  METRIC_RENEWALS_COUNT = 'renewalsCount';

  METRIC_NEW_TRIALS_COUNT = 'newTrialsCount';

  METRIC_REACTIVATIONS_COUNT = 'reactivationsCount';

  METRIC_SUCCESSFUL_RETRIES_COUNT = 'successfulRetriesCount';

  METRIC_INVOICED_REVENUE = 'invoicedRevenue';

  METRIC_CHURN_COUNT = 'churnCount';

  METRIC_CHURN_RATE = 'churnRate';

  METRIC_CANCELLATIONS_COUNT = 'cancellationsCount';

  METRIC_CANCELLATIONS_RATE = 'cancellationsRate';

  METRIC_ACTIVE_SUBSCRIPTIONS_COUNT = 'activeSubscriptionsCount';

  METRIC_NEW_SUBSCRIPTIONS_COUNT = 'newSubscriptionsCount';

  METRIC_UPGRADES_COUNT = 'upgradesCount';

  METRIC_DOWNGRADES_COUNT = 'downgradesCount';

  METRIC_MONTHLY_RECURRING_REVENUE = 'monthlyRecurringRevenue';

  METRIC_AVERAGE_REVENUE_PER_CUSTOMER = 'averageRevenuePerCustomer';

  METRIC_CUSTOMER_LIFETIME_VALUE = 'customerLifetimeValue';

  METRIC_ADDRESS_PROOF_ACCEPTANCE_RATE = 'addressProofAcceptanceRate';

  METRIC_IDENTITY_PROOF_ACCEPTANCE_RATE = 'identityProofAcceptanceRate';

  METRIC_FUNDS_PROOF_ACCEPTANCE_RATE = 'fundsProofAcceptanceRate';

  METRIC_PURCHASE_PROOF_ACCEPTANCE_RATE = 'purchaseProofAcceptanceRate';

  METRIC_CREDIT_FILE_PROOF_ACCEPTANCE_RATE = 'creditFileProofAcceptanceRate';

  METRIC_KYC_REJECTION_RATE = 'kycRejectionRate';

  METRIC_KYC_ACCURACY_RATE = 'kycAccuracyRate';

  METRIC_ADDRESS_PROOF_ACCURACY_RATE = 'addressProofAccuracyRate';

  METRIC_IDENTITY_PROOF_ACCURACY_RATE = 'identityProofAccuracyRate';

  METRIC_CREDIT_FILE_PROOF_ACCURACY_RATE = 'creditFileProofAccuracyRate';

  METRIC_KYC_REQUEST_COUNT = 'kycRequestCount';

  METRIC_KYC_REQUEST_ABANDONMENT_RATE = 'kycRequestAbandonmentRate';

  METRIC_KYC_REQUEST_ATTEMPTED_RATE = 'kycRequestAttemptedRate';

  METRIC_KYC_REQUEST_FAILURE_RATE = 'kycRequestFailureRate';

  METRIC_KYC_REQUEST_FULFILLMENT_RATE = 'kycRequestFulfillmentRate';

  METRIC_KYC_REQUEST_EXPIRATION_RATE = 'kycRequestExpirationRate';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'metric')) {
      this.setMetric(data['metric']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'humanName')) {
      this.setHumanName(data['humanName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'increaseIsGood')) {
      this.setIncreaseIsGood(data['increaseIsGood']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'segments')) {
      this.setSegments(data['segments']);
    }
  }


  get metric(): string | null {
    return this._fields['metric'] ?? null;
  }
  
  getMetric(): string | null {
      return this._fields['metric'] ?? null;
  }

  setMetric(value: null | string) {
    this._fields['metric'] = value;

    return this;
  }

  get humanName(): string | null {
    return this._fields['humanName'] ?? null;
  }
  
  getHumanName(): string | null {
      return this._fields['humanName'] ?? null;
  }

  setHumanName(value: null | string) {
    this._fields['humanName'] = value;

    return this;
  }

  get increaseIsGood(): boolean | null {
    return this._fields['increaseIsGood'] ?? null;
  }
  
  getIncreaseIsGood(): boolean | null {
      return this._fields['increaseIsGood'] ?? null;
  }

  setIncreaseIsGood(value: null | boolean) {
    this._fields['increaseIsGood'] = value;

    return this;
  }

  get segments(): Array<any> | null {
    return this._fields['segments'] ?? null;
  }
  
  getSegments(): Array<any> | null {
      return this._fields['segments'] ?? null;
  }

  setSegments(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof DashboardResponseSegments ? value : new DashboardResponseSegments(value),
    ) : null;

    this._fields['segments'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'metric')) {
      data['metric'] = this['metric'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'humanName')) {
      data['humanName'] = this['humanName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'increaseIsGood')) {
      data['increaseIsGood'] = this['increaseIsGood'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'segments')) {
      data['segments'] = this['segments'] !== null
          ? this._fields['segments'].map((dashboardResponseSegments: DashboardResponseSegments) => dashboardResponseSegments.jsonSerialize())
          : null;
    }

    return data;
  }
}
