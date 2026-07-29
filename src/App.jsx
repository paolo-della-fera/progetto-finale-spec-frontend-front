import { BrowserRouter, Routes, Route } from "react-router-dom"

// Importa il provider del contesto globale per condividere lo stato dei vini tra i componenti
import { GlobalProvider } from "./context/GlobalContext"

import WineList from "./pages/WineList"
import WineDetail from "./pages/WineDetail"
import Compare from "./pages/Compare"
import Favorites from "./pages/Favorites"


function App() {

  return (
    <>

      {/* Avvolge l'applicazione con il provider del contesto globale */}
      <GlobalProvider>

        {/* Provider del contesto globale per condividere lo stato dei vini tra i componenti */}
        <BrowserRouter>

          <Routes>

            {/* Definisce le rotte dell'applicazione */}
            <Route path="/" element={<WineList />} />
            <Route path="/vino/:id" element={<WineDetail />} />
            <Route path="/confronto" element={<Compare />} />
            <Route path="/preferiti" element={<Favorites />} />

          </Routes>

        </BrowserRouter >

      </GlobalProvider>

    </>
  )
}

export default App
