import RedemptionCancelTimelineAction from '../models/redemption-cancel-timeline-action';
import ResendEmailTimelineAction from '../models/resend-email-timeline-action';
import RulesetRestoreTimelineAction from '../models/ruleset-restore-timeline-action';
import ShowEddSearchLogsTimelineAction from '../models/show-edd-search-logs-timeline-action';
import { TimelineAction } from '../models/timeline-action';

export default class TimelineActionFactory {
  static from(data: any = {}): TimelineAction {
    switch(data.action) {
      case 'redemption-cancel': return new RedemptionCancelTimelineAction(data);
      case 'resend-email': return new ResendEmailTimelineAction(data);
      case 'ruleset-restore': return new RulesetRestoreTimelineAction(data);
      case 'show-edd-search-logs': return new ShowEddSearchLogsTimelineAction(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}
