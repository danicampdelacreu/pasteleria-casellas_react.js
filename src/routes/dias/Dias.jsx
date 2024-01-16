
import './Dias.css';

import days from "../../assets/img/dies_reis.jpeg"
import Coca from '../../assets/img/coca_sanjuan.jpeg'
import Pastis from '../../assets/img/pastis_aniversari.jpeg'
import Turron from '../../assets/img/turron.jpeg'
import Rosco from '../../assets/img/roscon_reyes.jpeg'


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
                <div className='pasteXoco'>
                    <img src={Turron} />
                    <div className='pasteXocoIn'>
                        <h3>Turro de Nadal</h3>
                        <p>Tot el que et poguis imaginar ho fem</p>
                    </div>
                </div>
                <div className='pasteMusMad'>
                    <img src={Pastis} />
                    <div className='pasteMusMadIn'>
                        <h3>Pastis Aniversari</h3>
                        <p>Tu dius el que hi vols</p>
                    </div>
                </div>
                <div className='pasteMusLlima'>
                    <img src={Coca} />
                    <div className='pasteMusLlimaIn'>
                        <h3>Coca Sant Joan</h3>
                        <p>La coca de tota la vida</p>
                    </div>
                </div>
                <div className='pasteMusDosXoco'>
                    <img src={Rosco} />
                    <div className='pasteMusDosXocoIn'>
                        <h3>Tortell de reis</h3>
                        <p> Nata, crema y massapa combina-ho si vols</p>
                    </div>
                </div>
            </div>
        </div>
    );
};