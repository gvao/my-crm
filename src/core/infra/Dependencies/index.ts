import DependenciesRepository from "./DependenciesRepository"

import ClientRepositoryInMemory from "../repositories/ClientRepositoryInMemory"

import DeleteClient from "@/core/application/useCases/DeleteClient"
import CreateClient from "../../application/useCases/CreateClient"
import GetClients from "../../application/useCases/GetClients"
import UpdateClient from "@/core/application/useCases/UpdateClient"
import GetClientById from "@/core/application/useCases/GetClientById"
import Client from "@/core/Domain/Client"

const Dependencies = new DependenciesRepository()

const clientRepository = new ClientRepositoryInMemory()

const createClient = new CreateClient(clientRepository)
const getClients = new GetClients(clientRepository)
const deleteClient = new DeleteClient(clientRepository)
const updateClient = new UpdateClient(clientRepository)
const getClientById = new GetClientById(clientRepository);

(async () => {
    const clientsQuantity = 4

    for(let i = 0; i < clientsQuantity; i++) {
        const client = Client.create({ name: `client ${i}`, contact: 1234567890 + i })
        clientRepository.save(client)
    }
})()

Dependencies.cadasterDependency('createClient', createClient)
Dependencies.cadasterDependency('getClients', getClients)
Dependencies.cadasterDependency('deleteClient', deleteClient)
Dependencies.cadasterDependency('updateClient', updateClient)
Dependencies.cadasterDependency('getClientById', getClientById)

export default Dependencies