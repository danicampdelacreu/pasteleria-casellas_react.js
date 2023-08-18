
import drinks from '../../assets/img/foto_homeDrinks.jpeg'

import './Bebidas.css';

export default function Drinks() {
    return (
        <div className='drinksGeneral'>

            <div className='drinksPhoto1'>
                <img src={drinks} />
            </div>
            
            <div className='drinksExpli'>
                <h2>Racó de sabors i aromes</h2>
                <p>
                    A la nostra cantonada de cava, vins i ratafia, ens endinsem en el fascinant món dels sabors i aromes.
                    Cada ampolla és un viatge sensorial cuidadosament seleccionat per enriquir els teus moments especials.
                    Des de les bombolles lleugeres del cava fins a la profunditat dels vins, cada elecció és un testimoni de la nostra passió per l'excel·lència enològica.
                    La nostra selecció inclou joies locals i tresors internacionals, cadascun amb la seva pròpia història i caràcter.
                    A més, la ratafia, una beguda autèntica de la regió, afegeix un toc tradicional i únic. El nostre objectiu és elevar les teves experiències culinàries,
                    permetent-te descobrir i apreciar la diversitat de sabors que el món vitiviní té per oferir. Vine i brinda amb nosaltres,
                    on la varietat i la qualitat es fonen per celebrar els plaers del paladar.
                </p>
            </div>
            <div className='drinksTypes'>
                <p>imagen producto</p>
                <p>imagen producto</p>
                <p>imagen producto</p>
                <p>imagen producto</p>
            </div>
        </div>
    );
};