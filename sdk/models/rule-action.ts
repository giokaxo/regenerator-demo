import RuleActionAbandonScheduledPayments from '../models/rule-action-abandon-scheduled-payments';
import RuleActionAddBlockList from '../models/rule-action-add-block-list';
import RuleActionAddRiskScore from '../models/rule-action-add-risk-score';
import RuleActionAdjustReadyToPay from '../models/rule-action-adjust-ready-to-pay';
import RuleActionAdjustReadyToPayout from '../models/rule-action-adjust-ready-to-payout';
import RuleActionCancelScheduledPayments from '../models/rule-action-cancel-scheduled-payments';
import RuleActionCheckOntarioRestriction from '../models/rule-action-check-ontario-restriction';
import RuleActionCreateInfusionsoftOrder from '../models/rule-action-create-infusionsoft-order';
import RuleActionCreateInfusionsoftPayment from '../models/rule-action-create-infusionsoft-payment';
import RuleActionCreateIntuitQuickbooksBalanceTransactionEntry from '../models/rule-action-create-intuit-quickbooks-balance-transaction-entry';
import RuleActionCreateIntuitQuickbooksPayment from '../models/rule-action-create-intuit-quickbooks-payment';
import RuleActionCreateIntuitQuickbooksRefundReceipt from '../models/rule-action-create-intuit-quickbooks-refund-receipt';
import RuleActionCreateIntuitQuickbooksRevenueRecognitionEntry from '../models/rule-action-create-intuit-quickbooks-revenue-recognition-entry';
import RuleActionDeclineTransaction from '../models/rule-action-decline-transaction';
import RuleActionDisplayMessage from '../models/rule-action-display-message';
import RuleActionDisplayOtherChoices from '../models/rule-action-display-other-choices';
import RuleActionGuessPaymentCardExpiration from '../models/rule-action-guess-payment-card-expiration';
import RuleActionOfferPurchaseBump from '../models/rule-action-offer-purchase-bump';
import RuleActionPerformExperianCheck from '../models/rule-action-perform-experian-check';
import RuleActionPickGatewayAccount from '../models/rule-action-pick-gateway-account';
import RuleActionRemoveReminder from '../models/rule-action-remove-reminder';
import RuleActionRequestKyc from '../models/rule-action-request-kyc';
import RuleActionResetReminder from '../models/rule-action-reset-reminder';
import RuleActionScheduleInvoiceRetry from '../models/rule-action-schedule-invoice-retry';
import RuleActionSchedulePayment from '../models/rule-action-schedule-payment';
import RuleActionScheduleReminder from '../models/rule-action-schedule-reminder';
import RuleActionSendEmail from '../models/rule-action-send-email';
import RuleActionStopSubscriptions from '../models/rule-action-stop-subscriptions';
import RuleActionTagOrUntagCustomer from '../models/rule-action-tag-or-untag-customer';
import RuleActionUpdateIntuitQuickbooksInvoice from '../models/rule-action-update-intuit-quickbooks-invoice';
import RuleActionVoidIntuitQuickbooksInvoice from '../models/rule-action-void-intuit-quickbooks-invoice';

export default class RuleAction {
  NAME_ABANDON_SCHEDULED_PAYMENTS = 'abandon-scheduled-payments';

  NAME_ADD_RISK_SCORE = 'add-risk-score';

  NAME_ADJUST_READY_TO_PAY = 'adjust-ready-to-pay';

  NAME_BLOCKLIST = 'blocklist';

  NAME_CANCEL_SCHEDULED_PAYMENTS = 'cancel-scheduled-payments';

  NAME_CREATE_INTUIT_QUICKBOOKS_BALANCE_TRANSACTION_ENTRY = 'create-intuit-quickbooks-balance-transaction-entry';

  NAME_CREATE_INTUIT_QUICKBOOKS_INVOICE = 'create-intuit-quickbooks-invoice';

  NAME_CREATE_INTUIT_QUICKBOOKS_PAYMENT = 'create-intuit-quickbooks-payment';

  NAME_CREATE_INTUIT_QUICKBOOKS_REFUND_RECEIPT = 'create-intuit-quickbooks-refund-receipt';

  NAME_CREATE_INTUIT_QUICKBOOKS_REVENUE_RECOGNITION_ENTRY = 'create-intuit-quickbooks-revenue-recognition-entry';

  NAME_CREATE_KEAP_INFUSIONSOFT_ORDER = 'create-keap-infusionsoft-order';

  NAME_CREATE_KEAP_INFUSIONSOFT_PAYMENT = 'create-keap-infusionsoft-payment';

  NAME_DECLINE_TRANSACTION = 'decline-transaction';

  NAME_CHECK_ONTARIO_RESTRICTION = 'check-ontario-restriction';

  NAME_DISPLAY_MESSAGE = 'display-message';

  NAME_DISPLAY_OTHER_CHOICES = 'display-other-choices';

  NAME_GUESS_PAYMENT_CARD_EXPIRATION = 'guess-payment-card-expiration';

  NAME_OFFER_PURCHASE_BUMP = 'offer-purchase-bump';

  NAME_PERFORM_EXPERIAN_CHECK = 'perform-experian-check';

  NAME_PICK_GATEWAY_ACCOUNT = 'pick-gateway-account';

  NAME_REMOVE_REMINDER = 'remove-reminder';

  NAME_REQUEST_KYC = 'request-kyc';

  NAME_RESET_REMINDER = 'reset-reminder';

  NAME_SCHEDULE_INVOICE_RETRY = 'schedule-invoice-retry';

  NAME_SCHEDULE_PAYMENT = 'schedule-payment';

  NAME_SCHEDULE_REMINDER = 'schedule-reminder';

  NAME_SEND_EMAIL = 'send-email';

  NAME_STOP_SUBSCRIPTIONS = 'stop-subscriptions';

  NAME_TAG_OR_UNTAG_CUSTOMER = 'tag-or-untag-customer';

  NAME_UPDATE_INTUIT_QUICKBOOKS_INVOICE = 'update-intuit-quickbooks-invoice';

  NAME_VOID_INTUIT_QUICKBOOKS_INVOICE = 'void-intuit-quickbooks-invoice';

  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
  }


  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  private setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }

    return data;
  }
}
