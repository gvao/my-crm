export default class DomainEvents {
    static events: Record<string, DomainHandle[]> = {}

    static dispatch(event: DomainEvent) {
        if(!(event.type in DomainEvents.events)) return
        for (const handler of DomainEvents.events[event.type]) {
            if (!handler) continue
            handler.handler(event)
        }
    }

    static getAllEventsName() {
        return Object.keys(DomainEvents.events)
    }

    static cadaster(handler: DomainHandle) {
        if (!DomainEvents.events[handler.type]) DomainEvents.events[handler.type] = []
        DomainEvents.events[handler.type].push(handler)
    }

    static clearAll = () => { DomainEvents.events = {} }
}

export interface DomainHandle {
    type: string
    handler(event: DomainEvent): Promise<void>
}

export interface DomainEvent {
    type: string,
}