import { useContext } from 'react';
import { ResulatContext } from './../../Page/Calcul';
import { Calculate } from './Calculate';

function Action(props) {

	const Resulat = useContext(ResulatContext);

	let action = props.action;
	const handleClick = function() {
		console.log(action);
		let egale = '';
		if ( action === 'egale' ) {
			egale = Calculate(Resulat.ecran);
			Resulat.modifierAffichage(egale);
			Resulat.modifierEcran('', true);			
		} else {
			Resulat.modifierAffichage('', true);
			Resulat.modifierEcran('', true);
		}
	}

	return (
		<div 
			className="col-md-3 mr-3 btn btn-danger"
			onClick={handleClick}
		>
			{props.children}
		</div>
	)

}

export default Action 