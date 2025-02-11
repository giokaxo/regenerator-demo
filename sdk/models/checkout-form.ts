import CheckoutFormPlanFactory from '../factories/checkout-form-plan-factory';
import CheckoutFormCustomization from '../models/checkout-form-customization';
import { CheckoutFormPlan } from '../models/checkout-form-plan';
import ResourceLink from '../models/resource-link';

export default class CheckoutForm {
  PAYMENT_METHODS_PAYMENT_CARD = 'payment-card';

  PAYMENT_METHODS_ACH = 'ach';

  PAYMENT_METHODS_CASH = 'cash';

  PAYMENT_METHODS_CHECK = 'check';

  PAYMENT_METHODS_PAYPAL = 'paypal';

  PAYMENT_METHODS_ADV_CASH = 'AdvCash';

  PAYMENT_METHODS_AIRCASH = 'Aircash';

  PAYMENT_METHODS_AIRPAY = 'Airpay';

  PAYMENT_METHODS_ALFA_CLICK = 'Alfa-click';

  PAYMENT_METHODS_ALIPAY = 'Alipay';

  PAYMENT_METHODS_AMAZON_PAY = 'AmazonPay';

  PAYMENT_METHODS_APPLE_PAY = 'Apple Pay';

  PAYMENT_METHODS_ASTRO_PAY_CARD = 'AstroPay Card';

  PAYMENT_METHODS_ASTRO_PAY_GO = 'AstroPay-GO';

  PAYMENT_METHODS_BANK_SEND = 'BankSEND';

  PAYMENT_METHODS_BANK_REFERENCED = 'BankReferenced';

  PAYMENT_METHODS_BANK_TRANSFER = 'bank-transfer';

  PAYMENT_METHODS_BANK_TRANSFER_2 = 'bank-transfer-2';

  PAYMENT_METHODS_BANK_TRANSFER_3 = 'bank-transfer-3';

  PAYMENT_METHODS_BANK_TRANSFER_4 = 'bank-transfer-4';

  PAYMENT_METHODS_BANK_TRANSFER_5 = 'bank-transfer-5';

  PAYMENT_METHODS_BANK_TRANSFER_6 = 'bank-transfer-6';

  PAYMENT_METHODS_BANK_TRANSFER_7 = 'bank-transfer-7';

  PAYMENT_METHODS_BANK_TRANSFER_8 = 'bank-transfer-8';

  PAYMENT_METHODS_BANK_TRANSFER_9 = 'bank-transfer-9';

  PAYMENT_METHODS_BALOTO = 'Baloto';

  PAYMENT_METHODS_BEELINE = 'Beeline';

  PAYMENT_METHODS_BELFIUS_DIRECT_NET = 'Belfius-direct-net';

  PAYMENT_METHODS_BITCOIN = 'bitcoin';

  PAYMENT_METHODS_BIZUM = 'Bizum';

  PAYMENT_METHODS_BLIK = 'Blik';

  PAYMENT_METHODS_BOLETO = 'Boleto';

  PAYMENT_METHODS_BOLETO_2 = 'Boleto-2';

  PAYMENT_METHODS_BOLETO_3 = 'Boleto-3';

  PAYMENT_METHODS_CASH_DEPOSIT = 'cash-deposit';

  PAYMENT_METHODS_CAS_HLIB = 'CASHlib';

  PAYMENT_METHODS_CASH_TO_CODE = 'CashToCode';

  PAYMENT_METHODS_CC_AVENUE = 'CCAvenue';

  PAYMENT_METHODS_CHINA_UNION_PAY = 'China UnionPay';

  PAYMENT_METHODS_CLEO = 'Cleo';

  PAYMENT_METHODS_COD_VOUCHER = 'CODVoucher';

  PAYMENT_METHODS_CONEKTA_OXXO = 'Conekta-oxxo';

  PAYMENT_METHODS_CONEKTA_SPEI = 'Conekta-spei';

  PAYMENT_METHODS_CRYPTOCURRENCY = 'cryptocurrency';

  PAYMENT_METHODS_CUPON_DE_PAGOS = 'Cupon-de-pagos';

  PAYMENT_METHODS_CYBER_SOURCE = 'CyberSource';

