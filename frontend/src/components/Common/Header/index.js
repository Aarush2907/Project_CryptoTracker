import Button from '../Button/index.js';
import AnchorTemporaryDrawer from './drawer';
import './style.css';

function Header() {
    return(
        <div className = "navbar">
         <h1 className="logo">
            <span style={{color:"var(--red)"}}>Bit</span>Watch
        </h1>
         <div className="links">
           <a href="/">
            <p className="link">Home</p>
            </a>
            <a href="/">
            <p className="link">Watchlist</p>
            </a>
            <a href="/">
            <p className="link">Compare</p>
            </a>
            <a href="#">
             <Button text = {"Dashboard"} onClick={() => console.log("Btn Clicked")} outlined={false}/>
            </a>
         </div>
         <div className='mobile-drawer'>
            <AnchorTemporaryDrawer />
        </div>
        </div>
    );
}

export default Header;
