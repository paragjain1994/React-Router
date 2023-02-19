import {useParams} from 'react-router-dom';
const ProductDetail =()=>{
const param = useParams();
console.log(param);
    return(
        <section>
            <h1>Product Details..</h1>
            <p>{param.productID}</p>
        </section>
    )
}

export default ProductDetail;