import { createContext, useContext } from "react";

import useWines from "../hooks/useWines";

// Crea un contesto globale per condividere lo stato dei vini tra i componenti
export const GlobalContext = createContext()

// Provider del contesto globale che avvolge l'applicazione e fornisce lo stato dei vini ai componenti figli
export function GlobalProvider({ children }) {

    // Utilizza l'hook personalizzato useWines per ottenere lo stato dei vini e la funzione per recuperarli
    const wineData = useWines()

    return (
        <>

            {/* Avvolge l'applicazione con il provider del contesto globale */}
            <GlobalContext.Provider value={wineData}>
                {children}
            </GlobalContext.Provider>

        </>
    )
}

// Hook personalizzato per accedere al contesto globale dei vini
export function useGlobalContext() {
    return useContext(GlobalContext)
}