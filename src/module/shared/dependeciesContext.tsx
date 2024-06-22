import { createContext, useContext } from "react";

const DependenciesContext = createContext({})
export const useDependenciesContext = () => useContext(DependenciesContext)

export default function DependenciesContextProvider() {
    return <DependenciesContext.Provider value={{  }}>

    </DependenciesContext.Provider>
}