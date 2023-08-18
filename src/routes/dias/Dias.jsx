
import './Dias.css';

import days from "../../assets/img/foto_homeDays.png"



export default function Days() {
    return (
        <div className='daysGeneral'>
            <div className='daysPhoto1'>
                <img src={days} />
            </div>
            <div className='daysExpli'>
                <h2>Ocasions especials</h2>
                <p>
                    En les ocasions especials, la nostra creativitat pren volada per crear moments inoblidables.
                    Amb cada data destacada, donem vida a postres únics que capturen l'esperit de la celebració.
                    Des de pastissos personalitzats fins a delicades creacions, dediquem atenció meticulosa als
                    detalls perquè cada dolç sigui un testimoni d'amor i feliç commemoració. Amb l'ús d'ingredients
                    seleccionats i tècniques artesanals, creem postres que no només són exquisits al paladar, sinó
                    que també capturen l'essència de l'ocasió. Les nostres creacions fan que aquestes dates especials
                    siguin encara més memorables i dolces per a tots els que comparteixin aquestes ocasions amb nosaltres.
                </p>
            </div>
            <div className='daysTypes'>
                <p> imagen producto</p>
                <p> imagen producto</p>
                <p> imagen producto</p>
            </div>
        </div>
    );
};