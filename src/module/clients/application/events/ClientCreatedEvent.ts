import { DomainEvent } from "@/module/shared/DomainEvents";

export default class ClientCreatedEvent implements DomainEvent {
    type: string = 'ClientCreatedEvent'
    constructor(readonly clientId: string) {}
}