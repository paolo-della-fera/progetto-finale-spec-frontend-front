import WineCard from "../components/WineCard"

import { useGlobalContext } from "../context/GlobalContext"

function WineList() {
    // Recupera l'array dei vini dal contesto globale
    const { wines } = useGlobalContext()

    return (
        <>

            {/* Titolo della pagina */}
            <div className="text-center mt-5 mb-5">
                <h1 className="font-display" style={{ color: 'var(--etichetta)', fontSize: '42px' }}>
                    Le porte della Vinoteca sono aperte
                </h1>
                <p className="font-mono" style={{ color: 'var(--ottone)', fontSize: '14px' }}>
                    40 etichette da scoprire, confrontare, custodire
                </p>
            </div>

            {/* Lista dei vini */}
            <div className="container mt-4">
                <div className="row g-3">
                    {/* Card per ogni vino */}
                    {wines.map(w => (
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex" key={w.id}>
                            <WineCard wine={w} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WineList