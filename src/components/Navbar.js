import React from 'react';
import styles from '../Nav.module.css';
import rest1 from '../components/rest1.webp';
import search_logo from '../components/search_logo.jpg';
import cart from '../components/cart-logo.png';
export default function Navbar(){
    const Navitem=["Home","About","Menu","Products","Review","Contact","Blogs"]

    return(
        <div className={styles.Nav}>
            <div className={styles.logo}>
                <img src={rest1} alt="reload" />
            </div>
            <div className='list-item'>
               <ul className={styles.ul_1}>
                  { Navitem.map((item) => <li key={item} className={`${styles.li_1} ${styles.underline}`}>{item}</li>)}
               </ul>
            </div>
            <div className={styles.icon}>
                <img src={search_logo} alt="reload"  />
                <img src={cart} alt="reload"  />
            </div>

        </div>
    )
}