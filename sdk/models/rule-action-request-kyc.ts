import KycRequestDocument from '../models/kyc-request-document';
import RuleAction from '../models/rule-action';

export default class RuleActionRequestKyc extends RuleAction {
  EXCLUDE_POLICY_CUSTOMERS_WITH_ACCEPTED_DOCUMENT = 'customers-with-accepted-document';

  EXCLUDE_POLICY_CUSTOMERS_WITH_DOCUMENT = 'customers-with-document';

  EXCLUDE_POLICY_NONE = 'none';

  PROMPT_POLICY_BEFORE_TRANSACTION_PROCESS = 'before-transaction-process';

  PROMPT_POLICY_AFTER_TRANSACTION_PROCESS = 'after-transaction-process';

  REJECTED_BEFORE_TRANSACTION_PROCESS_POLICY_PROCESS_TRANSACTION = 'process-transaction';

  REJECTED_BEFORE_TRANSACTION_PROCESS_POLICY_DECLINE = 'decline';

  REJECTED_BEFORE_TRANSACTION_PROCESS_POLICY_USE_ALTERNATE_GATEWAY = 'use-alternate-gateway';

  REJECTED_AFTER_TRANSACTION_PROCESS_POLICY_PROCEED = 'proceed';

  OPTIONAL_POLICY_BYPASS = 'allow-bypass';

  OPTIONAL_POLICY_USE_ALTERNATE_GATEWAY = 'allow-use-alternate-gateway';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'request-kyc',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'documents')) {
      this.setDocuments(data['documents']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'excludePolicy')) {
      this.setExcludePolicy(data['excludePolicy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isMandatory')) {
      this.setIsMandatory(data['isMandatory']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'promptPolicy')) {
      this.setPromptPolicy(data['promptPolicy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rejectedBeforeTransactionProcessPolicy')) {
      this.setRejectedBeforeTransactionProcessPolicy(data['rejectedBeforeTransactionProcessPolicy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'alternateGatewayAccountIfRejected')) {
      this.setAlternateGatewayAccountIfRejected(data['alternateGatewayAccountIfRejected']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rejectedAfterTransactionProcessPolicy')) {
      this.setRejectedAfterTransactionProcessPolicy(data['rejectedAfterTransactionProcessPolicy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'optionalPolicy')) {
      this.setOptionalPolicy(data['optionalPolicy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'alternateGatewayAccountIfOptional')) {
      this.setAlternateGatewayAccountIfOptional(data['alternateGatewayAccountIfOptional']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bypassCurrencyToDisplay')) {
      this.setBypassCurrencyToDisplay(data['bypassCurrencyToDisplay']);
    }
  }


  get documents(): Array<any> {
    return this._fields['documents'];
  }
  
  getDocuments(): Array<any> {
      return this._fields['documents'];
  }

  setDocuments(value: Array<any>) {
    value = value.map(
      (value) => value instanceof KycRequestDocument ? value : new KycRequestDocument(value),
    );

    this._fields['documents'] = value;

    return this;
  }

  get excludePolicy(): string {
    return this._fields['excludePolicy'];
  }
  
  getExcludePolicy(): string {
      return this._fields['excludePolicy'];
  }

  setExcludePolicy(value: string) {
    this._fields['excludePolicy'] = value;

    return this;
  }

  get isMandatory(): boolean {
    return this._fields['isMandatory'];
  }
  
  getIsMandatory(): boolean {
      return this._fields['isMandatory'];
  }

  setIsMandatory(value: boolean) {
    this._fields['isMandatory'] = value;

    return this;
  }

  get promptPolicy(): string {
    return this._fields['promptPolicy'];
  }
  
  getPromptPolicy(): string {
      return this._fields['promptPolicy'];
  }

  setPromptPolicy(value: string) {
    this._fields['promptPolicy'] = value;

    return this;
  }

  get rejectedBeforeTransactionProcessPolicy(): string {
    return this._fields['rejectedBeforeTransactionProcessPolicy'];
  }
  
  getRejectedBeforeTransactionProcessPolicy(): string {
      return this._fields['rejectedBeforeTransactionProcessPolicy'];
  }

  setRejectedBeforeTransactionProcessPolicy(value: string) {
    this._fields['rejectedBeforeTransactionProcessPolicy'] = value;

    return this;
  }

  get alternateGatewayAccountIfRejected(): string | null {
    return this._fields['alternateGatewayAccountIfRejected'] ?? null;
  }
  
  getAlternateGatewayAccountIfRejected(): string | null {
      return this._fields['alternateGatewayAccountIfRejected'] ?? null;
  }

  setAlternateGatewayAccountIfRejected(value: null | string) {
    this._fields['alternateGatewayAccountIfRejected'] = value;

    return this;
  }

  get rejectedAfterTransactionProcessPolicy(): string {
    return this._fields['rejectedAfterTransactionProcessPolicy'];
  }
  
  getRejectedAfterTransactionProcessPolicy(): string {
      return this._fields['rejectedAfterTransactionProcessPolicy'];
  }

  setRejectedAfterTransactionProcessPolicy(value: string) {
    this._fields['rejectedAfterTransactionProcessPolicy'] = value;

    return this;
  }

  get optionalPolicy(): string {
    return this._fields['optionalPolicy'];
  }
  
  getOptionalPolicy(): string {
      return this._fields['optionalPolicy'];
  }

  setOptionalPolicy(value: string) {
    this._fields['optionalPolicy'] = value;

    return this;
  }

  get alternateGatewayAccountIfOptional(): string | null {
    return this._fields['alternateGatewayAccountIfOptional'] ?? null;
  }
  
  getAlternateGatewayAccountIfOptional(): string | null {
      return this._fields['alternateGatewayAccountIfOptional'] ?? null;
  }

  setAlternateGatewayAccountIfOptional(value: null | string) {
    this._fields['alternateGatewayAccountIfOptional'] = value;

    return this;
  }

  get bypassCurrencyToDisplay(): string | null {
    return this._fields['bypassCurrencyToDisplay'] ?? null;
  }
  
  getBypassCurrencyToDisplay(): string | null {
      return this._fields['bypassCurrencyToDisplay'] ?? null;
  }

  setBypassCurrencyToDisplay(value: null | string) {
    this._fields['bypassCurrencyToDisplay'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'documents')) {
      data['documents'] = this['documents'].map(
          (kycRequestDocument: KycRequestDocument) => kycRequestDocument.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'excludePolicy')) {
      data['excludePolicy'] = this['excludePolicy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isMandatory')) {
      data['isMandatory'] = this['isMandatory'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'promptPolicy')) {
      data['promptPolicy'] = this['promptPolicy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rejectedBeforeTransactionProcessPolicy')) {
      data['rejectedBeforeTransactionProcessPolicy'] = this['rejectedBeforeTransactionProcessPolicy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'alternateGatewayAccountIfRejected')) {
      data['alternateGatewayAccountIfRejected'] = this['alternateGatewayAccountIfRejected'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rejectedAfterTransactionProcessPolicy')) {
      data['rejectedAfterTransactionProcessPolicy'] = this['rejectedAfterTransactionProcessPolicy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'optionalPolicy')) {
      data['optionalPolicy'] = this['optionalPolicy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'alternateGatewayAccountIfOptional')) {
      data['alternateGatewayAccountIfOptional'] = this['alternateGatewayAccountIfOptional'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bypassCurrencyToDisplay')) {
      data['bypassCurrencyToDisplay'] = this['bypassCurrencyToDisplay'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
