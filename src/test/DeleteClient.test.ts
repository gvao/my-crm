import { beforeEach, describe, expect, it } from "vitest";

import DeleteClient from "../core/application/useCases/DeleteClient";
import Client from "../core/Domain/Client";
import ClientRepositoryInMemory from "../core/infra/repositories/ClientRepositoryInMemory";

describe('DeleteClient', () => {
    const clientRepository = new ClientRepositoryInMemory()
    const deleteClient = new DeleteClient(clientRepository)
    const clientId = ''

    beforeEach(async () => {
        const client = Client.create({ name: 'any_name', contact: 978654345678 })
        await clientRepository.save(client)
        expect(await clientRepository.getAll()).toHaveLength(1)
    })

    it('delete client', async () => {
        await deleteClient.execute(clientId)
        expect(await clientRepository.getAll()).toHaveLength(0)
    })
    
})