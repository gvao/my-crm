import DependenciesRepository from "./DependenciesRepository"

import ClientRepositoryInMemory from "../repositories/ClientRepositoryInMemory"

import DeleteClient from "@/core/application/useCases/DeleteClient"
import CreateClient from "../../application/useCases/CreateClient"
import GetClients from "../../application/useCases/GetClients"

const Dependencies = new DependenciesRepository()

const clientRepository = new ClientRepositoryInMemory()

const createClient = new CreateClient(clientRepository)
const getClients = new GetClients(clientRepository)
const deleteClient = new DeleteClient(clientRepository)

Dependencies.cadasterDependency('createClient', createClient)
Dependencies.cadasterDependency('getClients', getClients)
Dependencies.cadasterDependency('deleteClient', deleteClient)

export default Dependencies