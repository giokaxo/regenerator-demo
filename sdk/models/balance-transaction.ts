import BuyFeeTransaction from '../models/buy-fee-transaction';
import ChargeTransaction from '../models/charge-transaction';
import RefundTransaction from '../models/refund-transaction';
import ReverseTransaction from '../models/reverse-transaction';
import RiskReserveReleaseTransaction from '../models/risk-reserve-release-transaction';
import RiskReserveTransaction from '../models/risk-reserve-transaction';
import SellFeeTransaction from '../models/sell-fee-transaction';

export const BalanceTransaction = Symbol('BalanceTransaction');

export interface BalanceTransaction {
  [BalanceTransaction]: true;

  get type(): string;
  getType(): string;

  get id(): string | null;
  getId(): string | null;

  get parentId(): string | null;
  getParentId(): string | null;
  setParentId(value: null | string): this;
  get transactionId(): string | null;
  getTransactionId(): string | null;
  setTransactionId(value: null | string): this;
  get settlementCurrency(): string | null;
  getSettlementCurrency(): string | null;
  setSettlementCurrency(value: null | string): this;
  get settlementAmount(): number | null;
  getSettlementAmount(): number | null;
  setSettlementAmount(value: null | number | string): this;
  get settlementTime(): Date | null;
  getSettlementTime(): Date | null;

  get settlementRate(): number | null;
  getSettlementRate(): number | null;
  setSettlementRate(value: null | number | string): this;
  get createdTime(): Date | null;
  getCreatedTime(): Date | null;

  get updatedTime(): Date | null;
  getUpdatedTime(): Date | null;

  get links(): Array<any> | null;
  getLinks(): Array<any> | null;
  jsonSerialize(): Record<string, any>;
}
