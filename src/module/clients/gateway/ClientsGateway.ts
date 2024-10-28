import IClient from "@/core/Domain/Client/interface"
import Fetcher from "@/utils/Fetcher"

export default function ClientsGateway(): Gateway {
    const fetcher = new Fetcher('http://localhost:3000/api')

    async function getClientById(clientId: string) {
        const { client } = await fetcher.request(`/clients/${clientId}`)
        return client
    }

    async function createClient({ name, contact }: CreateClientInput) {
        fetcher.request('/clients', 'POST', { name, contact })
    }

    async function getClients(): Promise<IClient[]> {
        const { clients } = await fetcher.request('/clients')
        return clients || []
    }

    async function deleteClient(clientId: string) {
        const { ...props } = await fetcher.request(`/clients/${clientId}`, 'DELETE')
        console.log(`delete`, props);

        return true
    }

    return {
        getClients,
        createClient,
        getClientById,
        deleteClient,
    }
}

interface CreateClientInput { name: string, contact: string }

interface Gateway {
    getClients: () => Promise<IClient[]>;
    createClient: ({ name, contact }: CreateClientInput) => Promise<void>;
    getClientById: (id: string) => Promise<IClient>;
    deleteClient: (id: string) => Promise<boolean>;
}