'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import IClient from "../../../core/Domain/Client/interface";
import ClientsGateway from "../gateway/ClientsGateway";

const INITIAL_VALUES: Pick<IClientContext, 'clients'> = {
    clients: [],
}
const ClientContext = createContext<IClientContext>(INITIAL_VALUES as IClientContext)

export const useClientContext = () => useContext(ClientContext)

export default function ClientContextProvider({ children }: { children: ReactNode }) {
    const [clients, setClients] = useState<IClient[]>(INITIAL_VALUES.clients)

    const clientsGateway = ClientsGateway()

    useEffect(() => {
        updateClients()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function createClient({ name, contact }: CreateClientInput) {
        await clientsGateway.createClient({ name, contact })
        updateClients()
    }

    async function updateClients() {
        const data = await clientsGateway.getClients()
        setClients(data)
    }
    
    return <ClientContext.Provider value={{ clients, createClient }}>
        {children}
    </ClientContext.Provider>
}

interface IClientContext {
    clients: IClient[]
    createClient(input: CreateClientInput): Promise<void>
    // getClients(): Promise<IClient[]>
}

interface CreateClientInput { name: string, contact: string }