  PAYMENT_METHODS_DIMOCO_PAY_SMART = 'Dimoco-pay-smart';

  PAYMENT_METHODS_DIRECTA24_CARD = 'Directa24Card';

  PAYMENT_METHODS_DOMESTIC_CARDS = 'domestic-cards';

  PAYMENT_METHODS_EFECTY = 'Efecty';

  PAYMENT_METHODS_ECHECK = 'echeck';

  PAYMENT_METHODS_ECO_PAYZ = 'ecoPayz';

  PAYMENT_METHODS_ECO_VOUCHER = 'ecoVoucher';

  PAYMENT_METHODS_EPS = 'EPS';

  PAYMENT_METHODS_E_PAY_BG = 'ePay.bg';

  PAYMENT_METHODS_ETHEREUM = 'Ethereum';

  PAYMENT_METHODS_E_WALLET = 'e-wallet';

  PAYMENT_METHODS_EZY_EFT = 'ezyEFT';

  PAYMENT_METHODS_E_ZEE_WALLET = 'eZeeWallet';

  PAYMENT_METHODS_FASTER_PAY = 'FasterPay';

  PAYMENT_METHODS_FLEXEPIN = 'Flexepin';

  PAYMENT_METHODS_GIROPAY = 'Giropay';

  PAYMENT_METHODS_GOOGLE_PAY = 'Google Pay';

  PAYMENT_METHODS_GPAYSAFE = 'Gpaysafe';

  PAYMENT_METHODS_I_DEBIT = 'iDebit';

  PAYMENT_METHODS_I_DEAL = 'iDEAL';

  PAYMENT_METHODS_ING_HOMEPAY = 'ING-homepay';

  PAYMENT_METHODS_INOVAPAY_PIN = 'INOVAPAY-pin';

  PAYMENT_METHODS_INOVAPAY_WALLET = 'INOVAPAY-wallet';

  PAYMENT_METHODS_INSTA_DEBIT = 'InstaDebit';

  PAYMENT_METHODS_INSTANT_PAYMENTS = 'InstantPayments';

  PAYMENT_METHODS_INSTANT_BANK_TRANSFER = 'instant-bank-transfer';

  PAYMENT_METHODS_INTERAC_ONLINE = 'Interac-online';

  PAYMENT_METHODS_INTERAC_E_TRANSFER = 'Interac-eTransfer';

  PAYMENT_METHODS_INTERAC_EXPRESS_CONNECT = 'Interac-express-connect';

  PAYMENT_METHODS_INTERAC = 'Interac';

  PAYMENT_METHODS_INVOICE = 'invoice';

  PAYMENT_METHODS_I_WALLET = 'iWallet';

  PAYMENT_METHODS_JETON = 'Jeton';

  PAYMENT_METHODS_JETON_CASH = 'JetonCash';

  PAYMENT_METHODS_JPAY = 'jpay';

  PAYMENT_METHODS_KAKAO_PAY = 'KakaoPay';

  PAYMENT_METHODS_KHELOCARD = 'Khelocard';

  PAYMENT_METHODS_KLARNA = 'Klarna';

  PAYMENT_METHODS_KNOT = 'KNOT';

  PAYMENT_METHODS_LITECOIN = 'Litecoin';

  PAYMENT_METHODS_LOONIE = 'loonie';

  PAYMENT_METHODS_LPG_ONLINE = 'LPG-online';

  PAYMENT_METHODS_LPG_PAYMENT_CARD = 'LPG-payment-card';

  PAYMENT_METHODS_MATRIX = 'Matrix';

  PAYMENT_METHODS_MAXI_CASH = 'MaxiCash';

  PAYMENT_METHODS_MEGAFON = 'Megafon';

  PAYMENT_METHODS_MERCADO_PAGO = 'MercadoPago';

  PAYMENT_METHODS_MI_FINITY_E_WALLET = 'MiFinity-eWallet';

  PAYMENT_METHODS_MISCELLANEOUS = 'miscellaneous';

  PAYMENT_METHODS_MOBILE_PAY = 'MobilePay';

  PAYMENT_METHODS_MULTIBANCO = 'Multibanco';

  PAYMENT_METHODS_BANCONTACT = 'Bancontact';

