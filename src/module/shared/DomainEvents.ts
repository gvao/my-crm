export default class DomainEvents {
    private static events: Record<string, DomainHandle[]> = {}

    static dispatch(event: DomainEvent) {
        DomainEvents.events[event.type]
            .forEach(domainHandle => domainHandle.handler(event))
    }
}

interface DomainHandle {
    handler(event: DomainEvent): Promise<void>
}

export interface DomainEvent {
    type: string,
}