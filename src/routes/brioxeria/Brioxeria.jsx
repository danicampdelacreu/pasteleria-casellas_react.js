
import briox from '../../assets/img/foto_homeBriox.jpeg'

import './Brioxeria.css';

export default function Brioxeria() {
    return (
        <div className='briGeneral'>
            <div className='briPhoto1'>
                <img src={briox} />
            </div>
            <div className='briExpli'>
                <h2>Brioxeria</h2>
                <p>
                    A la nostra brioixeria, obrim les portes a un món d'aromes i textures únics.
                    Cada briox és un testimoni de la nostra dedicació i amor pel detall.
                    Mitjançant l'ús d'ingredients seleccionats minuciosament, creem brioxes que són una delicada fusió de sabor i art.
                    Ja sigui amb brioxes farcides o de mida petita, la nostra selecció és tan variada com els somnis dels nostres convidats.
                    La nostra passió per la brioixeria es reflecteix en cada brioxa, des de les seves capes esponjoses fins als colors càlids.
                    Amb una combinació de modernitat i tradició, les nostres creacions conviden a tastar i a compartir moments plaents amb els éssers estimats.
                    La brioixeria és el lloc on el plaer d'un briox excepcional pren forma.
                </p>
            </div>
            <div className='briTypes'>
                <p> imagen producto</p>
                <p> imagen producto</p>
                <p> imagen producto</p>
                <p> imagen producto</p>
                <p> imagen producto</p>
                <p> imagen producto</p>
                <p> imagen producto</p>
            </div>
        </div>
    );
};