
export default class STPMexicoCredentials {
  BANK_ID_37006 = '37006';

  BANK_ID_37009 = '37009';

  BANK_ID_37019 = '37019';

  BANK_ID_37135 = '37135';

  BANK_ID_37166 = '37166';

  BANK_ID_37168 = '37168';

  BANK_ID_40002 = '40002';

  BANK_ID_40012 = '40012';

  BANK_ID_40014 = '40014';

  BANK_ID_40021 = '40021';

  BANK_ID_40030 = '40030';

  BANK_ID_40036 = '40036';

  BANK_ID_40037 = '40037';

  BANK_ID_40042 = '40042';

  BANK_ID_40044 = '40044';

  BANK_ID_40058 = '40058';

  BANK_ID_40059 = '40059';

  BANK_ID_40060 = '40060';

  BANK_ID_40062 = '40062';

  BANK_ID_40072 = '40072';

  BANK_ID_40102 = '40102';

  BANK_ID_40103 = '40103';

  BANK_ID_40106 = '40106';

  BANK_ID_40108 = '40108';

  BANK_ID_40110 = '40110';

  BANK_ID_40112 = '40112';

  BANK_ID_40113 = '40113';

  BANK_ID_40124 = '40124';

  BANK_ID_40126 = '40126';

  BANK_ID_40127 = '40127';

  BANK_ID_40128 = '40128';

  BANK_ID_40129 = '40129';

  BANK_ID_40130 = '40130';

  BANK_ID_40131 = '40131';

  BANK_ID_40132 = '40132';

  BANK_ID_40133 = '40133';

  BANK_ID_40136 = '40136';

  BANK_ID_40137 = '40137';

  BANK_ID_40138 = '40138';

  BANK_ID_40140 = '40140';

  BANK_ID_40141 = '40141';

  BANK_ID_40143 = '40143';

  BANK_ID_40145 = '40145';

  BANK_ID_40147 = '40147';

  BANK_ID_40148 = '40148';

  BANK_ID_40150 = '40150';

  BANK_ID_40151 = '40151';

  BANK_ID_40152 = '40152';

  BANK_ID_40154 = '40154';

  BANK_ID_40155 = '40155';

  BANK_ID_40156 = '40156';

  BANK_ID_40158 = '40158';

  BANK_ID_90600 = '90600';

  BANK_ID_90601 = '90601';

  BANK_ID_90602 = '90602';

  BANK_ID_90605 = '90605';

  BANK_ID_90606 = '90606';

  BANK_ID_90608 = '90608';

  BANK_ID_90613 = '90613';

  BANK_ID_90614 = '90614';

  BANK_ID_90616 = '90616';

  BANK_ID_90617 = '90617';

  BANK_ID_90620 = '90620';

  BANK_ID_90621 = '90621';

  BANK_ID_90623 = '90623';

  BANK_ID_90626 = '90626';

  BANK_ID_90627 = '90627';

  BANK_ID_90628 = '90628';

  BANK_ID_90630 = '90630';

  BANK_ID_90631 = '90631';

  BANK_ID_90634 = '90634';

  BANK_ID_90636 = '90636';

  BANK_ID_90637 = '90637';

  BANK_ID_90638 = '90638';

  BANK_ID_90640 = '90640';

  BANK_ID_90642 = '90642';

  BANK_ID_90646 = '90646';

  BANK_ID_90648 = '90648';

  BANK_ID_90649 = '90649';

  BANK_ID_90652 = '90652';

  BANK_ID_90653 = '90653';

  BANK_ID_90655 = '90655';

  BANK_ID_90656 = '90656';

  BANK_ID_90659 = '90659';

  BANK_ID_90670 = '90670';

  BANK_ID_90671 = '90671';

  BANK_ID_90674 = '90674';

  BANK_ID_90677 = '90677';

  BANK_ID_90678 = '90678';

  BANK_ID_90679 = '90679';

  BANK_ID_90680 = '90680';

  BANK_ID_90681 = '90681';

  BANK_ID_90683 = '90683';

  BANK_ID_90684 = '90684';

  BANK_ID_90685 = '90685';

  BANK_ID_90686 = '90686';

  BANK_ID_90687 = '90687';

  BANK_ID_90689 = '90689';

  BANK_ID_90901 = '90901';

  BANK_ID_90902 = '90902';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'companyName')) {
      this.setCompanyName(data['companyName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'beneficiaryName')) {
      this.setBeneficiaryName(data['beneficiaryName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bankId')) {
      this.setBankId(data['bankId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bankAccountNumber')) {
      this.setBankAccountNumber(data['bankAccountNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'privateKey')) {
      this.setPrivateKey(data['privateKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'keyPassphrase')) {
      this.setKeyPassphrase(data['keyPassphrase']);
    }
  }


  get companyName(): string {
    return this._fields['companyName'];
  }
  
  getCompanyName(): string {
      return this._fields['companyName'];
  }

  setCompanyName(value: string) {
    this._fields['companyName'] = value;

    return this;
  }

  get beneficiaryName(): string {
    return this._fields['beneficiaryName'];
  }
  
  getBeneficiaryName(): string {
      return this._fields['beneficiaryName'];
  }

  setBeneficiaryName(value: string) {
    this._fields['beneficiaryName'] = value;

    return this;
  }

  get bankId(): number {
    return this._fields['bankId'];
  }
  
  getBankId(): number {
      return this._fields['bankId'];
  }

  setBankId(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['bankId'] = value;

    return this;
  }

  get bankAccountNumber(): string {
    return this._fields['bankAccountNumber'];
  }
  
  getBankAccountNumber(): string {
      return this._fields['bankAccountNumber'];
  }

  setBankAccountNumber(value: string) {
    this._fields['bankAccountNumber'] = value;

    return this;
  }

  get privateKey(): string {
    return this._fields['privateKey'];
  }
  
  getPrivateKey(): string {
      return this._fields['privateKey'];
  }

  setPrivateKey(value: string) {
    this._fields['privateKey'] = value;

    return this;
  }

  get keyPassphrase(): string {
    return this._fields['keyPassphrase'];
  }
  
  getKeyPassphrase(): string {
      return this._fields['keyPassphrase'];
  }

  setKeyPassphrase(value: string) {
    this._fields['keyPassphrase'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'companyName')) {
      data['companyName'] = this['companyName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'beneficiaryName')) {
      data['beneficiaryName'] = this['beneficiaryName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bankId')) {
      data['bankId'] = this['bankId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bankAccountNumber')) {
      data['bankAccountNumber'] = this['bankAccountNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'privateKey')) {
      data['privateKey'] = this['privateKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'keyPassphrase')) {
      data['keyPassphrase'] = this['keyPassphrase'];
    }

    return data;
  }
}
