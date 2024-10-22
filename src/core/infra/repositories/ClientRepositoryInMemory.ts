import { GetAllRepository, SaveRepository } from "@/core/application/repository/interface";
import IClient from "@/core/Domain/Client/interface";

export default class ClientRepositoryInMemory implements IClientRepository {
    clients: IClient[] = []
    async getAll(): Promise<IClient[]> {
        return this.clients
    }
    async save(client: IClient): Promise<void> {
        this.clients.push(client)
    }

}

type IClientRepository = SaveRepository<IClient> & GetAllRepository<IClient[]>