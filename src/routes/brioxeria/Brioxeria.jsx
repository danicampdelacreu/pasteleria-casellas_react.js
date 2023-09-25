
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
                    <p> Croisants grans </p>
                </div>
                <div className='briCroisSmall'>
                    <img src={croisantLit} />
                    <p> Croisants petits </p>
                </div>
                <div className='briBriox'>
                    <img src={briox} />
                    <p> Briox de la casa</p>
                </div>
                <div className='briEncie'>
                    <img src={enseimada} />
                    <p> Enseimada</p>
                </div>
                <div className='briXuix'>
                    <img src={xuixo} />
                    <p> Xuixo de crema </p>
                </div>
                <div className='briDonut'>
                    <img src={donut} />
                    <p>Donuts de sucre</p>
                </div>
            </div>
        </div>
    );
};

/* 
Dins de briTypes tindrem les fotos i al aproximar el cursor es feran grans i surtira l'explicacio 

*/