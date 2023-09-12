import './card.css';

export function Card(props){

    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        addToBasket = Function.prototype,
    } = props;

    const ourPrice = price.finalPrice;

  return (
    <div className="card">
      <div className='info-1'>
        <div className='card-img'>
          <img src={displayAssets[0].url} alt="Product Image" />
        </div>
        <div className='info'>
          <div className='name-img'>
            <p>{displayName}</p>
          </div>
          <div className='price'>
            <div className='price-img'>
              <img src='/imgs/coin.png' alt="Price Image" />
            </div>
            <div className='price-count'>
              <p>{price.finalPrice}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='info-2'>
        <div className='card-info'>
          <p>{displayDescription}</p>
        </div>
        <div className='buy'>
          <div className='main-price'>
            <h4>{price.finalPrice}$</h4>
          </div>
          <div>
            <button
              className='button-buy'
              onClick={() => addToBasket({mainId, displayName,ourPrice})}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
