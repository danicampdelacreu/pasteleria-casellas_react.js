import { Link } from 'react-router-dom';

import './Footer.css'

import linkedin from '../../assets/img/linkedin.jpeg';
import github from '../../assets/img/github.png';

export default function Footer(){

    return(
        <div className='footerGeneral'>
            <div className='footerContacto'>
                <div className='footerTelefon'>
                    <p>telefon: 62434565</p>
                </div>
                <div className='footerCorreo'>
                    <p>pastisseriacasellas@gmail.com</p>
                </div>
                <div className='footeDireccio'>
                    <p>---Direccion link googlemaps--</p>
                </div>
                <div className='footerHorario'>
                    <p>Horari</p>
                    <p>Mati: 08:00 - 14:00</p>
                    <p>Tarda: 16:00 - 20:00</p>
                </div>
                <div className='footerFormulario'>
                    <p>Formulario contacto</p>
                    <p>--- nombre ---</p>
                    <p>--- correo ---</p>
                    <p>--- mensaje ---</p>
                </div>
            </div>
            <div className='footerLinkDani'>
                <p>
                    web creada por Daniel Campdelacreu en proyecto propio   
                </p>
                <div className='footerLinkedin'>
                    <a href=
                        "https://linkedin.com/in/danicampdelacreu-developer">
                        <img class='linkedin' src= { linkedin } />
                    </a>
                 </div> 

                 <div className='footerGithub'>
                    <a href=
                        "https://github.com/danicampdelacreu">
                        <img class='github' src= { github } />
                    </a>
                </div>
            </div>
        </div>
    );
};