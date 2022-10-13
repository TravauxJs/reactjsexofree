import {React, useContext} from 'react';
import { ResulatContext } from './../../Page/Calcul';

function Affichage() {

	const Resulat = useContext(ResulatContext);

	return (
		<div className="row">
			<div className="col-md-3">
			</div>
			<div className="col-md-6">
				<p> {Resulat.affichage} </p>
			</div>
			<div className="col-md-3">
			</div>
		</div>
	)


}

export default Affichage 