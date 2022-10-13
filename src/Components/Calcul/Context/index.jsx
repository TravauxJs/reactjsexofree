import {React, createContext} from 'react';
import Ecran from '../Ecran.jsx';
import Nombre from '../Nombre.jsx';
import Affichage from '../Affichage.jsx';

const modifierAffichage = function () {

}

export const data = {
	affichage : 1,
	modifierAffichage : modifierAffichage
}

export const ResulatContext = createContext();