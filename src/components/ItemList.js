import Item from "./Item";

const ItemList = ({products}) => {
    return(
        products.map(p =>
            <Item 
            id={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
            />
        )
    )
}

export default ItemList;