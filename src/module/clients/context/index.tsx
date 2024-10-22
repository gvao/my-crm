'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import IClient from "../../../core/Domain/Client/interface";

const INITIAL_VALUES: Pick<IClientContext, 'clients'> = {
    clients: [],
}
const ClientContext = createContext<IClientContext>(INITIAL_VALUES as IClientContext)

export const useClientContext = () => useContext(ClientContext)

export default function ClientContextProvider({ children }: { children: ReactNode }) {
    const [clients, setClients] = useState<IClient[]>(INITIAL_VALUES.clients)

    useEffect(() => {
        updateClients()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function updateClients() {
        const data = await getClients()
        setClients(data)
    }

    async function createClient({ name, contact }: CreateClientInput) {
        fetch('/api/clients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, contact }),
        })
        updateClients()
    }

    async function getClients(): Promise<IClient[]> {
        const response = await fetch('/api/clients')
        return await response.json() || []
    }

    return <ClientContext.Provider value={{ clients, createClient, getClients }}>
        {children}
    </ClientContext.Provider>
}

interface IClientContext {
    clients: IClient[]
    createClient(input: CreateClientInput): Promise<void>
    getClients(): Promise<IClient[]>
}

interface CreateClientInput { name: string, contact: string }