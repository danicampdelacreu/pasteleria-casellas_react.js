
import drinks from '../../assets/img/foto_homeDrinks.jpeg'
import cava from '../../assets/img/cava.png'
import vi from '../../assets/img/vino.jpeg'
import ratafia from '../../assets/img/ratafia.jpeg'

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
                <div className='drinksCava'>
                    <div className='cava1'>
                        <img src={cava} />
                        <div className='cava1In'>
                            <h3>Pere Ventura</h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                    <div className='cava2'>
                        <img src={cava} />
                        <div className='cava2In'>
                            <h3>Pere Ventura </h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                    <div className='cava3'>
                        <img src={cava} />
                        <div className='cava3In'>
                            <h3>Pere Ventura </h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                    <div className='cava4'>
                        <img src={cava} />
                        <div className='cava4In'>
                            <h3>Pere Ventura </h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                    <div className='cava5'>
                        <img src={cava} />
                        <div className='cava5In'>
                            <h3>Pere Ventura </h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                </div>
                <div className='drinksVi'>
                    <div className='vino1'>
                        <img src={vi} />
                        <div className='vino1In'>
                            <h3>Vi negre</h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                    <div className='vino2'>
                        <img src={vi} />
                        <div className='vino2In'>
                            <h3>Vi negre</h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                    <div className='vino3'>
                        <img src={vi} />
                        <div className='vino3In'>
                            <h3>Vi negre</h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                    <div className='vino4'>
                        <img src={vi} />
                        <div className='vino4In'>
                            <h3>Vi negre</h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                    <div className='vino5'>
                        <img src={vi} />
                        <div className='vino5In'>
                            <h3>Vi negre</h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                </div>
                <div className='drinksRata'>
                    <div className='rata1'>
                        <img src={ratafia} />
                        <div className='rata1In'>
                            <h3>Ratafia Bosch</h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                    <div className='rata2'>
                        <img src={ratafia} />
                        <div className='rata2In'>
                            <h3>Ratafia Bosch</h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                    <div className='rata3'>
                        <img src={ratafia} />
                        <div className='rata3In'>
                            <h3>Ratafia Bosch</h3>
                            <p>Explicacio producte</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};