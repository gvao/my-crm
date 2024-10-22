import DomainEvents from "../../Domain/DomainEvents";
import { SaveRepository } from "../repository/interface";
import UseCase from "./interface";
import ClientCreatedEvent from "../events/ClientCreatedEvent";
import IClient from "../../Domain/Client";
import Client from "../../Domain/Client";

export default class CreateClient implements UseCase<CreateClientInput, void> {
    constructor(readonly clientRepository: ClientRepository) { }
    async execute({ name, contact }: CreateClientInput): Promise<void> {
        const client: IClient = Client.create({ name, contact })
        this.clientRepository.save(client)
        const clientCreatedEvent = new ClientCreatedEvent(client.id)
        DomainEvents.dispatch(clientCreatedEvent)
    }
}

interface CreateClientInput {
    name: string;
    contact: number
}

type ClientRepository = SaveRepository<IClient>