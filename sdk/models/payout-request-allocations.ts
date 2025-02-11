
export default class PayoutRequestAllocations {
  TRANSACTION_RESULT_ABANDONED = 'abandoned';

  TRANSACTION_RESULT_APPROVED = 'approved';

  TRANSACTION_RESULT_CANCELED = 'canceled';

  TRANSACTION_RESULT_DECLINED = 'declined';

  TRANSACTION_RESULT_UNKNOWN = 'unknown';

  METHOD_PAYMENT_CARD = 'payment-card';

  METHOD_ACH = 'ach';

  METHOD_CASH = 'cash';

  METHOD_CHECK = 'check';

  METHOD_PAYPAL = 'paypal';

  METHOD_ADV_CASH = 'AdvCash';

  METHOD_AIRCASH = 'Aircash';

  METHOD_AIRPAY = 'Airpay';

  METHOD_ALFA_CLICK = 'Alfa-click';

  METHOD_ALIPAY = 'Alipay';

  METHOD_AMAZON_PAY = 'AmazonPay';

  METHOD_APPLE_PAY = 'Apple Pay';

  METHOD_ASTRO_PAY_CARD = 'AstroPay Card';

  METHOD_ASTRO_PAY_GO = 'AstroPay-GO';

  METHOD_BANK_SEND = 'BankSEND';

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

  METHOD_BLIK = 'Blik';

  METHOD_BOLETO = 'Boleto';

  METHOD_BOLETO_2 = 'Boleto-2';

  METHOD_BOLETO_3 = 'Boleto-3';

  METHOD_CASH_DEPOSIT = 'cash-deposit';

  METHOD_CAS_HLIB = 'CASHlib';

  METHOD_CASH_TO_CODE = 'CashToCode';

  METHOD_CC_AVENUE = 'CCAvenue';

  METHOD_CHINA_UNION_PAY = 'China UnionPay';

  METHOD_CLEO = 'Cleo';

  METHOD_COD_VOUCHER = 'CODVoucher';

  METHOD_CONEKTA_OXXO = 'Conekta-oxxo';

  METHOD_CONEKTA_SPEI = 'Conekta-spei';

  METHOD_CRYPTOCURRENCY = 'cryptocurrency';

  METHOD_CUPON_DE_PAGOS = 'Cupon-de-pagos';

  METHOD_CYBER_SOURCE = 'CyberSource';

  METHOD_DIMOCO_PAY_SMART = 'Dimoco-pay-smart';

  METHOD_DIRECTA24_CARD = 'Directa24Card';

  METHOD_DOMESTIC_CARDS = 'domestic-cards';

  METHOD_EFECTY = 'Efecty';

  METHOD_ECHECK = 'echeck';

  METHOD_ECO_PAYZ = 'ecoPayz';

  METHOD_ECO_VOUCHER = 'ecoVoucher';

  METHOD_EPS = 'EPS';

  METHOD_E_PAY_BG = 'ePay.bg';

  METHOD_ETHEREUM = 'Ethereum';

  METHOD_E_WALLET = 'e-wallet';

  METHOD_EZY_EFT = 'ezyEFT';

  METHOD_E_ZEE_WALLET = 'eZeeWallet';

  METHOD_FASTER_PAY = 'FasterPay';

  METHOD_FLEXEPIN = 'Flexepin';

  METHOD_GIROPAY = 'Giropay';

  METHOD_GOOGLE_PAY = 'Google Pay';

  METHOD_GPAYSAFE = 'Gpaysafe';

  METHOD_I_DEBIT = 'iDebit';

  METHOD_I_DEAL = 'iDEAL';

  METHOD_ING_HOMEPAY = 'ING-homepay';

  METHOD_INOVAPAY_PIN = 'INOVAPAY-pin';

  METHOD_INOVAPAY_WALLET = 'INOVAPAY-wallet';

  METHOD_INSTA_DEBIT = 'InstaDebit';

  METHOD_INSTANT_PAYMENTS = 'InstantPayments';

