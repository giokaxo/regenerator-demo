import ReadyToPayAchMethod from '../models/ready-to-pay-ach-method';
import ReadyToPayGenericMethod from '../models/ready-to-pay-generic-method';
import ReadyToPayKlarnaMethod from '../models/ready-to-pay-klarna-method';
import ReadyToPayPaymentCardMethod from '../models/ready-to-pay-payment-card-method';
import ReadyToPayPayPalMethod from '../models/ready-to-pay-pay-pal-method';

export const ReadyToPayMethods = Symbol('ReadyToPayMethods');

export interface ReadyToPayMethods {
  [ReadyToPayMethods]: true;

  get method(): string;
  getMethod(): string;

  get filters(): Array<any> | null;
  getFilters(): Array<any> | null;
  setFilters(value: null | Array<any>): this;  jsonSerialize(): Record<string, any>;
}
