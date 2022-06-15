const Item = ({id, title, price, image}) => {
    return(
        <div class="container-sm">
            <div key={id}>
                <h5>{title}</h5>
                <img src={image} alt={title}/>
                <h5>{price}</h5>
            </div>
        </div>
    )
}

export default Item;