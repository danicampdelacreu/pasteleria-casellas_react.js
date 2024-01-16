
import brioxH from '../../assets/img/foto_homeBriox.jpeg'
import croisantBig from '../../assets/img/croisant gran.png'
import croisantLit from '../../assets/img/crois petits.jpeg'
import briox from '../../assets/img/brioches.jpeg'
import enseimada from '../../assets/img/enseimada.jpeg'
import xuixo from '../../assets/img/xuixo.jpeg'
import donut from '../../assets/img/donut.jpeg'

import './Brioxeria.css';

export default function Brioxeria() {
    return (
        <div className='briGeneral'>
            <div className='briPhoto1'>
                <img src={brioxH} />
            </div>
            <div className='briExpli'>
                <h2>Brioxeria</h2>
                <p>
                    A la nostra brioixeria, obrim les portes a un món d'aromes i textures únics.
                    Cada peça és un testimoni de la nostra dedicació i amor pel detall.
                    Mitjançant l'ús d'ingredients seleccionats minuciosament, creem les peces que són una delicada fusió de sabor i art.
                    Ja sigui farcides o de mida petita, la nostra selecció és tan variada com els somnis dels nostres convidats.
                    La nostra passió per la brioixeria es reflecteix en cada peça, des de les seves capes esponjoses fins als colors càlids.
                    Amb una combinació de modernitat i tradició, les nostres creacions conviden a tastar i a compartir moments plaents amb els éssers estimats.
                    La brioixeria és el lloc on el plaer d'un dolç excepcional pren forma.
                </p>
            </div>

            <div className='briTypes'>
                <div className='briCroisBig'>
                    <img src={croisantBig} />
                    <div className='briCroisBigIn'>
                        <h3>croisants grans</h3>
                        <p> De xocolata i normals</p>
                    </div>
                </div>
                <div className='briCroisSmall'>
                    <img src={croisantLit} />
                    <div className='briCroisSmallIn'>
                        <h3>croisants petits</h3>
                        <p> De xocolata i normals</p>
                    </div>
                </div>
                <div className='briBriox'>
                    <img src={briox} />
                    <div className='briBrioxIn'>
                        <h3>Brioix</h3>
                        <p>Briox ensucrat amb massa esponjosa</p>
                    </div>
                </div>
                <div className='briEncie'>
                    <img src={enseimada} />
                    <div className='briEncieIn'>
                        <h3>Enseimada</h3>
                        <p>La tipica de mallorca normal i de xoco</p>
                    </div>
                </div>
                <div className='briXuix'>
                    <img src={xuixo} />
                    <div className='briXuixIn'>
                        <h3>Xuixo crema</h3>
                        <p> Dolç de crema</p>
                    </div>
                </div>
                <div className='briDonut'>
                    <img src={donut} />
                    <div className='briDonutIn'>
                        <h3>Donut sucre</h3>
                        <p>El donut de tota la vida amb sucre</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* 
Dins de briTypes tindrem les fotos i al aproximar el cursor es feran grans i surtira l'explicacio 

*/