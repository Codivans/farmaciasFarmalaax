import React from 'react'
import logotipo from './../assets/img/farmalaax.svg';
import facebook from './../assets/img/facebook.png'
import whatsapp from './../assets/img/whatsapp.png'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
        <footer>
            <div className='wrap wrap-footer'>
                <div>
                    <h2>Información</h2>
                    <ul>
                        <li><Link to='/'>¿Quienes somos?</Link></li>
                        <li><Link to='/'>Misión y Visión</Link></li>
                        <li><Link to='/'>Franquicias</Link></li>
                        <li><Link to='/'>Aviso de privacidad</Link></li>
                        <li><Link to='/'>Terminos y condiciones</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Navegación</h2>
                    <ul>
                        <li><Link to='/productos/MEDICAMENTO'>Medicamento</Link></li>
                        <li><Link to='/productos/PERFUMERIA'>Perfumeria</Link></li>
                        <li><Link to='/productos/ABARROTES'>Abarrotes</Link></li>
                        <li><Link to='/productos/EQUIPOS Y BOTIQUIN'>Curación</Link></li>
                        <li><Link to='/productos/SUEROS ORALES'>Sueros Orales</Link></li>
                        <li><Link to='/productos/SALUD SEXUAL'>Salud Sexual</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Contacto</h2>
                    <div className='container-img-social'>
                        <img src={facebook} />
                        <img src={whatsapp} />
                    </div>

                    <p><b>Doicilio:</b> Calle 17 #8, Col. Las Aguilas, Ciudad Nezahualcoyotl, EdoMex</p>
                    <p><b>Cel:</b> 55 1023 3434</p>
                    <img src={logotipo} className='logo-footer'/>
                </div>
            </div>
            <div className='copyright-text'>
                <span>Todos los derechos reservados 2023 © - FarmaLAAX</span>
                <span>website created by @codivans</span>
            </div>
        </footer>
  )
}
