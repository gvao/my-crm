import ClientRepositoryInMemory from '../core/infra/repositories/ClientRepositoryInMemory'
import GetClients from '../core/application/useCases/GetClients'
import { beforeEach, describe, expect, it } from 'vitest'
import Client from '../core/Domain/Client'

describe('GetClients', () => {
    const clientRepository = new ClientRepositoryInMemory()
    const getClients = new GetClients(clientRepository)

    beforeEach(async () => {
        const fakeCLient = Client.create({ name: 'any_name', contact: 98765434567 })
        await clientRepository.save(fakeCLient)
    })

    it('get all clients', async () => {
        const clients = await getClients.execute()
        expect(clients).toHaveLength(1)
    })
    
    it('first client is IClient', async () => {
        const [firstClient] = await getClients.execute()
        expect(firstClient).toBeInstanceOf(Client)
    })

    
})
