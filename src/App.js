import logo from './logo.svg';
import AppStyle from './App.module.scss';
import Navegacion from "./Components/Navegacion/Navegacion"
import Perfil from "./Components/Perfil/Perfil"
import Contenido from "./Components/Contenido/Contenido"

function App() {
  return (
    <div className={AppStyle.App}>
      <Navegacion></Navegacion>
      <Perfil></Perfil>
      <Contenido></Contenido>    
    </div>
  );
}

export default App;
