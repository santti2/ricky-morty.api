
//UseEffect y useState
import { useEffect, useState } from "react";
import"./Character.css";
export function Character(){
    
    const[character,setCharacter] = useState([])

    useEffect(() => {

        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacter(data.results));
   
     },[setCharacter]);
    
  
   //el useEffect recibe una funcion callback, es decir el codigo a ejecutar 
   //recibe cuando se va a ejecutar

return (
  
       <ul className="contenedor">
        {
            character.map((item,index ) => (
                <li key = {index}>
                 <div className="contenedor2">
                 <img className="imagenes" src={item.image} />
                <div className="columna1">
                 <h3 className="nombres">{item.name}</h3>
                 <p className="muertoovivo">{item.status}</p>
                 </div>
                
                 </div>
                 </li>))
        }
       </ul>
)
}