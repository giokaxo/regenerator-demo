import { AdjustReadyToPayoutPaymentMethod } from '../models/adjust-ready-to-payout-payment-method';

export default class AdjustReadyToPayoutGeneric implements AdjustReadyToPayoutPaymentMethod {
  get [AdjustReadyToPayoutPaymentMethod](): true {
    return true;
  }

  PAYMENT_METHOD_CASH = 'cash';

  PAYMENT_METHOD_CHECK = 'check';

  PAYMENT_METHOD_ADV_CASH = 'AdvCash';

  PAYMENT_METHOD_AIRCASH = 'Aircash';

  PAYMENT_METHOD_ALFA_CLICK = 'Alfa-click';

  PAYMENT_METHOD_ALIPAY = 'Alipay';

  PAYMENT_METHOD_ASTRO_PAY_CARD = 'AstroPay Card';

  PAYMENT_METHOD_ASTRO_PAY_GO = 'AstroPay-GO';

  PAYMENT_METHOD_BANK_REFERENCED = 'BankReferenced';

  PAYMENT_METHOD_BANK_TRANSFER = 'bank-transfer';

  PAYMENT_METHOD_BANK_TRANSFER_2 = 'bank-transfer-2';

  PAYMENT_METHOD_BANK_TRANSFER_3 = 'bank-transfer-3';

  PAYMENT_METHOD_BANK_TRANSFER_4 = 'bank-transfer-4';

  PAYMENT_METHOD_BANK_TRANSFER_5 = 'bank-transfer-5';

  PAYMENT_METHOD_BANK_TRANSFER_6 = 'bank-transfer-6';

  PAYMENT_METHOD_BANK_TRANSFER_7 = 'bank-transfer-7';

  PAYMENT_METHOD_BANK_TRANSFER_8 = 'bank-transfer-8';

  PAYMENT_METHOD_BANK_TRANSFER_9 = 'bank-transfer-9';

  PAYMENT_METHOD_BALOTO = 'Baloto';

  PAYMENT_METHOD_BEELINE = 'Beeline';

  PAYMENT_METHOD_BELFIUS_DIRECT_NET = 'Belfius-direct-net';

  PAYMENT_METHOD_BITCOIN = 'bitcoin';

  PAYMENT_METHOD_BIZUM = 'Bizum';

  PAYMENT_METHOD_BOLETO = 'Boleto';

  PAYMENT_METHOD_CASH_DEPOSIT = 'cash-deposit';

  PAYMENT_METHOD_CAS_HLIB = 'CASHlib';

  PAYMENT_METHOD_CASH_TO_CODE = 'CashToCode';

  PAYMENT_METHOD_CHINA_UNION_PAY = 'China UnionPay';

  PAYMENT_METHOD_CLEO = 'Cleo';

  PAYMENT_METHOD_COD_VOUCHER = 'CODVoucher';

  PAYMENT_METHOD_CONEKTA_OXXO = 'Conekta-oxxo';

  PAYMENT_METHOD_CUPON_DE_PAGOS = 'Cupon-de-pagos';

  PAYMENT_METHOD_CRYPTOCURRENCY = 'cryptocurrency';

  PAYMENT_METHOD_DOMESTIC_CARDS = 'domestic-cards';

  PAYMENT_METHOD_DIRECTA24_CARD = 'Directa24Card';

  PAYMENT_METHOD_ECO_PAYZ = 'ecoPayz';

  PAYMENT_METHOD_ECO_VOUCHER = 'ecoVoucher';

  PAYMENT_METHOD_EFECTY = 'Efecty';

  PAYMENT_METHOD_EPS = 'EPS';

  PAYMENT_METHOD_E_PAY_BG = 'ePay.bg';

  PAYMENT_METHOD_E_ZEE_WALLET = 'eZeeWallet';

  PAYMENT_METHOD_FASTER_PAY = 'FasterPay';

  PAYMENT_METHOD_FLEXEPIN = 'Flexepin';

  PAYMENT_METHOD_GIROPAY = 'Giropay';

  PAYMENT_METHOD_GPAYSAFE = 'Gpaysafe';

  PAYMENT_METHOD_GOOGLE_PAY = 'Google Pay';

  PAYMENT_METHOD_I_DEBIT = 'iDebit';

  PAYMENT_METHOD_I_DEAL = 'iDEAL';

