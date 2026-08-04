import { createContext, useContext } from "react";

import useWines from "../hooks/useWines";
import useFavorites from "../hooks/useFavorites"

// Crea un contesto globale per condividere lo stato dei vini tra i componenti
export const GlobalContext = createContext()

// Provider del contesto globale che avvolge l'applicazione e fornisce lo stato dei vini ai componenti figli
export function GlobalProvider({ children }) {

    // Utilizza i custom hook per ottenere lo stato dei vini e dei preferiti
    const wineData = useWines()
    const favoritesData = useFavorites()

    return (
        <>

            {/* Avvolge l'applicazione con il provider del contesto globale */}
            <GlobalContext.Provider value={{ ...wineData, ...favoritesData }}>
                {children}
            </GlobalContext.Provider>

        </>
    )
}

// Hook personalizzato per accedere al contesto globale dei vini
export function useGlobalContext() {
    return useContext(GlobalContext)
}