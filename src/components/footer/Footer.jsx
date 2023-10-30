import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

import './Footer.css'
import maps from '../../assets/img/maps.png'

export default function Footer() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        if (formData.get('user_name') && formData.get('user_email') && formData.get('message')) {
            emailjs
                .sendForm('service_sjyf30z', 'template_itkkk5i', form.current, 'ybVHXbi9wadjWsNQj')
                // agregar correo cliente en emailjs cuando lo tengamos y cambiar service, tempalte y form.current
                .then(
                    (result) => {
                        console.log(result.text);
                        alert('¡Mensaje enviado correctamente! Nos pondremos en contacto con usted ');
                        window.location.reload();
                    },
                    (error) => {
                        console.log(error.text);
                        alert('Ocurrió un error al enviar el mensaje. Inténtalo nuevamente más tarde.');
                    }
                );
        } else {
            alert('Por favor, rellena todos los campos.');
        }
    };

    return (
        <div className='footerGeneral'>
            <div className='footerContent'>
                <div className='footerContacto'>
                    <div className='footerHorario'>
                        <p>HORARI <br /><br />Divendres:<br /> 10:00 - 13:00 <br /> 16:00 - 19:00 <br /> <br />
                            Dissabte i Diumenge: <br />10:00 - 14:00 <br />
                        </p>
                    </div>
                    <div className='footerTelefon'>
                        <p>TELEFON<br />  <br />  +34 621 199 127 <br />(ESTER)</p>
                    </div>

                    <div className='footerDireccio'>
                        <p>
                            DIRECCIO <br /><br />
                            Plaça Catalunya, 9 Baixos <br />
                            (NAVÀS)
                        </p>
                        <div className="mapLink">
                            <Link to="https://www.google.es/maps/place/Plaça+Catalunya,+9,+08670+Navàs,+Barcelona/@41.9029244,1.8745783,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4fe29bc2b5da5:0x51076f23800a988e!8m2!3d41.9029244!4d1.8771532!16s%2Fg%2F11cp99658z?entry=ttu">
                                <img className="logoLF" src={maps} />
                            </Link>
                        </div>
                    </div>


                </div>

                <div className="footerMensaje">
                    <p> Info: pastisseriacasellas@gmail.com</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contacto-name">
                            <input type="text" name="user_name" placeholder='Nom' />
                        </div>
                        <div className="contacto-email">

                            <input type="email" name="user_email" placeholder='Email' />
                        </div>
                        <div className="contacto-message">
                            <textarea name="message" placeholder='Missatge' />
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" />
                                 Acepto la Politica de Privacidad // Preguntas frequentes
                            </label>
                        </div>
                        <div className="contacto-submit">
                            <input type="submit" value="Enviar" />
                        </div>
                        
                    </form>
                </div>
            </div>

            <div className='footerLinkDani'>

                <div className='footerLinkedin'>

                    <p>
                        @2023 Pastisseria Casellas by Daniel Campdelacreu //
                        <a href=
                            "https://linkedin.com/in/danicampdelacreu-developer">
                            _LinkedIn
                        </a>
                        <a href=
                            "https://github.com/danicampdelacreu">
                            _GitHub_//
                        </a>
                    </p>

                </div>
            </div>
        </div>
    );
};