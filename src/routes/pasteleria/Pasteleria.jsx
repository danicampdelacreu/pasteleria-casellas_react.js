
import './Pasteleria.css'

import pastel from '../../assets/img/foto_homePastel.jpeg'
import nata from '../../assets/img/nata.jpeg'
import trufa from '../../assets/img/trufa.jpeg'
import crema from '../../assets/img/crema.jpeg'
import llimona from '../../assets/img/llimona.jpeg'
import maduixa from '../../assets/img/maduixa.jpeg'
import xoco from '../../assets/img/xoco.jpeg'
import dosXoco from '../../assets/img/dos xocos.jpeg'
import turro from '../../assets/img/turro.jpeg'
import massini from '../../assets/img/massini.jpeg'
import sacher from '../../assets/img/sacher.jpeg'
import red from '../../assets/img/red velved.jpeg'

export default function Pastel() {
    return (
        <div className='pasteGeneral'>
            <div className='pastePhoto1'>
                <img src={pastel} />
            </div>
            <div className='pasteExpli'>
                <h2>Pastisseria</h2>
                <p>
                    Dins de les nostres parets pastisseres, la màgia de la creació de dolços pren vida.
                    Cada tracte dolç es converteix en una obra d'art meticulosament elaborada, plena de sensibilitat i habilitat.
                    A través de l'ús d'ingredients d'excel·lent qualitat, construïm sabors que transporten als moments més feliços.
                    Ja sigui en forma de pastissos personalitzats o de galetes delicades, la nostra gamma de creacions és tan diversa
                    com els somnis que tenen els nostres estimats clients. La nostra dedicació a la pastisseria es revela en cada detall,
                    des de les textures exquisides fins als tocs de color enèrgics. Amb un equilibri entre la modernitat i un toc tradicional,
                    els nostres postres conviden a gaudir i a compartir moments endolcits amb aquells que estimem. La nostra pastisseria actua
                    com el lloc on els anhels per les dolçors es transformen en realitat.
                </p>
            </div>
            <div className='pasteTypes'>
                <div className='pasteNata'>
                    <img src={nata} alt= "Pastis de nata" />
                    <div className ='pasteNataIn'>
                        <h3>Pastis de nata</h3>
                        <p> explicacio del pastis de nata</p>
                    </div>   
                </div>
                <div className='pasteTrufa'>
                    <img src={trufa} />
                    <div className ='pasteTrufaIn'>
                        <h3>Pastis de Trufa</h3>
                        <p> explicacio del pastis de trufa</p>
                    </div> 
                </div>
                <div className='pasteCrema'>
                    <img src={crema} />
                    <div className ='pasteCremaIn'>
                        <h3>Pastis de Crema</h3>
                        <p> explicacio del pastis de Crema</p>
                    </div> 
                </div>
                <div className='pasteXoco'>
                    <img src={xoco} />
                    <div className ='pasteXocoIn'>
                        <h3>Pastis de Xoco</h3>
                        <p> explicacio del producte</p>
                    </div> 
                </div>
                <div className='pasteMusMad'>
                    <img src={maduixa} />
                    <div className ='pasteMusMadIn'>
                        <h3>Mus madiuxa</h3>
                        <p> explicacio del producte</p>
                    </div>
                </div>
                <div className='pasteMusLlima'>
                    <img src={llimona} />
                    <div className ='pasteMusLlimaIn'>
                        <h3>Mus de llimona</h3>
                        <p> explicacio del producte</p>
                    </div>
                </div>
                <div className='pasteMusTurro'>
                    <img src={turro} />
                    <div className ='pasteMusTurroIn'>
                        <h3>Mus Turro</h3>
                        <p> explicacio del producte</p>
                    </div>
                </div>
                <div className='pasteMusDosXoco'>
                    <img src={dosXoco} />
                    <div className ='pasteMusDosXocoIn'>
                        <h3>Mus dos choco</h3>
                        <p> explicacio del producte</p>
                    </div>
                </div>
                <div className='pasteMassi'>
                    <img src={massini} />
                    <div className ='pasteMassiIn'>
                        <h3>Massini</h3>
                        <p> explicacio del producte</p>
                    </div>
                </div>
                <div className='pasteSach'>
                    <img src={sacher} />
                    <div className ='pasteSachIn'>
                        <h3>Sacher</h3>
                        <p> explicacio del producte</p>
                    </div>
                </div>
                <div className='pasteRed'>
                    <img src={red} />
                    <div className ='pasteRedIn'>
                        <h3>Red velved</h3>
                        <p> explicacio del producte</p>
                    </div>
                </div>
            </div>

        </div>
    );
};