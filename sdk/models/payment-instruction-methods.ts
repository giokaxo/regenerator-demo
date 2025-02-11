import { PaymentInstruction } from '../models/payment-instruction';

export default class PaymentInstructionMethods implements PaymentInstruction {
  get [PaymentInstruction](): true {
    return true;
  }

  METHODS_PAYMENT_CARD = 'payment-card';

  METHODS_ACH = 'ach';

  METHODS_CASH = 'cash';

  METHODS_CHECK = 'check';

  METHODS_PAYPAL = 'paypal';

  METHODS_ADV_CASH = 'AdvCash';

  METHODS_AIRCASH = 'Aircash';

  METHODS_AIRPAY = 'Airpay';

  METHODS_ALFA_CLICK = 'Alfa-click';

  METHODS_ALIPAY = 'Alipay';

  METHODS_AMAZON_PAY = 'AmazonPay';

  METHODS_APPLE_PAY = 'Apple Pay';

  METHODS_ASTRO_PAY_CARD = 'AstroPay Card';

  METHODS_ASTRO_PAY_GO = 'AstroPay-GO';

  METHODS_BANK_SEND = 'BankSEND';

  METHODS_BANK_REFERENCED = 'BankReferenced';

  METHODS_BANK_TRANSFER = 'bank-transfer';

  METHODS_BANK_TRANSFER_2 = 'bank-transfer-2';

  METHODS_BANK_TRANSFER_3 = 'bank-transfer-3';

  METHODS_BANK_TRANSFER_4 = 'bank-transfer-4';

  METHODS_BANK_TRANSFER_5 = 'bank-transfer-5';

  METHODS_BANK_TRANSFER_6 = 'bank-transfer-6';

  METHODS_BANK_TRANSFER_7 = 'bank-transfer-7';

  METHODS_BANK_TRANSFER_8 = 'bank-transfer-8';

  METHODS_BANK_TRANSFER_9 = 'bank-transfer-9';

  METHODS_BALOTO = 'Baloto';

  METHODS_BEELINE = 'Beeline';

  METHODS_BELFIUS_DIRECT_NET = 'Belfius-direct-net';

  METHODS_BITCOIN = 'bitcoin';

  METHODS_BIZUM = 'Bizum';

  METHODS_BLIK = 'Blik';

  METHODS_BOLETO = 'Boleto';

  METHODS_BOLETO_2 = 'Boleto-2';

  METHODS_BOLETO_3 = 'Boleto-3';

  METHODS_CASH_DEPOSIT = 'cash-deposit';

  METHODS_CAS_HLIB = 'CASHlib';

  METHODS_CASH_TO_CODE = 'CashToCode';

  METHODS_CC_AVENUE = 'CCAvenue';

  METHODS_CHINA_UNION_PAY = 'China UnionPay';

  METHODS_CLEO = 'Cleo';

  METHODS_COD_VOUCHER = 'CODVoucher';

  METHODS_CONEKTA_OXXO = 'Conekta-oxxo';

  METHODS_CONEKTA_SPEI = 'Conekta-spei';

  METHODS_CRYPTOCURRENCY = 'cryptocurrency';

  METHODS_CUPON_DE_PAGOS = 'Cupon-de-pagos';

  METHODS_CYBER_SOURCE = 'CyberSource';

  METHODS_DIMOCO_PAY_SMART = 'Dimoco-pay-smart';

  METHODS_DIRECTA24_CARD = 'Directa24Card';

  METHODS_DOMESTIC_CARDS = 'domestic-cards';

  METHODS_EFECTY = 'Efecty';

  METHODS_ECHECK = 'echeck';

  METHODS_ECO_PAYZ = 'ecoPayz';

  METHODS_ECO_VOUCHER = 'ecoVoucher';

  METHODS_EPS = 'EPS';

  METHODS_E_PAY_BG = 'ePay.bg';

  METHODS_ETHEREUM = 'Ethereum';

  METHODS_E_WALLET = 'e-wallet';

  METHODS_EZY_EFT = 'ezyEFT';

  METHODS_E_ZEE_WALLET = 'eZeeWallet';

  METHODS_FASTER_PAY = 'FasterPay';

  METHODS_FLEXEPIN = 'Flexepin';

  METHODS_GIROPAY = 'Giropay';

  METHODS_GOOGLE_PAY = 'Google Pay';

  METHODS_GPAYSAFE = 'Gpaysafe';

