import './header.css';

export function Header(){
    return(
        <div className='header fixed-container'>
            <div className='head'>
                <h1>Fortnite shop</h1>
                <h2>for your soul</h2>
            </div>
            <div className='about'>
                <div>
                    <a>Skins</a>
                    <a>Back Bling</a>
                    <a>Pickaxes</a>
                    <a>Gliders</a>
                    <a>Pets</a>
                </div>
            </div>
        </div>
    )
}