  PAYMENT_METHODS_BANCONTACT_MOBILE = 'Bancontact-mobile';

  PAYMENT_METHODS_MTS = 'MTS';

  PAYMENT_METHODS_MUCH_BETTER = 'MuchBetter';

  PAYMENT_METHODS_MY_FATOORAH = 'MyFatoorah';

  PAYMENT_METHODS_NEOSURF = 'Neosurf';

  PAYMENT_METHODS_NETBANKING = 'Netbanking';

  PAYMENT_METHODS_NETELLER = 'Neteller';

  PAYMENT_METHODS_NORDEA_SOLO = 'Nordea-Solo';

  PAYMENT_METHODS_NORDIK_COIN = 'NordikCoin';

  PAYMENT_METHODS_OCHA_PAY = 'OchaPay';

  PAYMENT_METHODS_ONLINE_BANK_TRANSFER = 'online-bank-transfer';

  PAYMENT_METHODS_ONLINEUEBERWEISEN = 'Onlineueberweisen';

  PAYMENT_METHODS_ORIENTAL_WALLET = 'oriental-wallet';

  PAYMENT_METHODS_OXXO = 'OXXO';

  PAYMENT_METHODS_P24 = 'P24';

  PAYMENT_METHODS_PAGADITO = 'Pagadito';

  PAYMENT_METHODS_PAGO_EFFECTIVO = 'PagoEffectivo';

  PAYMENT_METHODS_PAGSMILE_LOTTERY = 'Pagsmile-lottery';

  PAYMENT_METHODS_PAGSMILE_DEPOSIT_EXPRESS = 'Pagsmile-deposit-express';

  PAYMENT_METHODS_PAY_CASH = 'PayCash';

  PAYMENT_METHODS_PAYCO = 'Payco';

  PAYMENT_METHODS_PAYEER = 'Payeer';

  PAYMENT_METHODS_PAYMENT_ASIA_CRYPTO = 'PaymentAsia-crypto';

  PAYMENT_METHODS_PAYSAFECARD = 'Paysafecard';

  PAYMENT_METHODS_PAY_TABS = 'PayTabs';

  PAYMENT_METHODS_PAY4_FUN = 'Pay4Fun';

  PAYMENT_METHODS_PAYNOTE = 'Paynote';

  PAYMENT_METHODS_PAYMERO = 'Paymero';

  PAYMENT_METHODS_PAYMERO_QR = 'Paymero-QR';

  PAYMENT_METHODS_PAY_U = 'PayU';

  PAYMENT_METHODS_PAY_U_LATAM = 'PayULatam';

  PAYMENT_METHODS_PERFECT_MONEY = 'Perfect-money';

  PAYMENT_METHODS_PIASTRIX = 'Piastrix';

  PAYMENT_METHODS_PIX = 'PIX';

  PAYMENT_METHODS_PIN_PAY = 'PinPay';

  PAYMENT_METHODS_PHONE = 'phone';

  PAYMENT_METHODS_PHONE_PE = 'PhonePe';

  PAYMENT_METHODS_PO_LI = 'POLi';

  PAYMENT_METHODS_POST_FINANCE_CARD = 'PostFinance-card';

  PAYMENT_METHODS_POST_FINANCE_E_FINANCE = 'PostFinance-e-finance';

  PAYMENT_METHODS_QIWI = 'QIWI';

  PAYMENT_METHODS_Q_PAY = 'QPay';

  PAYMENT_METHODS_QQ_PAY = 'QQPay';

  PAYMENT_METHODS_RAPYD_CHECKOUT = 'rapyd-checkout';

  PAYMENT_METHODS_REBILLY_HOSTED_PAYMENT_FORM = 'rebilly-hosted-payment-form';

  PAYMENT_METHODS_RESURS = 'Resurs';

  PAYMENT_METHODS_SAFETY_PAY = 'SafetyPay';

  PAYMENT_METHODS_SAMSUNG_PAY = 'Samsung Pay';

  PAYMENT_METHODS_SEPA = 'SEPA';

  PAYMENT_METHODS_SIIRTO = 'Siirto';

  PAYMENT_METHODS_SKRILL = 'Skrill';

  PAYMENT_METHODS_SKRILL_RAPID_TRANSFER = 'Skrill Rapid Transfer';

