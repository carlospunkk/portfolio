
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Footer from './components/Footer';
//import Main from './components/Main';
import Navegacao from './components/Nav'
import Main from "./components/Main";
import Projetos from "./Pages/Projetos";
import SobreMin from "./Pages/SobreMin";
import BoxProjeto from "./components/BoxProjeto";







       //<Navegacao />
       //<Main />
       //<Footer/>



function App() {
  return (
     
  
     <div className="App">
       <Router>
       <Navegacao/>
        <Routes>
         <Route path="/" element={<SobreMin/>}/>
         <Route path="/projetos" element={<Projetos/>} />
         <Route path="/cursos" element={<Main/>} />
         <Route path="/hobbies" element={<Main/>} />
         <Route path="/contato" element={<Main/>} />
        </Routes>
      </Router>
      <Footer/>
      <BoxProjeto 
      titulo='Mochila de viagem' 
      texto=' Este projeto tem o objetivo de transformar em uma lista tudo guardado
          no local storage do navegador'/>
      
   
      
    </div>

  
   
  );
}

export default App;
