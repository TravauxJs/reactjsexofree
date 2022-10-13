import React from 'react';
import { Link } from 'react-router-dom';

class Aside extends React.Component {

	render() {
		return(
	        <aside className="menu-sidebar d-lg-block">
	            <div className="menu-sidebar__content js-scrollbar1">
	                <nav className="navbar-sidebar">
	                    <ul className="list-unstyled navbar__list">
	                        <li className="active has-sub">
	                            <Link className="js-arrow" to="/">
	                                <i className="fas fa-tachometer-alt"></i>
	                                Accueil
	                            </Link>
	                        </li>
	                        <li>
	                            <Link to="/list">
	                                <i className="fas fa-chart-bar"></i>
	                                Liste
	                            </Link>
	                        </li>
	                        <li>
	                            <Link to="/calcul">
	                                <i className="fas fa-chart-bar"></i>
	                                Calcul
	                            </Link>
	                        </li>
	                        <li className="has-sub">
	                            <Link className="js-arrow" to="/">
	                                <i className="fas fa-deskhrefp"></i>
	                                Déconnexion
	                            </Link>
	                        </li>
	                    </ul>
	                </nav>
	            </div>
	        </aside>
		)
	}

}

export default Aside