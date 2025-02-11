import BuyFeeTransaction from '../models/buy-fee-transaction';
import ChargeTransaction from '../models/charge-transaction';
import RefundTransaction from '../models/refund-transaction';
import ReverseTransaction from '../models/reverse-transaction';
import RiskReserveReleaseTransaction from '../models/risk-reserve-release-transaction';
import RiskReserveTransaction from '../models/risk-reserve-transaction';
import SellFeeTransaction from '../models/sell-fee-transaction';
import { BalanceTransaction } from '../models/balance-transaction';

export default class BalanceTransactionFactory {
  static from(data: any = {}): BalanceTransaction {
    switch(data.type) {
      case 'buy-fee': return new BuyFeeTransaction(data);
      case 'charge': return new ChargeTransaction(data);
      case 'refund': return new RefundTransaction(data);
      case 'reverse': return new ReverseTransaction(data);
      case 'risk-reserve-release': return new RiskReserveReleaseTransaction(data);
      case 'risk-reserve': return new RiskReserveTransaction(data);
      case 'sell-fee': return new SellFeeTransaction(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}
