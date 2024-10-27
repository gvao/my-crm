import { GetAllRepository, RemoveItemRepository, SaveRepository } from "@/core/application/repository/interface";
import IClient from "@/core/Domain/Client/interface";

export default class ClientRepositoryInMemory implements IClientRepository {
    clients: IClient[] = []
    async remove(id: string): Promise<void> {
        const index = this.clients.findIndex(client => client.id === id)
        this.clients.splice(index, 1)
    }
    async getAll(): Promise<IClient[]> {
        return this.clients
    }
    async save(client: IClient): Promise<void> {
        this.clients.push(client)
    }

}

type IClientRepository = SaveRepository<IClient> & GetAllRepository<IClient[]> & RemoveItemRepository<IClient>