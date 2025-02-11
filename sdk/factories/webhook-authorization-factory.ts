import WebhookAuthorizationBasic from '../models/webhook-authorization-basic';
import WebhookAuthorizationDigest from '../models/webhook-authorization-digest';
import WebhookAuthorizationNone from '../models/webhook-authorization-none';
import WebhookAuthorizationOAuth1 from '../models/webhook-authorization-o-auth-1';
import { WebhookAuthorization } from '../models/webhook-authorization';

export default class WebhookAuthorizationFactory {
  static from(data: any = {}): WebhookAuthorization {
    switch(data.type) {
      case 'basic': return new WebhookAuthorizationBasic(data);
      case 'digest': return new WebhookAuthorizationDigest(data);
      case 'none': return new WebhookAuthorizationNone(data);
      case 'oauth1': return new WebhookAuthorizationOAuth1(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}
