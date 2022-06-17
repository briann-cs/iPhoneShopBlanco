const ItemDetail = ({products}) => {
    return(
        products.map(p =>
            <Item 
            id={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
            description={p.description}
            />
        )
    )
}

export default ItemDetail;