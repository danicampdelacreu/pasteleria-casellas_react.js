import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Footer.css'

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
                        <p>HORARI </p>
                        <p>Divendres:</p>
                        <p>10:00 - 13:00</p>
                        <p>16:00 - 19:00 </p>
                        <p>Dissabte i Diumenge:</p>
                        <p>10:00 - 14:00</p>
                    </div>
                    <div className='footerTelefon'>
                        <p>TELEFON</p>
                        <p> +34 621 199 127</p> 
                        <p>(ESTER)</p>
                    </div>

                    <div className='footerDireccio'>

                        <p>DIRECCIO</p>
                        <p>Plaça Catalunya,9 Baixos</p>
                        <p>(NAVÀS)</p>
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