import './Footer.css'

export default function Footer(){
    return(
        <div className='footerGeneral'>
            <div className='footerContacto'>
                <div className='footerTelefon'>
                    <p>N.Telefon</p>
                </div>
                <div className='footerCorreo'>
                    <p>Correo</p>
                </div>
                <div className='footeDireccio'>
                    <p>Direccion link googlemaps</p>
                </div>
                <div className='footerHorario'>
                    <p>Horario</p>
                </div>
                <div className='footerFormulario'>
                    <p>Formulario contacto</p>
                </div>
            </div>
            <div className='footerLinkDani'>
                <p>Link amb datos creador web</p>
            </div>
        </div>
    );
};