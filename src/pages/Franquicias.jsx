import React from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { VscVmOutline, VscLocation, VscPackage, VscFolderActive } from 'react-icons/vsc';
import { useLoad } from '../context/LoadContext';
import { Loading } from '../components/Loading';

export const Franquicias = () => {

  const {load } = useLoad()

  return (
    <>
      {
        load ? (<Loading />):
        (
          <>
          <Menu />
            <div>
              <div className='wrap wrap-franquicias'>
                <h2>Modelos de negocios <span className='txt-brand'>Farma<span>LAAX</span></span></h2>
              </div>
            
              <div className='contenido-cards-inversion'>

                <div className='card-inversion'>
                  <div className='card-header-inversion'>Micro</div>
                  <div className='triangulo'></div>
                  <div className='card-body-inversion'>
                    <ul>
                      <li><p>Mobiliario y Equipos</p><span>$90,000</span></li>
                      <li><p>Inventario Patente</p><span>$180,000</span></li>
                      <li><p>Inventario Genérico</p><span>$50,000</span></li>
                      <li><p>Inventario Perfumería</p><span>$30,000</span></li>
                      <li><p>Uso de marca</p><span>$50,000</span></li>
                    </ul>
                  </div>
                  <div className='card-footer-inversion'><h4>$400,000</h4></div>
                </div>

                <div className='card-inversion'>
                  <div className='card-header-inversion bg-card-green'>Estandar</div>
                  <div className='triangulo triangulo-green'></div>
                  <div className='card-body-inversion'>
                    <ul>
                      <li><p>Mobiliario y Equipos</p><span>$120,000</span></li>
                      <li><p>Inventario Patente</p><span>$300,000</span></li>
                      <li><p>Inventario Genérico</p><span>$80,000</span></li>
                      <li><p>Inventario Perfumería</p><span>$50,000</span></li>
                      <li><p>Uso de marca</p><span>$50,000</span></li>
                    </ul>
                  </div>
                  <div className='card-footer-inversion bg-card-green'><h4>$600,000</h4></div>
                </div>

                <div className='card-inversion'>
                  <div className='card-header-inversion bg-card-yellow'>Premium</div>
                  <div className='triangulo triangulo-yellow'></div>
                  <div className='card-body-inversion'>
                    <ul>
                      <li><p>Mobiliario y Equipos</p><span>$160,000</span></li>
                      <li><p>Inventario Patente</p><span>$400,000</span></li>
                      <li><p>Inventario Genérico</p><span>$100,000</span></li>
                      <li><p>Inventario Perfumería</p><span>$90,000</span></li>
                      <li><p>Uso de marca</p><span>$50,000</span></li>
                    </ul>
                  </div>
                  <div className='card-footer-inversion bg-card-yellow'><h4>$800,000</h4></div>
                </div>

                <div className='container-margen'>
                  <p>Margen de ganancia <b>25%</b> y retorno de inversión en <b>24 meses</b></p>
                </div>

              </div>

              <div className='container-ventajas' >
                <h2>Ventajas</h2>

                <p>Al adquirir tu franquicia obtendras estos beneficios.</p>

                <div className='container-services'>
                  <div className='column-services'>
                    <div className='icon-service'>
                      <VscVmOutline />
                    </div>
                    <div className='info-services'>
                      <h3>Servicios Integrales</h3>
                      <p>Al adquirir una farmacia FARMALAAX, se 
                      proporcionará el mobiliario y equipo de cómputo necesarios 
                      para la operación.</p>
                    </div>
                  </div>

                  <div className='column-services'>
                    <div className='icon-service'>
                      <VscLocation />
                    </div>
                    <div className='info-services'>
                      <h3>Ubicación Estratégica</h3>
                      <p>Ayudaremos a encontrar la ubicación 
                      óptima o revisaremos la viabilidad del lugar existente en función 
                      de la rentabilidad.</p>
                    </div>
                  </div>
                  <div className='column-services'>
                    <div className='icon-service'>
                      <VscPackage />
                    </div>
                    <div className='info-services'>
                      <h3>Suministro Eficiente</h3>
                      <p>Como proveedores, ofreceremos precios 
                      competitivos y existencias aseguradas gracias a nuestro CEDIS y 
                      distribuidoras oficiales.</p>
                    </div>
                  </div>
                  <div className='column-services'>
                    <div className='icon-service'>
                      <VscFolderActive />
                    </div>
                    <div className='info-services'>
                      <h3>Experiencia y Soporte</h3>
                      <p>Con más de 50 años de experiencia en 
                      otro proyecto de farmacias, brindaremos asesoramiento en 
                      documentación, permisos, apertura y operación..</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          <Footer />
          </>
        )
      }
    </>
  )
}
