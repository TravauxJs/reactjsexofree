import {React, createContext, useState} from 'react';
import CorpsContext from './../../Components/Calcul/CorpsContext.jsx';

export const ResulatContext = createContext();

function Calcul() {

    const [ecran, setEcran] = useState('');
    const modifierEcran = function(val, remiseZero = false) {
        if (remiseZero) setEcran(v => '');
        setEcran(v => v + val);
    }

    const [affichage, setAffichage] = useState('');
    const modifierAffichage = function(val, remiseZero = false) {
        if (remiseZero) setAffichage(v => '');
        setAffichage(v => v + val);
    }    

    const dataContext = {
        ecran : ecran,
        affichage : affichage,
        modifierEcran : modifierEcran,
        modifierAffichage : modifierAffichage
    }

	return (
        <div className="page-container">
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <ResulatContext.Provider value={dataContext} >
                            <CorpsContext />
                        </ResulatContext.Provider>
                    </div>
                </div>
            </div>
        </div>				
	)


}

export default Calcul