import IClient from "../../Domain/Client/interface";
import Client from "../../Domain/Client";
import { getItemById, SaveRepository } from "../repository/interface";
import UseCase from "./interface";

export default class UpdateClient implements UseCase<Input, Output> {
    constructor(private clientRepository: ClientRepository) { }
    async execute({ id, contact, name }: Input): Promise<void> {
        const currentClient = await this.clientRepository.getById(id)
        if(!currentClient) throw new Error(`Client ${id} does not exist`)
        let input = { id, name: currentClient.name, contact: currentClient.contact }
        if(name) input = { ...input, name }
        if(contact) input = { ...input, contact }
        const newClient = new Client(input)
        await this.clientRepository.save(newClient)
    }
}

type Input = Pick<IClient, 'id'> & Partial<IClient>
type Output = void

type ClientRepository = SaveRepository<IClient> & getItemById<IClient>