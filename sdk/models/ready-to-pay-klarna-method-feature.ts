import KlarnaFeature from '../models/klarna-feature';

export const ReadyToPayKlarnaMethodFeature = Symbol('ReadyToPayKlarnaMethodFeature');

export interface ReadyToPayKlarnaMethodFeature {
  [ReadyToPayKlarnaMethodFeature]: true;

  get name(): string;
  getName(): string;

  get clientToken(): string;
  getClientToken(): string;
  setClientToken(value: string): this;
  get sessionId(): string;
  getSessionId(): string;
  setSessionId(value: string): this;  jsonSerialize(): Record<string, any>;
}
