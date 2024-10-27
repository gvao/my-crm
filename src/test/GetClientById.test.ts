import { beforeAll, describe, expect, it } from "vitest";
import GetClientById from "../core/application/useCases/GetClientById";
import ClientRepositoryInMemory from "../core/infra/repositories/ClientRepositoryInMemory";
import Client from "../core/Domain/Client";

describe('GetClientById', () => {
    let _clientId: string
    const clientRepository = new ClientRepositoryInMemory()
    const getClientById = new GetClientById(clientRepository)

    beforeAll(async () => {
        const clientFake = Client.create({ name: 'any_name', contact: 123456789 })
        _clientId = clientFake.id
        await clientRepository.save(clientFake)
    })

    it('should return the client by id', async () => {
        const client = await getClientById.execute(_clientId)
        if (!client) throw new Error(`client not found: ${_clientId}`)
        expect(client.id).toBe(_clientId)

    })
})