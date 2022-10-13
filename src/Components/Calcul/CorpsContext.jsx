import { useContext } from 'react';
import Ecran from './Ecran.jsx';
import Nombre from './Nombre.jsx';
import Affichage from './Affichage.jsx';
import Operation from './Operation.jsx';
import Action from './Action.jsx';

import { ResulatContext } from './../../Page/Calcul';

function CorpsContext() {

	const Resulat = useContext(ResulatContext);

    return (
    	<div>
        	<Affichage />
	        <div className="row">
	            <div className="col-md-3">
	            </div>
	            <div className="col-md-6">
	                <div className="row mb-2">
	                    <Ecran />
	                </div>
	                <div className="row mb-2">
	                	<Nombre value="1" />
	                	<Nombre value="2" />
	                	<Nombre value="3" />
	                	<Operation value={Resulat.ecran} >+</Operation>
	                </div> 
	                <div className="row mb-2">
	                	<Nombre value="4" />
	                	<Nombre value="5" />
	                	<Nombre value="6" />
	                    <Operation value={Resulat.ecran} >-</Operation>
	                </div> 
	                <div className="row mb-2">
	                	<Nombre value="7" />
	                	<Nombre value="8" />
	                	<Nombre value="9" />
	                    <Operation value={Resulat.ecran} >*</Operation>
	                </div> 
	                <div className="row mb-2">
	                	<Nombre value="0" />
	                	<Action action="effacer">Effacer</Action>
	                	<Action action="egale">=</Action>
	                    <Operation value={Resulat.ecran} >/</Operation>
	                </div>  
	            </div>
	            <div className="col-md-3">
	            </div>
	        </div>
        </div>
    )  		
}

export default CorpsContext 