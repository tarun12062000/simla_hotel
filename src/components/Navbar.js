import React,{useRef, useState} from 'react';



import styles from '../Nav.module.css';
import rest1 from '../components/rest1.webp';
import search_logo from '../components/search_logo.jpg';
import cart from '../components/cart-logo.png';

export default function Navbar(){
    const temp=[{
        src:'https://b.zmtcdn.com/data/pictures/4/19601154/23a2b41ff0c6015e2ddee66f3ec7f323_o2_featured_v2.jpg',
        text:'Marky Momos',
        prize:200
    },
    {
        src:'https://b.zmtcdn.com/data/pictures/8/19184218/54a2921f8a9d9973d6d8f95a2e3418bf_o2_featured_v2.jpg',
        text:'Tawa Fry',
        prize:260
    },
    {
        src:'https://b.zmtcdn.com/data/pictures/chains/9/18603039/55307b06a976df75450a1e45c749e1ec_o2_featured_v2.jpg',
        text:'PavBhaji',
        prize:150
    }]
    const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef();
  const cartRef= useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle("active")
    // setSearchActive((prevSearchActive) => !prevSearchActive);
  };
  const cartHandler=()=>{
    console.log("Clicked cart icon");
  console.log("cartRef.current:", cartRef.current);
         cartRef.current.classList.toggle("active")
        
  }
        
    return(
        <div className={styles.Nav}>
            
            <div className={styles.logo}>
                <img src={rest1} alt="reload" />
            </div>
            <div className={styles.ls}>
                <a href="#Home">Home</a>
                <a href='#About'>About</a>
                <a href='#Menu'>Menu</a>
                <a href='#Products'>Products</a>
                <a href='#Review'>Review</a>
                <a href='#Contact'>Contact</a>
               {/* <ul className={styles.ul_1}>
                  { Navitem.map((item) => <a href={#item} className={`${styles.li_1} ${styles.underline}`}>
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link></li>)}
               </ul> */}
            </div>
            <div className={styles.icon}>
                 <div className='fas fa-search' onClick={searchHandler}></div>
                 <div className='fas fa-shopping-cart' onClick={cartHandler}></div>
                 <div className='fas fa-bars' id={styles.ic}></div>
                </div>
                <div className={styles.searchform} ref={searchRef}>
                    <input type="search" placeholder='search...' id={styles.searchbox} />
                    {/* <label hatmlFor='search-box'></label> */}
                </div>
                <div className={styles.cartmenu} ref={cartRef}>
                {temp.map((item,index)=>(
                <div className={styles.cartpic} key={index} >
                    <span className='fas fa-times'></span>
                    <img src={item.src} alt="" />
                    <div className={styles.content}>
                        <h3>{item.text}</h3>
                        <div className={styles.prize}>{item.prize}</div>
                </div>
                
                </div>)) }
                   <a href='#' className={styles.btn}>checkout Now</a>
                </div>
                </div>

    )};
                {/* <img src={search_logo} alt="reload"  />
                <img src={cart} alt="reload"  /> */}
                {/* {cartItems.length > 0 && <span className={styles.cartItemCount}>{cartItems.length}</span>} */}
            {/* {isCartOpen && (
        <CartItems cartItems={cartItems} onClose={() => setIsCartOpen(false)} />
                )}
                <Menu handleAddToCart={handleAddToCart} /> */}
            
    
