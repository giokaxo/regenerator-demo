import { ReadyToPayMethods } from '../models/ready-to-pay-methods';

export default class ReadyToPayGenericMethod implements ReadyToPayMethods {
  get [ReadyToPayMethods](): true {
    return true;
  }

  METHOD_CASH = 'cash';

  METHOD_CHECK = 'check';

  METHOD_ADV_CASH = 'AdvCash';

  METHOD_AIRCASH = 'Aircash';

  METHOD_ALFA_CLICK = 'Alfa-click';

  METHOD_ALIPAY = 'Alipay';

  METHOD_ASTRO_PAY_CARD = 'AstroPay Card';

  METHOD_ASTRO_PAY_GO = 'AstroPay-GO';

  METHOD_BANK_REFERENCED = 'BankReferenced';

  METHOD_BANK_TRANSFER = 'bank-transfer';

  METHOD_BANK_TRANSFER_2 = 'bank-transfer-2';

  METHOD_BANK_TRANSFER_3 = 'bank-transfer-3';

  METHOD_BANK_TRANSFER_4 = 'bank-transfer-4';

  METHOD_BANK_TRANSFER_5 = 'bank-transfer-5';

  METHOD_BANK_TRANSFER_6 = 'bank-transfer-6';

  METHOD_BANK_TRANSFER_7 = 'bank-transfer-7';

  METHOD_BANK_TRANSFER_8 = 'bank-transfer-8';

  METHOD_BANK_TRANSFER_9 = 'bank-transfer-9';

  METHOD_BALOTO = 'Baloto';

  METHOD_BEELINE = 'Beeline';

  METHOD_BELFIUS_DIRECT_NET = 'Belfius-direct-net';

  METHOD_BITCOIN = 'bitcoin';

  METHOD_BIZUM = 'Bizum';

  METHOD_BOLETO = 'Boleto';

  METHOD_CASH_DEPOSIT = 'cash-deposit';

  METHOD_CAS_HLIB = 'CASHlib';

  METHOD_CASH_TO_CODE = 'CashToCode';

  METHOD_CHINA_UNION_PAY = 'China UnionPay';

  METHOD_CLEO = 'Cleo';

  METHOD_COD_VOUCHER = 'CODVoucher';

  METHOD_CONEKTA_OXXO = 'Conekta-oxxo';

  METHOD_CUPON_DE_PAGOS = 'Cupon-de-pagos';

  METHOD_CRYPTOCURRENCY = 'cryptocurrency';

  METHOD_DOMESTIC_CARDS = 'domestic-cards';

  METHOD_DIRECTA24_CARD = 'Directa24Card';

  METHOD_ECO_PAYZ = 'ecoPayz';

  METHOD_ECO_VOUCHER = 'ecoVoucher';

  METHOD_EFECTY = 'Efecty';

  METHOD_EPS = 'EPS';

  METHOD_E_PAY_BG = 'ePay.bg';

  METHOD_E_ZEE_WALLET = 'eZeeWallet';

  METHOD_FASTER_PAY = 'FasterPay';

  METHOD_FLEXEPIN = 'Flexepin';

  METHOD_GIROPAY = 'Giropay';

  METHOD_GPAYSAFE = 'Gpaysafe';

  METHOD_GOOGLE_PAY = 'Google Pay';

  METHOD_I_DEBIT = 'iDebit';

  METHOD_I_DEAL = 'iDEAL';

  METHOD_ING_HOMEPAY = 'ING-homepay';

  METHOD_INOVAPAY_PIN = 'INOVAPAY-pin';

  METHOD_INOVAPAY_WALLET = 'INOVAPAY-wallet';

  METHOD_INSTA_DEBIT = 'InstaDebit';

  METHOD_INSTANT_BANK_TRANSFER = 'instant-bank-transfer';

  METHOD_INSTANT_PAYMENTS = 'InstantPayments';

  METHOD_INTERAC = 'Interac';

  METHOD_INTERAC_ONLINE = 'Interac-online';

  METHOD_INTERAC_E_TRANSFER = 'Interac-eTransfer';

  METHOD_INVOICE = 'invoice';

  METHOD_I_WALLET = 'iWallet';

  METHOD_JETON = 'Jeton';

  METHOD_JETON_CASH = 'JetonCash';

  METHOD_JPAY = 'jpay';

  METHOD_KAKAO_PAY = 'KakaoPay';

  METHOD_KNOT = 'KNOT';

  METHOD_LOONIE = 'loonie';

  METHOD_MATRIX = 'Matrix';

  METHOD_MAXI_CASH = 'MaxiCash';

  METHOD_MEGAFON = 'Megafon';

  METHOD_MERCADO_PAGO = 'MercadoPago';

  METHOD_MI_FINITY_E_WALLET = 'MiFinity-eWallet';

  METHOD_MISCELLANEOUS = 'miscellaneous';

  METHOD_MOBILE_PAY = 'MobilePay';

  METHOD_BANCONTACT = 'Bancontact';

  METHOD_BANCONTACT_MOBILE = 'Bancontact-mobile';

  METHOD_MTS = 'MTS';

  METHOD_MUCH_BETTER = 'MuchBetter';

  METHOD_MULTIBANCO = 'Multibanco';

