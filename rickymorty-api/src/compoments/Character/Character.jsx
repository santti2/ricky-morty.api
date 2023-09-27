
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
    <div>
        <div className="fondo">
            <h1>The Rick and  Morty API</h1>
        </div> 
             <div className="fondo2">
             <ul className="contenedor">
              {
                 character.map((item,index ) => (
                <li key = {index}>
                 <div className="contenedor2">
                 <img className="imagenes" src={item.image} />
                <div className="columna1">
                    <div className="interlineado1">    
                    <h2 className="nombres">{item.name}</h2>
                    <p className="muertoovivo">● {item.status} - {item.species}</p>
                </div>
                <div className="interlineado2">  
                    <p className="subtitulos"> Last Known Location</p>
                    <p className="UltimaLocalizacion">{item.origin.name}</p>
                </div>
                <div className="interlineado3"> 
                     <p className="subtitulos"> First Seen in </p>
                     <p className="Primeravez">{item.created}</p>
                 </div>
                 </div>
                 </div>
                 </li>))
               }
            </ul>
             </div>
    </div>
)
}