import React from 'react';
import Lateral from './Cuerpo/Lateral';
import Principal from './Cuerpo/Principal';



class Cuerpo extends React.Component<{}, {}>{

    public render(){
        return(<div id="cuerpo">
          <div id="franjaSuperior"></div>
          <div id="tablaPrincipal">
            <div className="limpiar"></div>
            <Lateral/>
            <Principal/>
            <div className="limpiar"></div>
          </div>
          <div id="franjaInferior"></div>
        </div>);
    }
}

export default Cuerpo;