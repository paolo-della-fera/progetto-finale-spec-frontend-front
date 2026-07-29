import { useEffect, useState } from "react";

// Inporta l'URL dell'API dal file .env
const API_URL = import.meta.env.VITE_API_URL

function useWines() {
    // Stato per memorizzare l'elenco dei vini
    const [wines, setWines] = useState([])

    // Funzione per recuperare l'elenco dei vini dal server
    const fetchWines = async () => {
        try {
            // Effettua una richiesta fetch all'API per ottenere l'elenco dei vini
            const response = await fetch(`${API_URL}/wines`)
            const data = await response.json()
            // Aggiorna lo stato dei vini con i dati ricevuti dal server
            setWines(data)
        } catch (error) {
            // Logga l'errore in caso di problemi nella richiesta fetch
            console.error(error)
        }
    }

    // Utilizza l'hook useEffect per chiamare la funzione fetchWines al montaggio del componente
    useEffect(() => {
        fetchWines()
    }, [])

    // Restituisce lo stato dei vini e la funzione per recuperarli
    return { wines, fetchWines }

}

export default useWines