  METHOD_NEOSURF = 'Neosurf';

  METHOD_NETBANKING = 'Netbanking';

  METHOD_NETELLER = 'Neteller';

  METHOD_NORDEA_SOLO = 'Nordea-Solo';

  METHOD_OCHA_PAY = 'OchaPay';

  METHOD_ONLINE_BANK_TRANSFER = 'online-bank-transfer';

  METHOD_ONLINEUEBERWEISEN = 'Onlineueberweisen';

  METHOD_ORIENTAL_WALLET = 'oriental-wallet';

  METHOD_OXXO = 'OXXO';

  METHOD_P24 = 'P24';

  METHOD_PAGADITO = 'Pagadito';

  METHOD_PAGO_EFFECTIVO = 'PagoEffectivo';

  METHOD_PAGSMILE_DEPOSIT_EXPRESS = 'Pagsmile-deposit-express';

  METHOD_PAGSMILE_LOTTERY = 'Pagsmile-lottery';

  METHOD_PAY_CASH = 'PayCash';

  METHOD_PAYCO = 'Payco';

  METHOD_PAYEER = 'Payeer';

  METHOD_PAYMENT_ASIA_CRYPTO = 'PaymentAsia-crypto';

  METHOD_PAYMERO = 'Paymero';

  METHOD_PERFECT_MONEY = 'Perfect-money';

  METHOD_PIASTRIX = 'Piastrix';

  METHOD_PIX = 'PIX';

  METHOD_PAY_TABS = 'PayTabs';

  METHOD_PAYSAFECARD = 'Paysafecard';

  METHOD_PAYSAFECASH = 'Paysafecash';

  METHOD_PAY4_FUN = 'Pay4Fun';

  METHOD_PAYNOTE = 'Paynote';

  METHOD_PIN_PAY = 'PinPay';

  METHOD_PHONE = 'phone';

  METHOD_PHONE_PE = 'PhonePe';

  METHOD_PO_LI = 'POLi';

  METHOD_POST_FINANCE_CARD = 'PostFinance-card';

  METHOD_POST_FINANCE_E_FINANCE = 'PostFinance-e-finance';

  METHOD_QIWI = 'QIWI';

  METHOD_Q_PAY = 'QPay';

  METHOD_QQ_PAY = 'QQPay';

  METHOD_RAPYD_CHECKOUT = 'rapyd-checkout';

  METHOD_RESURS = 'Resurs';

  METHOD_SAFETY_PAY = 'SafetyPay';

  METHOD_SAMSUNG_PAY = 'Samsung Pay';

  METHOD_SEPA = 'SEPA';

  METHOD_SKRILL = 'Skrill';

  METHOD_SKRILL_RAPID_TRANSFER = 'Skrill Rapid Transfer';

  METHOD_SMS_VOUCHER = 'SMSVoucher';

  METHOD_SOFORT = 'Sofort';

  METHOD_SPARK_PAY = 'SparkPay';

  METHOD_SWIFT_DBT = 'swift-dbt';

  METHOD_TELE2 = 'Tele2';

  METHOD_TERMINALY_RF = 'Terminaly-RF';

  METHOD_TODITO_CASH_CARD = 'ToditoCash-card';

  METHOD_TRUSTLY = 'Trustly';

  METHOD_TUPAY = 'Tupay';

  METHOD_U_PAY_CARD = 'UPayCard';

  METHOD_UPI = 'UPI';

  METHOD_USD_COIN = 'USD-coin';

  METHOD_V_CREDITOS = 'VCreditos';

  METHOD_VENUS_POINT = 'VenusPoint';

  METHOD_VOUCHER = 'voucher';

  METHOD_VOUCHER_2 = 'voucher-2';

  METHOD_VOUCHER_3 = 'voucher-3';

  METHOD_VOUCHER_4 = 'voucher-4';

  METHOD_WALLET88 = 'Wallet88';

  METHOD_WEBMONEY = 'Webmoney';

  METHOD_WEBPAY = 'Webpay';

  METHOD_WEBPAY_2 = 'Webpay-2';

  METHOD_WEBPAY_CARD = 'Webpay Card';

  METHOD_WE_CHAT_PAY = 'WeChat Pay';

  METHOD_WIRE = 'wire';

  METHOD_X_PAY_P2_P = 'XPay-P2P';

  METHOD_X_PAY_QR = 'XPay-QR';

  METHOD_YANDEX_MONEY = 'Yandex-money';

  METHOD_ZOTAPAY = 'Zotapay';

  METHOD_ZIMPLER = 'Zimpler';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'method')) {
      this.setMethod(data['method']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'filters')) {
      this.setFilters(data['filters']);
    }
  }


  get method(): string {
    return this._fields['method'];
  }
  
  getMethod(): string {
      return this._fields['method'];
  }

  setMethod(value: string) {
    this._fields['method'] = value;

    return this;
  }

  get filters(): Array<any> | null {
    return this._fields['filters'] ?? null;
  }
  
  getFilters(): Array<any> | null {
      return this._fields['filters'] ?? null;
  }

  setFilters(value: null | Array<any>) {
    this._fields['filters'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'method')) {
      data['method'] = this['method'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'filters')) {
      data['filters'] = this['filters'];
    }

    return data;
  }
}
