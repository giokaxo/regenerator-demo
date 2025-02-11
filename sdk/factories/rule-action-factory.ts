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
import RuleAction from '../models/rule-action';

export default class RuleActionFactory {
  static from(data: any = {}): RuleAction {
    switch(data.name) {
      case 'abandon-scheduled-payments': return new RuleActionAbandonScheduledPayments(data);
      case 'blocklist': return new RuleActionAddBlockList(data);
      case 'add-risk-score': return new RuleActionAddRiskScore(data);
      case 'adjust-ready-to-pay': return new RuleActionAdjustReadyToPay(data);
      case 'adjust-ready-to-payout': return new RuleActionAdjustReadyToPayout(data);
      case 'cancel-scheduled-payments': return new RuleActionCancelScheduledPayments(data);
      case 'check-ontario-restriction': return new RuleActionCheckOntarioRestriction(data);
      case 'create-keap-infusionsoft-order': return new RuleActionCreateInfusionsoftOrder(data);
      case 'create-keap-infusionsoft-payment': return new RuleActionCreateInfusionsoftPayment(data);
      case 'create-intuit-quickbooks-balance-transaction-entry': return new RuleActionCreateIntuitQuickbooksBalanceTransactionEntry(data);
      case 'create-intuit-quickbooks-payment': return new RuleActionCreateIntuitQuickbooksPayment(data);
      case 'create-intuit-quickbooks-refund-receipt': return new RuleActionCreateIntuitQuickbooksRefundReceipt(data);
      case 'create-intuit-quickbooks-revenue-recognition-entry': return new RuleActionCreateIntuitQuickbooksRevenueRecognitionEntry(data);
      case 'decline-transaction': return new RuleActionDeclineTransaction(data);
      case 'display-message': return new RuleActionDisplayMessage(data);
      case 'display-other-choices': return new RuleActionDisplayOtherChoices(data);
      case 'guess-payment-card-expiration': return new RuleActionGuessPaymentCardExpiration(data);
      case 'offer-purchase-bump': return new RuleActionOfferPurchaseBump(data);
      case 'perform-experian-check': return new RuleActionPerformExperianCheck(data);
      case 'pick-gateway-account': return new RuleActionPickGatewayAccount(data);
      case 'remove-reminder': return new RuleActionRemoveReminder(data);
      case 'request-kyc': return new RuleActionRequestKyc(data);
      case 'reset-reminder': return new RuleActionResetReminder(data);
      case 'schedule-invoice-retry': return new RuleActionScheduleInvoiceRetry(data);
      case 'schedule-payment': return new RuleActionSchedulePayment(data);
      case 'schedule-reminder': return new RuleActionScheduleReminder(data);
      case 'send-email': return new RuleActionSendEmail(data);
      case 'stop-subscriptions': return new RuleActionStopSubscriptions(data);
      case 'tag-or-untag-customer': return new RuleActionTagOrUntagCustomer(data);
      case 'update-intuit-quickbooks-invoice': return new RuleActionUpdateIntuitQuickbooksInvoice(data);
      case 'void-intuit-quickbooks-invoice': return new RuleActionVoidIntuitQuickbooksInvoice(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}
