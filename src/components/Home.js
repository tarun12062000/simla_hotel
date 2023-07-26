import React from 'react';
import styles from '../Nav.module.css';


export default  function Home(){
    return(
        <div className={styles.home1}>
            <div className={styles.home2}>
            <h1>Exquisite flavors, warm ambiance, unforgettable dining experience awaits you!</h1>
            <p>Discover a gastronomic paradise at our restaurant, where each bite transports you to 
               culinary bliss. Indulge in our delectable dishes, carefully prepared to delight your 
               senses. Whether dining with friends, family, or for a special occasion, 
               our warm ambiance and impeccable service ensure an unforgettable experience. 
               Come join us today!
            </p>
            </div>
        </div>
    )
}