  METHOD_INSTANT_BANK_TRANSFER = 'instant-bank-transfer';

  METHOD_INTERAC_ONLINE = 'Interac-online';

  METHOD_INTERAC_E_TRANSFER = 'Interac-eTransfer';

  METHOD_INTERAC_EXPRESS_CONNECT = 'Interac-express-connect';

  METHOD_INTERAC = 'Interac';

  METHOD_INVOICE = 'invoice';

  METHOD_I_WALLET = 'iWallet';

  METHOD_JETON = 'Jeton';

  METHOD_JETON_CASH = 'JetonCash';

  METHOD_JPAY = 'jpay';

  METHOD_KAKAO_PAY = 'KakaoPay';

  METHOD_KHELOCARD = 'Khelocard';

  METHOD_KLARNA = 'Klarna';

  METHOD_KNOT = 'KNOT';

  METHOD_LITECOIN = 'Litecoin';

  METHOD_LOONIE = 'loonie';

  METHOD_LPG_ONLINE = 'LPG-online';

  METHOD_LPG_PAYMENT_CARD = 'LPG-payment-card';

  METHOD_MATRIX = 'Matrix';

  METHOD_MAXI_CASH = 'MaxiCash';

  METHOD_MEGAFON = 'Megafon';

  METHOD_MERCADO_PAGO = 'MercadoPago';

  METHOD_MI_FINITY_E_WALLET = 'MiFinity-eWallet';

  METHOD_MISCELLANEOUS = 'miscellaneous';

  METHOD_MOBILE_PAY = 'MobilePay';

  METHOD_MULTIBANCO = 'Multibanco';

  METHOD_BANCONTACT = 'Bancontact';

  METHOD_BANCONTACT_MOBILE = 'Bancontact-mobile';

  METHOD_MTS = 'MTS';

  METHOD_MUCH_BETTER = 'MuchBetter';

  METHOD_MY_FATOORAH = 'MyFatoorah';

  METHOD_NEOSURF = 'Neosurf';

  METHOD_NETBANKING = 'Netbanking';

  METHOD_NETELLER = 'Neteller';

  METHOD_NORDEA_SOLO = 'Nordea-Solo';

  METHOD_NORDIK_COIN = 'NordikCoin';

  METHOD_OCHA_PAY = 'OchaPay';

  METHOD_ONLINE_BANK_TRANSFER = 'online-bank-transfer';

  METHOD_ONLINEUEBERWEISEN = 'Onlineueberweisen';

  METHOD_ORIENTAL_WALLET = 'oriental-wallet';

  METHOD_OXXO = 'OXXO';

  METHOD_P24 = 'P24';

  METHOD_PAGADITO = 'Pagadito';

  METHOD_PAGO_EFFECTIVO = 'PagoEffectivo';

  METHOD_PAGSMILE_LOTTERY = 'Pagsmile-lottery';

  METHOD_PAGSMILE_DEPOSIT_EXPRESS = 'Pagsmile-deposit-express';

  METHOD_PAY_CASH = 'PayCash';

  METHOD_PAYCO = 'Payco';

  METHOD_PAYEER = 'Payeer';

  METHOD_PAYMENT_ASIA_CRYPTO = 'PaymentAsia-crypto';

  METHOD_PAYSAFECARD = 'Paysafecard';

  METHOD_PAY_TABS = 'PayTabs';

  METHOD_PAY4_FUN = 'Pay4Fun';

  METHOD_PAYNOTE = 'Paynote';

  METHOD_PAYMERO = 'Paymero';

  METHOD_PAYMERO_QR = 'Paymero-QR';

  METHOD_PAY_U = 'PayU';

  METHOD_PAY_U_LATAM = 'PayULatam';

  METHOD_PERFECT_MONEY = 'Perfect-money';

  METHOD_PIASTRIX = 'Piastrix';

  METHOD_PIX = 'PIX';

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

  METHOD_REBILLY_HOSTED_PAYMENT_FORM = 'rebilly-hosted-payment-form';

