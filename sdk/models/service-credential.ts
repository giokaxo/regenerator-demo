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

export const ServiceCredential = Symbol('ServiceCredential');

export interface ServiceCredential {
  [ServiceCredential]: true;

  get type(): string;
  getType(): string;

  get id(): string | null;
  getId(): string | null;

  get hash(): string | null;
  getHash(): string | null;

  get status(): string | null;
  getStatus(): string | null;
  setStatus(value: null | string): this;
  get deactivationTime(): Date | null;
  getDeactivationTime(): Date | null;
  jsonSerialize(): Record<string, any>;
}
