import RedemptionCancelTimelineAction from '../models/redemption-cancel-timeline-action';
import ResendEmailTimelineAction from '../models/resend-email-timeline-action';
import RulesetRestoreTimelineAction from '../models/ruleset-restore-timeline-action';
import ShowEddSearchLogsTimelineAction from '../models/show-edd-search-logs-timeline-action';

export const TimelineAction = Symbol('TimelineAction');

export interface TimelineAction {
  [TimelineAction]: true;

  get action(): string;
  getAction(): string;
  jsonSerialize(): Record<string, any>;
}
