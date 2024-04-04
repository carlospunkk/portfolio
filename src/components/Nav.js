import { Link } from "react-router-dom";

function Navegacao(){

    return(
    

<ul className="nav">
    
<li>
  <Link to="/">Sobre Mim</Link>
</li>
<li>
  <Link to="/projetos">Projetos</Link>
</li>
<li>
  <Link to="/cursos">Cursos</Link>
</li>
<li>
  <Link to="/hobbies">Hobbies</Link>
</li>
<li>
  <Link to="/contato">Contato</Link>
</li>

</ul>


    )
}
export default Navegacao;