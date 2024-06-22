'use client'

import { ReactNode, createContext, useContext } from "react";
import IClient from "../Domain/Client/interface";

const INITIAL_VALUES: IClientContext = {
    clients: [],
    keys: []
}
const ClientContext = createContext<IClientContext>(INITIAL_VALUES)

export const useClientContext = () => useContext(ClientContext)

export default function ClientContextProvider({ children }: { children: ReactNode }) {
    const clients: IClient[] = [
        { id: '0', name: 'Yuri', contact: 21999999999 },
        { id: '1', name: 'Alice', contact: 21999999999 },
        { id: '2', name: 'Erica', contact: 21999999999 },
    ]
    const keys = Object.keys(clients[0]) as Array<keyof IClient>

    return <ClientContext.Provider value={{ clients, keys }}>
        {children}
    </ClientContext.Provider>
}

interface IClientContext {
    clients: IClient[]
    keys: (keyof IClient)[]
}