  METHOD_RESURS = 'Resurs';

  METHOD_SAFETY_PAY = 'SafetyPay';

  METHOD_SAMSUNG_PAY = 'Samsung Pay';

  METHOD_SEPA = 'SEPA';

  METHOD_SIIRTO = 'Siirto';

  METHOD_SKRILL = 'Skrill';

  METHOD_SKRILL_RAPID_TRANSFER = 'Skrill Rapid Transfer';

  METHOD_SMS_VOUCHER = 'SMSVoucher';

  METHOD_SOFORT = 'Sofort';

  METHOD_SPARK_PAY = 'SparkPay';

  METHOD_SPEI = 'SPEI';

  METHOD_SWIFT_DBT = 'swift-dbt';

  METHOD_TELE2 = 'Tele2';

  METHOD_TELR = 'Telr';

  METHOD_TERMINALY_RF = 'Terminaly-RF';

  METHOD_TETHER = 'Tether';

  METHOD_TODITO_CASH_CARD = 'ToditoCash-card';

  METHOD_TRUSTLY = 'Trustly';

  METHOD_TUPAY = 'Tupay';

  METHOD_TWINT = 'TWINT';

  METHOD_UNI_CRYPT = 'UniCrypt';

  METHOD_U_PAY_CARD = 'UPayCard';

  METHOD_UPI = 'UPI';

  METHOD_USD_COIN = 'USD-coin';

  METHOD_V_CREDITOS = 'VCreditos';

  METHOD_VEGA_WALLET = 'VegaWallet';

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

  METHOD_X_PAY_P2_P = 'XPay-P2P';

  METHOD_X_PAY_QR = 'XPay-QR';

  METHOD_YANDEX_MONEY = 'Yandex-money';

  METHOD_ZOTAPAY = 'Zotapay';

  METHOD_ZIMPLER = 'Zimpler';

  GATEWAY_NAME_A1_GATEWAY = 'A1Gateway';

  GATEWAY_NAME_ACI = 'ACI';

  GATEWAY_NAME_ADYEN = 'Adyen';

  GATEWAY_NAME_AIRCASH = 'Aircash';

  GATEWAY_NAME_AIRPAY = 'Airpay';

  GATEWAY_NAME_AIRWALLEX = 'Airwallex';

  GATEWAY_NAME_AMAZON_PAY = 'AmazonPay';

  GATEWAY_NAME_AMEX_VPC = 'AmexVPC';

  GATEWAY_NAME_APCO_PAY = 'ApcoPay';

  GATEWAY_NAME_ASIA_PAYMENT_GATEWAY = 'AsiaPaymentGateway';

  GATEWAY_NAME_ASTRO_PAY_CARD = 'AstroPayCard';

  GATEWAY_NAME_AUTHORIZE_NET = 'AuthorizeNet';

  GATEWAY_NAME_AWEPAY = 'Awepay';

  GATEWAY_NAME_BAMBORA = 'Bambora';

  GATEWAY_NAME_BANK_SEND = 'BankSEND';

  GATEWAY_NAME_BIT_PAY = 'BitPay';

  GATEWAY_NAME_BLUE_SNAP = 'BlueSnap';

  GATEWAY_NAME_BRAINTREE_PAYMENTS = 'BraintreePayments';

  GATEWAY_NAME_BUCKAROO = 'Buckaroo';

  GATEWAY_NAME_BVNK = 'BVNK';

  GATEWAY_NAME_CARDKNOX = 'Cardknox';

  GATEWAY_NAME_CASHFLOWS = 'Cashflows';

  GATEWAY_NAME_CAS_HLIB = 'CASHlib';

  GATEWAY_NAME_CASHTERMINAL = 'Cashterminal';

  GATEWAY_NAME_CASH_TO_CODE = 'CashToCode';

  GATEWAY_NAME_CAURI_PAYMENT = 'CauriPayment';

  GATEWAY_NAME_CAYAN = 'Cayan';

