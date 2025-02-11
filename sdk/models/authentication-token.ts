import AuthenticationTokenPasswordlessMode from '../models/authentication-token-passwordless-mode';
import AuthenticationTokenPasswordMode from '../models/authentication-token-password-mode';

export const AuthenticationToken = Symbol('AuthenticationToken');

export interface AuthenticationToken {
  [AuthenticationToken]: true;

  get mode(): string;
  getMode(): string;

  get customerId(): string | null;
  getCustomerId(): string | null;

  get token(): string | null;
  getToken(): string | null;

  get otpRequired(): boolean | null;
  getOtpRequired(): boolean | null;
  setOtpRequired(value: null | boolean): this;
  get credentialId(): string | null;
  getCredentialId(): string | null;

  get expiredTime(): Date | null;
  getExpiredTime(): Date | null;
  setExpiredTime(value: null | Date | string): this;
  get links(): Array<any> | null;
  getLinks(): Array<any> | null;
  jsonSerialize(): Record<string, any>;
}
