import { useContext } from 'react';
import { ResulatContext } from './../../Page/Calcul';

function Nombre(props) {

	const Resulat = useContext(ResulatContext);
	const handleClick = function() {
		Resulat.modifierEcran(props.value);
	}

	return (
		<div 
			className="col-md-3 mr-3 fl btn btn-primary"
			onClick={handleClick}
		> 
			{props.value} 
		</div>
	)

}

export default Nombre 