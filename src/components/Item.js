const Item = ({id, title, price, image}) => {
    return(
        <div class="col-md-4" key={id}>
              <div class="card mb-4 shadow-sm">
                <img class="card-img-top" src={image} alt={title} width="100%%"/>
                <div class="card-body">
                    <h6>{title}</h6>
                    <p class="card-text">${price}</p>
                    <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default Item;