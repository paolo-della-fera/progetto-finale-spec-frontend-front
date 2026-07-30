import { Link } from 'react-router-dom'

const WineCard = ({ wine }) => {
    // Determina il colore della categoria del vino in base al tipo
    let colore = ''

    // Imposta il colore della categoria del vino in base al tipo
    if (wine.category === 'Rosso') {
        colore = 'var(--rosso)'
    } else if (wine.category === 'Bianco') {
        colore = 'var(--bianco)'
    } else if (wine.category === 'Rosato') {
        colore = 'var(--rosato)'
    } else if (wine.category === 'Spumante') {
        colore = 'var(--spumante)'
    }

    return (
        <>

            {/* Card del vino */}
            <Link to={`/vino/${wine.id}`} className="text-decoration-none w-100">

                <div className="wine-card p-3 rounded-3 h-100">
                    <h4 className="font-display" style={{ color: 'var(--cantina)' }}>
                        {wine.title}
                    </h4>
                    <span
                        className="badge rounded-pill px-3 py-2"
                        style={{ backgroundColor: colore }}
                    >
                        {wine.category}
                    </span>
                </div>

            </Link>

        </>
    )
}

export default WineCard