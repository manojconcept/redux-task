import Rating from '@mui/material/Rating';

const Cards = ({ product,clickHandle }) => {

    const percentageAmout = (100 * product.discountPercentage) / product.price;
    const productPriceA = product.price - percentageAmout;
    const stockLeft = product.stock - product.count 
    const count = stockLeft || product.stock
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <button type='button' style={{ border: "none", background: "none" }}>
                    <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Stock : {count}</div>
                    <img className="card-img-top" style={{ width: "100%", height: "200px" }} src={product.thumbnail} alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">{product.name}</h5>
                            <h5 className="fw-bolder">{product.title}</h5>
                            <Rating
                                name="read-only"
                                value={product.rating}
                                readOnly
                            />
                            <div>
                                <p>{product.description}</p>
                            </div>
                            <span className="text-muted">₹<s>{product.price}</s>{` Offer : ₹${productPriceA.toFixed(2)}`}</span>
                        </div>
                    </div>
                </button>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div onClick={()=>clickHandle(product.id)} className="text-center"><button className="btn btn-outline-dark mt-auto" >
                        Add to cart
                    </button></div>
                </div>
            </div>
        </div>
    )
}

export default Cards;

