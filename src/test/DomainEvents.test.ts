import { Domain } from "domain";
import DomainEvents, { DomainEvent, DomainHandle } from "../core/Domain/DomainEvents";
import { afterAll, describe, expect, it } from "vitest";

describe('DomainEvents', () => {


    it('dispatch event', () => {
        // Arrange
        const event = { type: 'any_type' }
        const handler: DomainHandle = {
            type: 'any_type',
            handler: async () => {
            }
        }
        DomainEvents.events
        DomainEvents.cadaster(handler)
        const eventName = DomainEvents.getAllEventsName()
        expect(eventName).toHaveLength(1)
    })

    it('dispatch event twice', () => {
        const event: DomainEvent = {
            type: 'any_type'
        }
        
    })

    afterAll(() => {
        DomainEvents.clearAll()
    })
})