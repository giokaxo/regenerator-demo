import TransactionPaymentInstrumentFactory from '../factories/transaction-payment-instrument-factory';
import ContactObject from '../models/contact-object';
import Transaction3ds from '../models/transaction-3-ds';
import TransactionGateway from '../models/transaction-gateway';
import { TransactionPaymentInstrument } from '../models/transaction-payment-instrument';
import TransactionDcc from '../models/transaction-dcc';
import TransactionBumpOffer from '../models/transaction-bump-offer';
import RiskMetadata from '../models/risk-metadata';
import TransactionLimitAmount from '../models/transaction-limit-amount';
import TransactionEmbedded from '../models/transaction-embedded';
import ResourceLink from '../models/resource-link';

export default class Transaction {
  TYPE_3DS_AUTHENTICATION = '3ds-authentication';

  TYPE_AUTHORIZE = 'authorize';

  TYPE_CAPTURE = 'capture';

  TYPE_CREDIT = 'credit';

  TYPE_REFUND = 'refund';

  TYPE_SALE = 'sale';

  TYPE_SETUP = 'setup';

  TYPE_VOID = 'void';

  STATUS_COMPLETED = 'completed';

  STATUS_CONN_ERROR = 'conn-error';

  STATUS_DISPUTED = 'disputed';

  STATUS_NEVER_SENT = 'never-sent';

  STATUS_OFFSITE = 'offsite';

  STATUS_PARTIALLY_REFUNDED = 'partially-refunded';

  STATUS_PENDING = 'pending';

  STATUS_REFUNDED = 'refunded';

  STATUS_SENDING = 'sending';

  STATUS_TIMEOUT = 'timeout';

  STATUS_VOIDED = 'voided';

  STATUS_WAITING_APPROVAL = 'waiting-approval';

  STATUS_WAITING_CAPTURE = 'waiting-capture';

  STATUS_WAITING_GATEWAY = 'waiting-gateway';

  STATUS_WAITING_REFUND = 'waiting-refund';

  RESULT_ABANDONED = 'abandoned';

  RESULT_APPROVED = 'approved';

  RESULT_CANCELED = 'canceled';

  RESULT_DECLINED = 'declined';

  RESULT_UNKNOWN = 'unknown';

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

  ACQUIRER_NAME_ADYEN = 'Adyen';

  ACQUIRER_NAME_ACI = 'ACI';

  ACQUIRER_NAME_ALIPAY = 'Alipay';

  ACQUIRER_NAME_AIB = 'AIB';

  ACQUIRER_NAME_AIRCASH = 'Aircash';

  ACQUIRER_NAME_AIRPAY = 'Airpay';

  ACQUIRER_NAME_AMAZON_PAY = 'AmazonPay';

  ACQUIRER_NAME_APCO_PAY = 'ApcoPay';

  ACQUIRER_NAME_ASIA_PAYMENT_GATEWAY = 'AsiaPaymentGateway';

  ACQUIRER_NAME_ASTRO_PAY_CARD = 'AstroPay Card';

  ACQUIRER_NAME_AWEPAY = 'Awepay';

  ACQUIRER_NAME_IPAY_OPTIONS = 'Ipay Options';

  ACQUIRER_NAME_B_PLUS_S = 'B+S';

  ACQUIRER_NAME_BAMBORA = 'Bambora';

  ACQUIRER_NAME_BIT_PAY = 'BitPay';

  ACQUIRER_NAME_BANK_OF_AMERICA = 'Bank of America';

  ACQUIRER_NAME_BANK_OF_MOSCOW = 'Bank of Moscow';

  ACQUIRER_NAME_BANK_OF_REBILLY = 'Bank of Rebilly';

  ACQUIRER_NAME_BANK_ONE = 'Bank One';

  ACQUIRER_NAME_BANK_SEND = 'BankSEND';

  ACQUIRER_NAME_BMO_HARRIS_BANK = 'BMO Harris Bank';

  ACQUIRER_NAME_BORGUN = 'Borgun';

  ACQUIRER_NAME_BRAINTREE_PAYMENTS = 'BraintreePayments';

  ACQUIRER_NAME_BUCKAROO = 'Buckaroo';

  ACQUIRER_NAME_BVNK = 'BVNK';

  ACQUIRER_NAME_CARDKNOX = 'Cardknox';

  ACQUIRER_NAME_CAS_HLIB = 'CASHlib';

  ACQUIRER_NAME_CASHTERMINAL = 'Cashterminal';

  ACQUIRER_NAME_CASH_TO_CODE = 'CashToCode';

  ACQUIRER_NAME_CATALUNYA_CAIXA = 'Catalunya Caixa';

  ACQUIRER_NAME_CC_AVENUE = 'CCAvenue';

  ACQUIRER_NAME_CHASE = 'Chase';

  ACQUIRER_NAME_CHECKOUT_COM = 'CheckoutCom';

  ACQUIRER_NAME_CHILLSTOCK = 'Chillstock';

  ACQUIRER_NAME_CHINA_UNION_PAY = 'ChinaUnionPay';

  ACQUIRER_NAME_CIM = 'CIM';

  ACQUIRER_NAME_CIRCLE = 'Circle';

  ACQUIRER_NAME_CITADEL = 'Citadel';

  ACQUIRER_NAME_CLEARHAUS = 'Clearhaus';

  ACQUIRER_NAME_CLEO = 'Cleo';

  ACQUIRER_NAME_COD_VOUCHER = 'CODVoucher';

  ACQUIRER_NAME_COINBASE = 'Coinbase';

  ACQUIRER_NAME_COIN_GATE = 'CoinGate';

  ACQUIRER_NAME_COIN_PAYMENTS = 'CoinPayments';

  ACQUIRER_NAME_CONEKTA = 'Conekta';