  PAYMENT_METHODS_SMS_VOUCHER = 'SMSVoucher';

  PAYMENT_METHODS_SOFORT = 'Sofort';

  PAYMENT_METHODS_SPARK_PAY = 'SparkPay';

  PAYMENT_METHODS_SPEI = 'SPEI';

  PAYMENT_METHODS_SWIFT_DBT = 'swift-dbt';

  PAYMENT_METHODS_TELE2 = 'Tele2';

  PAYMENT_METHODS_TELR = 'Telr';

  PAYMENT_METHODS_TERMINALY_RF = 'Terminaly-RF';

  PAYMENT_METHODS_TETHER = 'Tether';

  PAYMENT_METHODS_TODITO_CASH_CARD = 'ToditoCash-card';

  PAYMENT_METHODS_TRUSTLY = 'Trustly';

  PAYMENT_METHODS_TUPAY = 'Tupay';

  PAYMENT_METHODS_TWINT = 'TWINT';

  PAYMENT_METHODS_UNI_CRYPT = 'UniCrypt';

  PAYMENT_METHODS_U_PAY_CARD = 'UPayCard';

  PAYMENT_METHODS_UPI = 'UPI';

  PAYMENT_METHODS_USD_COIN = 'USD-coin';

  PAYMENT_METHODS_V_CREDITOS = 'VCreditos';

  PAYMENT_METHODS_VEGA_WALLET = 'VegaWallet';

  PAYMENT_METHODS_VENUS_POINT = 'VenusPoint';

  PAYMENT_METHODS_VOUCHER = 'voucher';

  PAYMENT_METHODS_VOUCHER_2 = 'voucher-2';

  PAYMENT_METHODS_VOUCHER_3 = 'voucher-3';

  PAYMENT_METHODS_VOUCHER_4 = 'voucher-4';

  PAYMENT_METHODS_WALLET88 = 'Wallet88';

  PAYMENT_METHODS_WEBMONEY = 'Webmoney';

  PAYMENT_METHODS_WEBPAY = 'Webpay';

  PAYMENT_METHODS_WEBPAY_2 = 'Webpay-2';

  PAYMENT_METHODS_WEBPAY_CARD = 'Webpay Card';

  PAYMENT_METHODS_WE_CHAT_PAY = 'WeChat Pay';

  PAYMENT_METHODS_X_PAY_P2_P = 'XPay-P2P';

  PAYMENT_METHODS_X_PAY_QR = 'XPay-QR';

  PAYMENT_METHODS_YANDEX_MONEY = 'Yandex-money';

  PAYMENT_METHODS_ZOTAPAY = 'Zotapay';

