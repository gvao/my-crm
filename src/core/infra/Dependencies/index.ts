import DependenciesRepository from "./DependenciesRepository"

import ClientRepositoryInMemory from "../repositories/ClientRepositoryInMemory"

import DeleteClient from "@/core/application/useCases/DeleteClient"
import CreateClient from "../../application/useCases/CreateClient"
import GetClients from "../../application/useCases/GetClients"
import UpdateClient from "@/core/application/useCases/UpdateClient"
import GetClientById from "@/core/application/useCases/GetClientById"

const Dependencies = new DependenciesRepository()

const clientRepository = new ClientRepositoryInMemory()

const createClient = new CreateClient(clientRepository)
const getClients = new GetClients(clientRepository)
const deleteClient = new DeleteClient(clientRepository)
const updateClient = new UpdateClient(clientRepository)
const getClientById = new GetClientById(clientRepository)

Dependencies.cadasterDependency('createClient', createClient)
Dependencies.cadasterDependency('getClients', getClients)
Dependencies.cadasterDependency('deleteClient', deleteClient)
Dependencies.cadasterDependency('updateClient', updateClient)
Dependencies.cadasterDependency('getClientById', getClientById)

export default Dependencies