
import '../styles/Grid.css'

function testclick(){
    console.log('clicou')
}

function Grid(){
const Lista = Array.from(document.querySelectorAll(".item"))
console.log(Lista)

    return(
      
<ul id='lista' className='container_grid'> 
    <li className="item" onClick={testclick} > item 1</li>
    <li className='item' > item 2</li>
    <li className='item' > item 3</li>
    <li className='item' href='#'> item 4</li>
    <li className='item' href='#'> item 5</li>
    <li className='item' href='#'> item 6</li>
    <li className='item' href='#'> item 7</li>
    <li className='item' href='#'> item 8</li>
    <li className='item' href='#'> item 9</li>
</ul>

    )
    
   

}

export default Grid;