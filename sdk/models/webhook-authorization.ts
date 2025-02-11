import WebhookAuthorizationBasic from '../models/webhook-authorization-basic';
import WebhookAuthorizationDigest from '../models/webhook-authorization-digest';
import WebhookAuthorizationNone from '../models/webhook-authorization-none';
import WebhookAuthorizationOAuth1 from '../models/webhook-authorization-o-auth-1';

export const WebhookAuthorization = Symbol('WebhookAuthorization');

export interface WebhookAuthorization {
  [WebhookAuthorization]: true;

  get type(): string;
  getType(): string;
  jsonSerialize(): Record<string, any>;
}
