import type { AbstractDomainID } from '../domain';

export interface DomainEvent {
  occurredAt: Date;
  getAggregateId(): AbstractDomainID;
}