  ACQUIRER_NAME_COPPR = 'Coppr';

  ACQUIRER_NAME_CREDORAX = 'Credorax';

  ACQUIRER_NAME_CRYPTONATOR = 'Cryptonator';

  ACQUIRER_NAME_CYBER_SOURCE = 'CyberSource';

  ACQUIRER_NAME_DIMOCO = 'Dimoco';

  ACQUIRER_NAME_D_LOCAL = 'dLocal';

  ACQUIRER_NAME_DRAGONPHOENIX = 'Dragonphoenix';

  ACQUIRER_NAME_DROPAYMENT = 'Dropayment';

  ACQUIRER_NAME_EASY_PAY_DIRECT = 'EasyPayDirect';

  ACQUIRER_NAME_EBANX = 'EBANX';

  ACQUIRER_NAME_ECO_PAYZ = 'ecoPayz';

  ACQUIRER_NAME_ECORE_PAY = 'EcorePay';

  ACQUIRER_NAME_ELAVON = 'Elavon';

  ACQUIRER_NAME_EMS = 'EMS';

  ACQUIRER_NAME_E_PAY = 'ePay';

  ACQUIRER_NAME_EPG = 'EPG';

  ACQUIRER_NAME_EUTELLER = 'Euteller';

  ACQUIRER_NAME_EZEEBILL = 'Ezeebill';

  ACQUIRER_NAME_E_ZEE_WALLET = 'eZeeWallet';

  ACQUIRER_NAME_EZY_EFT = 'ezyEFT';

  ACQUIRER_NAME_FIFTH_THIRD_BANK = 'Fifth Third Bank';

  ACQUIRER_NAME_FINRAX = 'Finrax';

  ACQUIRER_NAME_FIRST_DATA_BUYPASS = 'First Data Buypass';

  ACQUIRER_NAME_FIRST_DATA_NASHVILLE = 'First Data Nashville';

  ACQUIRER_NAME_FIRST_DATA_NORTH = 'First Data North';

  ACQUIRER_NAME_FIRST_DATA_OMAHA = 'First Data Omaha';

  ACQUIRER_NAME_FIN_TEC_SYSTEMS = 'FinTecSystems';

  ACQUIRER_NAME_FLEXEPIN = 'Flexepin';

  ACQUIRER_NAME_FORTE = 'Forte';

  ACQUIRER_NAME_FUND_SEND = 'FundSend';

  ACQUIRER_NAME_GATE2WAY = 'gate2way';

  ACQUIRER_NAME_GIGADAT = 'Gigadat';

  ACQUIRER_NAME_GLOBAL_EAST = 'Global East';

  ACQUIRER_NAME_GOONEY = 'Gooney';

  ACQUIRER_NAME_GPAYSAFE = 'Gpaysafe';

  ACQUIRER_NAME_HEARTLAND = 'Heartland';

  ACQUIRER_NAME_HI_PAY = 'HiPay';

  ACQUIRER_NAME_HSBC = 'HSBC';

  ACQUIRER_NAME_I_CAN_PAY = 'iCanPay';

  ACQUIRER_NAME_ICEPAY = 'ICEPAY';

  ACQUIRER_NAME_I_CHEQUE = 'iCheque';

  ACQUIRER_NAME_ILIXIUM = 'Ilixium';

  ACQUIRER_NAME_INGENICO = 'Ingenico';

  ACQUIRER_NAME_INOVAPAY = 'INOVAPAY';

  ACQUIRER_NAME_INTUIT = 'Intuit';

  ACQUIRER_NAME_JETON = 'Jeton';

  ACQUIRER_NAME_JPM_ORBITAL = 'JPMOrbital';

  ACQUIRER_NAME_KHELOCARD = 'Khelocard';

  ACQUIRER_NAME_KLARNA = 'Klarna';

  ACQUIRER_NAME_KONNEKTIVE = 'Konnektive';

  ACQUIRER_NAME_LIMEPAY = 'Limepay';

  ACQUIRER_NAME_LOONIE = 'loonie';

  ACQUIRER_NAME_LPG = 'LPG';

  ACQUIRER_NAME_MASAPAY = 'Masapay';

  ACQUIRER_NAME_MAXI_CASH = 'MaxiCash';

  ACQUIRER_NAME_MERCADO_PAGO = 'MercadoPago';

  ACQUIRER_NAME_MERRICK = 'Merrick';

  ACQUIRER_NAME_MISSION_VALLEY_BANK = 'Mission Valley Bank';

  ACQUIRER_NAME_MI_FINITY = 'MiFinity';

  ACQUIRER_NAME_MOBILE_PAY = 'MobilePay';

  ACQUIRER_NAME_MONERIS = 'Moneris';

  ACQUIRER_NAME_MONOLO = 'Monolo';

  ACQUIRER_NAME_MUCH_BETTER = 'MuchBetter';

  ACQUIRER_NAME_MUCH_BETTER_GATEWAY = 'MuchBetterGateway';

  ACQUIRER_NAME_MY_FATOORAH = 'MyFatoorah';

  ACQUIRER_NAME_NATWEST = 'NATWEST';

  ACQUIRER_NAME_NEOSURF = 'Neosurf';

  ACQUIRER_NAME_NETBANKING = 'Netbanking';

  ACQUIRER_NAME_NETELLER = 'Neteller';

  ACQUIRER_NAME_NINJA_WALLET = 'NinjaWallet';

  ACQUIRER_NAME_NMI = 'NMI';

  ACQUIRER_NAME_NORDIK_COIN = 'NordikCoin';

  ACQUIRER_NAME_NOW_PAYMENTS = 'NOWPayments';

  ACQUIRER_NAME_NUA_PAY = 'NuaPay';

  ACQUIRER_NAME_NUVEI = 'Nuvei';

