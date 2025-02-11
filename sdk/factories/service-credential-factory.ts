import AvalaraCredential from '../models/avalara-credential';
import ExperianCredential from '../models/experian-credential';
import MailgunCredential from '../models/mailgun-credential';
import OAuth2Credential from '../models/o-auth-2-credential';
import PlaidCredential from '../models/plaid-credential';
import PostmarkCredential from '../models/postmark-credential';
import SendGridCredential from '../models/send-grid-credential';
import SESCredential from '../models/ses-credential';
import SmtpCredential from '../models/smtp-credential';
import TaxJarCredential from '../models/tax-jar-credential';
import WebhookCredential from '../models/webhook-credential';
import { ServiceCredential } from '../models/service-credential';

export default class ServiceCredentialFactory {
  static from(data: any = {}): ServiceCredential {
    switch(data.type) {
      case 'avalara': return new AvalaraCredential(data);
      case 'experian': return new ExperianCredential(data);
      case 'mailgun': return new MailgunCredential(data);
      case 'oauth2': return new OAuth2Credential(data);
      case 'plaid': return new PlaidCredential(data);
      case 'postmark': return new PostmarkCredential(data);
      case 'sendgrid': return new SendGridCredential(data);
      case 'aws-ses': return new SESCredential(data);
      case 'smtp': return new SmtpCredential(data);
      case 'taxjar': return new TaxJarCredential(data);
      case 'webhook': return new WebhookCredential(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}
