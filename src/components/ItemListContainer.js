import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {

    const onAdd = () => {  }

    return(
        <div>
            <h3>{greeting}</h3>
            <ItemCount stock={5} onAdd={onAdd} initial={1} />
        </div>
    )
}

export default ItemListContainer;