  METHODS_I_DEBIT = 'iDebit';

  METHODS_I_DEAL = 'iDEAL';

  METHODS_ING_HOMEPAY = 'ING-homepay';

  METHODS_INOVAPAY_PIN = 'INOVAPAY-pin';

  METHODS_INOVAPAY_WALLET = 'INOVAPAY-wallet';

  METHODS_INSTA_DEBIT = 'InstaDebit';

  METHODS_INSTANT_PAYMENTS = 'InstantPayments';

  METHODS_INSTANT_BANK_TRANSFER = 'instant-bank-transfer';

  METHODS_INTERAC_ONLINE = 'Interac-online';

  METHODS_INTERAC_E_TRANSFER = 'Interac-eTransfer';

  METHODS_INTERAC_EXPRESS_CONNECT = 'Interac-express-connect';

  METHODS_INTERAC = 'Interac';

  METHODS_INVOICE = 'invoice';

  METHODS_I_WALLET = 'iWallet';

  METHODS_JETON = 'Jeton';

  METHODS_JETON_CASH = 'JetonCash';

  METHODS_JPAY = 'jpay';

  METHODS_KAKAO_PAY = 'KakaoPay';

  METHODS_KHELOCARD = 'Khelocard';

  METHODS_KLARNA = 'Klarna';

  METHODS_KNOT = 'KNOT';

  METHODS_LITECOIN = 'Litecoin';

  METHODS_LOONIE = 'loonie';

  METHODS_LPG_ONLINE = 'LPG-online';

  METHODS_LPG_PAYMENT_CARD = 'LPG-payment-card';

  METHODS_MATRIX = 'Matrix';

  METHODS_MAXI_CASH = 'MaxiCash';

  METHODS_MEGAFON = 'Megafon';

  METHODS_MERCADO_PAGO = 'MercadoPago';

  METHODS_MI_FINITY_E_WALLET = 'MiFinity-eWallet';

  METHODS_MISCELLANEOUS = 'miscellaneous';

  METHODS_MOBILE_PAY = 'MobilePay';

  METHODS_MULTIBANCO = 'Multibanco';

  METHODS_BANCONTACT = 'Bancontact';

  METHODS_BANCONTACT_MOBILE = 'Bancontact-mobile';

  METHODS_MTS = 'MTS';

  METHODS_MUCH_BETTER = 'MuchBetter';

  METHODS_MY_FATOORAH = 'MyFatoorah';

  METHODS_NEOSURF = 'Neosurf';

  METHODS_NETBANKING = 'Netbanking';

  METHODS_NETELLER = 'Neteller';

  METHODS_NORDEA_SOLO = 'Nordea-Solo';

  METHODS_NORDIK_COIN = 'NordikCoin';

  METHODS_OCHA_PAY = 'OchaPay';

  METHODS_ONLINE_BANK_TRANSFER = 'online-bank-transfer';

  METHODS_ONLINEUEBERWEISEN = 'Onlineueberweisen';

  METHODS_ORIENTAL_WALLET = 'oriental-wallet';

  METHODS_OXXO = 'OXXO';

  METHODS_P24 = 'P24';

  METHODS_PAGADITO = 'Pagadito';

  METHODS_PAGO_EFFECTIVO = 'PagoEffectivo';

  METHODS_PAGSMILE_LOTTERY = 'Pagsmile-lottery';

  METHODS_PAGSMILE_DEPOSIT_EXPRESS = 'Pagsmile-deposit-express';

  METHODS_PAY_CASH = 'PayCash';

  METHODS_PAYCO = 'Payco';

  METHODS_PAYEER = 'Payeer';

  METHODS_PAYMENT_ASIA_CRYPTO = 'PaymentAsia-crypto';

  METHODS_PAYSAFECARD = 'Paysafecard';

  METHODS_PAY_TABS = 'PayTabs';

  METHODS_PAY4_FUN = 'Pay4Fun';

  METHODS_PAYNOTE = 'Paynote';

  METHODS_PAYMERO = 'Paymero';

  METHODS_PAYMERO_QR = 'Paymero-QR';

  METHODS_PAY_U = 'PayU';

  METHODS_PAY_U_LATAM = 'PayULatam';

  METHODS_PERFECT_MONEY = 'Perfect-money';

  METHODS_PIASTRIX = 'Piastrix';

  METHODS_PIX = 'PIX';

  METHODS_PIN_PAY = 'PinPay';

