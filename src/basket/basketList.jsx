import { BasketItem } from "./basketItem";
import './basketList.css';

export function BasketList (props){

    const {
        mainId,
        order = [],
        plus = Function.prototype,
        minus =Function.prototype,
    } = props;

    console.log('basketlist',order)

    const totalPrice = order.reduce((summa, element) => {
        return summa + element.ourPrice * element.quantity;
    }, 0);

    return(
        <div className="basket-list">
            <div className="basket-header">
                <h3>Your order:</h3>
                <button className = "basket-button" onClick={props.basketShow}>X</button>
            </div>
            {console.log('orderrrr',order)}
            {order.map((orderItem)=>
           ( <BasketItem key={orderItem.mainId} {...orderItem} plus={plus} minus={minus} />)
            )}
            <div><h5>Sum of your order: {totalPrice}$</h5></div>
        </div>
        
    )
}