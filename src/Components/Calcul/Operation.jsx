import { useContext } from 'react';
import { ResulatContext } from './../../Page/Calcul';

function Operation(props) {

	const Resulat = useContext(ResulatContext);
	let opText = props.children;
	// let value = opText + props.value;
	const handleClick = function() {
		// Resulat.modifierAffichage(value);
		Resulat.modifierEcran(opText);
	}

	return (
		<div 
			className="col-md-2 ml-0 btn btn-warning float-right"
			onClick={handleClick}
		> 
			{opText}
		</div>
	)

}

export default Operation 