import './basketItem.css'

export function BasketItem(props){
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        ourPrice,
        plus,
        minus
    } = props;


    return(
        <div className='basket-item'>
            <div className='basket-item-name'><p>{displayName}</p></div>
            <div className='quantity'>
                <button className='quantity-button' onClick={()=>minus(mainId)}>-</button>
                <p className='quantity-count'>{props.quantity}</p>
                <button className='quantity-button' onClick={()=>plus(mainId)}>+</button>
            </div>
            <div className='basket-item-price'><p>{ourPrice}$</p></div>
    </div>
    )
  
}