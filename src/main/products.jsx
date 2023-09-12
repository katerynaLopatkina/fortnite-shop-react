import { Card } from "../card/card";
import "./products.css"

export function Products(props){
    console.log("inside", props.products)
    if (!props.products ||  props.products.length == 0) {
        return <h3>Wait...</h3>;
    }

    return(
        <div className="products">
            {props.products.map(product =>(
       
            <Card key={product.id} {...product} addToBasket={props.addToBasket}/>
            ))}
                   
        </div>
    )
}