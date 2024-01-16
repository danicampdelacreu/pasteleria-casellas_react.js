import './Team.css';

import team from '../../assets/img/Nosaltres.jpeg'

export default function Team() {
    return (
        <div className='teamGeneral'>
            <div className='teamPhoto1'>
                <img src={team} />
            </div>
            <div className='teamExpli'>
                <h2>Nosaltres</h2>
                <p>
                    Som la pastisseria de Navàs, un lloc dolç i acollidor on els sabors es converteixen en experiències úniques.
                    Fundada el 2022 per l'Edu i l'Ester, la nostra passió per crear delícies artesanals és el que ens impulsa.
                    Cada pastís, galeta i postres que surten de la nostra cuina està ple d'amor i dedicació. El nostre objectiu
                    és endolcir els moments especials de la teva vida amb cada mossegada. Benvinguts a un any de sabor i dolçor a Navàs!
                </p>
            </div>
        </div>
    );
};