  GATEWAY_NAME_CC_AVENUE = 'CCAvenue';

  GATEWAY_NAME_CHASE = 'Chase';

  GATEWAY_NAME_CHECKOUT_COM = 'CheckoutCom';

  GATEWAY_NAME_CHILLSTOCK = 'Chillstock';

  GATEWAY_NAME_CIRCLE = 'Circle';

  GATEWAY_NAME_CITADEL = 'Citadel';

  GATEWAY_NAME_CLEARHAUS = 'Clearhaus';

  GATEWAY_NAME_CLEO = 'Cleo';

  GATEWAY_NAME_COD_VOUCHER = 'CODVoucher';

  GATEWAY_NAME_COINBASE = 'Coinbase';

  GATEWAY_NAME_COIN_GATE = 'CoinGate';

  GATEWAY_NAME_COIN_PAYMENTS = 'CoinPayments';

  GATEWAY_NAME_CONEKTA = 'Conekta';

  GATEWAY_NAME_COPPR = 'Coppr';

  GATEWAY_NAME_CREDORAX = 'Credorax';

  GATEWAY_NAME_CRYPTONATOR = 'Cryptonator';

  GATEWAY_NAME_CYBER_SOURCE = 'CyberSource';

  GATEWAY_NAME_DATA_CASH = 'DataCash';

  GATEWAY_NAME_DENGI = 'Dengi';

  GATEWAY_NAME_DIMOCO = 'Dimoco';

  GATEWAY_NAME_DIRECTA24 = 'Directa24';

  GATEWAY_NAME_D_LOCAL = 'dLocal';

  GATEWAY_NAME_DRAGONPHOENIX = 'Dragonphoenix';

  GATEWAY_NAME_DROPAYMENT = 'Dropayment';

  GATEWAY_NAME_EASY_PAY_DIRECT = 'EasyPayDirect';

  GATEWAY_NAME_EBANX = 'EBANX';

  GATEWAY_NAME_ECO_PAYZ = 'ecoPayz';

  GATEWAY_NAME_ECORE_PAY = 'EcorePay';

  GATEWAY_NAME_ELAVON = 'Elavon';

  GATEWAY_NAME_EUTELLER = 'Euteller';

  GATEWAY_NAME_E_MERCHANT_PAY = 'eMerchantPay';

  GATEWAY_NAME_EMS = 'EMS';

  GATEWAY_NAME_E_PAY = 'ePay';

  GATEWAY_NAME_EPG = 'EPG';

  GATEWAY_NAME_E_PRO = 'EPro';

  GATEWAY_NAME_EZEEBILL = 'Ezeebill';

  GATEWAY_NAME_E_ZEE_WALLET = 'eZeeWallet';

  GATEWAY_NAME_EZY_EFT = 'ezyEFT';

  GATEWAY_NAME_FASTER_PAY = 'FasterPay';

  GATEWAY_NAME_FINRAX = 'Finrax';

  GATEWAY_NAME_FLEXEPIN = 'Flexepin';

  GATEWAY_NAME_FIN_TEC_SYSTEMS = 'FinTecSystems';

  GATEWAY_NAME_FUND_SEND = 'FundSend';

  GATEWAY_NAME_FORTE = 'Forte';

  GATEWAY_NAME_GATE2WAY = 'gate2way';

  GATEWAY_NAME_GET = 'GET';

  GATEWAY_NAME_GIGADAT = 'Gigadat';

  GATEWAY_NAME_GLOBAL_ONE_PAY = 'GlobalOnePay';

  GATEWAY_NAME_GOONEY = 'Gooney';

  GATEWAY_NAME_GPAYSAFE = 'Gpaysafe';

  GATEWAY_NAME_GREENBOX = 'Greenbox';

  GATEWAY_NAME_HI_PAY = 'HiPay';

  GATEWAY_NAME_I_CAN_PAY = 'iCanPay';

  GATEWAY_NAME_ICEPAY = 'ICEPAY';

  GATEWAY_NAME_I_CHEQUE = 'iCheque';

