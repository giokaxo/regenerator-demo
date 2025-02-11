
export default class Directa24Settings {
  BANKS_AA = 'AA';

  BANKS_AL = 'AL';

  BANKS_AZ = 'AZ';

  BANKS_B = 'B';

  BANKS_BAB = 'BAB';

  BANKS_BB = 'BB';

  BANKS_BC = 'BC';

  BANKS_BE = 'BE';

  BANKS_BL = 'BL';

  BANKS_BM = 'BM';

  BANKS_BN = 'BN';

  BANKS_BP = 'BP';

  BANKS_BQ = 'BQ';

  BANKS_BU = 'BU';

  BANKS_BV = 'BV';

  BANKS_BW = 'BW';

  BANKS_BX = 'BX';

  BANKS_BZ = 'BZ';

  BANKS_CA = 'CA';

  BANKS_CE = 'CE';

  BANKS_CI = 'CI';

  BANKS_CU = 'CU';

  BANKS_EF = 'EF';

  BANKS_EN = 'EN';

  BANKS_EY = 'EY';

  BANKS_FA = 'FA';

  BANKS_FB = 'FB';

  BANKS_FC = 'FC';

  BANKS_GC = 'GC';

  BANKS_GG = 'GG';

  BANKS_HC = 'HC';

  BANKS_I = 'I';

  BANKS_IA = 'IA';

  BANKS_IB = 'IB';

  BANKS_JM = 'JM';

  BANKS_LC = 'LC';

  BANKS_LE = 'LE';

  BANKS_LL = 'LL';

  BANKS_MC = 'MC';

  BANKS_ME = 'ME';

  BANKS_MD = 'MD';

  BANKS_MP = 'MP';

  BANKS_MT = 'MT';

  BANKS_NB = 'NB';

  BANKS_OM = 'OM';

  BANKS_OX = 'OX';

  BANKS_PC = 'PC';

  BANKS_PH = 'PH';

  BANKS_PL = 'PL';

  BANKS_SB = 'SB';

  BANKS_SC = 'SC';

  BANKS_SE = 'SE';

  BANKS_SF = 'SF';

  BANKS_SM = 'SM';

  BANKS_SS = 'SS';

  BANKS_ST = 'ST';

  BANKS_SU = 'SU';

  BANKS_TC = 'TC';

  BANKS_TK = 'TK';

  BANKS_TG = 'TG';

  BANKS_TR = 'TR';

  BANKS_TY = 'TY';

  BANKS_RY = 'RY';

  BANKS_UB = 'UB';

  BANKS_UI = 'UI';

  BANKS_UL = 'UL';

  BANKS_US = 'US';

  BANKS_VD = 'VD';

  BANKS_VI = 'VI';

  BANKS_WA = 'WA';

  BANKS_WP = 'WP';

  BANKS_WU = 'WU';

  BANKS_XA = 'XA';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'banks')) {
      this.setBanks(data['banks']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'skipStep')) {
      this.setSkipStep(data['skipStep']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useV3Api')) {
      this.setUseV3Api(data['useV3Api']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'storeIdNumber')) {
      this.setStoreIdNumber(data['storeIdNumber']);
    }
  }


  get banks(): Array<any> | null {
    return this._fields['banks'] ?? null;
  }
  
  getBanks(): Array<any> | null {
      return this._fields['banks'] ?? null;
  }

  setBanks(value: null | Array<any>) {
    this._fields['banks'] = value;

    return this;
  }

  get skipStep(): boolean | null {
    return this._fields['skipStep'] ?? null;
  }
  
  getSkipStep(): boolean | null {
      return this._fields['skipStep'] ?? null;
  }

  setSkipStep(value: null | boolean) {
    this._fields['skipStep'] = value;

    return this;
  }

  get useV3Api(): boolean | null {
    return this._fields['useV3Api'] ?? null;
  }
  
  getUseV3Api(): boolean | null {
      return this._fields['useV3Api'] ?? null;
  }

  setUseV3Api(value: null | boolean) {
    this._fields['useV3Api'] = value;

    return this;
  }

  get storeIdNumber(): boolean | null {
    return this._fields['storeIdNumber'] ?? null;
  }
  
  getStoreIdNumber(): boolean | null {
      return this._fields['storeIdNumber'] ?? null;
  }

  setStoreIdNumber(value: null | boolean) {
    this._fields['storeIdNumber'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'banks')) {
      data['banks'] = this['banks'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'skipStep')) {
      data['skipStep'] = this['skipStep'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useV3Api')) {
      data['useV3Api'] = this['useV3Api'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storeIdNumber')) {
      data['storeIdNumber'] = this['storeIdNumber'];
    }

    return data;
  }
}
