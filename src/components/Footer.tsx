import React from 'react';



class Cuerpo extends React.Component<{}, {}>{

    public render(){
        return(<footer id="Pie">
        <div id="pieAnuncios">
          <div className="linksImg"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/pie-1_es.png" alt="Entregas"></img></div>
          <div className="linksImg"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/pie-2_es.png" alt="Originales"></img></div>
          <div className="linksImg"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/pie-3_es.png" alt="Envíos"></img></div>
          <div className="linksImg"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/pie-4_es.png" alt="Pago Seguro"></img></div>
          <div className="limpiar"></div>
        </div>
        <div className="limpiar"></div>
        <div id="pieContenedor">
          <div className="pieBloque">
            <div className="pieTitular">GUÍA DE COMPRA</div>
            <div id="pie-menu">
              <p><a href="http://www.hermanoscofrades.com/index.php?mod=products_site_map">MAPA WEB</a></p>
              <p><a href="http://www.hermanoscofrades.com/es/173255-condiciones-de-uso">CONDICIONES DE USO</a></p>             
              <p><a href="http://www.hermanoscofrades.com/es/173256-como-comprar">CÓMO COMPAR</a></p>            
              <p><a href="http://www.hermanoscofrades.com/es/173257-pagos-y-envios">PAGOS Y ENVÍOS</a></p>             
              <p><a href="http://www.hermanoscofrades.com/es/173258-devoluciones-y-cambios">DEVOLUCIONES Y CAMBIOS</a></p>
            </div>
          </div>
          <div className="pieBloque">
            <div className="pieTitular">PAGO SEGURO</div>
            <div className="cent">
              <p>TRANSFERENCIA BANCARIA</p>
              <p>CONTRA REEMBOLSO</p>
              <div className="margen-10 imags"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/piePagos.svg" width="150" alt="Pagos"></img></div>
            </div>
          </div>
          <div className="pieBloque">
            <div className="pieTitular">CONTACTO</div>
            <div className="capaFlexCen">
              <div>
                <p>HERMANOS COFRADES</p>
                <p>C/ Pages del Corro 36 C</p>
                <p>41010 Triana - Sevilla (España)</p>
              </div>
              <div className="separa-05"></div>
              <div className="iconPieTelef iconoPie"></div><a href="tel:+34954089932">(+34) 954 089 932</a>
              <div className="separa-05"></div>
              <div className="iconWhatsapp iconoPie verdeWhatsApp"></div><a href="https://web.whatsapp.com/send?phone=34647858133" target="_blank">(+34) 647 858 133</a>
              <div className="separa-03"></div>
              <div className="iconPieEmail iconoPie"></div><a href="mailto:info@hermanoscofrades.com">info@hermanoscofrades.com</a> 
              <div className="limpiar"></div>
              <div className="redesPie ampliar">
                <a href="https://www.facebook.com/hermanoscofrades" target="_blank"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/socialFacebook.svg" alt="Facebook"></img></a>
              </div>
              <div className="redesPie ampliar">
                <a href="https://twitter.com/hermanoscofrade" target="_blank"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/socialTwitter.svg" alt="Twitter"></img></a>
              </div>
              <div className="redesPie ampliar">
                <a href="https://www.instagram.com/hermanoscofradestriana/" target="_blank"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/socialInstagram.svg" alt="Instagram"></img></a>
              </div>
            </div>
          </div>         
        </div>
        <div className="limpiar"></div>
        <div id="pieTexto">
          <script>document.write (MuestraFecha());</script> 2020 Hermanos Cofrades | Tienda creada por urbeCOM, si quieres <a href="https://www.urbecom.com/" target="_blank" rel="nofollow">crear tu tienda virtual</a> en 2 pasos visítanos.
        </div>  
      </footer>);
    }
}

export default Cuerpo;