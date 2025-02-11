import AchPlaidFeature from '../models/ach-plaid-feature';

export const ReadyToPayAchMethodFeature = Symbol('ReadyToPayAchMethodFeature');

export interface ReadyToPayAchMethodFeature {
  [ReadyToPayAchMethodFeature]: true;

  get name(): string;
  getName(): string;

  get linkToken(): string;
  getLinkToken(): string;
  setLinkToken(value: string): this;
  get expirationTime(): Date;
  getExpirationTime(): Date;
  setExpirationTime(value: Date | string): this;  jsonSerialize(): Record<string, any>;
}
