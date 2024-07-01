
import Imagen from "./Imagen"

const Card = (props)=>{
    return(
        <div>
            <Imagen imagen={props.imagen} alt={props.titulo}  />
            {/*<img src={props.imagen} alt={props.alt}/>*/}
            <h2>{props.titulo ?? "cambio"}</h2>
          
        </div>
    )

}

export default Card