  GATEWAY_NAME_I_DEBIT = 'iDebit';

  GATEWAY_NAME_ILIXIUM = 'Ilixium';

  GATEWAY_NAME_INGENICO = 'Ingenico';

  GATEWAY_NAME_INOVAPAY = 'INOVAPAY';

  GATEWAY_NAME_INOVIO = 'Inovio';

  GATEWAY_NAME_INTUIT = 'Intuit';

  GATEWAY_NAME_INSTA_DEBIT = 'InstaDebit';

  GATEWAY_NAME_IPAY_OPTIONS = 'IpayOptions';

  GATEWAY_NAME_JET_PAY = 'JetPay';

  GATEWAY_NAME_JETON = 'Jeton';

  GATEWAY_NAME_JPM_ORBITAL = 'JPMOrbital';

  GATEWAY_NAME_KHELOCARD = 'Khelocard';

  GATEWAY_NAME_KLARNA = 'Klarna';

  GATEWAY_NAME_KONNEKTIVE = 'Konnektive';

  GATEWAY_NAME_LA_CORE = 'LaCore';

  GATEWAY_NAME_LIMEPAY = 'Limepay';

  GATEWAY_NAME_LOONIE = 'loonie';

  GATEWAY_NAME_LPG = 'LPG';

  GATEWAY_NAME_MAXI_CASH = 'MaxiCash';

  GATEWAY_NAME_MERCADO_PAGO = 'MercadoPago';

  GATEWAY_NAME_MI_FINITY = 'MiFinity';

  GATEWAY_NAME_MOBILE_PAY = 'MobilePay';

  GATEWAY_NAME_MONERIS = 'Moneris';

  GATEWAY_NAME_MONOLO = 'Monolo';

  GATEWAY_NAME_MTA_PAY = 'MtaPay';

  GATEWAY_NAME_MUCH_BETTER = 'MuchBetter';

  GATEWAY_NAME_MUCH_BETTER_GATEWAY = 'MuchBetterGateway';

  GATEWAY_NAME_MY_FATOORAH = 'MyFatoorah';

  GATEWAY_NAME_NEOSURF = 'Neosurf';

  GATEWAY_NAME_NETBANKING = 'Netbanking';

  GATEWAY_NAME_NETELLER = 'Neteller';

  GATEWAY_NAME_N_GENIUS = 'NGenius';

  GATEWAY_NAME_NINJA_WALLET = 'NinjaWallet';

  GATEWAY_NAME_NMI = 'NMI';

  GATEWAY_NAME_NORDIK_COIN = 'NordikCoin';

  GATEWAY_NAME_NOW_PAYMENTS = 'NOWPayments';

  GATEWAY_NAME_NUA_PAY = 'NuaPay';

  GATEWAY_NAME_OCHA_PAY = 'OchaPay';

  GATEWAY_NAME_OMNI_MATRIX = 'OmniMatrix';

  GATEWAY_NAME_ONLINEUEBERWEISEN = 'Onlineueberweisen';

  GATEWAY_NAME_ON_RAMP = 'OnRamp';

  GATEWAY_NAME_ORBITAL = 'Orbital';

  GATEWAY_NAME_PAGADITO = 'Pagadito';

  GATEWAY_NAME_PAGSMILE = 'Pagsmile';

  GATEWAY_NAME_PANAMERICAN = 'Panamerican';

  GATEWAY_NAME_PARAMOUNT_COMMERCE = 'ParamountCommerce';

  GATEWAY_NAME_PARAMOUNT_EFT = 'ParamountEft';

  GATEWAY_NAME_PARAMOUNT_INTERAC = 'ParamountInterac';

  GATEWAY_NAME_PANDA_GATEWAY = 'PandaGateway';

  GATEWAY_NAME_PAY4_FUN = 'Pay4Fun';

  GATEWAY_NAME_PAY_CASH = 'PayCash';

  GATEWAY_NAME_PAY_CLUB = 'PayClub';

