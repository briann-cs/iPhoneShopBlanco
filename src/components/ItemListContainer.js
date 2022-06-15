import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import products from "./products";
import promesa from "./promesa";

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() =>{
        promesa(2000, products)
        .then(resultado => setItems(resultado))
    },[items])

    return(
      <div>
        <ItemList products={items}/>
      </div>
    )
}

export default ItemListContainer;