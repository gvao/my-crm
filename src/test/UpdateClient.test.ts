import { beforeAll, describe, expect, it } from "vitest";
import Client from "../core/Domain/Client/index";
import UpdateClient from "../core/application/useCases/UpdateClient";
import ClientRepositoryInMemory from "../core/infra/repositories/ClientRepositoryInMemory";

describe('UpdateClient', () => {
    const clientRepository = new ClientRepositoryInMemory()
    const updateClient = new UpdateClient(clientRepository)
    let clientFakeId: string

    const inputFakeClient = { name: 'any_name', contact: 8599999999 }
    beforeAll(async () => {
        const client = Client.create(inputFakeClient)
        clientFakeId = client.id
        await clientRepository.save(client)
    })
    

    it('should update the client', async () => {
        const inputUpdated = {
            id: clientFakeId,
            name: 'any_name_updated',
            contact: 2222222222
        }
        await updateClient.execute(inputUpdated)

        const updatedClient = await clientRepository.getById(clientFakeId)
        expect(updatedClient?.name).toBe(inputUpdated.name)
        expect(updatedClient?.contact).toBe(inputUpdated.contact)
    })
})