  ACQUIRER_NAME_OCHA_PAY = 'OchaPay';

  ACQUIRER_NAME_OMNI_MATRIX = 'OmniMatrix';

  ACQUIRER_NAME_ONLINEUEBERWEISEN = 'Onlineueberweisen';

  ACQUIRER_NAME_ON_RAMP = 'OnRamp';

  ACQUIRER_NAME_ORBITAL = 'Orbital';

  ACQUIRER_NAME_OTHER = 'Other';

  ACQUIRER_NAME_PANAMERICAN = 'Panamerican';

  ACQUIRER_NAME_PANDA_BANK = 'Panda Bank';

  ACQUIRER_NAME_PARAMOUNT = 'Paramount';

  ACQUIRER_NAME_PARAMOUNT_COMMERCE = 'ParamountCommerce';

  ACQUIRER_NAME_PARAMOUNT_EFT = 'ParamountEft';

  ACQUIRER_NAME_PARAMOUNT_INTERAC = 'ParamountInterac';

  ACQUIRER_NAME_PAY4FUN = 'Pay4fun';

  ACQUIRER_NAME_PAY_CASH = 'PayCash';

  ACQUIRER_NAME_PAY_CLUB = 'PayClub';

  ACQUIRER_NAME_PAY_ECARDS = 'PayEcards';

  ACQUIRER_NAME_PAYMENT_ASIA = 'PaymentAsia';

  ACQUIRER_NAME_PAYMEN_TECHNOLOGIES = 'PaymenTechnologies';

  ACQUIRER_NAME_PAYMENTS_OS = 'PaymentsOS';

  ACQUIRER_NAME_PAYMERO = 'Paymero';

  ACQUIRER_NAME_PAYNETICS = 'Paynetics';

  ACQUIRER_NAME_PAY_PAL = 'PayPal';

  ACQUIRER_NAME_PAYPER = 'Payper';

  ACQUIRER_NAME_PAYR = 'Payr';

  ACQUIRER_NAME_PAY_REDEEM = 'PayRedeem';

  ACQUIRER_NAME_PAY_RETAILERS = 'PayRetailers';

  ACQUIRER_NAME_PAY_TABS = 'PayTabs';

  ACQUIRER_NAME_PAY_U = 'PayU';

  ACQUIRER_NAME_PAY_U_LATAM = 'PayULatam';

  ACQUIRER_NAME_PAYVISION = 'Payvision';

  ACQUIRER_NAME_PHAROS_PAYMENTS = 'PharosPayments';

  ACQUIRER_NAME_PIASTRIX = 'Piastrix';

  ACQUIRER_NAME_PIN4_PAY = 'Pin4Pay';

  ACQUIRER_NAME_PEOPLES_TRUST_COMPANY = 'Peoples Trust Company';

  ACQUIRER_NAME_POST_FINANCE = 'PostFinance';

  ACQUIRER_NAME_PPRO = 'PPRO';

  ACQUIRER_NAME_PRIVATBANK = 'Privatbank';

  ACQUIRER_NAME_PROSA = 'Prosa';

  ACQUIRER_NAME_P_SI_GATE = 'PSiGate';

  ACQUIRER_NAME_QQ_PAY = 'QQPay';

  ACQUIRER_NAME_RAPYD = 'Rapyd';

  ACQUIRER_NAME_RBC = 'RBC';

  ACQUIRER_NAME_RBS_WORLD_PAY = 'RBS WorldPay';

  ACQUIRER_NAME_REAL_TIME = 'RealTime';

  ACQUIRER_NAME_ROTESSA = 'Rotessa';

  ACQUIRER_NAME_SAFECHARGE = 'Safecharge';

  ACQUIRER_NAME_SALTAR_PAY = 'SaltarPay';

  ACQUIRER_NAME_SECURE_TRADING = 'SecureTrading';

  ACQUIRER_NAME_SECURION_PAY = 'SecurionPay';

  ACQUIRER_NAME_SKRILL = 'Skrill';

  ACQUIRER_NAME_SMART_INVOICE = 'SmartInvoice';

  ACQUIRER_NAME_SMS_VOUCHER = 'SMSVoucher';

  ACQUIRER_NAME_SOFORT = 'Sofort';

  ACQUIRER_NAME_SPARK_PAY = 'SparkPay';

  ACQUIRER_NAME_STATE_BANK_OF_MAURITIUS = 'State Bank of Mauritius';

  ACQUIRER_NAME_STP_MEXICO = 'STPMexico';

  ACQUIRER_NAME_STRIPE = 'Stripe';

  ACQUIRER_NAME_TABBY = 'Tabby';

  ACQUIRER_NAME_TBI = 'TBI';

  ACQUIRER_NAME_TELR = 'Telr';

  ACQUIRER_NAME_TEST_PROCESSOR = 'TestProcessor';

  ACQUIRER_NAME_TODITO_CASH = 'ToditoCash';

  ACQUIRER_NAME_TRUEVO = 'Truevo';

  ACQUIRER_NAME_TRUSTLY = 'Trustly';

  ACQUIRER_NAME_TRUST_PAY = 'TrustPay';

  ACQUIRER_NAME_TRUSTS_PAY = 'TrustsPay';

  ACQUIRER_NAME_TSYS = 'TSYS';

  ACQUIRER_NAME_TWINT = 'TWINT';

  ACQUIRER_NAME_U_PAY_CARD = 'UPayCard';

  ACQUIRER_NAME_VANTIV = 'Vantiv';

  ACQUIRER_NAME_V_CREDITOS = 'VCreditos';

  ACQUIRER_NAME_VEGA_WALLET = 'VegaWallet';

  ACQUIRER_NAME_VOICE_PAY = 'VoicePay';