  GATEWAY_NAME_PAY_COM = 'PayCom';

  GATEWAY_NAME_PAY_ECARDS = 'PayEcards';

  GATEWAY_NAME_PAYEEZY = 'Payeezy';

  GATEWAY_NAME_PAYFLOW = 'Payflow';

  GATEWAY_NAME_PAYNOTE = 'Paynote';

  GATEWAY_NAME_PAYMENT_ASIA = 'PaymentAsia';

  GATEWAY_NAME_PAYMEN_TECHNOLOGIES = 'PaymenTechnologies';

  GATEWAY_NAME_PAYMENTS_OS = 'PaymentsOS';

  GATEWAY_NAME_PAYMERO = 'Paymero';

  GATEWAY_NAME_PAY_PAL = 'PayPal';

  GATEWAY_NAME_PAYPER = 'Payper';

  GATEWAY_NAME_PAYR = 'Payr';

  GATEWAY_NAME_PAY_REDEEM = 'PayRedeem';

  GATEWAY_NAME_PAY_RETAILERS = 'PayRetailers';

  GATEWAY_NAME_PAYSAFE = 'Paysafe';

  GATEWAY_NAME_PAYSAFECARD = 'Paysafecard';

  GATEWAY_NAME_PAYSAFECASH = 'Paysafecash';

  GATEWAY_NAME_PAY_TABS = 'PayTabs';

  GATEWAY_NAME_PAY_U = 'PayU';

  GATEWAY_NAME_PAY_U_LATAM = 'PayULatam';

  GATEWAY_NAME_PAYVISION = 'Payvision';

  GATEWAY_NAME_PHAROS_PAYMENTS = 'PharosPayments';

  GATEWAY_NAME_PIASTRIX = 'Piastrix';

  GATEWAY_NAME_PIN4_PAY = 'Pin4Pay';

  GATEWAY_NAME_PLUGNPAY = 'Plugnpay';

  GATEWAY_NAME_POST_FINANCE = 'PostFinance';

  GATEWAY_NAME_PPRO = 'PPRO';

  GATEWAY_NAME_PROSA = 'Prosa';

  GATEWAY_NAME_P_SI_GATE = 'PSiGate';

  GATEWAY_NAME_RAPYD = 'Rapyd';

  GATEWAY_NAME_REALEX = 'Realex';

  GATEWAY_NAME_REALTIME = 'Realtime';

  GATEWAY_NAME_REDSYS = 'Redsys';

  GATEWAY_NAME_ROTESSA = 'Rotessa';

  GATEWAY_NAME_RPN = 'RPN';

  GATEWAY_NAME_SAFECHARGE = 'Safecharge';

  GATEWAY_NAME_SALTAR_PAY = 'SaltarPay';

  GATEWAY_NAME_SAGEPAY = 'Sagepay';

  GATEWAY_NAME_SEAMLESS_CHEX = 'SeamlessChex';

  GATEWAY_NAME_SECURE_TRADING = 'SecureTrading';

  GATEWAY_NAME_SECURION_PAY = 'SecurionPay';

  GATEWAY_NAME_SKRILL = 'Skrill';

  GATEWAY_NAME_SMART_INVOICE = 'SmartInvoice';

  GATEWAY_NAME_SMS_VOUCHER = 'SMSVoucher';

  GATEWAY_NAME_SOFORT = 'Sofort';

  GATEWAY_NAME_SPARK_PAY = 'SparkPay';

  GATEWAY_NAME_STATIC_GATEWAY = 'StaticGateway';

  GATEWAY_NAME_STP_MEXICO = 'STPMexico';

  GATEWAY_NAME_STRIPE = 'Stripe';

  GATEWAY_NAME_TABBY = 'Tabby';

  GATEWAY_NAME_TELR = 'Telr';

  GATEWAY_NAME_TEST_PROCESSOR = 'TestProcessor';

  GATEWAY_NAME_TODITO_CASH = 'ToditoCash';

  GATEWAY_NAME_TRUEVO = 'Truevo';

