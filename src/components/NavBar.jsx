import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

            {/* Barra di navigazione */}
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--cantina)' }}>

                <div className="container">
                    <NavLink className="navbar-brand font-display" to="/" style={{ color: 'var(--etichetta)' }}>
                        Vinoteca
                    </NavLink>

                    <div className="d-flex gap-3">
                        <NavLink className="nav-link" to="/preferiti" style={{ color: 'var(--etichetta)' }}>
                            Preferiti
                        </NavLink>
                        <NavLink className="nav-link" to="/confronto" style={{ color: 'var(--etichetta)' }}>
                            Confronto
                        </NavLink>
                    </div>
                </div>

            </nav>

        </>
    )
}

export default Navbar