'use client'

import { ReactNode, createContext, useContext, useState } from "react";
import IClient from "../../../core/Domain/Client/interface";
import Client from "@/core/Domain/Client";

const INITIAL_VALUES = {
    clients: [
        Client.create({ name: 'Yuri', contact: 21999999999 }),
        Client.create({ name: 'Alice', contact: 21999999999 }),
        Client.create({ name: 'Erica', contact: 21999999999 }),
    ],
}
const ClientContext = createContext<IClientContext>(INITIAL_VALUES as IClientContext)

export const useClientContext = () => useContext(ClientContext)

export default function ClientContextProvider({ children }: { children: ReactNode }) {
    const [clients, setClients] = useState(INITIAL_VALUES.clients)

    async function createClient({ name, contact }: CreateClientInput) {
        const newClient = Client.create({ name, contact: +contact })
        setClients(state => ([...state, newClient]))
    }

    return <ClientContext.Provider value={{ clients, createClient }}>
        {children}
    </ClientContext.Provider>
}

interface IClientContext {
    clients: IClient[]
    createClient(input: CreateClientInput): Promise<void>
}

interface CreateClientInput { name: string, contact: string }