import IClient from "@/core/Domain/Client/interface";
import UseCase from "./interface";
import { getItemById } from "../repository/interface";

export default class GetClientById implements UseCase<string, IClient | undefined> {
    constructor(private clientRepository: getItemById<IClient>) { }
    async execute(clientId: string): Promise<IClient | undefined> {
        return await this.clientRepository.getById(clientId)
    }

}