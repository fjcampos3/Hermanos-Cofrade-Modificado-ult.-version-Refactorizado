import React from 'react';
import './assets/css/style.css'
import Header from './components/Header';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';

//import Player from './containers/Player';
//import { Action, createStore} from 'redux';
//import { Provider } from 'react-redux';
//import IGlobalState, { initialState } from './state/globalState';
 
//const reducer = (state: IGlobalState = initialState, action: Action) => {
//  return state;
//}
//const store = createStore(reducer, initialState);

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <Header/>
        <Cuerpo/>
        <Footer/>

      </div>
    );
  }
}
export default App;
