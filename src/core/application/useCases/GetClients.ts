import IClient from "@/core/Domain/Client/interface";
import UseCase from "./interface";
import { GetAllRepository } from "../repository/interface";

export default class GetClients implements UseCase<void, IClient[]> {
    constructor(private clientRepository: GetAllRepository<IClient[]>){}
    async execute(input: void): Promise<IClient[]> {
        return this.clientRepository.getAll()
    }
    
}