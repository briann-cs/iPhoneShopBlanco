import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)

    const aumentaContador = () => {
        if (verificaStock(contador)){
            setContador(contador + 1)
        }
        else{
            console.log("no hay stock disponible")
        }
    }
    
    const bajaContador = () => {
        setContador(contador - 1)
    } 
    
    const verificaStock = (contador) => {
        if (contador < stock && contador >=initial){
            console.log("la cantidad seleccionada esta disponible")
            return true
        }
        else{
            console.log("la cantidad seleccionada no está disponible")
            return false
        }
    }

    const confirmaContador = () => {
        if (verificaStock(contador)){
            console.log("ejecuto on add ya que stock es correcto")
            onAdd(contador)
        }
        else{
            console.log("no hago nada porque no hay stock")
        }
    }

    return (
        <div>
            <p>El número actual del contador es: {contador}</p>
            <button onClick={aumentaContador}>aumentar contador</button>
            <button onClick={bajaContador}>disminuir contador</button>
            <button onClick={confirmaContador}>agregar al carrito</button>
        </div>
    )
}





export default ItemCount;