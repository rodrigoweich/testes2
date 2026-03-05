import { DomainEvents } from "../events";
import type { DomainEvent } from "../events/domain-event";
import { AbstractDomain } from "./abstract-domain";
import type { AbstractDomainID } from "./abstract-domain-id";

export abstract class AggregateRoot<
  Props,
  ID extends AbstractDomainID,
> extends AbstractDomain<Props, ID> {
  private _domainEvents: DomainEvent[] = [];

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
    DomainEvents.markAggregateForDispatch(this);
  }

  public clearEvents() {
    this._domainEvents = [];
  }
}