  PAYMENT_METHOD_ING_HOMEPAY = 'ING-homepay';

  PAYMENT_METHOD_INOVAPAY_PIN = 'INOVAPAY-pin';

  PAYMENT_METHOD_INOVAPAY_WALLET = 'INOVAPAY-wallet';

  PAYMENT_METHOD_INSTA_DEBIT = 'InstaDebit';

  PAYMENT_METHOD_INSTANT_BANK_TRANSFER = 'instant-bank-transfer';

  PAYMENT_METHOD_INSTANT_PAYMENTS = 'InstantPayments';

  PAYMENT_METHOD_INTERAC = 'Interac';

  PAYMENT_METHOD_INTERAC_ONLINE = 'Interac-online';

  PAYMENT_METHOD_INTERAC_E_TRANSFER = 'Interac-eTransfer';

  PAYMENT_METHOD_INVOICE = 'invoice';

  PAYMENT_METHOD_I_WALLET = 'iWallet';

  PAYMENT_METHOD_JETON = 'Jeton';

  PAYMENT_METHOD_JETON_CASH = 'JetonCash';

  PAYMENT_METHOD_JPAY = 'jpay';

  PAYMENT_METHOD_KAKAO_PAY = 'KakaoPay';

  PAYMENT_METHOD_KNOT = 'KNOT';

  PAYMENT_METHOD_LOONIE = 'loonie';

  PAYMENT_METHOD_MATRIX = 'Matrix';

  PAYMENT_METHOD_MAXI_CASH = 'MaxiCash';

  PAYMENT_METHOD_MEGAFON = 'Megafon';

  PAYMENT_METHOD_MERCADO_PAGO = 'MercadoPago';

  PAYMENT_METHOD_MI_FINITY_E_WALLET = 'MiFinity-eWallet';

  PAYMENT_METHOD_MISCELLANEOUS = 'miscellaneous';

  PAYMENT_METHOD_MOBILE_PAY = 'MobilePay';

  PAYMENT_METHOD_BANCONTACT = 'Bancontact';

  PAYMENT_METHOD_BANCONTACT_MOBILE = 'Bancontact-mobile';

  PAYMENT_METHOD_MTS = 'MTS';

  PAYMENT_METHOD_MUCH_BETTER = 'MuchBetter';

  PAYMENT_METHOD_MULTIBANCO = 'Multibanco';

  PAYMENT_METHOD_NEOSURF = 'Neosurf';

  PAYMENT_METHOD_NETBANKING = 'Netbanking';

  PAYMENT_METHOD_NETELLER = 'Neteller';

  PAYMENT_METHOD_NORDEA_SOLO = 'Nordea-Solo';

  PAYMENT_METHOD_OCHA_PAY = 'OchaPay';

  PAYMENT_METHOD_ONLINE_BANK_TRANSFER = 'online-bank-transfer';

  PAYMENT_METHOD_ONLINEUEBERWEISEN = 'Onlineueberweisen';

  PAYMENT_METHOD_ORIENTAL_WALLET = 'oriental-wallet';

  PAYMENT_METHOD_OXXO = 'OXXO';

  PAYMENT_METHOD_P24 = 'P24';

  PAYMENT_METHOD_PAGADITO = 'Pagadito';

  PAYMENT_METHOD_PAGO_EFFECTIVO = 'PagoEffectivo';

  PAYMENT_METHOD_PAGSMILE_DEPOSIT_EXPRESS = 'Pagsmile-deposit-express';

  PAYMENT_METHOD_PAGSMILE_LOTTERY = 'Pagsmile-lottery';

  PAYMENT_METHOD_PAY_CASH = 'PayCash';

  PAYMENT_METHOD_PAYCO = 'Payco';

  PAYMENT_METHOD_PAYEER = 'Payeer';

  PAYMENT_METHOD_PAYMENT_ASIA_CRYPTO = 'PaymentAsia-crypto';

  PAYMENT_METHOD_PAYMERO = 'Paymero';

  PAYMENT_METHOD_PERFECT_MONEY = 'Perfect-money';

  PAYMENT_METHOD_PIASTRIX = 'Piastrix';

  PAYMENT_METHOD_PIX = 'PIX';

  PAYMENT_METHOD_PAY_TABS = 'PayTabs';

  PAYMENT_METHOD_PAYSAFECARD = 'Paysafecard';

