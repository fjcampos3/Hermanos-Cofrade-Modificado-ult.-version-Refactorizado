import React from 'react';



const  divStyledisplay  = {
    display:'inherit',
  };
  
  const  divStyledisplay2  = {
    display:'inline',
  };

const ubi = "./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/";
const url = "http://www.hermanoscofrades.com/"
const url2 = "uploaded_images/"


interface IProductoProps {
    img1src: string;
    img1alttitle: string;
    img2src: string;
    ahref: string;
    nombre: string;
    precio: string;
    rebajado: string;
    precio2: string;
}


class Producto extends React.Component<IProductoProps>{
    constructor (props: IProductoProps){
        super (props);
    }

    public render(){
        return (<div className="productos">
        <div className="productos-contenedor">
         <div id="subdivproductos-contenedor" className="eti-productos">
            <div className="eti-productos"><img src= {ubi + this.props.img1src} alt={this.props.img1alttitle} title={this.props.img1alttitle}></img></div>
          </div>          
          <div className="productos-imagen">
            <a href={url + this.props.ahref}><img src={ubi + this.props.img2src} alt={this.props.nombre} width="220" height="220" className="lazy" title={this.props.nombre} data-original={url + url2 + this.props.img2src} style={divStyledisplay2}></img></a>
          </div>


          <div className="vista-rapida-ficha">
            <a href= {url + "indexVistaRapida.php?mod=products&amp;p=hermanoscofrades&amp;ID=10753654&amp;lang=es"} rel="980|650|/es/product/10753654-%09-trivial-sevilla-cofrade-version-ii" className="vista-rapida-ficha-link" id="vista-rapida-ficha-link-1" onClick={(event: React.MouseEvent<HTMLElement>) => {}}>Vista rápida</a>
          </div> 

      
          <div className="nombreCont">
            <h2 className="productos-nombre"><a href={url + this.props.ahref}>{this.props.nombre}</a></h2>
          </div>

          <div className="productos-precio"><span className={this.props.rebajado} id="price-10753654">{this.props.precio} €</span> <span className="precio_oferta2" id="price-10753654">{this.props.precio2}</span> </div>
          
          <div className="fichaOpiniones"></div>

          <div className="ficha-boton2 opacidad imags"><a href={url + this.props.ahref} style={divStyledisplay}><img src="./Hermanos Cofrades Sevilla - Ropa y complementos para el cofrade_files/ficha-boton-d_es - copia.png" alt="Detalles"></img></a></div>

        </div>
      </div>   

        );
    }
}

export default Producto;




/*<div className="player row">
<a className="play-button btn btn-success" onClick={this.togglePlay}>
    {this.state.playing ? <FontAwesomeIcon icon="play"/> : <FontAwesomeIcon icon="pause"/>}
</a>
</div>*/