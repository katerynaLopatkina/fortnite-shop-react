import './main.css';
import React, {useEffect, useState} from 'react';
import { Products } from './products';
import { Basket } from '../basket/basket';
import { BasketList } from '../basket/basketList';

export function Main(){

    const[products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const basketShow = () =>{
        setBasketShow(!isBasketShow);
    }

    const plus = (itemId) =>{
        console.log('itemid',itemId);
        const newOrder = order.map((el)=>{
            if(el.mainId === itemId){
                const newQuantity = el.quantity + 1;
                return{
                    ...el,
                    quantity: newQuantity
                };
            }else{
                return el;
            }
        });
        setOrder(newOrder);
    };

    const minus = (itemId) =>{
        console.log('itemid',itemId);
        const newOrder = order.map((el)=>{
            if(el.mainId === itemId){
                const newQuantity = el.quantity - 1 ;
                return{
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            }else{
                return el;
            }
        });
        setOrder(newOrder);
    };


    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );
            console.log('item',item);
            console.log('order',order);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {

                    const newItem2 = {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }

                    console.log("new item", newItem2);
                    return newItem2;
                } else {
                     return orderItem;
                 }
            });
            setOrder(newOrder);
        }
    }

    useEffect(()=> {
        fetch('https://fortniteapi.io/v2/shop?lang=en', {
            headers: {
                Authorization: 'cbad21f4-7a782d0b-d87c3fe6-9778d80a',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.shop);
                data.shop && setProducts(data.shop);
                setLoading(false);
            })
            .catch((error)=> {
                console.log(error);
            });

           
    }, []);

    return(


        <div className='container-products fixed-container'>
             {isBasketShow && order &&<BasketList order={order} basketShow={basketShow} plus={plus} minus ={minus}/>}
            {console.log('is',isBasketShow)}
            {products && <Basket quantity={order.length} basketShow={basketShow}/>}
            {console.log(order.length)}
            <Products products={products} addToBasket={addToBasket}/>
           
        </div>
    );
}