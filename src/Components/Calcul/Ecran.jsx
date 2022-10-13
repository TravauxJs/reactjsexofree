import React , { useContext } from 'react';
import { ResulatContext } from './../../Page/Calcul';

function Ecran() {

	const Resulat = useContext(ResulatContext);

    const handleChange = function(e) {
    	this.target.value = e.target.value;
    }

	return (
		<input 
			type="text" 
			className="form-control" 
			value={Resulat.ecran} 
			onChange={handleChange}
		/>
	)

}

export default Ecran