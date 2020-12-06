import React from 'react';

const  divStylePadding  = {
    padding:"0px 5px",
    
  };

class CabeceraMenu extends React.Component<{}, {}>{
    public render(){
        return (<div id="cabeceraMenu">
            
            <ul id="menu">  
              <li><a href="http://www.hermanoscofrades.com/es/173253-ofertas">Ofertas</a></li>           
              <li><a href="http://www.hermanoscofrades.com/es/173260-quienes-somos">Quienes Somos</a></li>
              <li><a href="http://www.hermanoscofrades.com/es/news/18685-noticia-2">Noticias</a></li>                         
              <li><a href="http://www.hermanoscofrades.com/es/173262-contacto">Contacto</a></li>
              <li><a href="http://www.hermanoscofrades.com/es/173254-novedades">Novedades</a></li> 

              <li><a className= "redesCabecera" style={divStylePadding} href="tel:+34954089932"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/contactoTelf.svg" alt="Telófono"></img></a></li>           
              <li><a className= "redesCabecera" style={divStylePadding} href="mailto:info@hermanoscofrades.com"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/contactoMail.svg" alt="Email"></img></a></li> 
              <li><a className= "redesCabecera" style={divStylePadding} href="https://web.whatsapp.com/send?phone=34647858133" target="_blank"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/contactoWhat.svg" alt="WhatsApp"></img></a></li>
              <li><a className= "redesCabecera" style={divStylePadding} href="https://www.facebook.com/hermanoscofrades" target="_blank"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/socialFacebook.svg" alt="Facebook"></img></a></li>
              <li><a className= "redesCabecera" style={divStylePadding} href="https://twitter.com/hermanoscofrade" target="_blank"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/socialTwitter.svg" alt="Twitter"></img></a></li>
              <li><a className= "redesCabecera" style={divStylePadding} href="https://www.instagram.com/hermanoscofradestriana/" target="_blank"><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/socialInstagram.svg" alt="Instagram"></img></a></li>
                     
            </ul>
            
          </div>)
    }
}

export default CabeceraMenu;