  METHODS_PHONE = 'phone';

  METHODS_PHONE_PE = 'PhonePe';

  METHODS_PO_LI = 'POLi';

  METHODS_POST_FINANCE_CARD = 'PostFinance-card';

  METHODS_POST_FINANCE_E_FINANCE = 'PostFinance-e-finance';

  METHODS_QIWI = 'QIWI';

  METHODS_Q_PAY = 'QPay';

  METHODS_QQ_PAY = 'QQPay';

  METHODS_RAPYD_CHECKOUT = 'rapyd-checkout';

  METHODS_REBILLY_HOSTED_PAYMENT_FORM = 'rebilly-hosted-payment-form';

  METHODS_RESURS = 'Resurs';

  METHODS_SAFETY_PAY = 'SafetyPay';

  METHODS_SAMSUNG_PAY = 'Samsung Pay';

  METHODS_SEPA = 'SEPA';

  METHODS_SIIRTO = 'Siirto';

  METHODS_SKRILL = 'Skrill';

  METHODS_SKRILL_RAPID_TRANSFER = 'Skrill Rapid Transfer';

  METHODS_SMS_VOUCHER = 'SMSVoucher';

  METHODS_SOFORT = 'Sofort';

  METHODS_SPARK_PAY = 'SparkPay';

  METHODS_SPEI = 'SPEI';

  METHODS_SWIFT_DBT = 'swift-dbt';

  METHODS_TELE2 = 'Tele2';

  METHODS_TELR = 'Telr';

  METHODS_TERMINALY_RF = 'Terminaly-RF';

  METHODS_TETHER = 'Tether';

  METHODS_TODITO_CASH_CARD = 'ToditoCash-card';

  METHODS_TRUSTLY = 'Trustly';

  METHODS_TUPAY = 'Tupay';

  METHODS_TWINT = 'TWINT';

  METHODS_UNI_CRYPT = 'UniCrypt';

  METHODS_U_PAY_CARD = 'UPayCard';

  METHODS_UPI = 'UPI';

  METHODS_USD_COIN = 'USD-coin';

  METHODS_V_CREDITOS = 'VCreditos';

  METHODS_VEGA_WALLET = 'VegaWallet';

  METHODS_VENUS_POINT = 'VenusPoint';

  METHODS_VOUCHER = 'voucher';

  METHODS_VOUCHER_2 = 'voucher-2';

  METHODS_VOUCHER_3 = 'voucher-3';

  METHODS_VOUCHER_4 = 'voucher-4';

  METHODS_WALLET88 = 'Wallet88';

  METHODS_WEBMONEY = 'Webmoney';

  METHODS_WEBPAY = 'Webpay';

  METHODS_WEBPAY_2 = 'Webpay-2';

  METHODS_WEBPAY_CARD = 'Webpay Card';

  METHODS_WE_CHAT_PAY = 'WeChat Pay';

  METHODS_X_PAY_P2_P = 'XPay-P2P';

  METHODS_X_PAY_QR = 'XPay-QR';

  METHODS_YANDEX_MONEY = 'Yandex-money';

  METHODS_ZOTAPAY = 'Zotapay';

  METHODS_ZIMPLER = 'Zimpler';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'methods')) {
      this.setMethods(data['methods']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'receivedBy')) {
      this.setReceivedBy(data['receivedBy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reference')) {
      this.setReference(data['reference']);
    }
  }


  get methods(): Array<any> | null {
    return this._fields['methods'] ?? null;
  }
  
  getMethods(): Array<any> | null {
      return this._fields['methods'] ?? null;
  }

  setMethods(value: null | Array<any>) {
    this._fields['methods'] = value;

    return this;
  }

  get receivedBy(): string | null {
    return this._fields['receivedBy'] ?? null;
  }
  
  getReceivedBy(): string | null {
      return this._fields['receivedBy'] ?? null;
  }

  setReceivedBy(value: null | string) {
    this._fields['receivedBy'] = value;

    return this;
  }

  get reference(): string | null {
    return this._fields['reference'] ?? null;
  }
  
  getReference(): string | null {
      return this._fields['reference'] ?? null;
  }

  setReference(value: null | string) {
    this._fields['reference'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'methods')) {
      data['methods'] = this['methods'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'receivedBy')) {
      data['receivedBy'] = this['receivedBy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reference')) {
      data['reference'] = this['reference'];
    }

    return data;
  }
}
