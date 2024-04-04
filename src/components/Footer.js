import "../styles/Footer.css";

function Footer() {
  return (
    <ul className="container_footer">
      <li>
        <img src="/imagens/logotipo_footer.svg" alt="imagem footer" />
        <p>
          Desenvolvido por
          <br /> Carlos Rômulo
          </p>
      </li>
      
      
     <li className='container_link_imagens'>
       <a rel='noreferrer'  target="_blank" href="https://www.linkedin.com/in/carlos-r%C3%B4mulo-9650a055/"><img src="/imagens/link.svg" alt="logo linkedin" /></a>
       <a rel='noreferrer'  target="_blank" href="https://www.instagram.com/cromulo_romulo/"><img src="/imagens/Instagram.svg" alt="logo Instagram"/></a> 
       <a rel='noreferrer'  target="_blank" href="https://github.com/carlospunkk"><img src="/imagens/GitHub.svg" alt="logo Github"/></a> 
     </li>
    
   </ul>
  );
}
export default Footer;
