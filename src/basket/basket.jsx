import './basket.css'

export function Basket(props){

    return(
        <div onClick={props.basketShow}>
            {console.log()}
            <button className='about-button'><pre >   {props.quantity}</pre></button>
        </div>
    )
}