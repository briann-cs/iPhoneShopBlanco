import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import products from "./products";
import promesa from "./promesa";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() =>{
        promesa(2000, products)
        .then(resultado => setItems(resultado))
    },[items])

    return(
        <ItemDetail products={items}/>
    )
}

export default ItemDetailContainer;