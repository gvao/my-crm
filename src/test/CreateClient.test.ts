import DomainEvents from "../core/Domain/DomainEvents";
import CreateClient from "../core/application/useCases/CreateClient";
import ClientRepositoryInMemory from "../core/infra/repositories/ClientRepositoryInMemory";
import { describe, expect, it } from "vitest";

describe('CreateClient', () => {
    const clientRepository = new ClientRepositoryInMemory()
    const createClient = new CreateClient(clientRepository)

    it('save client', async () => {
        expect(clientRepository.clients).toHaveLength(0)
        DomainEvents.cadaster({
            type: 'ClientCreatedEvent', 
            handler() {
                console.log('dspihd')
                expect(clientRepository.clients).toHaveLength(1)
                return Promise.resolve()
            }
        })
        await createClient.execute({ name: 'any_name', contact: 9876543567 })
        expect(clientRepository.clients).toHaveLength(1)
    })
})