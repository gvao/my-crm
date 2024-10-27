import IClient from "@/core/Domain/Client/interface";
import UseCase from "./interface";
import { RemoveItemRepository } from "../repository/interface";

export default class DeleteClient implements UseCase<string, void> {
    constructor(private clientRepository: RemoveItemRepository<IClient>){}
    async execute(clientId: string): Promise<void> {
        await this.clientRepository.remove(clientId)
    }

}

