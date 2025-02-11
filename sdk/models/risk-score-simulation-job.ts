import RiskScoreRules from '../models/risk-score-rules';
import RiskScoreSimulationJobPeriod from '../models/risk-score-simulation-job-period';
import RiskScoreSimulationJobEmbedded from '../models/risk-score-simulation-job-embedded';
import RiskScoreSimulationJobSummary from '../models/risk-score-simulation-job-summary';
import ResourceLink from '../models/resource-link';

export default class RiskScoreSimulationJob {
  STATUS_PENDING = 'pending';

  STATUS_PROCESSING = 'processing';

  STATUS_COMPLETED = 'completed';

  STATUS_FAILED = 'failed';

  STATUS_STOPPED = 'stopped';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'summary')) {
      this.setSummary(data['summary']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rules')) {
      this.setRules(data['rules']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'period')) {
      this.setPeriod(data['period']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'startedTime')) {
      this.setStartedTime(data['startedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'finishedTime')) {
      this.setFinishedTime(data['finishedTime']);
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

  get summary(): Array<any> | null {
    return this._fields['summary'] ?? null;
  }
  
  getSummary(): Array<any> | null {
      return this._fields['summary'] ?? null;
  }

  private setSummary(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof RiskScoreSimulationJobSummary ? value : new RiskScoreSimulationJobSummary(value),
    ) : null;

    this._fields['summary'] = value;

    return this;
  }

  get rules(): RiskScoreRules {
    return this._fields['rules'];
  }
  
  getRules(): RiskScoreRules {
      return this._fields['rules'];
  }

  setRules(value: RiskScoreRules | any) {
    if (!(value instanceof RiskScoreRules)) {
      value = new RiskScoreRules(value);
    }

    this._fields['rules'] = value;

    return this;
  }

  get period(): RiskScoreSimulationJobPeriod {
    return this._fields['period'];
  }
  
  getPeriod(): RiskScoreSimulationJobPeriod {
      return this._fields['period'];
  }

  setPeriod(value: RiskScoreSimulationJobPeriod | any) {
    if (!(value instanceof RiskScoreSimulationJobPeriod)) {
      value = new RiskScoreSimulationJobPeriod(value);
    }

    this._fields['period'] = value;

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

  get startedTime(): Date | null {
    return this._fields['startedTime'] ?? null;
  }
  
  getStartedTime(): Date | null {
      return this._fields['startedTime'] ?? null;
  }

  private setStartedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['startedTime'] = value;

    return this;
  }

  get finishedTime(): Date | null {
    return this._fields['finishedTime'] ?? null;
  }
  
  getFinishedTime(): Date | null {
      return this._fields['finishedTime'] ?? null;
  }

  private setFinishedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['finishedTime'] = value;

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

  get embedded(): RiskScoreSimulationJobEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): RiskScoreSimulationJobEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | RiskScoreSimulationJobEmbedded | any) {
    if (value !== null && !(value instanceof RiskScoreSimulationJobEmbedded)) {
      value = new RiskScoreSimulationJobEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'summary')) {
      data['summary'] = this['summary'] !== null
          ? this._fields['summary'].map((riskScoreSimulationJobSummary: RiskScoreSimulationJobSummary) => riskScoreSimulationJobSummary.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rules')) {
      data['rules'] = this['rules'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'period')) {
      data['period'] = this['period'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'startedTime')) {
      data['startedTime'] = this['startedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'finishedTime')) {
      data['finishedTime'] = this['finishedTime']?.toISOString() ?? null;
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