  PAYMENT_METHOD_PAYSAFECASH = 'Paysafecash';

  PAYMENT_METHOD_PAY4_FUN = 'Pay4Fun';

  PAYMENT_METHOD_PAYNOTE = 'Paynote';

  PAYMENT_METHOD_PIN_PAY = 'PinPay';

  PAYMENT_METHOD_PHONE = 'phone';

  PAYMENT_METHOD_PHONE_PE = 'PhonePe';

  PAYMENT_METHOD_PO_LI = 'POLi';

  PAYMENT_METHOD_POST_FINANCE_CARD = 'PostFinance-card';

  PAYMENT_METHOD_POST_FINANCE_E_FINANCE = 'PostFinance-e-finance';

  PAYMENT_METHOD_QIWI = 'QIWI';

  PAYMENT_METHOD_Q_PAY = 'QPay';

  PAYMENT_METHOD_QQ_PAY = 'QQPay';

  PAYMENT_METHOD_RAPYD_CHECKOUT = 'rapyd-checkout';

  PAYMENT_METHOD_RESURS = 'Resurs';

  PAYMENT_METHOD_SAFETY_PAY = 'SafetyPay';

  PAYMENT_METHOD_SAMSUNG_PAY = 'Samsung Pay';

  PAYMENT_METHOD_SEPA = 'SEPA';

  PAYMENT_METHOD_SKRILL = 'Skrill';

  PAYMENT_METHOD_SKRILL_RAPID_TRANSFER = 'Skrill Rapid Transfer';

  PAYMENT_METHOD_SMS_VOUCHER = 'SMSVoucher';

  PAYMENT_METHOD_SOFORT = 'Sofort';

  PAYMENT_METHOD_SPARK_PAY = 'SparkPay';

  PAYMENT_METHOD_SWIFT_DBT = 'swift-dbt';

  PAYMENT_METHOD_TELE2 = 'Tele2';

  PAYMENT_METHOD_TERMINALY_RF = 'Terminaly-RF';

  PAYMENT_METHOD_TODITO_CASH_CARD = 'ToditoCash-card';

  PAYMENT_METHOD_TRUSTLY = 'Trustly';

  PAYMENT_METHOD_TUPAY = 'Tupay';

  PAYMENT_METHOD_U_PAY_CARD = 'UPayCard';

  PAYMENT_METHOD_UPI = 'UPI';

  PAYMENT_METHOD_USD_COIN = 'USD-coin';

  PAYMENT_METHOD_V_CREDITOS = 'VCreditos';

  PAYMENT_METHOD_VENUS_POINT = 'VenusPoint';

  PAYMENT_METHOD_VOUCHER = 'voucher';

  PAYMENT_METHOD_VOUCHER_2 = 'voucher-2';

  PAYMENT_METHOD_VOUCHER_3 = 'voucher-3';

  PAYMENT_METHOD_VOUCHER_4 = 'voucher-4';

  PAYMENT_METHOD_WALLET88 = 'Wallet88';

  PAYMENT_METHOD_WEBMONEY = 'Webmoney';

  PAYMENT_METHOD_WEBPAY = 'Webpay';

  PAYMENT_METHOD_WEBPAY_2 = 'Webpay-2';

  PAYMENT_METHOD_WEBPAY_CARD = 'Webpay Card';

  PAYMENT_METHOD_WE_CHAT_PAY = 'WeChat Pay';

  PAYMENT_METHOD_WIRE = 'wire';

  PAYMENT_METHOD_X_PAY_P2_P = 'XPay-P2P';

  PAYMENT_METHOD_X_PAY_QR = 'XPay-QR';

  PAYMENT_METHOD_YANDEX_MONEY = 'Yandex-money';

  PAYMENT_METHOD_ZOTAPAY = 'Zotapay';

  PAYMENT_METHOD_ZIMPLER = 'Zimpler';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'paymentMethod')) {
      this.setPaymentMethod(data['paymentMethod']);
    }
  }


  get paymentMethod(): string {
    return this._fields['paymentMethod'];
  }
  
  getPaymentMethod(): string {
      return this._fields['paymentMethod'];
  }

  setPaymentMethod(value: string) {
    this._fields['paymentMethod'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentMethod')) {
      data['paymentMethod'] = this['paymentMethod'];
    }

    return data;
  }
}