  ACQUIRER_NAME_WALLET88 = 'Wallet88';

  ACQUIRER_NAME_WE_CHAT_PAY = 'WeChat Pay';

  ACQUIRER_NAME_WELLS_FARGO = 'Wells Fargo';

  ACQUIRER_NAME_WING_HANG_BANK = 'Wing Hang Bank';

  ACQUIRER_NAME_WIRECARD = 'Wirecard';

  ACQUIRER_NAME_WORLD_PAY = 'WorldPay';

  ACQUIRER_NAME_X_PAY = 'XPay';

  ACQUIRER_NAME_ZIMPLER = 'Zimpler';

  ACQUIRER_NAME_ZOTAPAY = 'Zotapay';

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

  DISPUTE_STATUS_NULL = 'null';

  DISPUTE_STATUS_RESPONSE_NEEDED = 'response-needed';

  DISPUTE_STATUS_UNDER_REVIEW = 'under-review';

  DISPUTE_STATUS_FORFEITED = 'forfeited';

  DISPUTE_STATUS_WON = 'won';

  DISPUTE_STATUS_LOST = 'lost';

  DISPUTE_STATUS_UNKNOWN = 'unknown';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'result')) {
      this.setResult(data['result']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'purchaseAmount')) {
      this.setPurchaseAmount(data['purchaseAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'purchaseCurrency')) {
      this.setPurchaseCurrency(data['purchaseCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'requestAmount')) {
      this.setRequestAmount(data['requestAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'requestCurrency')) {
      this.setRequestCurrency(data['requestCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'parentTransactionId')) {
      this.setParentTransactionId(data['parentTransactionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'childTransactions')) {
      this.setChildTransactions(data['childTransactions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceIds')) {
      this.setInvoiceIds(data['invoiceIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subscriptionIds')) {
      this.setSubscriptionIds(data['subscriptionIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'planIds')) {
      this.setPlanIds(data['planIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isRebill')) {
      this.setIsRebill(data['isRebill']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rebillNumber')) {
      this.setRebillNumber(data['rebillNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'has3ds')) {
      this.setHas3ds(data['has3ds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '3ds')) {
      this.set3ds(data['3ds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'redirectUrl')) {
      this.setRedirectUrl(data['redirectUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'retryNumber')) {
      this.setRetryNumber(data['retryNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isRetry')) {
      this.setIsRetry(data['isRetry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingDescriptor')) {
      this.setBillingDescriptor(data['billingDescriptor']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'requestId')) {
      this.setRequestId(data['requestId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasAmountAdjustment')) {
      this.setHasAmountAdjustment(data['hasAmountAdjustment']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'gatewayName')) {
      this.setGatewayName(data['gatewayName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'processedTime')) {
      this.setProcessedTime(data['processedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'gatewayAccountId')) {
      this.setGatewayAccountId(data['gatewayAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'gatewayTransactionId')) {
      this.setGatewayTransactionId(data['gatewayTransactionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'gateway')) {
      this.setGateway(data['gateway']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acquirerName')) {
      this.setAcquirerName(data['acquirerName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'method')) {
      this.setMethod(data['method']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'velocity')) {
      this.setVelocity(data['velocity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'referenceData')) {
      this.setReferenceData(data['referenceData']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bin')) {
      this.setBin(data['bin']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrument')) {
      this.setPaymentInstrument(data['paymentInstrument']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasDcc')) {
      this.setHasDcc(data['hasDcc']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dcc')) {
      this.setDcc(data['dcc']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasBumpOffer')) {
      this.setHasBumpOffer(data['hasBumpOffer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bumpOffer')) {
      this.setBumpOffer(data['bumpOffer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskScore')) {
      this.setRiskScore(data['riskScore']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskMetadata')) {
      this.setRiskMetadata(data['riskMetadata']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notificationUrl')) {
      this.setNotificationUrl(data['notificationUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isDisputed')) {
      this.setIsDisputed(data['isDisputed']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'disputeTime')) {
      this.setDisputeTime(data['disputeTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'disputeStatus')) {
      this.setDisputeStatus(data['disputeStatus']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isReconciled')) {
      this.setIsReconciled(data['isReconciled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isProcessedOutside')) {
      this.setIsProcessedOutside(data['isProcessedOutside']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isMerchantInitiated')) {
      this.setIsMerchantInitiated(data['isMerchantInitiated']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hadDiscrepancy')) {
      this.setHadDiscrepancy(data['hadDiscrepancy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'orderId')) {
      this.setOrderId(data['orderId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'arn')) {
      this.setArn(data['arn']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reportAmount')) {
      this.setReportAmount(data['reportAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reportCurrency')) {
      this.setReportCurrency(data['reportCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settlementTime')) {
      this.setSettlementTime(data['settlementTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'discrepancyTime')) {
      this.setDiscrepancyTime(data['discrepancyTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'limits')) {
      this.setLimits(data['limits']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'depositRequestId')) {
      this.setDepositRequestId(data['depositRequestId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payoutRequestId')) {
      this.setPayoutRequestId(data['payoutRequestId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
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

  get websiteId(): string | null {
    return this._fields['websiteId'] ?? null;
  }
  
  getWebsiteId(): string | null {
      return this._fields['websiteId'] ?? null;
  }

  private setWebsiteId(value: null | string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get customerId(): string | null {
    return this._fields['customerId'] ?? null;
  }
  
  getCustomerId(): string | null {
      return this._fields['customerId'] ?? null;
  }

  setCustomerId(value: null | string) {
    this._fields['customerId'] = value;

    return this;
  }

  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  private setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  private setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get result(): string | null {
    return this._fields['result'] ?? null;
  }
  
  getResult(): string | null {
      return this._fields['result'] ?? null;
  }

  private setResult(value: null | string) {
    this._fields['result'] = value;

    return this;
  }

  get amount(): number | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): number | null {
      return this._fields['amount'] ?? null;
  }

  private setAmount(value: null | number | string) {
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

  private setCurrency(value: null | string) {
    this._fields['currency'] = value;

    return this;
  }

  get purchaseAmount(): number | null {
    return this._fields['purchaseAmount'] ?? null;
  }
  
  getPurchaseAmount(): number | null {
      return this._fields['purchaseAmount'] ?? null;
  }

  private setPurchaseAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['purchaseAmount'] = value;

    return this;
  }

  get purchaseCurrency(): string | null {
    return this._fields['purchaseCurrency'] ?? null;
  }
  
  getPurchaseCurrency(): string | null {
      return this._fields['purchaseCurrency'] ?? null;
  }

  private setPurchaseCurrency(value: null | string) {
    this._fields['purchaseCurrency'] = value;

    return this;
  }

  get requestAmount(): number | null {
    return this._fields['requestAmount'] ?? null;
  }
  
  getRequestAmount(): number | null {
      return this._fields['requestAmount'] ?? null;
  }

  private setRequestAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['requestAmount'] = value;

    return this;
  }

  get requestCurrency(): string | null {
    return this._fields['requestCurrency'] ?? null;
  }
  
  getRequestCurrency(): string | null {
      return this._fields['requestCurrency'] ?? null;
  }

  private setRequestCurrency(value: null | string) {
    this._fields['requestCurrency'] = value;

    return this;
  }

  get parentTransactionId(): string | null {
    return this._fields['parentTransactionId'] ?? null;
  }
  
  getParentTransactionId(): string | null {
      return this._fields['parentTransactionId'] ?? null;
  }

  setParentTransactionId(value: null | string) {
    this._fields['parentTransactionId'] = value;

    return this;
  }

  get childTransactions(): Array<any> | null {
    return this._fields['childTransactions'] ?? null;
  }
  
  getChildTransactions(): Array<any> | null {
      return this._fields['childTransactions'] ?? null;
  }

  private setChildTransactions(value: null | Array<any>) {
    this._fields['childTransactions'] = value;

    return this;
  }

  get invoiceIds(): Array<any> | null {
    return this._fields['invoiceIds'] ?? null;
  }
  
  getInvoiceIds(): Array<any> | null {
      return this._fields['invoiceIds'] ?? null;
  }

  private setInvoiceIds(value: null | Array<any>) {
    this._fields['invoiceIds'] = value;

    return this;
  }

  get subscriptionIds(): Array<any> | null {
    return this._fields['subscriptionIds'] ?? null;
  }
  
  getSubscriptionIds(): Array<any> | null {
      return this._fields['subscriptionIds'] ?? null;
  }

  private setSubscriptionIds(value: null | Array<any>) {
    this._fields['subscriptionIds'] = value;

    return this;
  }

  get planIds(): Array<any> | null {
    return this._fields['planIds'] ?? null;
  }
  
  getPlanIds(): Array<any> | null {
      return this._fields['planIds'] ?? null;
  }

  private setPlanIds(value: null | Array<any>) {
    this._fields['planIds'] = value;

    return this;
  }

  get isRebill(): boolean | null {
    return this._fields['isRebill'] ?? null;
  }
  
  getIsRebill(): boolean | null {
      return this._fields['isRebill'] ?? null;
  }

  private setIsRebill(value: null | boolean) {
    this._fields['isRebill'] = value;

    return this;
  }

  get rebillNumber(): number | null {
    return this._fields['rebillNumber'] ?? null;
  }
  
  getRebillNumber(): number | null {
      return this._fields['rebillNumber'] ?? null;
  }

  private setRebillNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['rebillNumber'] = value;

    return this;
  }

  get billingAddress(): ContactObject | null {
    return this._fields['billingAddress'] ?? null;
  }
  
  getBillingAddress(): ContactObject | null {
      return this._fields['billingAddress'] ?? null;
  }

  setBillingAddress(value: null | ContactObject | any) {
    if (value !== null && !(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['billingAddress'] = value;

    return this;
  }

  get has3ds(): boolean | null {
    return this._fields['has3ds'] ?? null;
  }
  
  getHas3ds(): boolean | null {
      return this._fields['has3ds'] ?? null;
  }

  private setHas3ds(value: null | boolean) {
    this._fields['has3ds'] = value;

    return this;
  }

  get _3ds(): Transaction3ds | null {
    return this._fields['3ds'] ?? null;
  }
  
  get3ds(): Transaction3ds | null {
      return this._fields['3ds'] ?? null;
  }

  set3ds(value: null | Transaction3ds | any) {
    if (value !== null && !(value instanceof Transaction3ds)) {
      value = new Transaction3ds(value);
    }

    this._fields['3ds'] = value;

    return this;
  }

  get redirectUrl(): string | null {
    return this._fields['redirectUrl'] ?? null;
  }
  
  getRedirectUrl(): string | null {
      return this._fields['redirectUrl'] ?? null;
  }

  setRedirectUrl(value: null | string) {
    this._fields['redirectUrl'] = value;

    return this;
  }

  get retryNumber(): number | null {
    return this._fields['retryNumber'] ?? null;
  }
  
  getRetryNumber(): number | null {
      return this._fields['retryNumber'] ?? null;
  }

  private setRetryNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['retryNumber'] = value;

    return this;
  }

  get isRetry(): boolean | null {
    return this._fields['isRetry'] ?? null;
  }
  
  getIsRetry(): boolean | null {
      return this._fields['isRetry'] ?? null;
  }

  private setIsRetry(value: null | boolean) {
    this._fields['isRetry'] = value;

    return this;
  }

  get billingDescriptor(): string | null {
    return this._fields['billingDescriptor'] ?? null;
  }
  
  getBillingDescriptor(): string | null {
      return this._fields['billingDescriptor'] ?? null;
  }

  private setBillingDescriptor(value: null | string) {
    this._fields['billingDescriptor'] = value;

    return this;
  }

  get description(): string | null {
    return this._fields['description'] ?? null;
  }
  
  getDescription(): string | null {
      return this._fields['description'] ?? null;
  }

  setDescription(value: null | string) {
    this._fields['description'] = value;

    return this;
  }

  get requestId(): string | null {
    return this._fields['requestId'] ?? null;
  }
  
  getRequestId(): string | null {
      return this._fields['requestId'] ?? null;
  }

  setRequestId(value: null | string) {
    this._fields['requestId'] = value;

    return this;
  }

  get hasAmountAdjustment(): boolean | null {
    return this._fields['hasAmountAdjustment'] ?? null;
  }
  
  getHasAmountAdjustment(): boolean | null {
      return this._fields['hasAmountAdjustment'] ?? null;
  }

  private setHasAmountAdjustment(value: null | boolean) {
    this._fields['hasAmountAdjustment'] = value;

    return this;
  }

  get gatewayName(): string | null {
    return this._fields['gatewayName'] ?? null;
  }
  
  getGatewayName(): string | null {
      return this._fields['gatewayName'] ?? null;
  }

  private setGatewayName(value: null | string) {
    this._fields['gatewayName'] = value;

    return this;
  }

  get customFields(): Record<string, any> | null {
    return this._fields['customFields'] ?? null;
  }
  
  getCustomFields(): Record<string, any> | null {
      return this._fields['customFields'] ?? null;
  }

  setCustomFields(value: null | Record<string, any>) {
    this._fields['customFields'] = value;

    return this;
  }

  get processedTime(): Date | null {
    return this._fields['processedTime'] ?? null;
  }
  
  getProcessedTime(): Date | null {
      return this._fields['processedTime'] ?? null;
  }

  private setProcessedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['processedTime'] = value;

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

  get gatewayAccountId(): string | null {
    return this._fields['gatewayAccountId'] ?? null;
  }
  
  getGatewayAccountId(): string | null {
      return this._fields['gatewayAccountId'] ?? null;
  }

  private setGatewayAccountId(value: null | string) {
    this._fields['gatewayAccountId'] = value;

    return this;
  }

  get gatewayTransactionId(): string | null {
    return this._fields['gatewayTransactionId'] ?? null;
  }
  
  getGatewayTransactionId(): string | null {
      return this._fields['gatewayTransactionId'] ?? null;
  }

  private setGatewayTransactionId(value: null | string) {
    this._fields['gatewayTransactionId'] = value;

    return this;
  }

  get gateway(): TransactionGateway | null {
    return this._fields['gateway'] ?? null;
  }
  
  getGateway(): TransactionGateway | null {
      return this._fields['gateway'] ?? null;
  }

  setGateway(value: null | TransactionGateway | any) {
    if (value !== null && !(value instanceof TransactionGateway)) {
      value = new TransactionGateway(value);
    }

    this._fields['gateway'] = value;

    return this;
  }

  get acquirerName(): string | null {
    return this._fields['acquirerName'] ?? null;
  }
  
  getAcquirerName(): string | null {
      return this._fields['acquirerName'] ?? null;
  }

  private setAcquirerName(value: null | string) {
    this._fields['acquirerName'] = value;

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

  get velocity(): number | null {
    return this._fields['velocity'] ?? null;
  }
  
  getVelocity(): number | null {
      return this._fields['velocity'] ?? null;
  }

  setVelocity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['velocity'] = value;

    return this;
  }

  get revision(): number | null {
    return this._fields['revision'] ?? null;
  }
  
  getRevision(): number | null {
      return this._fields['revision'] ?? null;
  }

  private setRevision(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['revision'] = value;

    return this;
  }

  get referenceData(): Record<string, any> | null {
    return this._fields['referenceData'] ?? null;
  }
  
  getReferenceData(): Record<string, any> | null {
      return this._fields['referenceData'] ?? null;
  }

  private setReferenceData(value: null | Record<string, any>) {
    this._fields['referenceData'] = value;

    return this;
  }

  get bin(): string | null {
    return this._fields['bin'] ?? null;
  }
  
  getBin(): string | null {
      return this._fields['bin'] ?? null;
  }

  private setBin(value: null | string) {
    this._fields['bin'] = value;

    return this;
  }

  get paymentInstrument(): TransactionPaymentInstrument | null {
    return this._fields['paymentInstrument'] ?? null;
  }
  
  getPaymentInstrument(): TransactionPaymentInstrument | null {
      return this._fields['paymentInstrument'] ?? null;
  }

  setPaymentInstrument(value: null | TransactionPaymentInstrument | any) {
    if (value !== null && !(value[TransactionPaymentInstrument])) {
      value = TransactionPaymentInstrumentFactory.from(value);
    }

    this._fields['paymentInstrument'] = value;

    return this;
  }

  get hasDcc(): boolean | null {
    return this._fields['hasDcc'] ?? null;
  }
  
  getHasDcc(): boolean | null {
      return this._fields['hasDcc'] ?? null;
  }

  private setHasDcc(value: null | boolean) {
    this._fields['hasDcc'] = value;

    return this;
  }

  get dcc(): TransactionDcc | null {
    return this._fields['dcc'] ?? null;
  }
  
  getDcc(): TransactionDcc | null {
      return this._fields['dcc'] ?? null;
  }

  setDcc(value: null | TransactionDcc | any) {
    if (value !== null && !(value instanceof TransactionDcc)) {
      value = new TransactionDcc(value);
    }

    this._fields['dcc'] = value;

    return this;
  }

  get hasBumpOffer(): boolean | null {
    return this._fields['hasBumpOffer'] ?? null;
  }
  
  getHasBumpOffer(): boolean | null {
      return this._fields['hasBumpOffer'] ?? null;
  }

  private setHasBumpOffer(value: null | boolean) {
    this._fields['hasBumpOffer'] = value;

    return this;
  }

  get bumpOffer(): TransactionBumpOffer | null {
    return this._fields['bumpOffer'] ?? null;
  }
  
  getBumpOffer(): TransactionBumpOffer | null {
      return this._fields['bumpOffer'] ?? null;
  }

  setBumpOffer(value: null | TransactionBumpOffer | any) {
    if (value !== null && !(value instanceof TransactionBumpOffer)) {
      value = new TransactionBumpOffer(value);
    }

    this._fields['bumpOffer'] = value;

    return this;
  }

  get riskScore(): number | null {
    return this._fields['riskScore'] ?? null;
  }
  
  getRiskScore(): number | null {
      return this._fields['riskScore'] ?? null;
  }

  private setRiskScore(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['riskScore'] = value;

    return this;
  }

  get riskMetadata(): RiskMetadata | null {
    return this._fields['riskMetadata'] ?? null;
  }
  
  getRiskMetadata(): RiskMetadata | null {
      return this._fields['riskMetadata'] ?? null;
  }

  setRiskMetadata(value: null | RiskMetadata | any) {
    if (value !== null && !(value instanceof RiskMetadata)) {
      value = new RiskMetadata(value);
    }

    this._fields['riskMetadata'] = value;

    return this;
  }

  get notificationUrl(): string | null {
    return this._fields['notificationUrl'] ?? null;
  }
  
  getNotificationUrl(): string | null {
      return this._fields['notificationUrl'] ?? null;
  }

  setNotificationUrl(value: null | string) {
    this._fields['notificationUrl'] = value;

    return this;
  }

  get isDisputed(): boolean | null {
    return this._fields['isDisputed'] ?? null;
  }
  
  getIsDisputed(): boolean | null {
      return this._fields['isDisputed'] ?? null;
  }

  private setIsDisputed(value: null | boolean) {
    this._fields['isDisputed'] = value;

    return this;
  }

  get disputeTime(): Date | null {
    return this._fields['disputeTime'] ?? null;
  }
  
  getDisputeTime(): Date | null {
      return this._fields['disputeTime'] ?? null;
  }

  private setDisputeTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['disputeTime'] = value;

    return this;
  }

  get disputeStatus(): string | null {
    return this._fields['disputeStatus'] ?? null;
  }
  
  getDisputeStatus(): string | null {
      return this._fields['disputeStatus'] ?? null;
  }

  private setDisputeStatus(value: null | string) {
    this._fields['disputeStatus'] = value;

    return this;
  }

  get isReconciled(): boolean | null {
    return this._fields['isReconciled'] ?? null;
  }
  
  getIsReconciled(): boolean | null {
      return this._fields['isReconciled'] ?? null;
  }

  private setIsReconciled(value: null | boolean) {
    this._fields['isReconciled'] = value;

    return this;
  }

  get isProcessedOutside(): boolean | null {
    return this._fields['isProcessedOutside'] ?? null;
  }
  
  getIsProcessedOutside(): boolean | null {
      return this._fields['isProcessedOutside'] ?? null;
  }

  setIsProcessedOutside(value: null | boolean) {
    this._fields['isProcessedOutside'] = value;

    return this;
  }

  get isMerchantInitiated(): boolean | null {
    return this._fields['isMerchantInitiated'] ?? null;
  }
  
  getIsMerchantInitiated(): boolean | null {
      return this._fields['isMerchantInitiated'] ?? null;
  }

  setIsMerchantInitiated(value: null | boolean) {
    this._fields['isMerchantInitiated'] = value;

    return this;
  }

  get hadDiscrepancy(): boolean | null {
    return this._fields['hadDiscrepancy'] ?? null;
  }
  
  getHadDiscrepancy(): boolean | null {
      return this._fields['hadDiscrepancy'] ?? null;
  }

  private setHadDiscrepancy(value: null | boolean) {
    this._fields['hadDiscrepancy'] = value;

    return this;
  }

  get orderId(): string | null {
    return this._fields['orderId'] ?? null;
  }
  
  getOrderId(): string | null {
      return this._fields['orderId'] ?? null;
  }

  setOrderId(value: null | string) {
    this._fields['orderId'] = value;

    return this;
  }

  get arn(): string | null {
    return this._fields['arn'] ?? null;
  }
  
  getArn(): string | null {
      return this._fields['arn'] ?? null;
  }

  private setArn(value: null | string) {
    this._fields['arn'] = value;

    return this;
  }

  get reportAmount(): number | null {
    return this._fields['reportAmount'] ?? null;
  }
  
  getReportAmount(): number | null {
      return this._fields['reportAmount'] ?? null;
  }

  private setReportAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['reportAmount'] = value;

    return this;
  }

  get reportCurrency(): string | null {
    return this._fields['reportCurrency'] ?? null;
  }
  
  getReportCurrency(): string | null {
      return this._fields['reportCurrency'] ?? null;
  }

  private setReportCurrency(value: null | string) {
    this._fields['reportCurrency'] = value;

    return this;
  }

  get settlementTime(): Date | null {
    return this._fields['settlementTime'] ?? null;
  }
  
  getSettlementTime(): Date | null {
      return this._fields['settlementTime'] ?? null;
  }

  private setSettlementTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['settlementTime'] = value;

    return this;
  }

  get discrepancyTime(): Date | null {
    return this._fields['discrepancyTime'] ?? null;
  }
  
  getDiscrepancyTime(): Date | null {
      return this._fields['discrepancyTime'] ?? null;
  }

  private setDiscrepancyTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['discrepancyTime'] = value;

    return this;
  }

  get limits(): TransactionLimitAmount | null {
    return this._fields['limits'] ?? null;
  }
  
  getLimits(): TransactionLimitAmount | null {
      return this._fields['limits'] ?? null;
  }

  setLimits(value: null | TransactionLimitAmount | any) {
    if (value !== null && !(value instanceof TransactionLimitAmount)) {
      value = new TransactionLimitAmount(value);
    }

    this._fields['limits'] = value;

    return this;
  }

  get organizationId(): string | null {
    return this._fields['organizationId'] ?? null;
  }
  
  getOrganizationId(): string | null {
      return this._fields['organizationId'] ?? null;
  }

  private setOrganizationId(value: null | string) {
    this._fields['organizationId'] = value;

    return this;
  }

  get depositRequestId(): string | null {
    return this._fields['depositRequestId'] ?? null;
  }
  
  getDepositRequestId(): string | null {
      return this._fields['depositRequestId'] ?? null;
  }

  private setDepositRequestId(value: null | string) {
    this._fields['depositRequestId'] = value;

    return this;
  }

  get payoutRequestId(): string | null {
    return this._fields['payoutRequestId'] ?? null;
  }
  
  getPayoutRequestId(): string | null {
      return this._fields['payoutRequestId'] ?? null;
  }

  private setPayoutRequestId(value: null | string) {
    this._fields['payoutRequestId'] = value;

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

  get embedded(): TransactionEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): TransactionEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | TransactionEmbedded | any) {
    if (value !== null && !(value instanceof TransactionEmbedded)) {
      value = new TransactionEmbedded(value);
    }

    this._fields['_embedded'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'result')) {
      data['result'] = this['result'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'purchaseAmount')) {
      data['purchaseAmount'] = this['purchaseAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'purchaseCurrency')) {
      data['purchaseCurrency'] = this['purchaseCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'requestAmount')) {
      data['requestAmount'] = this['requestAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'requestCurrency')) {
      data['requestCurrency'] = this['requestCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'parentTransactionId')) {
      data['parentTransactionId'] = this['parentTransactionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'childTransactions')) {
      data['childTransactions'] = this['childTransactions'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceIds')) {
      data['invoiceIds'] = this['invoiceIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subscriptionIds')) {
      data['subscriptionIds'] = this['subscriptionIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'planIds')) {
      data['planIds'] = this['planIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isRebill')) {
      data['isRebill'] = this['isRebill'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rebillNumber')) {
      data['rebillNumber'] = this['rebillNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'has3ds')) {
      data['has3ds'] = this['has3ds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, '_3ds')) {
      data['3ds'] = this['_3ds']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'redirectUrl')) {
      data['redirectUrl'] = this['redirectUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'retryNumber')) {
      data['retryNumber'] = this['retryNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isRetry')) {
      data['isRetry'] = this['isRetry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingDescriptor')) {
      data['billingDescriptor'] = this['billingDescriptor'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'requestId')) {
      data['requestId'] = this['requestId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasAmountAdjustment')) {
      data['hasAmountAdjustment'] = this['hasAmountAdjustment'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gatewayName')) {
      data['gatewayName'] = this['gatewayName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'processedTime')) {
      data['processedTime'] = this['processedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gatewayAccountId')) {
      data['gatewayAccountId'] = this['gatewayAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gatewayTransactionId')) {
      data['gatewayTransactionId'] = this['gatewayTransactionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gateway')) {
      data['gateway'] = this['gateway']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acquirerName')) {
      data['acquirerName'] = this['acquirerName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'method')) {
      data['method'] = this['method'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'velocity')) {
      data['velocity'] = this['velocity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'referenceData')) {
      data['referenceData'] = this['referenceData'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bin')) {
      data['bin'] = this['bin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrument')) {
      data['paymentInstrument'] = this['paymentInstrument']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasDcc')) {
      data['hasDcc'] = this['hasDcc'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dcc')) {
      data['dcc'] = this['dcc']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasBumpOffer')) {
      data['hasBumpOffer'] = this['hasBumpOffer'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bumpOffer')) {
      data['bumpOffer'] = this['bumpOffer']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskScore')) {
      data['riskScore'] = this['riskScore'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskMetadata')) {
      data['riskMetadata'] = this['riskMetadata']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notificationUrl')) {
      data['notificationUrl'] = this['notificationUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isDisputed')) {
      data['isDisputed'] = this['isDisputed'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'disputeTime')) {
      data['disputeTime'] = this['disputeTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'disputeStatus')) {
      data['disputeStatus'] = this['disputeStatus'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isReconciled')) {
      data['isReconciled'] = this['isReconciled'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isProcessedOutside')) {
      data['isProcessedOutside'] = this['isProcessedOutside'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isMerchantInitiated')) {
      data['isMerchantInitiated'] = this['isMerchantInitiated'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hadDiscrepancy')) {
      data['hadDiscrepancy'] = this['hadDiscrepancy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'orderId')) {
      data['orderId'] = this['orderId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'arn')) {
      data['arn'] = this['arn'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reportAmount')) {
      data['reportAmount'] = this['reportAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reportCurrency')) {
      data['reportCurrency'] = this['reportCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementTime')) {
      data['settlementTime'] = this['settlementTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'discrepancyTime')) {
      data['discrepancyTime'] = this['discrepancyTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'limits')) {
      data['limits'] = this['limits']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'depositRequestId')) {
      data['depositRequestId'] = this['depositRequestId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payoutRequestId')) {
      data['payoutRequestId'] = this['payoutRequestId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'embedded')) {
      data['_embedded'] = this['embedded']?.jsonSerialize() ?? null;
    }

    return data;
  }
}
