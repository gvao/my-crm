import { GetAllRepository, RemoveItemRepository, SaveRepository, getItemById } from "@/core/application/repository/interface";
import IClient from "@/core/Domain/Client/interface";

export default class ClientRepositoryInMemory implements IClientRepository {
    clients: IClient[] = []

    async getById(id: string): Promise<IClient | undefined> {
        const clientFound = this.clients.find(client => client.id === id);
        return clientFound
    }
    async remove(id: string): Promise<void> {
        const index = this.clients.findIndex(client => client.id === id)
        this.clients.splice(index, 1)
    }
    async getAll(): Promise<IClient[]> {
        return this.clients
    }
    async save(client: IClient): Promise<void> {
        const index = this.clients.findIndex(clientRepository => clientRepository.id === client.id)
        if (index < 0) await this.addClient(client)
        this.clients.splice(index, 1, client)
    }

    private async addClient(client: IClient): Promise<void> {
        this.clients.push(client)
    }
}

type IClientRepository = {}
    & SaveRepository<IClient>
    & GetAllRepository<IClient[]>
    & RemoveItemRepository<IClient>
    & getItemById<IClient>