  PAYMENT_METHODS_ZIMPLER = 'Zimpler';

  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customDomain')) {
      this.setCustomDomain(data['customDomain']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'plans')) {
      this.setPlans(data['plans']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'addonPlans')) {
      this.setAddonPlans(data['addonPlans']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bumpPlans')) {
      this.setBumpPlans(data['bumpPlans']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountsEnabled')) {
      this.setAccountsEnabled(data['accountsEnabled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'couponsEnabled')) {
      this.setCouponsEnabled(data['couponsEnabled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'purchaseLimit')) {
      this.setPurchaseLimit(data['purchaseLimit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentMethods')) {
      this.setPaymentMethods(data['paymentMethods']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customization')) {
      this.setCustomization(data['customization']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get websiteId(): string {
    return this._fields['websiteId'];
  }
  
  getWebsiteId(): string {
      return this._fields['websiteId'];
  }

  setWebsiteId(value: string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get customDomain(): string | null {
    return this._fields['customDomain'] ?? null;
  }
  
  getCustomDomain(): string | null {
      return this._fields['customDomain'] ?? null;
  }

  setCustomDomain(value: null | string) {
    this._fields['customDomain'] = value;

    return this;
  }

  get plans(): Array<any> {
    return this._fields['plans'];
  }
  
  getPlans(): Array<any> {
      return this._fields['plans'];
  }

  setPlans(value: Array<any>) {
    value = value.map(
      (value) => value[CheckoutFormPlan] ? value : CheckoutFormPlanFactory.from(value),
    );

    this._fields['plans'] = value;

    return this;
  }

  get addonPlans(): Array<any> | null {
    return this._fields['addonPlans'] ?? null;
  }
  
  getAddonPlans(): Array<any> | null {
      return this._fields['addonPlans'] ?? null;
  }

  setAddonPlans(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value[CheckoutFormPlan] ? value : CheckoutFormPlanFactory.from(value),
    ) : null;

    this._fields['addonPlans'] = value;

    return this;
  }

  get bumpPlans(): Array<any> | null {
    return this._fields['bumpPlans'] ?? null;
  }
  
  getBumpPlans(): Array<any> | null {
      return this._fields['bumpPlans'] ?? null;
  }

  setBumpPlans(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value[CheckoutFormPlan] ? value : CheckoutFormPlanFactory.from(value),
    ) : null;

    this._fields['bumpPlans'] = value;

    return this;
  }

  get accountsEnabled(): boolean | null {
    return this._fields['accountsEnabled'] ?? null;
  }
  
  getAccountsEnabled(): boolean | null {
      return this._fields['accountsEnabled'] ?? null;
  }

  setAccountsEnabled(value: null | boolean) {
    this._fields['accountsEnabled'] = value;

    return this;
  }

  get couponsEnabled(): boolean | null {
    return this._fields['couponsEnabled'] ?? null;
  }
  
  getCouponsEnabled(): boolean | null {
      return this._fields['couponsEnabled'] ?? null;
  }

  setCouponsEnabled(value: null | boolean) {
    this._fields['couponsEnabled'] = value;

    return this;
  }

  get purchaseLimit(): number | null {
    return this._fields['purchaseLimit'] ?? null;
  }
  
  getPurchaseLimit(): number | null {
      return this._fields['purchaseLimit'] ?? null;
  }

  setPurchaseLimit(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['purchaseLimit'] = value;

    return this;
  }

  get paymentMethods(): Array<any> | null {
    return this._fields['paymentMethods'] ?? null;
  }
  
  getPaymentMethods(): Array<any> | null {
      return this._fields['paymentMethods'] ?? null;
  }

  setPaymentMethods(value: null | Array<any>) {
    this._fields['paymentMethods'] = value;

    return this;
  }

  get customization(): CheckoutFormCustomization | null {
    return this._fields['customization'] ?? null;
  }
  
  getCustomization(): CheckoutFormCustomization | null {
      return this._fields['customization'] ?? null;
  }

  setCustomization(value: null | CheckoutFormCustomization | any) {
    if (value !== null && !(value instanceof CheckoutFormCustomization)) {
      value = new CheckoutFormCustomization(value);
    }

    this._fields['customization'] = value;

    return this;
  }

  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get createdTime(): Date | null {
    return this._fields['createdTime'] ?? null;
  }
  
  getCreatedTime(): Date | null {
      return this._fields['createdTime'] ?? null;
  }

  private setCreatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['createdTime'] = value;

    return this;
  }

  get updatedTime(): Date | null {
    return this._fields['updatedTime'] ?? null;
  }
  
  getUpdatedTime(): Date | null {
      return this._fields['updatedTime'] ?? null;
  }

  private setUpdatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['updatedTime'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customDomain')) {
      data['customDomain'] = this['customDomain'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'plans')) {
      data['plans'] = this['plans'].map(
          (checkoutFormPlan: CheckoutFormPlan) => checkoutFormPlan.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'addonPlans')) {
      data['addonPlans'] = this['addonPlans'] !== null
          ? this._fields['addonPlans'].map((checkoutFormPlan: CheckoutFormPlan) => checkoutFormPlan.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bumpPlans')) {
      data['bumpPlans'] = this['bumpPlans'] !== null
          ? this._fields['bumpPlans'].map((checkoutFormPlan: CheckoutFormPlan) => checkoutFormPlan.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountsEnabled')) {
      data['accountsEnabled'] = this['accountsEnabled'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'couponsEnabled')) {
      data['couponsEnabled'] = this['couponsEnabled'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'purchaseLimit')) {
      data['purchaseLimit'] = this['purchaseLimit'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentMethods')) {
      data['paymentMethods'] = this['paymentMethods'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customization')) {
      data['customization'] = this['customization']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
