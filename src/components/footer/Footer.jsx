import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Footer.css'

import linkedin from '../../assets/img/linkedin.jpeg';
import github from '../../assets/img/github.png';

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
                <div className="contacto">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contacto-name">
                            <label>Nom</label>
                            <input type="text" name="user_name" />
                        </div>
                        <div className="contacto-email">
                            <label>Email</label>
                            <input type="email" name="user_email" />
                        </div>
                        <div className="contacto-message">
                            <label>Missatge</label>
                            <textarea name="message" />
                        </div>
                        <div className="contacto-submit">
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </div>
            <div className='footerLinkDani'>
                <p>
                    web creada por Daniel Campdelacreu en proyecto propio
                </p>
                <div className='footerLinkedin'>
                    <a href=
                        "https://linkedin.com/in/danicampdelacreu-developer">
                        <img class='linkedin' src={linkedin} />
                    </a>
                </div>

                <div className='footerGithub'>
                    <a href=
                        "https://github.com/danicampdelacreu">
                        <img class='github' src={github} />
                    </a>
                </div>
            </div>
        </div>
    );
};