import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <>

            {/* NaviBar */}
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--cantina)' }}>

                <div className="container">
                    <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
                        <img src={logo} alt="Vinoteca" style={{ height: '36px' }} />
                        <span className="font-display" style={{ color: 'var(--etichetta)' }}>
                            Vinoteca
                        </span>
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