  GATEWAY_NAME_TRUSTS_PAY = 'TrustsPay';

  GATEWAY_NAME_TRUSTLY = 'Trustly';

  GATEWAY_NAME_TWINT = 'TWINT';

  GATEWAY_NAME_UNLIMIT = 'Unlimit';

  GATEWAY_NAME_U_PAY_CARD = 'UPayCard';

  GATEWAY_NAME_US_AE_PAY = 'USAePay';

  GATEWAY_NAME_VANTIV_LITLE = 'VantivLitle';

  GATEWAY_NAME_VEGAA_H = 'vegaaH';

  GATEWAY_NAME_V_CREDITOS = 'VCreditos';

  GATEWAY_NAME_VEGA_WALLET = 'VegaWallet';

  GATEWAY_NAME_WALLET88 = 'Wallet88';

  GATEWAY_NAME_WALPAY = 'Walpay';

  GATEWAY_NAME_WESTERN_UNION = 'WesternUnion';

  GATEWAY_NAME_WIRECARD = 'Wirecard';

  GATEWAY_NAME_WORLDLINE_ATOS_FRANKFURT = 'WorldlineAtosFrankfurt';

  GATEWAY_NAME_WORLDPAY = 'Worldpay';

  GATEWAY_NAME_X_PAY = 'XPay';

  GATEWAY_NAME_ZIMPLER = 'Zimpler';

  GATEWAY_NAME_ZOTAPAY = 'Zotapay';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'transactionId')) {
      this.setTransactionId(data['transactionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transactionResult')) {
      this.setTransactionResult(data['transactionResult']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'method')) {
      this.setMethod(data['method']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'gatewayName')) {
      this.setGatewayName(data['gatewayName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentId')) {
      this.setPaymentInstrumentId(data['paymentInstrumentId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
  }


  get transactionId(): string | null {
    return this._fields['transactionId'] ?? null;
  }
  
  getTransactionId(): string | null {
      return this._fields['transactionId'] ?? null;
  }

  setTransactionId(value: null | string) {
    this._fields['transactionId'] = value;

    return this;
  }

  get transactionResult(): string | null {
    return this._fields['transactionResult'] ?? null;
  }
  
  getTransactionResult(): string | null {
      return this._fields['transactionResult'] ?? null;
  }

  private setTransactionResult(value: null | string) {
    this._fields['transactionResult'] = value;

    return this;
  }

  get method(): string | null {
    return this._fields['method'] ?? null;
  }
  
  getMethod(): string | null {
      return this._fields['method'] ?? null;
  }

  setMethod(value: null | string) {
    this._fields['method'] = value;

    return this;
  }

  get gatewayName(): string | null {
    return this._fields['gatewayName'] ?? null;
  }
  
  getGatewayName(): string | null {
      return this._fields['gatewayName'] ?? null;
  }

  setGatewayName(value: null | string) {
    this._fields['gatewayName'] = value;

    return this;
  }

  get paymentInstrumentId(): string | null {
    return this._fields['paymentInstrumentId'] ?? null;
  }
  
  getPaymentInstrumentId(): string | null {
      return this._fields['paymentInstrumentId'] ?? null;
  }

  setPaymentInstrumentId(value: null | string) {
    this._fields['paymentInstrumentId'] = value;

    return this;
  }

  get amount(): number | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): number | null {
      return this._fields['amount'] ?? null;
  }

  setAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get currency(): string | null {
    return this._fields['currency'] ?? null;
  }
  
  getCurrency(): string | null {
      return this._fields['currency'] ?? null;
  }

  setCurrency(value: null | string) {
    this._fields['currency'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionId')) {
      data['transactionId'] = this['transactionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionResult')) {
      data['transactionResult'] = this['transactionResult'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'method')) {
      data['method'] = this['method'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gatewayName')) {
      data['gatewayName'] = this['gatewayName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentId')) {
      data['paymentInstrumentId'] = this['paymentInstrumentId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }

    return data;
  }
}
