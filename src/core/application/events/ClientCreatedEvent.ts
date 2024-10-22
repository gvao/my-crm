import { DomainEvent } from "@/core/Domain/DomainEvents";

export default class ClientCreatedEvent implements DomainEvent {
    type: string = 'ClientCreatedEvent'
    constructor(readonly clientId: string) {}
}